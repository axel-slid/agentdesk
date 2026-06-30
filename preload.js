const { contextBridge, ipcRenderer, webUtils } = require("electron");

contextBridge.exposeInMainWorld("localOverleaf", {
  listProjects: () => ipcRenderer.invoke("list-projects"),
  addProject: (kind) => ipcRenderer.invoke("add-project", { kind }),
  addProjectFromPath: (paths) => ipcRenderer.invoke("add-project-from-path", { paths }),
  listTemplates: () => ipcRenderer.invoke("list-templates"),
  templatePreviewPdf: (templateId) => ipcRenderer.invoke("template-preview-pdf", templateId),
  cacheTemplatePreview: (templateId, dataUrl) => ipcRenderer.invoke("cache-template-preview", { templateId, dataUrl }),
  cacheProjectPreview: (projectId, dataUrl) => ipcRenderer.invoke("cache-project-preview", { projectId, dataUrl }),
  importTemplate: () => ipcRenderer.invoke("import-template"),
  removeTemplate: (templateId) => ipcRenderer.invoke("remove-template", templateId),
  createProjectFromTemplate: (templateId) => ipcRenderer.invoke("create-project-from-template", templateId),
  getPathForFile: (file) => webUtils.getPathForFile(file),
  renameProject: (projectId, name) => ipcRenderer.invoke("rename-project", { projectId, name }),
  removeProject: (projectId) => ipcRenderer.invoke("remove-project", projectId),
  listProjectFiles: (projectId) => ipcRenderer.invoke("list-project-files", projectId),
  projectFileAction: (projectId, relativePath, action, options = {}) => ipcRenderer.invoke("project-file-action", { projectId, relativePath, action, options }),
  chooseProjectFiles: (projectId) => ipcRenderer.invoke("choose-project-files", projectId),
  importProjectFiles: (projectId, files) => ipcRenderer.invoke("import-project-files", { projectId, files }),
  load: (projectId, relativePath) => ipcRenderer.invoke("load-manuscript", { projectId, relativePath }),
  save: (projectId, relativePath, tex) => ipcRenderer.invoke("save-manuscript", { projectId, relativePath, tex }),
  compile: (projectId, relativePath, tex) => ipcRenderer.invoke("compile-manuscript", { projectId, relativePath, tex }),
  readPdf: (projectId) => ipcRenderer.invoke("read-pdf", projectId),
  openPdf: (projectId) => ipcRenderer.invoke("open-pdf", projectId),
  downloadPdf: (projectId) => ipcRenderer.invoke("download-pdf", projectId),
  openExternalLink: (url) => ipcRenderer.invoke("open-external-link", url),
  openHistoryWindow: (payload) => ipcRenderer.invoke("open-history-window", payload),
  readAgents: (projectId) => ipcRenderer.invoke("read-agents", projectId),
  saveAgents: (projectId, text) => ipcRenderer.invoke("save-agents", { projectId, text }),
  createTerminal: (projectId, kind, options = {}) => ipcRenderer.invoke("terminal-create", { projectId, kind, ...options }),
  writeTerminal: (id, data) => ipcRenderer.send("terminal-write", { id, data }),
  resizeTerminal: (id, cols, rows) => ipcRenderer.send("terminal-resize", { id, cols, rows }),
  killTerminal: (id) => ipcRenderer.invoke("terminal-kill", id),
  onTerminalData: (callback) => {
    ipcRenderer.on("terminal-data", (_event, payload) => callback(payload));
  },
  onTerminalExit: (callback) => {
    ipcRenderer.on("terminal-exit", (_event, payload) => callback(payload));
  },
  onCommand: (callback) => {
    ipcRenderer.on("editor-command", (_event, command) => callback(command));
  }
});
