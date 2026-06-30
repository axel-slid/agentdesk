# AgentDesk

Agent-native desktop workspace for LaTeX papers, PDFs, terminals, compile logs, and review workflows.

![AgentDesk interface](docs/interface-example.png)

## Download and Run

AgentDesk is currently distributed from this GitHub repository. Packaged
Windows and Linux installers are not published yet, so download the source
archive or clone the repository and run the Electron app locally.

### Windows

Requirements:

- Windows 10 or later.
- [Node.js LTS](https://nodejs.org/) with npm.
- [Git for Windows](https://git-scm.com/download/win), if you want to clone
  instead of downloading the ZIP.
- A LaTeX compiler on your `PATH` for PDF compilation. AgentDesk tries
  `tectonic`, then `latexmk`, then `pdflatex`.

Download with the GitHub ZIP:

1. Open https://github.com/axel-slid/agentdesk.
2. Click **Code** > **Download ZIP**.
3. Extract the ZIP.
4. Open PowerShell in the extracted folder.
5. Run:

```powershell
npm install
npm start
```

Or clone with Git:

```powershell
git clone https://github.com/axel-slid/agentdesk.git
cd agentdesk
npm install
npm start
```

### Linux

Requirements:

- Node.js LTS with npm.
- Git, if you want to clone instead of downloading the ZIP.
- A LaTeX compiler on your `PATH` for PDF compilation. AgentDesk tries
  `tectonic`, then `latexmk`, then `pdflatex`.
- If `npm install` fails while building native dependencies, install your
  distro's Python 3, `make`, and C++ compiler packages.

Download with the GitHub ZIP:

1. Open https://github.com/axel-slid/agentdesk.
2. Click **Code** > **Download ZIP**.
3. Extract the ZIP.
4. Open a terminal in the extracted folder.
5. Run:

```bash
npm install
npm start
```

Or clone with Git:

```bash
git clone https://github.com/axel-slid/agentdesk.git
cd agentdesk
npm install
npm start
```

## Local Development

```bash
cd agentdesk
npm install
npm start
```

The app opens to a project library. **Add Project** lets you start a blank project or import a `.tex`, folder, `.zip`, `.tar`, `.tar.gz`, or `.tgz` project. Opening a project shows the source editor on the left and a rendered PDF preview on the right. The source editor has line numbers, LaTeX syntax coloring, wrapped lines, optional Vim shortcuts, and multiple text tabs. With **Auto compile** enabled, edits are saved, compiled with `tectonic`, and pushed into the PDF preview after a short pause.

Use **Code** for raw LaTeX editing and **Visual** for page-like paragraph editing that writes back into the LaTeX source. Drag the dividers to resize the files, editor, PDF, terminal, and compile-log panes, and use the settings modal for themes, PDF rendering, keyboard shortcuts, profile details, and AGENTS.md.
