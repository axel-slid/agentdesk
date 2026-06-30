const { app, BrowserWindow, Menu, dialog, ipcMain, shell, clipboard } = require("electron");
const { execFile } = require("node:child_process");
const crypto = require("node:crypto");
const fs = require("node:fs");
const fsp = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const pty = require("node-pty");

const repoRoot = resolveRepoRoot();
const defaultTexPath = path.join(repoRoot, "papers", "sashimi2026_synthetic_cnf", "main.tex");
const homeDir = process.env.HOME || "";

let mainWindow;
const terminalSessions = new Map();
const terminalPath = [
  "/opt/homebrew/bin",
  "/usr/local/bin",
  path.join(homeDir, ".local", "bin"),
  path.join(homeDir, "bin"),
  process.env.PATH || ""
].join(path.delimiter);

function resolveRepoRoot() {
  const configPath = path.join(__dirname, "local-config.json");
  if (fs.existsSync(configPath)) {
    const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
    if (config.repoRoot) return config.repoRoot;
  }

  return __dirname;
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1520,
    height: 980,
    minWidth: 1180,
    minHeight: 700,
    title: "AgentDesk",
    backgroundColor: "#e9edf2",
    show: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  mainWindow.loadFile(path.join(__dirname, "index.html"));
  mainWindow.once("ready-to-show", () => mainWindow.show());

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });

  mainWindow.on("closed", () => {
    killTerminalSessions();
    mainWindow = null;
  });
}

function sendEditorCommand(command) {
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.webContents.send("editor-command", command);
  }
}

function buildMenu() {
  const isMac = process.platform === "darwin";
  const template = [
    ...(isMac
      ? [{
          label: app.name,
          submenu: [
            { role: "about" },
            { type: "separator" },
            { role: "hide" },
            { role: "hideOthers" },
            { role: "unhide" },
            { type: "separator" },
            { role: "quit" }
          ]
        }]
      : []),
    {
      label: "File",
      submenu: [
        {
          label: "New Project",
          accelerator: "CommandOrControl+Shift+O",
          click: () => sendEditorCommand("add-project")
        },
        {
          label: "Projects",
          accelerator: "CommandOrControl+Shift+P",
          click: () => sendEditorCommand("projects")
        },
        { type: "separator" },
        {
          label: "Save",
          accelerator: "CommandOrControl+S",
          click: () => sendEditorCommand("save")
        },
        {
          label: "Compile PDF",
          accelerator: "CommandOrControl+Enter",
          click: () => sendEditorCommand("compile")
        },
        {
          label: "Open PDF",
          accelerator: "CommandOrControl+O",
          click: () => sendEditorCommand("open-pdf")
        },
        {
          label: "Reload From Disk",
          click: () => sendEditorCommand("reload")
        },
        { type: "separator" },
        isMac ? { role: "close" } : { role: "quit" }
      ]
    },
    {
      label: "Edit",
      submenu: [
        { role: "undo" },
        { role: "redo" },
        { type: "separator" },
        { role: "cut" },
        { role: "copy" },
        { role: "paste" },
        { role: "selectAll" },
        { type: "separator" },
        {
          label: "Find",
          accelerator: "CommandOrControl+F",
          click: () => sendEditorCommand("find")
        },
        {
          label: "Find Next",
          accelerator: "CommandOrControl+G",
          click: () => sendEditorCommand("find-next")
        },
        {
          label: "Find Previous",
          accelerator: "Shift+CommandOrControl+G",
          click: () => sendEditorCommand("find-previous")
        }
      ]
    },
    {
      label: "View",
      submenu: [
        { role: "reload" },
        { role: "toggleDevTools" },
        { type: "separator" },
        { role: "resetZoom" },
        { role: "zoomIn" },
        { role: "zoomOut" },
        { type: "separator" },
        { role: "togglefullscreen" }
      ]
    }
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

function storePath() {
  return path.join(app.getPath("userData"), "projects.json");
}

function makeProjectId(texPath) {
  return crypto.createHash("sha1").update(path.resolve(texPath)).digest("hex").slice(0, 14);
}

function makeProject(texPath, name) {
  const resolvedTexPath = path.resolve(texPath);
  const now = new Date().toISOString();
  return {
    id: makeProjectId(resolvedTexPath),
    name: name || inferProjectName(resolvedTexPath),
    texPath: resolvedTexPath,
    createdAt: now,
    updatedAt: now,
    lastOpenedAt: now
  };
}

function inferProjectName(texPath) {
  const folder = path.basename(path.dirname(texPath)).replace(/[-_]+/g, " ");
  if (folder && folder !== ".") return titleCase(folder);
  return path.basename(texPath, ".tex");
}

function titleCase(value) {
  return value.replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function normalizeExternalUrl(rawUrl) {
  const url = new URL(String(rawUrl || "").trim());
  if (!["http:", "https:", "mailto:"].includes(url.protocol)) {
    throw new Error(`Unsupported link protocol: ${url.protocol || "unknown"}`);
  }
  return url.toString();
}

async function openExternalLink(_event, rawUrl) {
  const url = normalizeExternalUrl(rawUrl);
  await shell.openExternal(url);
  return { ok: true };
}

async function readProjects() {
  const file = storePath();
  let projects = [];
  let hasStore = false;

  try {
    const raw = await fsp.readFile(file, "utf8");
    projects = JSON.parse(raw).projects || [];
    hasStore = true;
  } catch (error) {
    projects = [];
  }

  if (!hasStore && !projects.length && fs.existsSync(defaultTexPath)) {
    projects = [makeProject(defaultTexPath, "Synthetic cNF SASHIMI Manuscript")];
    await writeProjects(projects);
  }

  return dedupeProjects(projects);
}

async function writeProjects(projects) {
  await fsp.mkdir(path.dirname(storePath()), { recursive: true });
  await fsp.writeFile(storePath(), JSON.stringify({ projects }, null, 2), "utf8");
}

function dedupeProjects(projects) {
  const seen = new Set();
  return projects.filter((project) => {
    const key = path.resolve(project.texPath);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function pdfPathFor(project) {
  return path.join(path.dirname(project.texPath), `${path.basename(project.texPath, ".tex")}.pdf`);
}

function projectRootFor(project) {
  return path.dirname(project.texPath);
}

function agentsPathFor(project) {
  return path.join(projectRootFor(project), "AGENTS.md");
}

function decorateProject(project) {
  const texExists = fs.existsSync(project.texPath);
  const pdfPath = pdfPathFor(project);
  const rootPath = projectRootFor(project);
  const pdfExists = fs.existsSync(pdfPath);
  let modifiedAt = project.updatedAt;

  if (texExists) {
    try {
      modifiedAt = fs.statSync(project.texPath).mtime.toISOString();
    } catch (error) {
      modifiedAt = project.updatedAt;
    }
  }

  return {
    ...project,
    texName: path.basename(project.texPath),
    folderName: path.basename(rootPath),
    rootPath,
    rootUrl: `${pathToFileURL(rootPath).href}/`,
    pdfPath,
    pdfName: path.basename(pdfPath),
    texExists,
    pdfExists,
    modifiedAt
  };
}

async function listProjects() {
  const projects = await readProjects();
  return {
    projects: projects
      .map(decorateProject)
      .sort((a, b) => String(b.lastOpenedAt || "").localeCompare(String(a.lastOpenedAt || "")))
  };
}

async function addProject(_event, payload = {}) {
  const kind = String(payload.kind || "");

  if (kind === "blank") return createBlankProject();
  if (kind === "tex") return addTexProject();
  if (kind === "folder") return addFolderProject();
  if (kind === "archive") return addArchiveProject();

  const choice = await dialog.showMessageBox(mainWindow, {
    type: "question",
    title: "New Project",
    message: "How do you want to start?",
    buttons: ["Blank Project", "Existing .tex", "Folder", "Archive", "Cancel"],
    cancelId: 4,
    defaultId: 0
  });

  if (choice.response === 4) return { project: null, ...(await listProjects()) };
  if (choice.response === 0) return createBlankProject();
  if (choice.response === 1) return addTexProject();
  if (choice.response === 2) return addFolderProject();
  if (choice.response === 3) return addArchiveProject();
  return { project: null, ...(await listProjects()) };
}

async function addProjectFromPath(_event, payload = {}) {
  const paths = (payload.paths || []).map((filePath) => String(filePath || "")).filter(Boolean);
  const imported = [];

  for (const filePath of paths) {
    imported.push(await registerProjectFromPath(filePath));
  }

  return {
    project: imported[0] ? decorateProject(imported[0]) : null,
    ...(await listProjects())
  };
}

async function createBlankProject() {
  const result = await dialog.showSaveDialog(mainWindow, {
    title: "Create Blank LaTeX Project",
    buttonLabel: "Create Project",
    defaultPath: path.join(app.getPath("documents"), "Untitled LaTeX Project", "main.tex"),
    filters: [
      { name: "LaTeX files", extensions: ["tex"] }
    ]
  });

  if (result.canceled || !result.filePath) {
    return { project: null, ...(await listProjects()) };
  }

  const texPath = path.resolve(result.filePath.endsWith(".tex") ? result.filePath : `${result.filePath}.tex`);
  await fsp.mkdir(path.dirname(texPath), { recursive: true });
  if (!fs.existsSync(texPath)) {
    await fsp.writeFile(texPath, blankProjectTemplate(path.basename(texPath, ".tex")), "utf8");
  }

  return registerProject(texPath, titleCase(path.basename(path.dirname(texPath)).replace(/[-_]+/g, " ")));
}

async function addTexProject() {
  const result = await dialog.showOpenDialog(mainWindow, {
    title: "Open LaTeX Project",
    buttonLabel: "Add Project",
    properties: ["openFile"],
    filters: [
      { name: "LaTeX files", extensions: ["tex"] },
      { name: "All files", extensions: ["*"] }
    ]
  });

  if (result.canceled || !result.filePaths.length) {
    return { project: null, ...(await listProjects()) };
  }

  return registerProject(result.filePaths[0]);
}

async function addFolderProject() {
  const result = await dialog.showOpenDialog(mainWindow, {
    title: "Open LaTeX Project Folder",
    buttonLabel: "Open Folder",
    properties: ["openDirectory"]
  });

  if (result.canceled || !result.filePaths.length) {
    return { project: null, ...(await listProjects()) };
  }

  const texPath = await findProjectTexEntry(result.filePaths[0]);
  if (!texPath) throw new Error("No .tex file found in that folder.");
  return registerProject(texPath);
}

async function addArchiveProject() {
  const result = await dialog.showOpenDialog(mainWindow, {
    title: "Import LaTeX Archive",
    buttonLabel: "Import Archive",
    properties: ["openFile"],
    filters: [
      { name: "Archives", extensions: ["zip", "tar", "gz", "tgz"] },
      { name: "All files", extensions: ["*"] }
    ]
  });

  if (result.canceled || !result.filePaths.length) {
    return { project: null, ...(await listProjects()) };
  }

  const archivePath = path.resolve(result.filePaths[0]);
  const texPath = await importArchiveToProject(archivePath);
  return registerProject(texPath);
}

async function registerProjectFromPath(filePath) {
  const resolvedPath = path.resolve(filePath);
  const stat = await fsp.stat(resolvedPath);

  if (stat.isDirectory()) {
    const texPath = await findProjectTexEntry(resolvedPath);
    if (!texPath) throw new Error("No .tex file found in that folder.");
    return registerProjectRecord(texPath);
  }

  if (path.extname(resolvedPath).toLowerCase() === ".tex") {
    return registerProjectRecord(resolvedPath);
  }

  if (isArchivePath(resolvedPath)) {
    const texPath = await importArchiveToProject(resolvedPath);
    return registerProjectRecord(texPath);
  }

  throw new Error(`Unsupported project import: ${path.basename(resolvedPath)}`);
}

async function importArchiveToProject(archivePath) {
  const importRoot = path.join(app.getPath("documents"), "AgentDesk");
  const destination = await uniqueDirectory(importRoot, archiveBaseName(archivePath) || "Imported Project");
  await fsp.mkdir(destination, { recursive: true });
  await extractArchive(archivePath, destination);

  const texPath = await findProjectTexEntry(destination);
  if (!texPath) throw new Error("Imported archive did not contain a .tex file.");
  return texPath;
}

async function registerProject(texPath, name) {
  const project = await registerProjectRecord(texPath, name);
  return {
    project: decorateProject(project),
    ...(await listProjects())
  };
}

async function registerProjectRecord(texPath, name) {
  const resolvedTexPath = path.resolve(texPath);
  const projects = await readProjects();
  let project = projects.find((item) => path.resolve(item.texPath) === resolvedTexPath);

  if (!project) {
    project = makeProject(resolvedTexPath, name);
    projects.unshift(project);
  }

  project.lastOpenedAt = new Date().toISOString();
  project.updatedAt = project.lastOpenedAt;
  await writeProjects(projects);

  return project;
}

function blankProjectTemplate(name) {
  const title = titleCase(String(name || "Untitled").replace(/[-_]+/g, " "));
  return [
    "\\documentclass{article}",
    "\\usepackage[margin=1in]{geometry}",
    "",
    `\\title{${title}}`,
    "\\author{}",
    "\\date{\\today}",
    "",
    "\\begin{document}",
    "\\maketitle",
    "",
    "\\section{Introduction}",
    "Start writing here.",
    "",
    "\\end{document}",
    ""
  ].join("\n");
}

async function findProjectTexEntry(rootDir) {
  const texFiles = [];

  async function visit(dir, depth = 0) {
    if (depth > 6) return;
    const entries = await fsp.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith(".") || ["node_modules", "__pycache__", ".git"].includes(entry.name)) continue;
      const itemPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await visit(itemPath, depth + 1);
      } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".tex")) {
        texFiles.push(itemPath);
      }
    }
  }

  await visit(path.resolve(rootDir));
  texFiles.sort((a, b) => {
    const aMain = path.basename(a).toLowerCase() === "main.tex";
    const bMain = path.basename(b).toLowerCase() === "main.tex";
    if (aMain !== bMain) return aMain ? -1 : 1;
    return a.length - b.length || a.localeCompare(b);
  });
  return texFiles[0] || "";
}

async function uniqueDirectory(parentDir, folderName) {
  await fsp.mkdir(parentDir, { recursive: true });
  const safeName = String(folderName || "Imported Project").replace(/[/:\\]/g, "-").trim() || "Imported Project";
  let candidate = path.join(parentDir, safeName);
  let suffix = 2;
  while (fs.existsSync(candidate)) {
    candidate = path.join(parentDir, `${safeName}-${suffix}`);
    suffix += 1;
  }
  return candidate;
}

function archiveBaseName(archivePath) {
  return path.basename(archivePath)
    .replace(/\.tar\.gz$/i, "")
    .replace(/\.tgz$/i, "")
    .replace(/\.tar$/i, "")
    .replace(/\.zip$/i, "");
}

function isArchivePath(filePath) {
  const lower = filePath.toLowerCase();
  return lower.endsWith(".zip") || lower.endsWith(".tar") || lower.endsWith(".tar.gz") || lower.endsWith(".tgz");
}

function extractArchive(archivePath, destination) {
  const lower = archivePath.toLowerCase();
  if (lower.endsWith(".tar.gz") || lower.endsWith(".tgz")) {
    return execFileAsync("tar", ["-xzf", archivePath, "-C", destination]);
  }
  if (lower.endsWith(".tar")) {
    return execFileAsync("tar", ["-xf", archivePath, "-C", destination]);
  }
  return execFileAsync("ditto", ["-x", "-k", archivePath, destination])
    .catch(() => execFileAsync("unzip", ["-q", archivePath, "-d", destination]));
}

function execFileAsync(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    execFile(command, args, options, (error, stdout, stderr) => {
      if (error) {
        reject(new Error(stderr || stdout || error.message));
        return;
      }
      resolve({ stdout, stderr });
    });
  });
}

async function removeProject(_event, projectId) {
  const projects = await readProjects();
  const nextProjects = projects.filter((project) => project.id !== projectId);
  await writeProjects(nextProjects);
  return listProjects();
}

async function renameProject(_event, payload = {}) {
  const name = String(payload.name || "").trim();
  if (!name) throw new Error("Project name cannot be empty.");

  const projects = await readProjects();
  const project = projects.find((item) => item.id === payload.projectId);
  if (!project) throw new Error("Project not found.");

  project.name = name;
  project.updatedAt = new Date().toISOString();
  await writeProjects(projects);
  return listProjects();
}

async function getProject(projectId) {
  const projects = await readProjects();
  const project = projects.find((item) => item.id === projectId);
  if (!project) throw new Error("Project not found. Return to Projects and reopen it.");
  if (!fs.existsSync(project.texPath)) throw new Error(`LaTeX file not found: ${project.texPath}`);
  return project;
}

function safeProjectPath(project, relativePath = "") {
  const root = projectRootFor(project);
  const resolved = path.resolve(root, relativePath || ".");
  if (resolved !== root && !resolved.startsWith(`${root}${path.sep}`)) {
    throw new Error("File path escapes the project folder.");
  }
  return resolved;
}

function relativeProjectPath(project, absolutePath) {
  return path.relative(projectRootFor(project), absolutePath).split(path.sep).join("/");
}

function isTextFile(filePath) {
  return [".tex", ".bib", ".bst", ".cls", ".sty", ".txt", ".md", ".log", ".csv", ".json"].includes(path.extname(filePath).toLowerCase());
}

function isImageFile(filePath) {
  return [".png", ".jpg", ".jpeg", ".gif", ".webp", ".tif", ".tiff", ".bmp", ".svg"].includes(path.extname(filePath).toLowerCase());
}

function importTargetDir(project, fileName) {
  if (isImageFile(fileName)) {
    const figuresDir = safeProjectPath(project, "figures");
    return figuresDir;
  }

  return projectRootFor(project);
}

async function uniqueDestination(targetDir, fileName) {
  await fsp.mkdir(targetDir, { recursive: true });
  const parsed = path.parse(fileName);
  let candidate = path.join(targetDir, fileName);
  let suffix = 2;

  while (fs.existsSync(candidate)) {
    candidate = path.join(targetDir, `${parsed.name}-${suffix}${parsed.ext}`);
    suffix += 1;
  }

  return candidate;
}

function shouldSkipFile(name) {
  if (name === ".DS_Store") return true;
  if (name.startsWith(".")) return true;
  return [".aux", ".bbl", ".blg", ".fdb_latexmk", ".fls", ".out", ".synctex.gz", ".toc"].some((ext) => name.endsWith(ext));
}

async function walkProjectFiles(project, dir = projectRootFor(project), depth = 0) {
  if (depth > 5) return [];

  const entries = await fsp.readdir(dir, { withFileTypes: true });
  const visible = entries
    .filter((entry) => !shouldSkipFile(entry.name))
    .filter((entry) => !["node_modules", "__pycache__", ".git"].includes(entry.name))
    .sort((a, b) => {
      if (a.isDirectory() !== b.isDirectory()) return a.isDirectory() ? -1 : 1;
      return a.name.localeCompare(b.name);
    });

  const nodes = [];
  for (const entry of visible) {
    const absolutePath = path.join(dir, entry.name);
    const relativePath = relativeProjectPath(project, absolutePath);
    const node = {
      name: entry.name,
      relativePath,
      kind: entry.isDirectory() ? "folder" : "file",
      editable: entry.isFile() && isTextFile(absolutePath),
      image: entry.isFile() && isImageFile(absolutePath),
      fileUrl: entry.isFile() ? pathToFileURL(absolutePath).href : ""
    };

    if (entry.isDirectory()) {
      node.children = await walkProjectFiles(project, absolutePath, depth + 1);
    }

    nodes.push(node);
  }

  return nodes;
}

async function touchProject(projectId) {
  const projects = await readProjects();
  const project = projects.find((item) => item.id === projectId);
  if (!project) return;

  const now = new Date().toISOString();
  project.lastOpenedAt = now;
  project.updatedAt = now;
  await writeProjects(projects);
}

function pdfUrl(project) {
  return `${pathToFileURL(pdfPathFor(project)).href}?v=${Date.now()}`;
}

function resolveExecutable(name) {
  const candidates = [
    name,
    path.join("/opt/homebrew/bin", name),
    path.join("/usr/local/bin", name),
    path.join(homeDir, ".local", "bin", name),
    path.join(homeDir, "bin", name)
  ];

  return candidates.find((candidate) => {
    try {
      return fs.existsSync(candidate) && fs.statSync(candidate).isFile();
    } catch (error) {
      return false;
    }
  }) || name;
}

function terminalPreset(kind, cwd) {
  if (kind === "codex") {
    return {
      title: "Codex",
      command: resolveExecutable("codex"),
      args: ["--dangerously-bypass-approvals-and-sandbox", "-C", cwd],
      commandLabel: "codex --dangerously-bypass-approvals-and-sandbox"
    };
  }

  if (kind === "claude") {
    return {
      title: "Claude",
      command: resolveExecutable("claude"),
      args: ["--dangerously-skip-permissions", "--add-dir", cwd],
      commandLabel: "claude --dangerously-skip-permissions"
    };
  }

  return {
    title: "Shell",
    command: process.env.SHELL || "/bin/zsh",
    args: ["-l"],
    commandLabel: path.basename(process.env.SHELL || "/bin/zsh")
  };
}

function terminalEnv(cwd) {
  return {
    ...process.env,
    COLORTERM: "truecolor",
    FORCE_COLOR: "1",
    PATH: terminalPath,
    PWD: cwd,
    TERM: "xterm-256color"
  };
}

function ensurePtyHelperExecutable() {
  try {
    const utils = require("node-pty/lib/utils");
    const native = utils.loadNativeModule("pty");
    const helperPath = path
      .resolve(__dirname, "node_modules", "node-pty", "lib", native.dir, "spawn-helper")
      .replace("app.asar", "app.asar.unpacked")
      .replace("node_modules.asar", "node_modules.asar.unpacked");

    if (fs.existsSync(helperPath)) {
      fs.chmodSync(helperPath, 0o755);
    }
  } catch (error) {
    // If this fails, node-pty will surface the real spawn error to the terminal panel.
  }
}

async function createTerminal(_event, payload = {}) {
  const project = payload.projectId ? await getProject(payload.projectId) : null;
  const cwd = project ? projectRootFor(project) : repoRoot;
  const preset = terminalPreset(payload.kind || "shell", cwd);
  const id = crypto.randomUUID();
  ensurePtyHelperExecutable();
  const ptyProcess = pty.spawn(preset.command, preset.args, {
    name: "xterm-256color",
    cols: clampTerminalDimension(payload.cols, 40, 220, 100),
    rows: clampTerminalDimension(payload.rows, 8, 80, 18),
    cwd,
    env: terminalEnv(cwd)
  });

  terminalSessions.set(id, { ptyProcess, cwd, ...preset });

  ptyProcess.onData((data) => sendTerminalData(id, data));
  ptyProcess.onExit(({ exitCode, signal }) => {
    terminalSessions.delete(id);
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send("terminal-exit", { id, code: exitCode, signal });
    }
  });

  return {
    id,
    cwd,
    title: preset.title,
    commandLabel: preset.commandLabel
  };
}

function sendTerminalData(id, data) {
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.webContents.send("terminal-data", { id, data: String(data) });
  }
}

function writeTerminal(_event, payload = {}) {
  const session = terminalSessions.get(payload.id);
  if (!session) return;
  session.ptyProcess.write(String(payload.data || ""));
}

function resizeTerminal(_event, payload = {}) {
  const session = terminalSessions.get(payload.id);
  if (!session) return false;
  session.ptyProcess.resize(
    clampTerminalDimension(payload.cols, 40, 220, 100),
    clampTerminalDimension(payload.rows, 8, 80, 18)
  );
  return true;
}

function killTerminal(_event, id) {
  const session = terminalSessions.get(id);
  if (!session) return false;

  session.ptyProcess.kill("SIGTERM");
  terminalSessions.delete(id);
  return true;
}

function killTerminalSessions() {
  terminalSessions.forEach((session) => session.ptyProcess.kill("SIGTERM"));
  terminalSessions.clear();
}

function clampTerminalDimension(value, min, max, fallback) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return fallback;
  return Math.min(max, Math.max(min, Math.floor(numeric)));
}

async function loadManuscript(_event, payload) {
  const projectId = typeof payload === "string" ? payload : payload.projectId;
  const project = await getProject(projectId);
  const relativePath = typeof payload === "object" && payload.relativePath ? payload.relativePath : relativeProjectPath(project, project.texPath);
  const filePath = safeProjectPath(project, relativePath);
  if (!isTextFile(filePath)) throw new Error("Only text project files can be opened in the editor.");
  const tex = await fsp.readFile(filePath, "utf8");
  await touchProject(project.id);

  return {
    project: decorateProject(project),
    file: fileDescriptor(project, filePath),
    tex,
    texPath: project.texPath,
    pdfPath: pdfPathFor(project),
    pdfUrl: pdfUrl(project)
  };
}

async function listProjectFiles(_event, projectId) {
  const project = await getProject(projectId);
  return {
    project: decorateProject(project),
    files: await walkProjectFiles(project)
  };
}

async function chooseProjectFiles(_event, projectId) {
  const project = await getProject(projectId);
  const result = await dialog.showOpenDialog(mainWindow, {
    title: "Add Files to Project",
    buttonLabel: "Add Files",
    properties: ["openFile", "multiSelections"],
    filters: [
      { name: "Project assets", extensions: ["tex", "bib", "bst", "cls", "sty", "png", "jpg", "jpeg", "gif", "webp", "svg", "pdf", "csv", "txt", "md"] },
      { name: "All files", extensions: ["*"] }
    ]
  });

  if (result.canceled || !result.filePaths.length) {
    return { imported: [], files: await walkProjectFiles(project) };
  }

  const imported = await importFiles(project, result.filePaths.map((filePath) => ({ path: filePath })));
  return { imported, files: await walkProjectFiles(project) };
}

async function importProjectFiles(_event, payload) {
  const project = await getProject(payload.projectId);
  const imported = await importFiles(project, payload.files || []);
  return { imported, files: await walkProjectFiles(project) };
}

async function importFiles(project, files) {
  const imported = [];

  for (const file of files) {
    const fileName = path.basename(file.name || file.path || "asset");
    const targetDir = importTargetDir(project, fileName);
    const destination = await uniqueDestination(targetDir, fileName);

    if (file.path) {
      await fsp.copyFile(file.path, destination);
    } else if (file.bytes) {
      await fsp.writeFile(destination, Buffer.from(file.bytes));
    } else {
      continue;
    }

    imported.push(fileDescriptor(project, destination));
  }

  if (imported.length) await touchProject(project.id);
  return imported;
}

async function projectFileAction(_event, payload = {}) {
  const project = await getProject(payload.projectId);
  const relativePath = String(payload.relativePath || "");
  const action = String(payload.action || "");
  const options = payload.options || {};
  const filePath = safeProjectPath(project, relativePath);
  const stat = await fsp.stat(filePath);

  if (action === "copy-path") {
    clipboard.writeText(filePath);
    return { value: filePath };
  }

  if (action === "copy-relative-path") {
    clipboard.writeText(relativePath);
    return { value: relativePath };
  }

  if (action === "copy-name") {
    clipboard.writeText(path.basename(filePath));
    return { value: path.basename(filePath) };
  }

  if (action === "reveal") {
    shell.showItemInFolder(filePath);
    return { ok: true };
  }

  if (action === "open") {
    return { ok: true, result: await shell.openPath(filePath) };
  }

  if (action === "duplicate") {
    const destination = await uniqueSiblingPath(filePath);
    if (stat.isDirectory()) {
      await fsp.cp(filePath, destination, { recursive: true });
    } else {
      await fsp.copyFile(filePath, destination);
    }
    await touchProject(project.id);
    return {
      project: decorateProject(project),
      file: fileDescriptor(project, destination),
      files: await walkProjectFiles(project)
    };
  }

  if (action === "copy-into") {
    const sourceRelativePath = String(options.sourceRelativePath || "");
    const sourcePath = safeProjectPath(project, sourceRelativePath);
    const sourceStat = await fsp.stat(sourcePath);
    const targetDir = stat.isDirectory() ? filePath : path.dirname(filePath);
    const destination = await uniqueChildPath(targetDir, path.basename(sourcePath), { preferOriginal: true });
    if (sourceStat.isDirectory()) {
      await fsp.cp(sourcePath, destination, { recursive: true });
    } else {
      await fsp.copyFile(sourcePath, destination);
    }
    await touchProject(project.id);
    return {
      project: decorateProject(project),
      file: fileDescriptor(project, destination),
      files: await walkProjectFiles(project)
    };
  }

  if (action === "rename") {
    if (path.resolve(filePath) === path.resolve(project.texPath)) {
      throw new Error("The project entry .tex file cannot be renamed from the file tree.");
    }
    const nextName = sanitizeFileName(options.name);
    if (!nextName) throw new Error("Enter a file name.");
    const destination = safeProjectPath(project, path.posix.join(path.posix.dirname(relativePath), nextName));
    if (fs.existsSync(destination)) throw new Error(`A file named ${nextName} already exists.`);
    await fsp.rename(filePath, destination);
    await touchProject(project.id);
    return {
      project: decorateProject(project),
      file: fileDescriptor(project, destination),
      files: await walkProjectFiles(project)
    };
  }

  if (action === "delete") {
    if (path.resolve(filePath) === path.resolve(project.texPath)) {
      throw new Error("The project entry .tex file cannot be deleted from the file tree.");
    }
    if (stat.isDirectory() && path.resolve(project.texPath).startsWith(`${path.resolve(filePath)}${path.sep}`)) {
      throw new Error("A folder containing the project entry .tex file cannot be deleted from the file tree.");
    }
    await fsp.rm(filePath, { recursive: stat.isDirectory(), force: false });
    await touchProject(project.id);
    return {
      project: decorateProject(project),
      files: await walkProjectFiles(project)
    };
  }

  throw new Error(`Unknown file action: ${action}`);
}

async function uniqueSiblingPath(filePath) {
  const parentDir = path.dirname(filePath);
  return uniqueChildPath(parentDir, path.basename(filePath));
}

async function uniqueChildPath(parentDir, basename, { preferOriginal = false } = {}) {
  const filePath = path.join(parentDir, basename);
  if (preferOriginal && !fs.existsSync(filePath)) return filePath;
  const parsed = path.parse(filePath);
  let candidate = path.join(parentDir, `${parsed.name} copy${parsed.ext}`);
  let suffix = 2;
  while (fs.existsSync(candidate)) {
    candidate = path.join(parentDir, `${parsed.name} copy ${suffix}${parsed.ext}`);
    suffix += 1;
  }
  return candidate;
}

function sanitizeFileName(value) {
  const name = String(value || "").trim();
  if (!name || name === "." || name === "..") return "";
  if (name.includes("/") || name.includes("\\") || name.includes("\0")) return "";
  return name;
}

async function saveManuscript(_event, payload) {
  const project = await getProject(payload.projectId);
  const filePath = safeProjectPath(project, payload.relativePath || relativeProjectPath(project, project.texPath));
  if (!isTextFile(filePath)) throw new Error("Only text project files can be saved from the editor.");
  await fsp.writeFile(filePath, payload.tex, "utf8");
  await touchProject(project.id);

  return {
    project: decorateProject(project),
    file: fileDescriptor(project, filePath),
    texPath: project.texPath
  };
}

async function compileManuscript(_event, payload) {
  const project = await getProject(payload.projectId);
  const filePath = safeProjectPath(project, payload.relativePath || relativeProjectPath(project, project.texPath));
  if (!isTextFile(filePath)) throw new Error("Only text project files can be saved from the editor.");
  await fsp.writeFile(filePath, payload.tex, "utf8");

  const output = await runTectonic(project);
  const pdfPath = pdfPathFor(project);
  if (!fs.existsSync(pdfPath)) {
    throw new Error(`${output}\n\nCompile finished but ${path.basename(pdfPath)} was not found.`);
  }

  await touchProject(project.id);

  return {
    project: decorateProject(project),
    file: fileDescriptor(project, filePath),
    output,
    pdfPath,
    pdfUrl: pdfUrl(project)
  };
}

function fileDescriptor(project, filePath) {
  return {
    name: path.basename(filePath),
    relativePath: relativeProjectPath(project, filePath),
    editable: isTextFile(filePath),
    image: isImageFile(filePath),
    fileUrl: pathToFileURL(filePath).href,
    isMain: path.resolve(filePath) === path.resolve(project.texPath)
  };
}

function runTectonic(project) {
  return new Promise((resolve, reject) => {
    execFile(
      "tectonic",
      [path.basename(project.texPath)],
      {
        cwd: path.dirname(project.texPath),
        timeout: 180000,
        maxBuffer: 1024 * 1024 * 8
      },
      (error, stdout, stderr) => {
        const output = [stdout, stderr].filter(Boolean).join("\n");
        if (error) {
          reject(new Error(output || error.message));
          return;
        }

        resolve(output);
      }
    );
  });
}

function runCommand(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    execFile(command, args, {
      timeout: options.timeout || 600000,
      maxBuffer: options.maxBuffer || 1024 * 1024 * 16,
      cwd: options.cwd || repoRoot,
      env: options.env || process.env
    }, (error, stdout, stderr) => {
      const output = [stdout, stderr].filter(Boolean).join("\n");
      if (error) {
        error.output = output || error.message;
        reject(error);
        return;
      }

      resolve(output);
    });
  });
}

async function runSuggestion(_event, payload = {}) {
  const project = await getProject(payload.projectId);
  const provider = payload.provider === "claude" ? "claude" : "codex";
  const relativePath = payload.relativePath || relativeProjectPath(project, project.texPath);
  const liveFilePath = safeProjectPath(project, relativePath);
  if (!isTextFile(liveFilePath)) throw new Error("Suggestion mode can only edit text project files.");

  const originalText = String(payload.tex || "");
  const userPrompt = String(payload.prompt || "").trim();
  if (!userPrompt) throw new Error("Add instructions for the suggestion first.");

  const tempRoot = await fsp.mkdtemp(path.join(os.tmpdir(), "latex-suggestion-work-"));
  const originalRoot = await fsp.mkdtemp(path.join(os.tmpdir(), "latex-suggestion-original-"));
  let modelOutput = "";

  try {
    await copyProjectForSuggestion(project, tempRoot);
    const tempFilePath = safeTempPath(tempRoot, relativePath);
    await fsp.mkdir(path.dirname(tempFilePath), { recursive: true });
    await fsp.writeFile(tempFilePath, originalText, "utf8");

    const instruction = suggestionPrompt(relativePath, userPrompt);
    modelOutput = provider === "claude"
      ? await runClaudeSuggestion(tempRoot, instruction)
      : await runCodexSuggestion(tempRoot, instruction);

    const suggestedText = await fsp.readFile(tempFilePath, "utf8");
    const originalFilePath = path.join(originalRoot, path.basename(relativePath) || "manuscript.tex");
    await fsp.writeFile(originalFilePath, originalText, "utf8");
    const diff = await unifiedDiff(originalFilePath, tempFilePath, relativePath);

    return {
      provider,
      relativePath,
      originalText,
      suggestedText,
      diff,
      hunks: parseUnifiedDiff(diff),
      modelOutput
    };
  } finally {
    await Promise.allSettled([
      fsp.rm(tempRoot, { recursive: true, force: true }),
      fsp.rm(originalRoot, { recursive: true, force: true })
    ]);
  }
}

async function copyProjectForSuggestion(project, tempRoot) {
  const sourceRoot = projectRootFor(project);
  await fsp.cp(sourceRoot, tempRoot, {
    recursive: true,
    filter: (source) => {
      const name = path.basename(source);
      if ([".git", "node_modules", "__pycache__"].includes(name)) return false;
      if (shouldSkipFile(name)) return false;
      return true;
    }
  });
}

function safeTempPath(tempRoot, relativePath) {
  const resolved = path.resolve(tempRoot, relativePath || ".");
  if (resolved !== tempRoot && !resolved.startsWith(`${tempRoot}${path.sep}`)) {
    throw new Error("Suggestion file path escapes the temporary project folder.");
  }
  return resolved;
}

function suggestionPrompt(relativePath, userPrompt) {
  return [
    "You are editing a temporary copy of a LaTeX manuscript.",
    `Modify only ${relativePath}.`,
    "Do not compile, do not rename files, and do not edit any original project path.",
    "Make the requested manuscript edits directly in that file and then stop.",
    "",
    "Requested edits:",
    userPrompt
  ].join("\n");
}

function runCodexSuggestion(tempRoot, instruction) {
  return runCommand(resolveExecutable("codex"), [
    "exec",
    "--sandbox",
    "workspace-write",
    "--skip-git-repo-check",
    "--ephemeral",
    "--color",
    "never",
    "-C",
    tempRoot,
    instruction
  ], {
    cwd: tempRoot,
    env: terminalEnv(tempRoot)
  });
}

function runClaudeSuggestion(tempRoot, instruction) {
  return runCommand(resolveExecutable("claude"), [
    "-p",
    "--permission-mode",
    "acceptEdits",
    "--no-session-persistence",
    "--output-format",
    "text",
    "--add-dir",
    tempRoot,
    "--",
    instruction
  ], {
    cwd: tempRoot,
    env: terminalEnv(tempRoot)
  });
}

function unifiedDiff(originalPath, suggestedPath, relativePath) {
  return new Promise((resolve, reject) => {
    execFile("git", [
      "diff",
      "--no-index",
      "--no-color",
      "--",
      originalPath,
      suggestedPath
    ], {
      timeout: 30000,
      maxBuffer: 1024 * 1024 * 8
    }, (error, stdout, stderr) => {
      if (error && error.code !== 1) {
        reject(new Error([stdout, stderr, error.message].filter(Boolean).join("\n")));
        return;
      }

      resolve(String(stdout || "")
        .replaceAll(originalPath, `a/${relativePath}`)
        .replaceAll(suggestedPath, `b/${relativePath}`));
    });
  });
}

function parseUnifiedDiff(diff) {
  const hunks = [];
  let current = null;

  String(diff || "").split("\n").forEach((line) => {
    const header = line.match(/^@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);
    if (header) {
      current = {
        index: hunks.length,
        oldStart: Number(header[1]),
        oldLines: Number(header[2] || 1),
        newStart: Number(header[3]),
        newLines: Number(header[4] || 1),
        diff: [line],
        oldTextLines: [],
        newTextLines: []
      };
      hunks.push(current);
      return;
    }

    if (!current || line === "\\ No newline at end of file") return;
    current.diff.push(line);

    if (line.startsWith(" ")) {
      current.oldTextLines.push(line.slice(1));
      current.newTextLines.push(line.slice(1));
    } else if (line.startsWith("-") && !line.startsWith("---")) {
      current.oldTextLines.push(line.slice(1));
    } else if (line.startsWith("+") && !line.startsWith("+++")) {
      current.newTextLines.push(line.slice(1));
    }
  });

  return hunks.map((hunk) => ({
    index: hunk.index,
    oldStart: hunk.oldStart,
    oldLines: hunk.oldLines,
    newStart: hunk.newStart,
    newLines: hunk.newLines,
    diff: hunk.diff.join("\n"),
    oldText: hunk.oldTextLines.join("\n"),
    newText: hunk.newTextLines.join("\n")
  }));
}

async function readPdf(_event, projectId) {
  const project = await getProject(projectId);
  const pdfPath = pdfPathFor(project);
  const pdf = await fsp.readFile(pdfPath);
  return pdf.buffer.slice(pdf.byteOffset, pdf.byteOffset + pdf.byteLength);
}

async function openPdf(_event, projectId) {
  const project = await getProject(projectId);
  return shell.openPath(pdfPathFor(project));
}

async function downloadPdf(_event, projectId) {
  const project = await getProject(projectId);
  const sourcePath = pdfPathFor(project);
  if (!fs.existsSync(sourcePath)) throw new Error("No compiled PDF exists yet. Compile the project first.");

  const result = await dialog.showSaveDialog(mainWindow, {
    title: "Download PDF",
    buttonLabel: "Download",
    defaultPath: path.join(app.getPath("downloads"), path.basename(sourcePath)),
    filters: [
      { name: "PDF", extensions: ["pdf"] }
    ]
  });

  if (result.canceled || !result.filePath) return { canceled: true };

  const destination = result.filePath.endsWith(".pdf") ? result.filePath : `${result.filePath}.pdf`;
  await fsp.copyFile(sourcePath, destination);
  return { filePath: destination };
}

async function readAgents(_event, projectId) {
  const project = await getProject(projectId);
  const agentsPath = agentsPathFor(project);

  try {
    return {
      path: agentsPath,
      text: await fsp.readFile(agentsPath, "utf8"),
      exists: true
    };
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
    return {
      path: agentsPath,
      text: "",
      exists: false
    };
  }
}

async function saveAgents(_event, payload = {}) {
  const project = await getProject(payload.projectId);
  const agentsPath = agentsPathFor(project);
  await fsp.writeFile(agentsPath, String(payload.text || ""), "utf8");
  await touchProject(project.id);
  return {
    path: agentsPath,
    text: String(payload.text || ""),
    exists: true
  };
}

ipcMain.handle("list-projects", listProjects);
ipcMain.handle("add-project", addProject);
ipcMain.handle("add-project-from-path", addProjectFromPath);
ipcMain.handle("rename-project", renameProject);
ipcMain.handle("remove-project", removeProject);
ipcMain.handle("list-project-files", listProjectFiles);
ipcMain.handle("project-file-action", projectFileAction);
ipcMain.handle("choose-project-files", chooseProjectFiles);
ipcMain.handle("import-project-files", importProjectFiles);
ipcMain.handle("load-manuscript", loadManuscript);
ipcMain.handle("save-manuscript", saveManuscript);
ipcMain.handle("compile-manuscript", compileManuscript);
ipcMain.handle("run-suggestion", runSuggestion);
ipcMain.handle("read-pdf", readPdf);
ipcMain.handle("open-pdf", openPdf);
ipcMain.handle("download-pdf", downloadPdf);
ipcMain.handle("open-external-link", openExternalLink);
ipcMain.handle("read-agents", readAgents);
ipcMain.handle("save-agents", saveAgents);
ipcMain.handle("terminal-create", createTerminal);
ipcMain.handle("terminal-kill", killTerminal);
ipcMain.on("terminal-write", writeTerminal);
ipcMain.on("terminal-resize", resizeTerminal);

app.on("before-quit", killTerminalSessions);

app.whenReady().then(() => {
  app.setName("AgentDesk");
  buildMenu();
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
