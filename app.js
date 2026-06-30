const projectScreen = document.getElementById("projectScreen");
const editorScreen = document.getElementById("editorScreen");
const projectGrid = document.getElementById("projectGrid");
const projectEmpty = document.getElementById("projectEmpty");
const projectHeroTitle = document.getElementById("projectHeroTitle");
const projectSearch = document.getElementById("projectSearch");
const projectGridButton = document.getElementById("projectGridButton");
const projectRowsButton = document.getElementById("projectRowsButton");
const addProjectButton = document.getElementById("addProjectButton");
const templatesButton = document.getElementById("templatesButton");
const newProjectPanel = document.getElementById("newProjectPanel");
const closeNewProjectButton = document.getElementById("closeNewProjectButton");
const projectDropZone = document.getElementById("projectDropZone");
const projectImportButtons = Array.from(document.querySelectorAll("[data-project-kind]"));
const refreshProjectsButton = document.getElementById("refreshProjectsButton");
const backToProjectsButton = document.getElementById("backToProjectsButton");
const commandPalette = document.getElementById("commandPalette");
const commandPaletteInput = document.getElementById("commandPaletteInput");
const commandPaletteList = document.getElementById("commandPaletteList");
const fileRail = document.getElementById("fileRail");
const fileRailButton = document.getElementById("fileRailButton");
const filePane = document.getElementById("filePane");
const fileSplitter = document.getElementById("fileSplitter");
const topRefreshFilesButton = document.getElementById("topRefreshFilesButton");
const railRefreshFilesButton = document.getElementById("railRefreshFilesButton");
const fileTree = document.getElementById("fileTree");
const filePreview = document.getElementById("filePreview");
const latexSource = document.getElementById("latexSource");
const visualEditor = document.getElementById("visualEditor");
const sourceMinimap = document.getElementById("sourceMinimap");
const sourceMinimapLines = sourceMinimap && sourceMinimap.querySelector(".source-minimap-lines");
const sourceMinimapViewport = sourceMinimap && sourceMinimap.querySelector(".source-minimap-viewport");
const textTabs = document.getElementById("textTabs");
const workspace = document.getElementById("workspace");
const sourcePane = document.querySelector(".source-pane");
const splitter = document.getElementById("splitter");
const sourceStats = document.getElementById("sourceStats");
const saveState = document.getElementById("saveState");
const compileState = document.getElementById("compileState");
const pdfTitle = document.getElementById("pdfTitle");
const pdfMeta = document.getElementById("pdfMeta");
const pdfViewer = document.getElementById("pdfViewer");
const previewPane = document.querySelector(".preview-pane");
const compileLogPanel = document.getElementById("compileLogPanel");
const compileLogResizeHandle = document.getElementById("compileLogResizeHandle");
const compileLogCollapsedButton = document.getElementById("compileLogCollapsedButton");
const fixCompileLogButton = document.getElementById("fixCompileLogButton");
const compileLog = document.getElementById("compileLog");
const saveButton = document.getElementById("saveButton");
const compileButton = document.getElementById("compileButton");
const openPdfButton = document.getElementById("openPdfButton");
const downloadPdfButton = document.getElementById("downloadPdfButton");
const autoCompileToggle = document.getElementById("autoCompileToggle");
const autoSaveToggle = document.getElementById("autoSaveToggle");
const sourceModeButton = document.getElementById("sourceModeButton");
const visualModeButton = document.getElementById("visualModeButton");
const suggestionModeButton = document.getElementById("suggestionModeButton");
const editorTitle = document.getElementById("editorTitle");
const activeDocumentTitle = document.getElementById("activeDocumentTitle");
const topSaveStatusButton = document.getElementById("topSaveStatusButton");
const topSaveStatusLabel = document.getElementById("topSaveStatusLabel");
const settingsButtons = Array.from(document.querySelectorAll(".settingsButton"));
const settingsBackdrop = document.getElementById("settingsBackdrop");
const templatesPanel = document.getElementById("templatesPanel");
const closeTemplatesButton = document.getElementById("closeTemplatesButton");
const importTemplateButton = document.getElementById("importTemplateButton");
const onlineTemplateGrid = document.getElementById("onlineTemplateGrid");
const customTemplateGrid = document.getElementById("customTemplateGrid");
const customTemplateEmpty = document.getElementById("customTemplateEmpty");
const settingsDrawer = document.getElementById("settingsDrawer");
const closeSettingsButton = document.getElementById("closeSettingsButton");
const settingsTitle = document.getElementById("settingsTitle");
const settingsSearchInput = document.getElementById("settingsSearchInput");
const settingsSearchEmpty = document.getElementById("settingsSearchEmpty");
const settingsNavButtons = Array.from(document.querySelectorAll(".settings-nav-button"));
const settingsPanels = Array.from(document.querySelectorAll("[data-settings-panel]"));
const settingsThemePreset = document.getElementById("settingsThemePreset");
const settingsThemeToggle = document.getElementById("settingsThemeToggle");
const settingsAccentPicker = document.getElementById("settingsAccentPicker");
const settingsFileSidebarToggle = document.getElementById("settingsFileSidebarToggle");
const settingsPdfRenderModeButtons = Array.from(document.querySelectorAll("[data-pdf-render-mode]"));
const settingsPdfGuardRange = document.getElementById("settingsPdfGuardRange");
const settingsPdfGuardValue = document.getElementById("settingsPdfGuardValue");
const settingsVimModeToggle = document.getElementById("settingsVimModeToggle");
const settingsRelativeLineNumbersToggle = document.getElementById("settingsRelativeLineNumbersToggle");
const pdfZoomOutButton = document.getElementById("pdfZoomOutButton");
const pdfZoomInButton = document.getElementById("pdfZoomInButton");
const pdfZoomLabel = document.getElementById("pdfZoomLabel");
const terminalPanel = document.getElementById("terminalPanel");
const terminalTabs = document.getElementById("terminalTabs");
const terminalBody = document.getElementById("terminalBody");
const terminalEmpty = document.getElementById("terminalEmpty");
const terminalResizeHandle = document.getElementById("terminalResizeHandle");
const terminalCollapsedButton = document.getElementById("terminalCollapsedButton");
const terminalNewButton = document.getElementById("terminalNewButton");
const terminalShellButton = document.getElementById("terminalShellButton");
const terminalCodexButton = document.getElementById("terminalCodexButton");
const terminalClaudeButton = document.getElementById("terminalClaudeButton");
const suggestionPanel = document.getElementById("suggestionPanel");
const closeSuggestionButton = document.getElementById("closeSuggestionButton");
const suggestionPromptInput = document.getElementById("suggestionPrompt");
const suggestionModelSelect = document.getElementById("suggestionModel");
const runSuggestionButton = document.getElementById("runSuggestionButton");
const suggestionStatus = document.getElementById("suggestionStatus");
const suggestionDiff = document.getElementById("suggestionDiff");
const suggestionDiffBody = document.getElementById("suggestionDiffBody");
const suggestionCounter = document.getElementById("suggestionCounter");
const previousSuggestionButton = document.getElementById("previousSuggestionButton");
const nextSuggestionButton = document.getElementById("nextSuggestionButton");
const applySuggestionButton = document.getElementById("applySuggestionButton");
const rejectSuggestionButton = document.getElementById("rejectSuggestionButton");
const applyAllSuggestionsButton = document.getElementById("applyAllSuggestionsButton");
const agentsPathLabel = document.getElementById("agentsPathLabel");
const agentsEditor = document.getElementById("agentsEditor");
const reloadAgentsButton = document.getElementById("reloadAgentsButton");
const saveAgentsButton = document.getElementById("saveAgentsButton");
const agentsStatus = document.getElementById("agentsStatus");
const profileNameInput = document.getElementById("profileNameInput");
const profileEmailInput = document.getElementById("profileEmailInput");
const profileWorkInput = document.getElementById("profileWorkInput");
const profileBioInput = document.getElementById("profileBioInput");
const profileAiContextInput = document.getElementById("profileAiContextInput");
const profileStatus = document.getElementById("profileStatus");

const DEFAULT_ACCENT = "#f97316";
const PROFILE_STORAGE_KEY = "latexStudioAiProfile";
const CLOSE_ICON_SVG = `
  <svg class="icon icon-x" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18 6 6 18M6 6l12 12"></path>
  </svg>
`;
const TRASH_ICON_SVG = `
  <svg class="icon icon-trash" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 6h18"></path>
    <path d="M8 6V4h8v2"></path>
    <path d="M6 6l1 14h10l1-14"></path>
    <path d="M10 10v6M14 10v6"></path>
  </svg>
`;
const EXTERNAL_LINK_ICON_SVG = `
  <svg class="icon icon-external" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M14 3h7v7"></path>
    <path d="M10 14 21 3"></path>
    <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"></path>
  </svg>
`;
const THEME_VARIABLES = [
  "--bg",
  "--glass",
  "--glass-strong",
  "--panel",
  "--page",
  "--text",
  "--muted",
  "--border",
  "--border-strong",
  "--red",
  "--green",
  "--blue",
  "--blue-dark",
  "--cm-bg",
  "--cm-gutter",
  "--cm-text",
  "--cm-keyword",
  "--cm-variable",
  "--cm-atom",
  "--cm-comment",
  "--cm-string",
  "--cm-number",
  "--pdf-bg",
  "--pdf-paper",
  "--pdf-page-filter",
  "--pdf-dark-bg",
  "--pdf-dark-paper",
  "--pdf-dark-filter",
  "--terminal-bg",
  "--terminal-header-bg",
  "--terminal-text",
  "--terminal-muted",
  "--terminal-selection"
];
const HIGH_CONTRAST_PRESETS = new Set(["github-light", "abyss", "tomorrow-night-blue"]);
const THEME_PRESETS = {
  custom: null,
  "light-plus": {
    theme: "light",
    accent: "#007acc",
    background: "linear-gradient(135deg, rgba(0, 122, 204, 0.1), rgba(225, 231, 239, 0.92)), #eef2f7",
    colors: {
      "--bg": "#eef2f7",
      "--glass": "rgba(255, 255, 255, 0.72)",
      "--glass-strong": "rgba(255, 255, 255, 0.88)",
      "--panel": "rgba(250, 252, 255, 0.9)",
      "--page": "#ffffff",
      "--text": "#1f2328",
      "--muted": "#667085",
      "--border": "rgba(92, 105, 122, 0.24)",
      "--border-strong": "rgba(72, 82, 96, 0.34)",
      "--red": "#d1242f",
      "--green": "#1a7f37",
      "--blue": "#007acc",
      "--blue-dark": "#005a9e",
      "--cm-bg": "#ffffff",
      "--cm-gutter": "#f3f4f6",
      "--cm-text": "#1f2937",
      "--cm-keyword": "#0000ff",
      "--cm-variable": "#0070c1",
      "--cm-atom": "#795e26",
      "--cm-comment": "#008000",
      "--cm-string": "#a31515",
      "--cm-number": "#098658",
      "--pdf-bg": "#cfd6df",
      "--pdf-paper": "#ffffff"
    }
  },
  "dark-plus": {
    theme: "dark",
    accent: "#3794ff",
    background: "linear-gradient(135deg, #1e1e1e, #181818 62%, #111111)",
    colors: {
      "--bg": "#1e1e1e",
      "--glass": "rgba(37, 37, 38, 0.78)",
      "--glass-strong": "rgba(45, 45, 48, 0.9)",
      "--panel": "rgba(30, 30, 30, 0.92)",
      "--page": "#f8f8f5",
      "--text": "#cccccc",
      "--muted": "#969696",
      "--border": "rgba(204, 204, 204, 0.14)",
      "--border-strong": "rgba(204, 204, 204, 0.26)",
      "--red": "#f44747",
      "--green": "#6a9955",
      "--blue": "#3794ff",
      "--blue-dark": "#1f6feb",
      "--cm-bg": "#1e1e1e",
      "--cm-gutter": "#252526",
      "--cm-text": "#d4d4d4",
      "--cm-keyword": "#c586c0",
      "--cm-variable": "#9cdcfe",
      "--cm-atom": "#4ec9b0",
      "--cm-comment": "#6a9955",
      "--cm-string": "#ce9178",
      "--cm-number": "#b5cea8",
      "--pdf-bg": "#111827",
      "--pdf-paper": "#d9dee6",
      "--pdf-page-filter": "invert(0.88) hue-rotate(180deg) contrast(0.88) brightness(1.12)"
    }
  },
  monokai: {
    theme: "dark",
    accent: "#f92672",
    background: "linear-gradient(135deg, #272822, #20211c 62%, #191a16)",
    colors: {
      "--bg": "#272822",
      "--glass": "rgba(39, 40, 34, 0.8)",
      "--glass-strong": "rgba(55, 56, 47, 0.92)",
      "--panel": "rgba(39, 40, 34, 0.94)",
      "--page": "#f8f8f2",
      "--text": "#f8f8f2",
      "--muted": "#c2c2b0",
      "--border": "rgba(248, 248, 242, 0.16)",
      "--border-strong": "rgba(248, 248, 242, 0.3)",
      "--red": "#f92672",
      "--green": "#a6e22e",
      "--blue": "#66d9ef",
      "--blue-dark": "#3db8c9",
      "--cm-bg": "#272822",
      "--cm-gutter": "#1f201b",
      "--cm-text": "#f8f8f2",
      "--cm-keyword": "#f92672",
      "--cm-variable": "#66d9ef",
      "--cm-atom": "#a6e22e",
      "--cm-comment": "#75715e",
      "--cm-string": "#e6db74",
      "--cm-number": "#ae81ff",
      "--pdf-bg": "#1d1e19",
      "--pdf-paper": "#f1eee0",
      "--pdf-page-filter": "invert(0.88) hue-rotate(180deg) contrast(0.9) brightness(1.08) saturate(0.86)"
    }
  },
  "solarized-dark": {
    theme: "dark",
    accent: "#268bd2",
    background: "linear-gradient(135deg, #002b36, #073642 68%, #001f27)",
    colors: {
      "--bg": "#002b36",
      "--glass": "rgba(0, 43, 54, 0.78)",
      "--glass-strong": "rgba(7, 54, 66, 0.92)",
      "--panel": "rgba(7, 54, 66, 0.9)",
      "--page": "#fdf6e3",
      "--text": "#eee8d5",
      "--muted": "#93a1a1",
      "--border": "rgba(147, 161, 161, 0.18)",
      "--border-strong": "rgba(147, 161, 161, 0.3)",
      "--red": "#dc322f",
      "--green": "#859900",
      "--blue": "#268bd2",
      "--blue-dark": "#1d6fa5",
      "--cm-bg": "#073642",
      "--cm-gutter": "#002b36",
      "--cm-text": "#93a1a1",
      "--cm-keyword": "#859900",
      "--cm-variable": "#268bd2",
      "--cm-atom": "#2aa198",
      "--cm-comment": "#586e75",
      "--cm-string": "#b58900",
      "--cm-number": "#d33682",
      "--pdf-bg": "#002b36",
      "--pdf-paper": "#eee8d5",
      "--pdf-page-filter": "invert(0.86) hue-rotate(180deg) contrast(0.9) brightness(1.08) sepia(0.12)"
    }
  },
  "quiet-light": {
    theme: "light",
    accent: "#5876a3",
    background: "linear-gradient(135deg, rgba(88, 118, 163, 0.1), rgba(240, 243, 247, 0.9)), #f6f8fa",
    colors: {
      "--bg": "#f6f8fa",
      "--glass": "rgba(255, 255, 255, 0.7)",
      "--glass-strong": "rgba(255, 255, 255, 0.88)",
      "--panel": "rgba(255, 255, 255, 0.88)",
      "--page": "#ffffff",
      "--text": "#1f2937",
      "--muted": "#6b7280",
      "--border": "rgba(107, 114, 128, 0.22)",
      "--border-strong": "rgba(75, 85, 99, 0.32)",
      "--red": "#b91c1c",
      "--green": "#047857",
      "--blue": "#5876a3",
      "--blue-dark": "#405b80",
      "--cm-bg": "#ffffff",
      "--cm-gutter": "#f3f4f6",
      "--cm-text": "#1f2937",
      "--cm-keyword": "#5b5f97",
      "--cm-variable": "#5876a3",
      "--cm-atom": "#047857",
      "--cm-comment": "#6b7280",
      "--cm-string": "#8b5a2b",
      "--cm-number": "#7c3aed",
      "--pdf-bg": "#d6dce4",
      "--pdf-paper": "#ffffff"
    }
  },
  "solarized-light": {
    theme: "light",
    accent: "#268bd2",
    background: "linear-gradient(135deg, #fdf6e3, #eee8d5 64%, #e8dcc2)",
    colors: {
      "--bg": "#fdf6e3",
      "--glass": "rgba(253, 246, 227, 0.74)",
      "--glass-strong": "rgba(253, 246, 227, 0.9)",
      "--panel": "rgba(253, 246, 227, 0.92)",
      "--page": "#ffffff",
      "--text": "#073642",
      "--muted": "#657b83",
      "--border": "rgba(101, 123, 131, 0.24)",
      "--border-strong": "rgba(88, 110, 117, 0.34)",
      "--red": "#dc322f",
      "--green": "#859900",
      "--blue": "#268bd2",
      "--blue-dark": "#1d6fa5",
      "--cm-bg": "#fdf6e3",
      "--cm-gutter": "#eee8d5",
      "--cm-text": "#586e75",
      "--cm-keyword": "#859900",
      "--cm-variable": "#268bd2",
      "--cm-atom": "#2aa198",
      "--cm-comment": "#93a1a1",
      "--cm-string": "#b58900",
      "--cm-number": "#d33682"
    }
  },
  "catppuccin-latte": {
    theme: "light",
    accent: "#1e66f5",
    background: "linear-gradient(135deg, #eff1f5, #e6e9ef 70%, #dce0e8)",
    colors: {
      "--bg": "#eff1f5",
      "--glass": "rgba(239, 241, 245, 0.76)",
      "--glass-strong": "rgba(230, 233, 239, 0.92)",
      "--panel": "rgba(239, 241, 245, 0.94)",
      "--page": "#ffffff",
      "--text": "#4c4f69",
      "--muted": "#6c6f85",
      "--border": "rgba(108, 111, 133, 0.22)",
      "--border-strong": "rgba(76, 79, 105, 0.36)",
      "--red": "#d20f39",
      "--green": "#40a02b",
      "--blue": "#1e66f5",
      "--blue-dark": "#1a56cf",
      "--cm-bg": "#eff1f5",
      "--cm-gutter": "#e6e9ef",
      "--cm-text": "#4c4f69",
      "--cm-keyword": "#8839ef",
      "--cm-variable": "#1e66f5",
      "--cm-atom": "#179299",
      "--cm-comment": "#8c8fa1",
      "--cm-string": "#40a02b",
      "--cm-number": "#fe640b",
      "--pdf-bg": "#ccd0da",
      "--pdf-paper": "#ffffff"
    }
  },
  "min-light": {
    theme: "light",
    accent: "#007acc",
    background: "linear-gradient(135deg, #ffffff, #f8fafc 72%, #edf2f7)",
    colors: {
      "--bg": "#f8fafc",
      "--glass": "rgba(255, 255, 255, 0.78)",
      "--glass-strong": "rgba(255, 255, 255, 0.94)",
      "--panel": "rgba(255, 255, 255, 0.94)",
      "--page": "#ffffff",
      "--text": "#1a202c",
      "--muted": "#718096",
      "--border": "rgba(113, 128, 150, 0.2)",
      "--border-strong": "rgba(74, 85, 104, 0.32)",
      "--red": "#e53e3e",
      "--green": "#38a169",
      "--blue": "#007acc",
      "--blue-dark": "#005a9e",
      "--cm-bg": "#ffffff",
      "--cm-gutter": "#f7fafc",
      "--cm-text": "#1a202c",
      "--cm-keyword": "#805ad5",
      "--cm-variable": "#3182ce",
      "--cm-atom": "#319795",
      "--cm-comment": "#a0aec0",
      "--cm-string": "#2f855a",
      "--cm-number": "#dd6b20",
      "--pdf-bg": "#d8dee8",
      "--pdf-paper": "#ffffff"
    }
  },
  "github-light": {
    theme: "light",
    accent: "#0969da",
    background: "linear-gradient(135deg, #ffffff, #f5f7fa 72%, #e6ebf0)",
    colors: {
      "--bg": "#ffffff",
      "--glass": "rgba(255, 255, 255, 0.94)",
      "--glass-strong": "rgba(255, 255, 255, 0.98)",
      "--panel": "rgba(255, 255, 255, 0.98)",
      "--page": "#ffffff",
      "--text": "#000000",
      "--muted": "#24292f",
      "--border": "rgba(0, 0, 0, 0.48)",
      "--border-strong": "rgba(0, 0, 0, 0.76)",
      "--red": "#cf222e",
      "--green": "#116329",
      "--blue": "#0969da",
      "--blue-dark": "#0550ae",
      "--cm-bg": "#ffffff",
      "--cm-gutter": "#f6f8fa",
      "--cm-text": "#24292f",
      "--cm-keyword": "#cf222e",
      "--cm-variable": "#0550ae",
      "--cm-atom": "#8250df",
      "--cm-comment": "#6e7781",
      "--cm-string": "#0a3069",
      "--cm-number": "#953800",
      "--pdf-bg": "#b7bec8",
      "--pdf-paper": "#ffffff"
    }
  },
  "github-dark": {
    theme: "dark",
    accent: "#58a6ff",
    background: "linear-gradient(135deg, #0d1117, #161b22 70%, #010409)",
    colors: {
      "--bg": "#0d1117",
      "--glass": "rgba(13, 17, 23, 0.78)",
      "--glass-strong": "rgba(22, 27, 34, 0.92)",
      "--panel": "rgba(22, 27, 34, 0.92)",
      "--page": "#f6f8fa",
      "--text": "#c9d1d9",
      "--muted": "#8b949e",
      "--border": "rgba(139, 148, 158, 0.2)",
      "--border-strong": "rgba(139, 148, 158, 0.32)",
      "--red": "#ff7b72",
      "--green": "#7ee787",
      "--blue": "#58a6ff",
      "--blue-dark": "#1f6feb",
      "--cm-bg": "#0d1117",
      "--cm-gutter": "#161b22",
      "--cm-text": "#c9d1d9",
      "--cm-keyword": "#ff7b72",
      "--cm-variable": "#79c0ff",
      "--cm-atom": "#d2a8ff",
      "--cm-comment": "#8b949e",
      "--cm-string": "#a5d6ff",
      "--cm-number": "#ffa657"
    }
  },
  dracula: {
    theme: "dark",
    accent: "#ff79c6",
    background: "linear-gradient(135deg, #282a36, #21222c 68%, #191a21)",
    colors: {
      "--bg": "#282a36",
      "--glass": "rgba(40, 42, 54, 0.78)",
      "--glass-strong": "rgba(68, 71, 90, 0.9)",
      "--panel": "rgba(40, 42, 54, 0.92)",
      "--page": "#f8f8f2",
      "--text": "#f8f8f2",
      "--muted": "#bd93f9",
      "--border": "rgba(248, 248, 242, 0.16)",
      "--border-strong": "rgba(248, 248, 242, 0.28)",
      "--red": "#ff5555",
      "--green": "#50fa7b",
      "--blue": "#8be9fd",
      "--blue-dark": "#62d6ee",
      "--cm-bg": "#282a36",
      "--cm-gutter": "#21222c",
      "--cm-text": "#f8f8f2",
      "--cm-keyword": "#ff79c6",
      "--cm-variable": "#8be9fd",
      "--cm-atom": "#bd93f9",
      "--cm-comment": "#6272a4",
      "--cm-string": "#f1fa8c",
      "--cm-number": "#bd93f9"
    }
  },
  nord: {
    theme: "dark",
    accent: "#88c0d0",
    background: "linear-gradient(135deg, #2e3440, #3b4252 70%, #242933)",
    colors: {
      "--bg": "#2e3440",
      "--glass": "rgba(46, 52, 64, 0.78)",
      "--glass-strong": "rgba(59, 66, 82, 0.92)",
      "--panel": "rgba(46, 52, 64, 0.94)",
      "--page": "#eceff4",
      "--text": "#eceff4",
      "--muted": "#d8dee9",
      "--border": "rgba(216, 222, 233, 0.16)",
      "--border-strong": "rgba(216, 222, 233, 0.28)",
      "--red": "#bf616a",
      "--green": "#a3be8c",
      "--blue": "#88c0d0",
      "--blue-dark": "#5e81ac",
      "--cm-bg": "#2e3440",
      "--cm-gutter": "#3b4252",
      "--cm-text": "#d8dee9",
      "--cm-keyword": "#81a1c1",
      "--cm-variable": "#88c0d0",
      "--cm-atom": "#b48ead",
      "--cm-comment": "#616e88",
      "--cm-string": "#a3be8c",
      "--cm-number": "#b48ead"
    }
  },
  "gruvbox-dark": {
    theme: "dark",
    accent: "#fabd2f",
    background: "linear-gradient(135deg, #282828, #3c3836 72%, #1d2021)",
    colors: {
      "--bg": "#282828",
      "--glass": "rgba(40, 40, 40, 0.78)",
      "--glass-strong": "rgba(60, 56, 54, 0.9)",
      "--panel": "rgba(40, 40, 40, 0.94)",
      "--page": "#fbf1c7",
      "--text": "#ebdbb2",
      "--muted": "#bdae93",
      "--border": "rgba(235, 219, 178, 0.16)",
      "--border-strong": "rgba(235, 219, 178, 0.3)",
      "--red": "#fb4934",
      "--green": "#b8bb26",
      "--blue": "#83a598",
      "--blue-dark": "#458588",
      "--cm-bg": "#282828",
      "--cm-gutter": "#3c3836",
      "--cm-text": "#ebdbb2",
      "--cm-keyword": "#fb4934",
      "--cm-variable": "#83a598",
      "--cm-atom": "#d3869b",
      "--cm-comment": "#928374",
      "--cm-string": "#b8bb26",
      "--cm-number": "#d3869b"
    }
  },
  "one-dark-pro": {
    theme: "dark",
    accent: "#61afef",
    background: "linear-gradient(135deg, #282c34, #21252b 70%, #1b1e24)",
    colors: {
      "--bg": "#282c34",
      "--glass": "rgba(40, 44, 52, 0.78)",
      "--glass-strong": "rgba(33, 37, 43, 0.92)",
      "--panel": "rgba(40, 44, 52, 0.94)",
      "--page": "#f5f5f5",
      "--text": "#abb2bf",
      "--muted": "#828997",
      "--border": "rgba(171, 178, 191, 0.16)",
      "--border-strong": "rgba(171, 178, 191, 0.28)",
      "--red": "#e06c75",
      "--green": "#98c379",
      "--blue": "#61afef",
      "--blue-dark": "#528bff",
      "--cm-bg": "#282c34",
      "--cm-gutter": "#21252b",
      "--cm-text": "#abb2bf",
      "--cm-keyword": "#c678dd",
      "--cm-variable": "#61afef",
      "--cm-atom": "#56b6c2",
      "--cm-comment": "#5c6370",
      "--cm-string": "#98c379",
      "--cm-number": "#d19a66"
    }
  },
  abyss: {
    theme: "dark",
    accent: "#00d7ff",
    background: "linear-gradient(135deg, #000000, #00111f 72%, #000000)",
    colors: {
      "--bg": "#000000",
      "--glass": "rgba(0, 8, 16, 0.94)",
      "--glass-strong": "rgba(0, 17, 31, 0.98)",
      "--panel": "rgba(0, 8, 16, 0.98)",
      "--page": "#ffffff",
      "--text": "#ffffff",
      "--muted": "#d7f7ff",
      "--border": "rgba(255, 255, 255, 0.58)",
      "--border-strong": "rgba(255, 255, 255, 0.86)",
      "--red": "#ff5c5c",
      "--green": "#00ffbf",
      "--blue": "#00d7ff",
      "--blue-dark": "#39a7ff",
      "--cm-bg": "#000000",
      "--cm-gutter": "#001a2e",
      "--cm-text": "#ffffff",
      "--cm-keyword": "#ff73d7",
      "--cm-variable": "#00d7ff",
      "--cm-atom": "#00ffbf",
      "--cm-comment": "#a8b7c7",
      "--cm-string": "#ffe66d",
      "--cm-number": "#ff9b6d",
      "--pdf-bg": "#000000",
      "--pdf-paper": "#ffffff"
    }
  },
  "kimbie-dark": {
    theme: "dark",
    accent: "#dc3958",
    background: "linear-gradient(135deg, #221a0f, #362712 72%, #18130b)",
    colors: {
      "--bg": "#221a0f",
      "--glass": "rgba(34, 26, 15, 0.78)",
      "--glass-strong": "rgba(54, 39, 18, 0.9)",
      "--panel": "rgba(34, 26, 15, 0.94)",
      "--page": "#fbf2df",
      "--text": "#d3af86",
      "--muted": "#a57a4c",
      "--border": "rgba(211, 175, 134, 0.16)",
      "--border-strong": "rgba(211, 175, 134, 0.3)",
      "--red": "#dc3958",
      "--green": "#889b4a",
      "--blue": "#8ab1b0",
      "--blue-dark": "#5f8f8d",
      "--cm-bg": "#221a0f",
      "--cm-gutter": "#362712",
      "--cm-text": "#d3af86",
      "--cm-keyword": "#dc3958",
      "--cm-variable": "#8ab1b0",
      "--cm-atom": "#98676a",
      "--cm-comment": "#84613d",
      "--cm-string": "#f79a32",
      "--cm-number": "#f06431"
    }
  },
  "catppuccin-mocha": {
    theme: "dark",
    accent: "#89b4fa",
    background: "linear-gradient(135deg, #1e1e2e, #181825 70%, #11111b)",
    colors: {
      "--bg": "#1e1e2e",
      "--glass": "rgba(30, 30, 46, 0.78)",
      "--glass-strong": "rgba(24, 24, 37, 0.92)",
      "--panel": "rgba(30, 30, 46, 0.94)",
      "--page": "#f5f5ff",
      "--text": "#cdd6f4",
      "--muted": "#a6adc8",
      "--border": "rgba(205, 214, 244, 0.16)",
      "--border-strong": "rgba(205, 214, 244, 0.3)",
      "--red": "#f38ba8",
      "--green": "#a6e3a1",
      "--blue": "#89b4fa",
      "--blue-dark": "#74a7fa",
      "--cm-bg": "#1e1e2e",
      "--cm-gutter": "#181825",
      "--cm-text": "#cdd6f4",
      "--cm-keyword": "#cba6f7",
      "--cm-variable": "#89b4fa",
      "--cm-atom": "#94e2d5",
      "--cm-comment": "#6c7086",
      "--cm-string": "#a6e3a1",
      "--cm-number": "#fab387",
      "--pdf-bg": "#11111b",
      "--pdf-paper": "#f5f5ff",
      "--pdf-page-filter": "invert(0.86) hue-rotate(180deg) contrast(0.9) brightness(1.12)"
    }
  },
  "tokyo-night": {
    theme: "dark",
    accent: "#7aa2f7",
    background: "linear-gradient(135deg, #1a1b26, #16161e 72%, #0f1018)",
    colors: {
      "--bg": "#1a1b26",
      "--glass": "rgba(26, 27, 38, 0.78)",
      "--glass-strong": "rgba(22, 22, 30, 0.92)",
      "--panel": "rgba(26, 27, 38, 0.94)",
      "--page": "#f4f6ff",
      "--text": "#c0caf5",
      "--muted": "#9aa5ce",
      "--border": "rgba(192, 202, 245, 0.16)",
      "--border-strong": "rgba(192, 202, 245, 0.3)",
      "--red": "#f7768e",
      "--green": "#9ece6a",
      "--blue": "#7aa2f7",
      "--blue-dark": "#5f82d6",
      "--cm-bg": "#1a1b26",
      "--cm-gutter": "#16161e",
      "--cm-text": "#c0caf5",
      "--cm-keyword": "#bb9af7",
      "--cm-variable": "#7dcfff",
      "--cm-atom": "#2ac3de",
      "--cm-comment": "#565f89",
      "--cm-string": "#9ece6a",
      "--cm-number": "#ff9e64",
      "--pdf-bg": "#0f1018",
      "--pdf-paper": "#f4f6ff",
      "--pdf-page-filter": "invert(0.86) hue-rotate(180deg) contrast(0.9) brightness(1.1)"
    }
  },
  "ayu-dark": {
    theme: "dark",
    accent: "#ffcc66",
    background: "linear-gradient(135deg, #0f1419, #111822 72%, #0a0e13)",
    colors: {
      "--bg": "#0f1419",
      "--glass": "rgba(15, 20, 25, 0.78)",
      "--glass-strong": "rgba(17, 24, 34, 0.92)",
      "--panel": "rgba(15, 20, 25, 0.94)",
      "--page": "#fff9ec",
      "--text": "#e6e1cf",
      "--muted": "#b3b1ad",
      "--border": "rgba(230, 225, 207, 0.16)",
      "--border-strong": "rgba(230, 225, 207, 0.3)",
      "--red": "#f07178",
      "--green": "#aad94c",
      "--blue": "#59c2ff",
      "--blue-dark": "#39a7e8",
      "--cm-bg": "#0f1419",
      "--cm-gutter": "#111822",
      "--cm-text": "#e6e1cf",
      "--cm-keyword": "#ff8f40",
      "--cm-variable": "#59c2ff",
      "--cm-atom": "#95e6cb",
      "--cm-comment": "#5c6773",
      "--cm-string": "#aad94c",
      "--cm-number": "#d2a6ff",
      "--pdf-bg": "#0a0e13",
      "--pdf-paper": "#fff9ec",
      "--pdf-page-filter": "invert(0.85) hue-rotate(180deg) contrast(0.88) brightness(1.1)"
    }
  },
  palenight: {
    theme: "dark",
    accent: "#82aaff",
    background: "linear-gradient(135deg, #292d3e, #222638 72%, #1b1e2d)",
    colors: {
      "--bg": "#292d3e",
      "--glass": "rgba(41, 45, 62, 0.78)",
      "--glass-strong": "rgba(34, 38, 56, 0.92)",
      "--panel": "rgba(41, 45, 62, 0.94)",
      "--page": "#f7f8ff",
      "--text": "#a6accd",
      "--muted": "#8796b0",
      "--border": "rgba(166, 172, 205, 0.16)",
      "--border-strong": "rgba(166, 172, 205, 0.3)",
      "--red": "#f07178",
      "--green": "#c3e88d",
      "--blue": "#82aaff",
      "--blue-dark": "#6d8fe8",
      "--cm-bg": "#292d3e",
      "--cm-gutter": "#222638",
      "--cm-text": "#a6accd",
      "--cm-keyword": "#c792ea",
      "--cm-variable": "#82aaff",
      "--cm-atom": "#89ddff",
      "--cm-comment": "#676e95",
      "--cm-string": "#c3e88d",
      "--cm-number": "#f78c6c",
      "--pdf-bg": "#1b1e2d",
      "--pdf-paper": "#f7f8ff",
      "--pdf-page-filter": "invert(0.86) hue-rotate(180deg) contrast(0.9) brightness(1.1)"
    }
  },
  "tomorrow-night-blue": {
    theme: "dark",
    accent: "#bbdaff",
    background: "linear-gradient(135deg, #001733, #002451 72%, #000a18)",
    colors: {
      "--bg": "#001733",
      "--glass": "rgba(0, 23, 51, 0.94)",
      "--glass-strong": "rgba(0, 36, 81, 0.98)",
      "--panel": "rgba(0, 23, 51, 0.98)",
      "--page": "#ffffff",
      "--text": "#ffffff",
      "--muted": "#bbdaff",
      "--border": "rgba(187, 218, 255, 0.58)",
      "--border-strong": "rgba(187, 218, 255, 0.86)",
      "--red": "#ff9da4",
      "--green": "#d1f1a9",
      "--blue": "#bbdaff",
      "--blue-dark": "#7aa6da",
      "--cm-bg": "#001733",
      "--cm-gutter": "#00346e",
      "--cm-text": "#ffffff",
      "--cm-keyword": "#ebbbff",
      "--cm-variable": "#bbdaff",
      "--cm-atom": "#ffc58f",
      "--cm-comment": "#7285b7",
      "--cm-string": "#d1f1a9",
      "--cm-number": "#ffc58f",
      "--pdf-bg": "#000a18",
      "--pdf-paper": "#ffffff"
    }
  }
};
const DEFAULT_FILE_WIDTH = 240;
const MIN_FILE_WIDTH = 220;
const MAX_FILE_WIDTH = 460;
const FILE_COLLAPSE_THRESHOLD = 165;
const DEFAULT_PDF_MIN_WIDTH = 540;
const DEFAULT_PDF_ZOOM = 1;
const MIN_PDF_ZOOM = 0.7;
const MAX_PDF_ZOOM = 4;
const MAX_PDF_RENDER_SCALE = 5;
const DEFAULT_TERMINAL_HEIGHT = 254;
const MIN_TERMINAL_HEIGHT = 140;
const MAX_TERMINAL_HEIGHT = 520;
const TERMINAL_COLLAPSE_THRESHOLD = 92;
const DEFAULT_COMPILE_LOG_HEIGHT = 170;
const MIN_COMPILE_LOG_HEIGHT = 118;
const MAX_COMPILE_LOG_HEIGHT = 430;
const COMPILE_LOG_COLLAPSE_THRESHOLD = 72;

let editor;
let projects = [];
let templateLibrary = { builtIn: [], custom: [] };
let projectFiles = [];
let activeProject = null;
let activeFile = null;
let savedText = "";
let openTextTabs = [];
let activeTextTabPath = "";
let isLoading = false;
let isCompiling = false;
let pendingCompile = false;
let autoCompileTimer = null;
let autoSaveTimer = null;
let visualItems = [];
let visualBlocks = [];
let suppressSourceChange = false;
let pdfJsPromise = null;
let pdfRenderToken = 0;
let pdfResizeTimer = null;
let pdfZoomGestureTimer = null;
let pdfGestureStartZoom = DEFAULT_PDF_ZOOM;
let pdfPageTextLines = new Map();
let renderedPdfPageCount = 0;
let renderedPdfZoom = DEFAULT_PDF_ZOOM;
let pdfZoom = DEFAULT_PDF_ZOOM;
let pdfDarkMode = false;
let pdfRenderMode = "adaptive";
let projectViewMode = "grid";
let vimModeEnabled = false;
let relativeLineNumbersEnabled = false;
let terminalSessions = [];
let activeTerminalId = null;
let splitTerminalIds = [];
let terminalFitTimer = null;
let suggestionState = null;
let agentsLoadToken = 0;
let fileContextMenu = null;
let projectContextMenu = null;
let commandPaletteItems = [];
let commandPaletteActiveIndex = 0;
let copiedProjectItem = null;
let draggedTextTabPath = "";
let sourceMinimapFrame = 0;
let sourceMinimapDragging = false;
let aiProfile = {};

init();

async function init() {
  relativeLineNumbersEnabled = localStorage.getItem("latexStudioRelativeLineNumbers") === "true";
  setupSettings();
  setupSourceEditor();
  setupTerminalPanel();
  wireEvents();
  await loadProjects();
}

function setupSourceEditor() {
  editor = CodeMirror.fromTextArea(latexSource, {
    keyMap: vimModeEnabled ? "vim" : "default",
    mode: "stex",
    gutters: ["relative-line-gutter", "CodeMirror-linenumbers"],
    lineNumbers: true,
    lineWrapping: true,
    indentUnit: 2,
    tabSize: 2,
    scrollbarStyle: "null",
    viewportMargin: 80
  });
  applyEditorKeyMap();

  editor.on("change", () => {
    if (isLoading || !activeProject) return;
    if (suppressSourceChange) {
      suppressSourceChange = false;
      return;
    }
    handleSourceChanged({ renderVisual: !visualEditor.hidden });
    updateRelativeLineNumbers();
  });
  editor.on("scroll", updateSourceMinimapViewport);
  editor.on("cursorActivity", updateRelativeLineNumbers);
  editor.on("viewportChange", updateRelativeLineNumbers);
  setupSourceMinimap();
  scheduleSourceMinimapUpdate();
}

function setupSettings() {
  const savedPreset = normalizeThemePreset(localStorage.getItem("latexStudioThemePreset"));
  const preset = THEME_PRESETS[savedPreset];
  const savedTheme = (preset && preset.theme) || localStorage.getItem("latexStudioTheme") || "light";
  const savedAccent = (preset && preset.accent) || normalizeHexColor(localStorage.getItem("latexStudioAccent")) || DEFAULT_ACCENT;
  const showSidebar = localStorage.getItem("latexStudioShowSidebar") !== "false";
  const pdfMinWidth = clampNumber(Number(localStorage.getItem("latexStudioPdfMinWidth")), 480, 760, DEFAULT_PDF_MIN_WIDTH);
  const fileWidth = clampNumber(Number(localStorage.getItem("latexStudioFileWidth")), MIN_FILE_WIDTH, MAX_FILE_WIDTH, DEFAULT_FILE_WIDTH);
  const autoSaveEnabled = localStorage.getItem("latexStudioAutoSave") !== "false";
  const terminalHeight = clampNumber(Number(localStorage.getItem("latexStudioTerminalHeight")), MIN_TERMINAL_HEIGHT, MAX_TERMINAL_HEIGHT, DEFAULT_TERMINAL_HEIGHT);
  const terminalCollapsed = localStorage.getItem("latexStudioTerminalCollapsed") === "true";
  const compileLogHeight = clampNumber(Number(localStorage.getItem("latexStudioCompileLogHeight")), MIN_COMPILE_LOG_HEIGHT, MAX_COMPILE_LOG_HEIGHT, DEFAULT_COMPILE_LOG_HEIGHT);
  const compileLogCollapsed = localStorage.getItem("latexStudioCompileLogCollapsed") === "true";
  pdfZoom = clampNumber(Number(localStorage.getItem("latexStudioPdfZoom")), MIN_PDF_ZOOM, MAX_PDF_ZOOM, DEFAULT_PDF_ZOOM);
  pdfRenderMode = normalizePdfRenderMode(
    localStorage.getItem("latexStudioPdfRenderMode")
      || (localStorage.getItem("latexStudioPdfInvertPages") === "true" ? "invert" : "adaptive")
  );
  projectViewMode = localStorage.getItem("latexStudioProjectView") === "rows" ? "rows" : "grid";
  vimModeEnabled = localStorage.getItem("latexStudioVimMode") === "true";
  relativeLineNumbersEnabled = localStorage.getItem("latexStudioRelativeLineNumbers") === "true";
  aiProfile = readAiProfile();

  applyTheme(savedTheme, savedAccent, { presetId: savedPreset });
  syncSurfaceThemesToAppTheme(savedTheme, { persist: false });
  applyLayoutSettings({ showSidebar, pdfMinWidth, fileWidth });
  applyTerminalLayout({ height: terminalHeight, collapsed: terminalCollapsed });
  applyCompileLogLayout({ height: compileLogHeight, collapsed: compileLogCollapsed });
  autoSaveToggle.checked = autoSaveEnabled;
  settingsVimModeToggle.checked = vimModeEnabled;
  settingsRelativeLineNumbersToggle.checked = relativeLineNumbersEnabled;
  updatePdfRenderModeButtons();
  populateProfileForm();
  updateSaveButtonVisibility();
  updateProjectViewButtons();
  updatePdfZoomLabel();
  updateProjectHeroGreeting();

  settingsThemePreset.addEventListener("change", () => {
    applyThemePreset(settingsThemePreset.value);
  });

  settingsThemeToggle.addEventListener("change", () => {
    const nextTheme = settingsThemeToggle.checked ? "dark" : "light";
    const accent = normalizeHexColor(settingsAccentPicker.value) || DEFAULT_ACCENT;
    applyTheme(nextTheme, accent, { presetId: "custom" });
    syncSurfaceThemesToAppTheme(nextTheme);
    localStorage.setItem("latexStudioThemePreset", "custom");
    localStorage.setItem("latexStudioTheme", nextTheme);
    localStorage.setItem("latexStudioAccent", accent);
  });

  settingsAccentPicker.addEventListener("input", () => {
    const accent = normalizeHexColor(settingsAccentPicker.value) || DEFAULT_ACCENT;
    const theme = document.body.dataset.theme || "light";
    applyTheme(theme, accent, { presetId: "custom" });
    localStorage.setItem("latexStudioThemePreset", "custom");
    localStorage.setItem("latexStudioTheme", theme);
    localStorage.setItem("latexStudioAccent", accent);
  });

  settingsFileSidebarToggle.addEventListener("change", () => {
    setFileSidebarVisible(settingsFileSidebarToggle.checked);
  });

  settingsPdfRenderModeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      pdfRenderMode = normalizePdfRenderMode(button.dataset.pdfRenderMode);
      localStorage.setItem("latexStudioPdfRenderMode", pdfRenderMode);
      updatePdfRenderModeButtons();
      renderPdf({ showLoading: false });
    });
  });

  settingsVimModeToggle.addEventListener("change", () => {
    vimModeEnabled = settingsVimModeToggle.checked;
    localStorage.setItem("latexStudioVimMode", String(vimModeEnabled));
    applyEditorKeyMap();
  });

  settingsRelativeLineNumbersToggle.addEventListener("change", () => {
    relativeLineNumbersEnabled = settingsRelativeLineNumbersToggle.checked;
    localStorage.setItem("latexStudioRelativeLineNumbers", String(relativeLineNumbersEnabled));
    updateRelativeLineNumbers();
  });

  autoSaveToggle.addEventListener("change", () => {
    localStorage.setItem("latexStudioAutoSave", String(autoSaveToggle.checked));
    updateSaveButtonVisibility();

    if (autoSaveToggle.checked) scheduleAutoSave();
    else clearTimeout(autoSaveTimer);
  });

  settingsPdfGuardRange.addEventListener("input", () => {
    const width = clampNumber(Number(settingsPdfGuardRange.value), 480, 760, DEFAULT_PDF_MIN_WIDTH);
    applyLayoutSettings({ showSidebar: settingsFileSidebarToggle.checked, pdfMinWidth: width, fileWidth: getFileSidebarWidth() });
    localStorage.setItem("latexStudioPdfMinWidth", String(width));
  });
  settingsSearchInput.addEventListener("input", updateSettingsSearch);

  settingsNavButtons.forEach((button) => {
    button.addEventListener("click", () => {
      clearSettingsSearch();
      setSettingsPanel(button.dataset.settingsSection);
    });
  });
  reloadAgentsButton.addEventListener("click", loadAgentsFile);
  saveAgentsButton.addEventListener("click", saveAgentsFile);
  agentsEditor.addEventListener("input", () => {
    if (!activeProject) return;
    agentsStatus.textContent = "Unsaved AGENTS.md changes.";
    setStatusClass(agentsStatus);
  });
  [profileNameInput, profileEmailInput, profileWorkInput, profileBioInput, profileAiContextInput].forEach((input) => {
    input.addEventListener("input", saveProfileFromForm);
  });
}

function applyThemePreset(presetId) {
  const normalizedPreset = normalizeThemePreset(presetId);
  const preset = THEME_PRESETS[normalizedPreset];

  if (!preset) {
    const theme = document.body.dataset.theme || "light";
    const accent = normalizeHexColor(settingsAccentPicker.value) || DEFAULT_ACCENT;
    applyTheme(theme, accent, { presetId: "custom" });
    syncSurfaceThemesToAppTheme(theme);
    localStorage.setItem("latexStudioThemePreset", "custom");
    localStorage.setItem("latexStudioTheme", theme);
    localStorage.setItem("latexStudioAccent", accent);
    return;
  }

  applyTheme(preset.theme, preset.accent, { presetId: normalizedPreset });
  syncSurfaceThemesToAppTheme(preset.theme);
  localStorage.setItem("latexStudioThemePreset", normalizedPreset);
  localStorage.setItem("latexStudioTheme", preset.theme);
  localStorage.setItem("latexStudioAccent", preset.accent);
}

function applyTheme(theme, accent, { presetId = "custom" } = {}) {
  const normalizedPreset = normalizeThemePreset(presetId);
  const preset = THEME_PRESETS[normalizedPreset];
  const normalizedTheme = (preset && preset.theme) || (theme === "dark" ? "dark" : "light");
  const normalizedAccent = normalizeHexColor((preset && preset.accent) || accent) || DEFAULT_ACCENT;
  const rgb = hexToRgb(normalizedAccent);

  document.body.dataset.theme = normalizedTheme;
  document.body.dataset.themePreset = normalizedPreset;
  document.body.dataset.contrast = HIGH_CONTRAST_PRESETS.has(normalizedPreset) ? "high" : "normal";
  document.documentElement.style.setProperty("--accent", normalizedAccent);
  document.documentElement.style.setProperty("--accent-rgb", `${rgb.r}, ${rgb.g}, ${rgb.b}`);
  document.body.style.setProperty("--accent", normalizedAccent);
  document.body.style.setProperty("--accent-rgb", `${rgb.r}, ${rgb.g}, ${rgb.b}`);
  applyThemeVariables(preset);

  settingsThemePreset.value = normalizedPreset;
  settingsThemeToggle.checked = normalizedTheme === "dark";
  settingsAccentPicker.value = normalizedAccent;
  sourcePane.dataset.terminalTheme = resolvedTerminalTheme();
  compileLogPanel.dataset.logTheme = resolvedCompileLogTheme();
  refreshTerminalThemes();
}

function syncSurfaceThemesToAppTheme(theme, { persist = true } = {}) {
  const mode = theme === "dark" ? "dark" : "light";
  pdfDarkMode = mode === "dark";

  sourcePane.dataset.terminalTheme = mode;
  compileLogPanel.dataset.logTheme = mode;
  applyPdfRenderMode();
  refreshTerminalThemes();

  if (persist) {
    localStorage.setItem("latexStudioPdfDarkMode", String(pdfDarkMode));
  }
}

function applyThemeVariables(preset) {
  const presetColors = (preset && preset.colors) || {};
  const presetDark = Boolean(preset && preset.theme === "dark");
  const presetAccentRgb = hexToRgb((preset && preset.accent) || DEFAULT_ACCENT);
  const derivedColors = preset
    ? {
        "--cm-bg": presetDark ? presetColors["--bg"] : "#ffffff",
        "--cm-gutter": presetDark ? presetColors["--glass-strong"] || presetColors["--panel"] : "#f3f4f6",
        "--cm-text": presetColors["--text"],
        "--cm-keyword": presetColors["--red"] || presetColors["--blue"],
        "--cm-variable": presetColors["--blue"],
        "--cm-atom": presetColors["--green"],
        "--cm-comment": presetColors["--muted"],
        "--cm-string": presetColors["--green"],
        "--cm-number": presetColors["--red"],
        "--pdf-bg": presetDark ? presetColors["--bg"] : presetColors["--border"],
        "--pdf-paper": presetColors["--page"] || "#ffffff",
        "--pdf-page-filter": presetDark ? "invert(0.86) hue-rotate(180deg) contrast(0.9) brightness(1.12)" : "none",
        "--pdf-dark-bg": presetColors["--bg"] || "#1f2937",
        "--pdf-dark-paper": presetColors["--cm-bg"] || presetColors["--panel"] || presetColors["--bg"] || "#111827",
        "--pdf-dark-filter": "invert(0.86) hue-rotate(180deg) contrast(0.88) brightness(1.16)",
        "--terminal-bg": presetDark
          ? (presetColors["--cm-bg"] || presetColors["--bg"] || "#111827")
          : (presetColors["--cm-bg"] || presetColors["--page"] || "#ffffff"),
        "--terminal-header-bg": presetDark
          ? (presetColors["--panel"] || presetColors["--bg"] || "#111827")
          : (presetColors["--panel"] || presetColors["--page"] || "#ffffff"),
        "--terminal-text": presetColors["--cm-text"] || presetColors["--text"],
        "--terminal-muted": presetColors["--muted"],
        "--terminal-selection": `rgba(${presetAccentRgb.r}, ${presetAccentRgb.g}, ${presetAccentRgb.b}, 0.2)`
      }
    : {};

  THEME_VARIABLES.forEach((name) => {
    const value = presetColors[name] || derivedColors[name];
    if (value) {
      document.documentElement.style.setProperty(name, value);
      document.body.style.setProperty(name, value);
    } else {
      document.documentElement.style.removeProperty(name);
      document.body.style.removeProperty(name);
    }
  });

  if (preset && preset.background) document.body.style.background = preset.background;
  else document.body.style.removeProperty("background");
}

function readAiProfile() {
  try {
    const parsed = JSON.parse(localStorage.getItem(PROFILE_STORAGE_KEY) || "{}");
    return normalizeAiProfile(parsed);
  } catch (error) {
    return {};
  }
}

function normalizeAiProfile(profile) {
  return {
    name: String(profile.name || "").trim(),
    email: String(profile.email || "").trim(),
    work: String(profile.work || "").trim(),
    bio: String(profile.bio || "").trim(),
    aiContext: String(profile.aiContext || "").trim()
  };
}

function populateProfileForm() {
  profileNameInput.value = aiProfile.name || "";
  profileEmailInput.value = aiProfile.email || "";
  profileWorkInput.value = aiProfile.work || "";
  profileBioInput.value = aiProfile.bio || "";
  profileAiContextInput.value = aiProfile.aiContext || "";
}

function saveProfileFromForm() {
  aiProfile = normalizeAiProfile({
    name: profileNameInput.value,
    email: profileEmailInput.value,
    work: profileWorkInput.value,
    bio: profileBioInput.value,
    aiContext: profileAiContextInput.value
  });
  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(aiProfile));
  profileStatus.textContent = "Profile saved locally and included with AI requests.";
  setStatusClass(profileStatus, "ok");
  updateProjectHeroGreeting();
}

function updateProjectHeroGreeting() {
  if (!projectHeroTitle) return;
  const firstName = String(aiProfile.name || "").trim().split(/\s+/)[0] || "";
  projectHeroTitle.textContent = firstName ? `Hello, ${firstName}!` : "Hello!";
}

function profilePromptContext() {
  const rows = [
    ["Name", aiProfile.name],
    ["Email", aiProfile.email],
    ["Type of work", aiProfile.work],
    ["Bio", aiProfile.bio],
    ["AI context", aiProfile.aiContext]
  ].filter(([, value]) => String(value || "").trim());

  if (!rows.length) return "";
  return [
    "User profile context:",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Use this profile only as background context for tone, domain, and preferences."
  ].join("\n");
}

function withProfileContext(prompt) {
  const context = profilePromptContext();
  return context ? `${context}\n\nUser request:\n${prompt}` : prompt;
}

function applyLayoutSettings({ showSidebar, pdfMinWidth, fileWidth = getFileSidebarWidth() }) {
  workspace.classList.toggle("files-hidden", !showSidebar);
  fileRail.hidden = showSidebar;
  settingsFileSidebarToggle.checked = showSidebar;
  settingsPdfGuardRange.value = String(pdfMinWidth);
  settingsPdfGuardValue.textContent = `${pdfMinWidth}px`;
  workspace.style.setProperty("--pdf-min-width", `${pdfMinWidth}px`);
  workspace.style.setProperty("--file-width", `${fileWidth}px`);
}

function setFileSidebarVisible(show) {
  applyLayoutSettings({ showSidebar: show, pdfMinWidth: getPdfMinimumWidth(), fileWidth: getFileSidebarWidth() });
  localStorage.setItem("latexStudioShowSidebar", String(show));
  renderPdf({ showLoading: false });
}

function getFileSidebarWidth() {
  const current = Number.parseFloat(getComputedStyle(workspace).getPropertyValue("--file-width"));
  return clampNumber(current, MIN_FILE_WIDTH, MAX_FILE_WIDTH, DEFAULT_FILE_WIDTH);
}

function getPdfMinimumWidth() {
  return clampNumber(Number(settingsPdfGuardRange.value), 480, 760, DEFAULT_PDF_MIN_WIDTH);
}

function getTerminalHeight() {
  const current = Number.parseFloat(getComputedStyle(sourcePane).getPropertyValue("--terminal-height"));
  return clampNumber(current, MIN_TERMINAL_HEIGHT, MAX_TERMINAL_HEIGHT, DEFAULT_TERMINAL_HEIGHT);
}

function setTerminalHeight(height, { persist = true } = {}) {
  const clamped = clampNumber(height, MIN_TERMINAL_HEIGHT, MAX_TERMINAL_HEIGHT, DEFAULT_TERMINAL_HEIGHT);
  sourcePane.style.setProperty("--terminal-height", `${clamped}px`);
  if (persist) localStorage.setItem("latexStudioTerminalHeight", String(Math.round(clamped)));
  scheduleTerminalFit();
}

function applyTerminalLayout({ height = getTerminalHeight(), collapsed = sourcePane.classList.contains("terminal-collapsed") } = {}) {
  setTerminalHeight(height, { persist: false });
  sourcePane.classList.toggle("terminal-collapsed", collapsed);
  if (!collapsed) scheduleTerminalFit();
}

function setTerminalCollapsed(collapsed) {
  sourcePane.classList.toggle("terminal-collapsed", collapsed);
  localStorage.setItem("latexStudioTerminalCollapsed", String(collapsed));
  if (!collapsed) scheduleTerminalFit();
}

function getCompileLogHeight() {
  const current = Number.parseFloat(getComputedStyle(previewPane).getPropertyValue("--compile-log-height"));
  return clampNumber(current, MIN_COMPILE_LOG_HEIGHT, MAX_COMPILE_LOG_HEIGHT, DEFAULT_COMPILE_LOG_HEIGHT);
}

function setCompileLogHeight(height, { persist = true } = {}) {
  const clamped = clampNumber(height, MIN_COMPILE_LOG_HEIGHT, MAX_COMPILE_LOG_HEIGHT, DEFAULT_COMPILE_LOG_HEIGHT);
  previewPane.style.setProperty("--compile-log-height", `${clamped}px`);
  if (persist) localStorage.setItem("latexStudioCompileLogHeight", String(Math.round(clamped)));
}

function applyCompileLogLayout({ height = getCompileLogHeight(), collapsed = compileLogPanel.classList.contains("log-collapsed") } = {}) {
  setCompileLogHeight(height, { persist: false });
  setCompileLogCollapsed(collapsed, { persist: false });
}

function setCompileLogCollapsed(collapsed, { persist = true } = {}) {
  compileLogPanel.classList.toggle("log-collapsed", collapsed);
  previewPane.classList.toggle("log-collapsed", collapsed);
  if (persist) localStorage.setItem("latexStudioCompileLogCollapsed", String(collapsed));
}

function normalizeThemePreset(value) {
  return Object.prototype.hasOwnProperty.call(THEME_PRESETS, value) ? value : "custom";
}

function normalizePdfRenderMode(value) {
  return ["adaptive", "original", "invert"].includes(value) ? value : "adaptive";
}

function updatePdfRenderModeButtons() {
  settingsPdfRenderModeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.pdfRenderMode === pdfRenderMode);
  });
}

function applyEditorKeyMap() {
  if (!editor) return;
  editor.setOption("keyMap", vimModeEnabled ? "vim" : "default");
}

function updateRelativeLineNumbers() {
  if (!editor) return;
  if (!relativeLineNumbersEnabled) {
    editor.operation(() => {
      for (let line = 0; line < editor.lineCount(); line += 1) {
        editor.setGutterMarker(line, "relative-line-gutter", null);
      }
    });
    return;
  }

  const info = editor.getScrollInfo();
  const from = editor.lineAtHeight(info.top, "local");
  const to = editor.lineAtHeight(info.top + info.clientHeight, "local");
  const cursorLine = editor.getCursor().line;

  editor.operation(() => {
    for (let line = from; line <= to; line += 1) {
      const marker = document.createElement("span");
      marker.className = "relative-line-number";
      const distance = Math.abs(line - cursorLine);
      marker.textContent = distance === 0 ? "" : String(distance);
      editor.setGutterMarker(line, "relative-line-gutter", marker);
    }
  });
}

function resolvedTerminalTheme() {
  return document.body.dataset.theme === "dark" ? "dark" : "light";
}

function resolvedCompileLogTheme() {
  return document.body.dataset.theme === "dark" ? "dark" : "light";
}

function updateActiveDocumentTitle() {
  const metaTitle = activeProject ? extractVisualMeta(getSourceText()).title : "";
  const fallback = (activeProject && activeProject.name)
    || (activeFile && activeFile.name)
    || "No document loaded";
  const title = metaTitle || fallback;

  activeDocumentTitle.textContent = title;
  activeDocumentTitle.title = title;
}

function updateEditorFileTitle() {
  editorTitle.textContent = (activeFile && activeFile.name) || (activeProject && activeProject.texName) || "main.tex";
}

function currentTextTab() {
  return openTextTabs.find((tab) => tab.relativePath === activeTextTabPath) || null;
}

function syncActiveTextTabFromEditor() {
  const tab = currentTextTab();
  if (!tab || !editor) return;
  tab.text = getSourceText();
  tab.savedText = savedText;
  tab.dirty = tab.text !== tab.savedText;
}

function resetTextTabs() {
  openTextTabs = [];
  activeTextTabPath = "";
  renderTextTabs();
}

function setActiveLoadedTextFile(file, text) {
  const relativePath = file.relativePath;
  let tab = openTextTabs.find((item) => item.relativePath === relativePath);
  if (!tab) {
    tab = {
      relativePath,
      name: file.name,
      file,
      text,
      savedText: text,
      dirty: false
    };
    openTextTabs.push(tab);
  } else {
    tab.name = file.name;
    tab.file = file;
    tab.text = text;
    tab.savedText = text;
    tab.dirty = false;
  }

  activeTextTabPath = relativePath;
  activeFile = file;
  savedText = text;
  renderTextTabs();
  renderFileTree();
}

function updateActiveTextTabAfterSave(file, text) {
  const tab = currentTextTab();
  if (!tab) return;
  tab.file = file || tab.file;
  tab.name = (file && file.name) || tab.name;
  tab.relativePath = (file && file.relativePath) || tab.relativePath;
  activeTextTabPath = tab.relativePath;
  tab.text = text;
  tab.savedText = text;
  tab.dirty = false;
  renderTextTabs();
  renderFileTree();
}

function updateActiveTextTabDirtyState() {
  const tab = currentTextTab();
  if (!tab) return;
  tab.text = getSourceText();
  tab.dirty = tab.text !== tab.savedText;
  renderTextTabs();
}

function switchTextTab(relativePath) {
  if (!relativePath || relativePath === activeTextTabPath) return;
  const tab = openTextTabs.find((item) => item.relativePath === relativePath);
  if (!tab) return;

  syncActiveTextTabFromEditor();
  activeTextTabPath = tab.relativePath;
  activeFile = tab.file;
  savedText = tab.savedText;

  isLoading = true;
  try {
    editor.setValue(tab.text);
    updateEditorFileTitle();
    updateActiveDocumentTitle();
    updateStats();
    scheduleSourceMinimapUpdate();
    renderVisualEditor();
    renderFileTree();
    setSaveState(tab.dirty ? "Unsaved changes" : "Saved", tab.dirty ? undefined : "ok");
    renderTextTabs();
  } finally {
    isLoading = false;
    requestAnimationFrame(() => editor.refresh());
  }
}

function closeTextTab(relativePath) {
  const tab = openTextTabs.find((item) => item.relativePath === relativePath);
  if (!tab) return;
  if (tab.relativePath === activeTextTabPath) syncActiveTextTabFromEditor();
  if (tab.dirty) {
    const confirmed = window.confirm(`Close "${tab.name}" and discard unsaved tab changes?`);
    if (!confirmed) return;
  }

  const index = openTextTabs.findIndex((item) => item.relativePath === relativePath);
  openTextTabs.splice(index, 1);

  if (relativePath === activeTextTabPath) {
    const nextTab = openTextTabs[Math.max(0, index - 1)] || openTextTabs[0];
    if (nextTab) {
      activeTextTabPath = "";
      switchTextTab(nextTab.relativePath);
      return;
    }

    activeTextTabPath = "";
    activeFile = null;
    savedText = "";
    isLoading = true;
    editor.setValue("");
    isLoading = false;
    updateEditorFileTitle();
    updateActiveDocumentTitle();
    updateStats();
    scheduleSourceMinimapUpdate();
    renderVisualEditor();
  }

  renderTextTabs();
  renderFileTree();
}

function removeTextTabsUnderPath(relativePath) {
  const removedActive = openTextTabs.some((tab) => (
    tab.relativePath === activeTextTabPath &&
    (tab.relativePath === relativePath || tab.relativePath.startsWith(`${relativePath}/`))
  ));
  openTextTabs = openTextTabs.filter((tab) => tab.relativePath !== relativePath && !tab.relativePath.startsWith(`${relativePath}/`));

  if (removedActive) {
    const nextTab = openTextTabs[0];
    if (nextTab) {
      activeTextTabPath = "";
      switchTextTab(nextTab.relativePath);
    } else {
      activeTextTabPath = "";
      activeFile = null;
      savedText = "";
      isLoading = true;
      editor.setValue("");
      isLoading = false;
      updateEditorFileTitle();
      updateActiveDocumentTitle();
      updateStats();
      scheduleSourceMinimapUpdate();
    }
  }

  renderTextTabs();
}

function renderTextTabs() {
  if (!textTabs) return;
  textTabs.innerHTML = "";

  openTextTabs.forEach((tab) => {
    const button = document.createElement("button");
    button.className = "text-tab";
    button.classList.toggle("active", tab.relativePath === activeTextTabPath);
    button.type = "button";
    button.draggable = true;
    button.title = tab.relativePath;
    button.dataset.relativePath = tab.relativePath;
    button.innerHTML = `
      <span class="text-tab-name">${escapeHtml(tab.name)}</span>
      <span class="text-tab-dirty" aria-hidden="true">${tab.dirty ? "•" : ""}</span>
      <span class="text-tab-close" role="button" aria-label="Close ${escapeHtml(tab.name)}">${CLOSE_ICON_SVG}</span>
    `;
    button.addEventListener("click", () => switchTextTab(tab.relativePath));
    button.addEventListener("dragstart", (event) => {
      syncActiveTextTabFromEditor();
      draggedTextTabPath = tab.relativePath;
      event.dataTransfer.setData("text/plain", tab.relativePath);
      event.dataTransfer.effectAllowed = "move";
      button.classList.add("dragging");
    });
    button.addEventListener("dragover", (event) => {
      const sourcePath = draggedTextTabPath || event.dataTransfer.getData("text/plain");
      if (!sourcePath || sourcePath === tab.relativePath) return;
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
      const rect = button.getBoundingClientRect();
      const placeAfter = event.clientX > rect.left + rect.width / 2;
      clearTextTabDropIndicators();
      button.classList.toggle("drop-before", !placeAfter);
      button.classList.toggle("drop-after", placeAfter);
    });
    button.addEventListener("dragleave", () => {
      button.classList.remove("drop-before", "drop-after");
    });
    button.addEventListener("drop", (event) => {
      const sourcePath = draggedTextTabPath || event.dataTransfer.getData("text/plain");
      if (!sourcePath || sourcePath === tab.relativePath) return;
      event.preventDefault();
      const rect = button.getBoundingClientRect();
      reorderTextTabs(sourcePath, tab.relativePath, event.clientX > rect.left + rect.width / 2);
    });
    button.addEventListener("dragend", () => {
      draggedTextTabPath = "";
      clearTextTabDropIndicators();
    });
    button.querySelector(".text-tab-close").addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      closeTextTab(tab.relativePath);
    });
    textTabs.appendChild(button);
  });
}

function clearTextTabDropIndicators() {
  if (!textTabs) return;
  textTabs.querySelectorAll(".text-tab").forEach((tab) => {
    tab.classList.remove("dragging", "drop-before", "drop-after");
  });
}

function reorderTextTabs(sourcePath, targetPath, placeAfter = false) {
  const sourceIndex = openTextTabs.findIndex((tab) => tab.relativePath === sourcePath);
  if (sourceIndex === -1 || sourcePath === targetPath) return;

  const [tab] = openTextTabs.splice(sourceIndex, 1);
  const targetIndex = openTextTabs.findIndex((item) => item.relativePath === targetPath);
  if (targetIndex === -1) openTextTabs.push(tab);
  else openTextTabs.splice(placeAfter ? targetIndex + 1 : targetIndex, 0, tab);

  draggedTextTabPath = "";
  renderTextTabs();
}

function clampNumber(value, min, max, fallback) {
  if (!Number.isFinite(value)) return fallback;
  return Math.min(max, Math.max(min, value));
}

function normalizeHexColor(value) {
  if (!value) return "";
  const match = String(value).trim().match(/^#?([0-9a-fA-F]{6})$/);
  return match ? `#${match[1].toLowerCase()}` : "";
}

function hexToRgb(value) {
  const normalized = normalizeHexColor(value) || DEFAULT_ACCENT;
  const number = Number.parseInt(normalized.slice(1), 16);
  return {
    r: (number >> 16) & 255,
    g: (number >> 8) & 255,
    b: number & 255
  };
}

function wireEvents() {
  settingsButtons.forEach((button) => button.addEventListener("click", openSettings));
  closeSettingsButton.addEventListener("click", closeSettings);
  settingsBackdrop.addEventListener("click", closeOverlayModals);
  closeNewProjectButton.addEventListener("click", closeNewProjectPanel);
  templatesButton.addEventListener("click", openTemplatesPanel);
  closeTemplatesButton.addEventListener("click", closeTemplatesPanel);
  importTemplateButton.addEventListener("click", importCustomTemplate);
  commandPaletteInput.addEventListener("input", renderCommandPalette);
  commandPaletteInput.addEventListener("keydown", handleCommandPaletteKeydown);
  fileRailButton.addEventListener("click", () => setFileSidebarVisible(true));
  addProjectButton.addEventListener("click", () => toggleNewProjectPanel());
  projectImportButtons.forEach((button) => {
    button.addEventListener("click", () => addProject(button.dataset.projectKind));
  });
  wireProjectDrop(projectDropZone);
  refreshProjectsButton.addEventListener("click", loadProjects);
  projectSearch.addEventListener("input", renderProjectGrid);
  projectGridButton.addEventListener("click", () => setProjectView("grid"));
  projectRowsButton.addEventListener("click", () => setProjectView("rows"));
  backToProjectsButton.addEventListener("click", showProjects);
  topRefreshFilesButton.addEventListener("click", refreshActiveProject);
  railRefreshFilesButton.addEventListener("click", refreshActiveProject);
  wireFileDrop(filePane);
  saveButton.addEventListener("click", saveManuscript);
  compileButton.addEventListener("click", () => compileManuscript({ manual: true }));
  openPdfButton.addEventListener("click", openPdf);
  downloadPdfButton.addEventListener("click", downloadPdf);
  pdfZoomOutButton.addEventListener("click", () => changePdfZoom(-0.1));
  pdfZoomInButton.addEventListener("click", () => changePdfZoom(0.1));
  pdfViewer.addEventListener("wheel", handlePdfWheelZoom, { passive: false });
  pdfViewer.addEventListener("gesturestart", handlePdfGestureStart);
  pdfViewer.addEventListener("gesturechange", handlePdfGestureChange);
  pdfViewer.addEventListener("gestureend", handlePdfGestureEnd);
  terminalNewButton.addEventListener("click", () => createTerminalSession("shell"));
  terminalShellButton.addEventListener("click", () => createTerminalSession("shell"));
  terminalCodexButton.addEventListener("click", () => createTerminalSession("codex"));
  terminalClaudeButton.addEventListener("click", () => createTerminalSession("claude"));
  terminalCollapsedButton.addEventListener("click", () => setTerminalCollapsed(false));
  compileLogCollapsedButton.addEventListener("click", () => setCompileLogCollapsed(false));
  suggestionModeButton.addEventListener("click", () => {
    closeSettings();
    setSuggestionPanelOpen(true);
  });
  closeSuggestionButton.addEventListener("click", () => setSuggestionPanelOpen(false));
  runSuggestionButton.addEventListener("click", runSuggestionMode);
  previousSuggestionButton.addEventListener("click", () => moveSuggestion(-1));
  nextSuggestionButton.addEventListener("click", () => moveSuggestion(1));
  applySuggestionButton.addEventListener("click", applyCurrentSuggestionHunk);
  rejectSuggestionButton.addEventListener("click", rejectCurrentSuggestionHunk);
  applyAllSuggestionsButton.addEventListener("click", applyAllSuggestionHunks);
  sourceModeButton.addEventListener("click", () => setMode("source"));
  visualModeButton.addEventListener("click", () => setMode("visual"));
  fixCompileLogButton.addEventListener("click", fixCompileLogWithCodex);
  setupFileSplitter();
  setupSplitter();
  setupTerminalResize();
  setupCompileLogResize();
  updateLogState();

  autoCompileToggle.addEventListener("change", () => {
    if (autoCompileToggle.checked) scheduleAutoCompile("Auto compile enabled");
    else {
      clearTimeout(autoCompileTimer);
      setCompileState("Auto compile paused");
    }
  });

  editor.addKeyMap({
    Tab(cm) {
      if (cm.somethingSelected()) cm.indentSelection("add");
      else cm.replaceSelection("  ", "end");
    },
    "Cmd-S": () => saveManuscript(),
    "Ctrl-S": () => saveManuscript(),
    "Cmd-F": () => openFind(),
    "Ctrl-F": () => openFind(),
    "Cmd-G": () => findNextMatch(false),
    "Ctrl-G": () => findNextMatch(false),
    "Shift-Cmd-G": () => findNextMatch(true),
    "Shift-Ctrl-G": () => findNextMatch(true),
    "Cmd-Enter": () => compileManuscript({ manual: true }),
    "Ctrl-Enter": () => compileManuscript({ manual: true })
  });

  window.addEventListener("resize", () => {
    closeFileContextMenu();
    clearTimeout(pdfResizeTimer);
    pdfResizeTimer = setTimeout(() => renderPdf({ showLoading: false }), 180);
    scheduleTerminalFit();
  });
  window.addEventListener("click", () => {
    closeFileContextMenu();
    closeProjectContextMenu();
  });
  window.addEventListener("scroll", () => {
    closeFileContextMenu();
    closeProjectContextMenu();
  }, true);
  window.addEventListener("keydown", handleGlobalShortcut);

  if (window.localOverleaf) {
    window.localOverleaf.onCommand((command) => {
      if (command === "add-project") toggleNewProjectPanel(true);
      if (command === "command-palette") openCommandPalette();
      if (command === "projects") showProjects();
      if (command === "save") saveManuscript();
      if (command === "compile") compileManuscript({ manual: true });
      if (command === "open-pdf") openPdf();
      if (command === "reload") reloadFromDisk();
      if (command === "find") openFind();
      if (command === "find-next") findNextMatch(false);
      if (command === "find-previous") findNextMatch(true);
    });
  }
}

function handleGlobalShortcut(event) {
  if (event.defaultPrevented) return;

  if (event.key === "Escape") {
    if (!commandPalette.hidden) {
      event.preventDefault();
      closeCommandPalette();
      return;
    }

    if (!templatesPanel.hidden) {
      event.preventDefault();
      closeTemplatesPanel();
      return;
    }

    if (!newProjectPanel.hidden) {
      event.preventDefault();
      closeNewProjectPanel();
      return;
    }

    if (projectContextMenu) {
      event.preventDefault();
      closeProjectContextMenu();
      return;
    }

    if (fileContextMenu) {
      event.preventDefault();
      closeFileContextMenu();
      return;
    }

    if (!settingsDrawer.hidden) {
      event.preventDefault();
      closeSettings();
      return;
    }

    if (!suggestionPanel.hidden) {
      event.preventDefault();
      setSuggestionPanelOpen(false);
    }
    return;
  }

  const shortcut = event.metaKey || event.ctrlKey;
  if (!shortcut) return;

  const key = event.key.toLowerCase();
  if (key === "p" && !event.shiftKey) {
    event.preventDefault();
    openCommandPalette();
    return;
  }

  if (key === "f" && !event.shiftKey) {
    event.preventDefault();
    openFind();
    return;
  }

  if (key === "g" && !event.altKey) {
    event.preventDefault();
    findNextMatch(event.shiftKey);
    return;
  }

  if (key === ",") {
    event.preventDefault();
    openSettings();
    return;
  }

  if (key === "s" && event.shiftKey) {
    event.preventDefault();
    closeSettings();
    setSuggestionPanelOpen(true);
    return;
  }

  if (key === "s") {
    event.preventDefault();
    saveManuscript();
    return;
  }

  if (event.key === "Enter") {
    event.preventDefault();
    compileManuscript({ manual: true });
    return;
  }

  if (!event.shiftKey) return;

  if (key === "f") {
    event.preventDefault();
    setFileSidebarVisible(workspace.classList.contains("files-hidden"));
    return;
  }

  if (key === "t") {
    event.preventDefault();
    if (!suggestionPanel.hidden) setSuggestionPanelOpen(false);
    setTerminalCollapsed(!sourcePane.classList.contains("terminal-collapsed"));
    return;
  }

  if (key === "m") {
    event.preventDefault();
    setMode(visualEditor.hidden ? "visual" : "source");
  }
}

function openSettings() {
  closeCommandPalette();
  closeNewProjectPanel({ keepBackdrop: true });
  closeTemplatesPanel({ keepBackdrop: true });
  settingsBackdrop.hidden = false;
  settingsDrawer.hidden = false;
  const activeSection = settingsDrawer.dataset.activeSection || "appearance";
  setSettingsPanel(activeSection);
  updateSettingsSearch();
}

function closeSettings({ keepBackdrop = false } = {}) {
  settingsDrawer.hidden = true;
  if (!keepBackdrop) updateOverlayBackdrop();
}

function closeOverlayModals() {
  closeCommandPalette();
  closeSettings({ keepBackdrop: true });
  closeNewProjectPanel({ keepBackdrop: true });
  closeTemplatesPanel({ keepBackdrop: true });
  updateOverlayBackdrop();
}

function updateOverlayBackdrop() {
  settingsBackdrop.hidden = settingsDrawer.hidden && newProjectPanel.hidden && templatesPanel.hidden && commandPalette.hidden;
}

async function openTemplatesPanel() {
  closeCommandPalette();
  closeSettings({ keepBackdrop: true });
  closeNewProjectPanel({ keepBackdrop: true });
  settingsBackdrop.hidden = false;
  templatesPanel.hidden = false;
  templatesButton.classList.add("active");
  await loadTemplates();
}

function closeTemplatesPanel({ keepBackdrop = false } = {}) {
  templatesPanel.hidden = true;
  templatesButton.classList.remove("active");
  if (!keepBackdrop) updateOverlayBackdrop();
}

async function loadTemplates() {
  onlineTemplateGrid.innerHTML = '<div class="template-loading">Loading templates...</div>';
  customTemplateGrid.innerHTML = "";
  customTemplateEmpty.hidden = true;

  try {
    templateLibrary = await window.localOverleaf.listTemplates();
    renderTemplates();
  } catch (error) {
    onlineTemplateGrid.innerHTML = `<div class="template-loading project-error">${escapeHtml(formatError(error))}</div>`;
  }
}

function renderTemplates() {
  renderTemplateGrid(onlineTemplateGrid, templateLibrary.builtIn || [], { custom: false });
  renderTemplateGrid(customTemplateGrid, templateLibrary.custom || [], { custom: true });
  customTemplateEmpty.hidden = Boolean((templateLibrary.custom || []).length);
}

function renderTemplateGrid(container, templates, { custom }) {
  container.innerHTML = "";
  templates.forEach((template) => {
    const card = document.createElement("article");
    card.className = "template-card";
    const previewKind = templatePreviewKind(template, custom);
    card.innerHTML = `
      <div class="template-preview template-preview-${escapeHtml(previewKind)}" aria-hidden="true">
        ${templatePreviewMarkup(previewKind)}
      </div>
      <div>
        <h4>${escapeHtml(template.name)}</h4>
        <p>${escapeHtml(template.description || "")}</p>
        <small>${escapeHtml(template.sourceName || (custom ? "Custom template" : "Online template"))}</small>
      </div>
      <div class="template-card-actions">
        <button class="template-use-button" type="button">Use</button>
        ${template.sourceUrl ? `<button class="template-source-button" type="button" title="Open template source">${EXTERNAL_LINK_ICON_SVG}<span>Source</span></button>` : ""}
        ${custom ? '<button class="template-remove-button" type="button">Remove</button>' : ""}
      </div>
    `;

    card.querySelector(".template-use-button").addEventListener("click", () => createProjectFromTemplate(template.id));
    const sourceButton = card.querySelector(".template-source-button");
    if (sourceButton) {
      sourceButton.addEventListener("click", () => window.localOverleaf.openExternalLink(template.sourceUrl));
    }
    const removeButton = card.querySelector(".template-remove-button");
    if (removeButton) {
      removeButton.addEventListener("click", () => removeCustomTemplate(template));
    }
    container.appendChild(card);
  });
}

function templatePreviewKind(template, custom) {
  const text = `${template.id || ""} ${template.name || ""} ${template.description || ""}`.toLowerCase();
  if (text.includes("beamer") || text.includes("presentation") || text.includes("poster")) return "slides";
  if (text.includes("cv") || text.includes("resume")) return "resume";
  if (text.includes("homework") || text.includes("cs 170") || text.includes("problem")) return "homework";
  if (text.includes("lab")) return "lab";
  if (text.includes("thesis") || text.includes("report")) return "report";
  if (custom) return "custom";
  return "paper";
}

function templatePreviewMarkup(kind) {
  if (kind === "slides") {
    return `
      <span class="template-slide-title"></span>
      <span class="template-slide-row wide"></span>
      <span class="template-slide-row"></span>
      <span class="template-slide-block"></span>
    `;
  }

  if (kind === "resume") {
    return `
      <span class="template-resume-name"></span>
      <span class="template-resume-contact"></span>
      <span class="template-section-line"></span>
      <span class="template-line wide"></span>
      <span class="template-line"></span>
      <span class="template-section-line"></span>
      <span class="template-line wide"></span>
    `;
  }

  const rows = kind === "homework"
    ? ["template-heading", "template-problem", "template-line wide", "template-line", "template-equation", "template-problem", "template-line wide"]
    : kind === "lab"
      ? ["template-heading", "template-line wide", "template-line", "template-table", "template-line wide", "template-line"]
      : kind === "report"
        ? ["template-heading", "template-toc", "template-line wide", "template-line", "template-section-line", "template-line wide"]
        : ["template-heading", "template-abstract", "template-line wide", "template-line", "template-section-line", "template-line wide", "template-line"];

  return rows.map((row) => `<span class="${row}"></span>`).join("");
}

async function importCustomTemplate() {
  setProjectBusy(true);
  try {
    templateLibrary = await window.localOverleaf.importTemplate();
    renderTemplates();
  } catch (error) {
    customTemplateGrid.innerHTML = `<div class="template-loading project-error">${escapeHtml(formatError(error))}</div>`;
    customTemplateEmpty.hidden = true;
  } finally {
    setProjectBusy(false);
  }
}

async function removeCustomTemplate(template) {
  const confirmed = window.confirm(`Remove "${template.name}" from your templates?\n\nThis will not delete any projects created from it.`);
  if (!confirmed) return;

  setProjectBusy(true);
  try {
    templateLibrary = await window.localOverleaf.removeTemplate(template.id);
    renderTemplates();
  } catch (error) {
    customTemplateGrid.innerHTML = `<div class="template-loading project-error">${escapeHtml(formatError(error))}</div>`;
    customTemplateEmpty.hidden = true;
  } finally {
    setProjectBusy(false);
  }
}

async function createProjectFromTemplate(templateId) {
  setProjectBusy(true);
  try {
    const result = await window.localOverleaf.createProjectFromTemplate(templateId);
    projects = result.projects || projects;
    renderProjectGrid();
    closeTemplatesPanel();
    if (result.project) await openProject(result.project.id);
  } catch (error) {
    onlineTemplateGrid.innerHTML = `<div class="template-loading project-error">${escapeHtml(formatError(error))}</div>`;
  } finally {
    setProjectBusy(false);
  }
}

function openCommandPalette(initialValue = "") {
  closeSettings({ keepBackdrop: true });
  closeNewProjectPanel({ keepBackdrop: true });
  closeTemplatesPanel({ keepBackdrop: true });
  settingsBackdrop.hidden = false;
  commandPalette.hidden = false;
  commandPaletteInput.value = initialValue;
  commandPaletteActiveIndex = 0;
  renderCommandPalette();
  requestAnimationFrame(() => {
    commandPaletteInput.focus();
    commandPaletteInput.select();
  });
}

function closeCommandPalette({ keepBackdrop = false } = {}) {
  commandPalette.hidden = true;
  commandPaletteItems = [];
  if (!keepBackdrop) updateOverlayBackdrop();
}

function renderCommandPalette() {
  const query = commandPaletteInput.value.trim();
  commandPaletteItems = buildCommandPaletteItems(query).slice(0, 10);
  commandPaletteActiveIndex = clampNumber(commandPaletteActiveIndex, 0, Math.max(commandPaletteItems.length - 1, 0), 0);
  commandPaletteList.innerHTML = "";

  commandPaletteItems.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "command-palette-item";
    button.setAttribute("role", "option");
    button.setAttribute("aria-selected", index === commandPaletteActiveIndex ? "true" : "false");
    button.innerHTML = `
      <span class="command-item-main">${escapeHtml(item.label)}</span>
      <span class="command-item-sub">${escapeHtml(item.detail || "")}</span>
      <kbd>${escapeHtml(item.hint || "")}</kbd>
    `;
    button.addEventListener("mouseenter", () => {
      commandPaletteActiveIndex = index;
      updateCommandPaletteSelection();
    });
    button.addEventListener("click", () => runCommandPaletteItem(item));
    commandPaletteList.appendChild(button);
  });

  if (!commandPaletteItems.length) {
    commandPaletteList.innerHTML = '<p class="command-empty">No commands found.</p>';
  }
}

function buildCommandPaletteItems(rawQuery) {
  const query = rawQuery.toLowerCase();
  const isOpenMode = query.startsWith("/open");
  const search = isOpenMode ? query.replace(/^\/open\s*/, "") : query.replace(/^\//, "");
  const commands = [
    { id: "open", label: "/open", detail: "Open a project", hint: "projects", action: () => openCommandPalette("/open ") },
    { id: "new", label: "/new", detail: "Create a new project", hint: "project", action: () => { closeCommandPalette(); toggleNewProjectPanel(true); } },
    { id: "templates", label: "/templates", detail: "Browse and add LaTeX templates", hint: "library", action: () => { closeCommandPalette({ keepBackdrop: true }); openTemplatesPanel(); } },
    { id: "settings", label: "/settings", detail: "Open settings", hint: "Cmd+,", action: () => { closeCommandPalette({ keepBackdrop: true }); openSettings(); } },
    { id: "compile", label: "/compile", detail: "Compile the active PDF", hint: "Cmd+Enter", action: () => { closeCommandPalette(); compileManuscript({ manual: true }); } },
    { id: "save", label: "/save", detail: "Save the active TeX file", hint: "Cmd+S", action: () => { closeCommandPalette(); saveManuscript(); } },
    { id: "visual", label: "/visual", detail: "Switch to visual mode", hint: "view", action: () => { closeCommandPalette(); setMode("visual"); } },
    { id: "code", label: "/code", detail: "Switch to code mode", hint: "view", action: () => { closeCommandPalette(); setMode("source"); } },
    { id: "terminal", label: "/terminal", detail: "Toggle terminal", hint: "panel", action: () => { closeCommandPalette(); setTerminalCollapsed(!sourcePane.classList.contains("terminal-collapsed")); } },
    { id: "files", label: "/files", detail: "Toggle file sidebar", hint: "sidebar", action: () => { closeCommandPalette(); setFileSidebarVisible(workspace.classList.contains("files-hidden")); } }
  ];

  if (isOpenMode || rawQuery === "" || !rawQuery.startsWith("/")) {
    const projectItems = projects
      .filter((project) => {
        const haystack = `${project.name} ${project.texName} ${project.folderName}`.toLowerCase();
        return !search || haystack.includes(search);
      })
      .map((project) => ({
        id: `project:${project.id}`,
        label: project.name,
        detail: `${project.texName} · ${project.folderName}`,
        hint: "open",
        action: () => {
          closeCommandPalette();
          openProject(project.id);
        }
      }));

    if (isOpenMode) return projectItems;
    return [
      ...commands.filter((item) => !query || `${item.label} ${item.detail}`.toLowerCase().includes(query)),
      ...projectItems
    ];
  }

  return commands.filter((item) => `${item.label} ${item.detail}`.toLowerCase().includes(query));
}

function updateCommandPaletteSelection() {
  Array.from(commandPaletteList.querySelectorAll(".command-palette-item")).forEach((item, index) => {
    item.setAttribute("aria-selected", index === commandPaletteActiveIndex ? "true" : "false");
  });
}

function handleCommandPaletteKeydown(event) {
  if (event.key === "ArrowDown") {
    event.preventDefault();
    commandPaletteActiveIndex = commandPaletteItems.length ? (commandPaletteActiveIndex + 1) % commandPaletteItems.length : 0;
    updateCommandPaletteSelection();
    return;
  }

  if (event.key === "ArrowUp") {
    event.preventDefault();
    commandPaletteActiveIndex = commandPaletteItems.length ? (commandPaletteActiveIndex - 1 + commandPaletteItems.length) % commandPaletteItems.length : 0;
    updateCommandPaletteSelection();
    return;
  }

  if (event.key === "Enter") {
    event.preventDefault();
    const item = commandPaletteItems[commandPaletteActiveIndex];
    if (item) runCommandPaletteItem(item);
    return;
  }

  if (event.key === "Escape") {
    event.preventDefault();
    closeCommandPalette();
  }
}

function runCommandPaletteItem(item) {
  if (item && typeof item.action === "function") item.action();
}

function setSettingsPanel(section) {
  const nextSection = settingsPanels.some((panel) => panel.dataset.settingsPanel === section) ? section : "appearance";
  const title = {
    appearance: "Appearance",
    profile: "Profile",
    workspace: "Workspace",
    agents: "AGENTS.md",
    ai: "AI assistance",
    shortcuts: "Keyboard"
  }[nextSection] || "Settings";

  settingsDrawer.dataset.activeSection = nextSection;
  settingsTitle.textContent = title;
  settingsNavButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.settingsSection === nextSection);
  });
  settingsPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.settingsPanel === nextSection);
  });

  if (nextSection === "agents") loadAgentsFile();
  updateSettingsSearch();
}

function clearSettingsSearch() {
  if (!settingsSearchInput || !settingsSearchInput.value) return;
  settingsSearchInput.value = "";
  updateSettingsSearch();
}

function updateSettingsSearch() {
  if (!settingsSearchInput || !settingsSearchEmpty) return;

  const query = settingsSearchInput.value.trim().toLowerCase();
  const activeSection = settingsDrawer.dataset.activeSection || "appearance";
  settingsDrawer.classList.toggle("settings-searching", Boolean(query));
  let visibleCount = 0;

  settingsPanels.forEach((panel) => {
    let panelMatches = 0;
    const rows = Array.from(panel.querySelectorAll(".setting-row, .setting-column, .settings-action-row, .settings-action-button, .settings-status, .shortcut-list > div"));
    rows.forEach((row) => {
      const text = row.textContent.toLowerCase();
      const matches = !query || text.includes(query);
      row.hidden = Boolean(query && !matches);
      row.classList.toggle("settings-search-match", Boolean(query && matches));
      if (matches) panelMatches += 1;
    });

    if (query) {
      const showPanel = panelMatches > 0;
      panel.hidden = !showPanel;
      panel.classList.toggle("active", showPanel);
      if (showPanel) visibleCount += panelMatches;
    } else {
      panel.hidden = false;
      panel.classList.toggle("active", panel.dataset.settingsPanel === activeSection);
      rows.forEach((row) => {
        row.hidden = false;
        row.classList.remove("settings-search-match");
      });
    }
  });

  settingsNavButtons.forEach((button) => {
    if (!query) {
      button.hidden = false;
      button.classList.toggle("active", button.dataset.settingsSection === activeSection);
      return;
    }
    const panel = settingsPanels.find((item) => item.dataset.settingsPanel === button.dataset.settingsSection);
    button.hidden = !panel || panel.hidden;
  });

  settingsSearchEmpty.hidden = !query || visibleCount > 0;
}

function openFind() {
  if (editorScreen.hidden) {
    projectSearch.focus();
    projectSearch.select();
    return;
  }

  closeSettings();
  setSuggestionPanelOpen(false);
  setMode("source");
  requestAnimationFrame(() => {
    editor.focus();
    editor.execCommand("findPersistent");
  });
}

function findNextMatch(reverse = false) {
  if (editorScreen.hidden) {
    projectSearch.focus();
    projectSearch.select();
    return;
  }

  setMode("source");
  requestAnimationFrame(() => {
    editor.focus();
    editor.execCommand(reverse ? "findPersistentPrev" : "findPersistentNext");
  });
}

function changePdfZoom(delta) {
  setPdfZoom(Math.round((pdfZoom + delta) * 10) / 10, { render: false, live: true });
  schedulePdfZoomRender(80);
}

function setPdfZoom(value, { render = true, live = false } = {}) {
  pdfZoom = clampNumber(value, MIN_PDF_ZOOM, MAX_PDF_ZOOM, DEFAULT_PDF_ZOOM);
  localStorage.setItem("latexStudioPdfZoom", String(pdfZoom));
  updatePdfZoomLabel();
  if (live) applyPdfLiveZoom();
  if (render) renderPdf({ showLoading: false });
}

function schedulePdfZoomRender(delay = 220) {
  clearTimeout(pdfZoomGestureTimer);
  pdfZoomGestureTimer = setTimeout(() => renderPdf({ showLoading: false }), delay);
}

function handlePdfWheelZoom(event) {
  if (!event.ctrlKey && !event.shiftKey) return;

  event.preventDefault();
  event.stopPropagation();
  const wheelDelta = Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
  const factor = Math.exp(-wheelDelta * 0.003);
  setPdfZoom(pdfZoom * factor, { render: false, live: true });
  schedulePdfZoomRender();
}

function handlePdfGestureStart(event) {
  event.preventDefault();
  event.stopPropagation();
  pdfGestureStartZoom = pdfZoom;
}

function handlePdfGestureChange(event) {
  event.preventDefault();
  event.stopPropagation();
  const scale = Number(event.scale) || 1;
  setPdfZoom(pdfGestureStartZoom * scale, { render: false, live: true });
  schedulePdfZoomRender();
}

function handlePdfGestureEnd(event) {
  event.preventDefault();
  event.stopPropagation();
  schedulePdfZoomRender(80);
}

function updatePdfZoomLabel() {
  pdfZoomLabel.textContent = `${Math.round(pdfZoom * 100)}%`;
}

function applyPdfLiveZoom() {
  const pages = Array.from(pdfViewer.querySelectorAll(".pdf-page"));
  if (!pages.length || !renderedPdfZoom) return;

  const ratio = pdfZoom / renderedPdfZoom;
  const oldScrollWidth = Math.max(pdfViewer.scrollWidth, 1);
  const oldScrollHeight = Math.max(pdfViewer.scrollHeight, 1);
  const centerX = pdfViewer.scrollLeft + pdfViewer.clientWidth / 2;
  const centerY = pdfViewer.scrollTop + pdfViewer.clientHeight / 2;

  pages.forEach((pageShell) => {
    const canvas = pageShell.querySelector("canvas");
    const renderedWidth = Number(pageShell.dataset.renderedWidth);
    const renderedHeight = Number(pageShell.dataset.renderedHeight);
    if (!canvas || !renderedWidth || !renderedHeight) return;

    const width = Math.floor(renderedWidth * ratio);
    const height = Math.floor(renderedHeight * ratio);
    pageShell.style.width = `${width}px`;
    pageShell.style.height = `${height}px`;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const linkLayer = pageShell.querySelector(".pdf-link-layer");
    if (linkLayer) {
      linkLayer.style.transform = ratio === 1 ? "" : `scale(${ratio})`;
    }
  });

  pdfViewer.scrollLeft = (centerX / oldScrollWidth) * pdfViewer.scrollWidth - pdfViewer.clientWidth / 2;
  pdfViewer.scrollTop = (centerY / oldScrollHeight) * pdfViewer.scrollHeight - pdfViewer.clientHeight / 2;
}

function updateSaveButtonVisibility() {
  saveButton.hidden = autoSaveToggle.checked;
}

function setProjectView(view) {
  projectViewMode = view === "rows" ? "rows" : "grid";
  localStorage.setItem("latexStudioProjectView", projectViewMode);
  updateProjectViewButtons();
  renderProjectGrid();
}

function updateProjectViewButtons() {
  projectGridButton.classList.toggle("active", projectViewMode === "grid");
  projectRowsButton.classList.toggle("active", projectViewMode === "rows");
  projectGrid.classList.toggle("rows-view", projectViewMode === "rows");
}

function applyPdfRenderMode() {
  pdfViewer.classList.toggle("pdf-dark-render", pdfDarkMode && pdfRenderMode !== "original");
  pdfViewer.classList.toggle("pdf-invert-pages", pdfDarkMode && pdfRenderMode === "invert");
}

function setupTerminalPanel() {
  if (!window.localOverleaf || !window.Terminal || !window.FitAddon) return;

  window.localOverleaf.onTerminalData(({ id, data }) => {
    const session = terminalSessions.find((item) => item.id === id);
    if (session) session.term.write(data);
  });

  window.localOverleaf.onTerminalExit(({ id, code, signal }) => {
    const session = terminalSessions.find((item) => item.id === id);
    if (!session) return;

    session.exited = true;
    session.term.writeln("");
    session.term.writeln(`\x1b[38;5;244m[process exited: ${signal || code || 0}]\x1b[0m`);
    renderTerminalTabs();
  });
}

async function createTerminalSession(kind = "shell") {
  if (!window.localOverleaf || !window.Terminal || !window.FitAddon) return;

  const requestedKind = ["shell", "codex", "claude"].includes(kind) ? kind : "shell";
  terminalEmpty.hidden = true;
  setTerminalControlsDisabled(true);

  try {
    const descriptor = await window.localOverleaf.createTerminal(activeProject && activeProject.id, requestedKind);
    const sessionIndex = nextTerminalIndex(requestedKind);
    const terminalNode = document.createElement("div");
    terminalNode.className = "terminal-instance";
    terminalNode.hidden = true;
    terminalBody.appendChild(terminalNode);

    const term = new Terminal({
      allowProposedApi: false,
      convertEol: true,
      cursorBlink: true,
      fontFamily: '"SFMono-Regular", Consolas, "Liberation Mono", monospace',
      fontSize: 12,
      lineHeight: 1.25,
      rows: 12,
      scrollback: 5000,
      theme: terminalTheme()
    });
    const fitAddon = new FitAddon.FitAddon();
    term.loadAddon(fitAddon);
    term.open(terminalNode);

    const session = {
      id: descriptor.id,
      index: sessionIndex,
      title: `${descriptor.title} ${sessionIndex}`,
      commandLabel: descriptor.commandLabel,
      cwd: descriptor.cwd,
      kind: requestedKind,
      term,
      fitAddon,
      node: terminalNode,
      exited: false
    };

    term.onData((data) => window.localOverleaf.writeTerminal(session.id, data));
    term.onResize(({ cols, rows }) => window.localOverleaf.resizeTerminal(session.id, cols, rows));
    term.writeln(`\x1b[38;5;214m${descriptor.commandLabel}\x1b[0m`);
    term.writeln(`\x1b[38;5;244m${descriptor.cwd}\x1b[0m`);

    terminalSessions.push(session);
    renderTerminalTabs();
    activateTerminal(session.id);
  } catch (error) {
    terminalEmpty.hidden = false;
    terminalEmpty.textContent = formatError(error);
  } finally {
    setTerminalControlsDisabled(false);
  }
}

function renderTerminalTabs() {
  terminalTabs.innerHTML = "";
  terminalEmpty.hidden = terminalSessions.length > 0;

  terminalSessions.forEach((session) => {
    const button = document.createElement("button");
    button.className = "terminal-tab";
    button.classList.toggle("active", session.id === activeTerminalId);
    button.classList.toggle("exited", session.exited);
    button.type = "button";
    button.draggable = true;
    button.dataset.terminalId = session.id;
    button.innerHTML = `
      <span class="terminal-tab-title">${escapeHtml(session.title)}</span>
      <span class="terminal-tab-split" role="button" aria-label="Split terminal" title="Split terminal">▣</span>
      <span class="terminal-tab-close" role="button" aria-label="Close terminal">${CLOSE_ICON_SVG}</span>
    `;
    button.addEventListener("click", () => activateTerminal(session.id));
    button.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", session.id);
      event.dataTransfer.effectAllowed = "move";
    });
    button.addEventListener("dragover", (event) => {
      event.preventDefault();
      button.classList.add("drop-target");
    });
    button.addEventListener("dragleave", () => button.classList.remove("drop-target"));
    button.addEventListener("drop", (event) => {
      event.preventDefault();
      button.classList.remove("drop-target");
      splitTerminals(event.dataTransfer.getData("text/plain"), session.id);
    });
    button.querySelector(".terminal-tab-split").addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      splitTerminals(activeTerminalId, session.id);
    });
    button.querySelector(".terminal-tab-close").addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      closeTerminalSession(session.id);
    });
    terminalTabs.appendChild(button);
  });
}

function nextTerminalIndex(kind) {
  const used = new Set(terminalSessions
    .filter((session) => session.kind === kind)
    .map((session) => session.index));
  let index = 1;
  while (used.has(index)) index += 1;
  return index;
}

function activateTerminal(id) {
  activeTerminalId = id;
  if (!splitTerminalIds.includes(id)) splitTerminalIds = [id];
  updateTerminalVisibility();
  renderTerminalTabs();
  scheduleTerminalFit();
}

function splitTerminals(firstId, secondId) {
  if (!firstId || !secondId || firstId === secondId) {
    activateTerminal(secondId || firstId);
    return;
  }

  const ids = [firstId, secondId].filter((id) => terminalSessions.some((session) => session.id === id));
  if (ids.length < 2) return;

  splitTerminalIds = ids;
  activeTerminalId = secondId;
  updateTerminalVisibility();
  renderTerminalTabs();
  scheduleTerminalFit();
}

function updateTerminalVisibility() {
  const visibleIds = new Set(splitTerminalIds.length ? splitTerminalIds : [activeTerminalId].filter(Boolean));
  terminalBody.classList.toggle("terminal-split", visibleIds.size > 1);
  terminalSessions.forEach((session) => {
    session.node.hidden = !visibleIds.has(session.id);
    session.node.classList.toggle("split-active", visibleIds.has(session.id));
  });
}

async function closeTerminalSession(id) {
  const session = terminalSessions.find((item) => item.id === id);
  if (!session) return;

  if (!session.exited) {
    session.term.writeln("");
    session.term.writeln("\x1b[38;5;203m[terminating]\x1b[0m");

    try {
      await window.localOverleaf.killTerminal(session.id);
    } catch (error) {
      session.term.writeln(formatError(error));
      return;
    }
  }

  removeTerminalSession(session.id);
}

function removeTerminalSession(id) {
  const index = terminalSessions.findIndex((item) => item.id === id);
  if (index === -1) return;

  const [session] = terminalSessions.splice(index, 1);
  session.term.dispose();
  session.node.remove();

  if (activeTerminalId === id) {
    const nextSession = terminalSessions[Math.max(0, index - 1)] || terminalSessions[0];
    activeTerminalId = nextSession ? nextSession.id : null;
  }

  splitTerminalIds = splitTerminalIds.filter((item) => item !== id && terminalSessions.some((session) => session.id === item));
  if (!splitTerminalIds.length && activeTerminalId) splitTerminalIds = [activeTerminalId];
  updateTerminalVisibility();
  renderTerminalTabs();
  terminalEmpty.hidden = terminalSessions.length > 0;
  scheduleTerminalFit();
}

function scheduleTerminalFit() {
  clearTimeout(terminalFitTimer);
  terminalFitTimer = setTimeout(fitActiveTerminal, 80);
}

function fitActiveTerminal() {
  const visibleIds = new Set(splitTerminalIds.length ? splitTerminalIds : [activeTerminalId].filter(Boolean));
  terminalSessions.forEach((session) => {
    if (!visibleIds.has(session.id) || session.node.hidden) return;

    try {
      session.fitAddon.fit();
      if (session.id === activeTerminalId) session.term.focus();
    } catch (error) {
      // xterm can report zero dimensions while the app is switching views.
    }
  });
}

function refreshTerminalThemes() {
  terminalSessions.forEach((session) => {
    session.term.options.theme = terminalTheme();
  });
}

function terminalTheme() {
  const dark = resolvedTerminalTheme() === "dark";
  const accentRgb = themeColor("--accent-rgb", "249, 115, 22");
  return {
    background: themeColor("--terminal-bg", dark ? "#111827" : "#ffffff"),
    foreground: themeColor("--terminal-text", dark ? "#e5edf7" : "#1f2937"),
    cursor: themeColor("--accent", DEFAULT_ACCENT),
    selectionBackground: themeColor("--terminal-selection", `rgba(${accentRgb}, 0.2)`),
    black: dark ? themeColor("--bg", "#111827") : themeColor("--cm-text", "#1f2937"),
    red: themeColor("--red", "#ef4444"),
    green: themeColor("--green", "#22c55e"),
    yellow: dark ? "#fbbf24" : "#b45309",
    blue: themeColor("--blue", "#60a5fa"),
    magenta: dark ? "#c084fc" : "#7c3aed",
    cyan: dark ? "#22d3ee" : "#0891b2",
    white: dark ? "#e5e7eb" : "#f8fafc",
    brightBlack: themeColor("--muted", "#6b7280"),
    brightRed: themeColor("--red", "#f87171"),
    brightGreen: themeColor("--green", "#4ade80"),
    brightYellow: dark ? "#fde68a" : "#92400e",
    brightBlue: themeColor("--blue", "#93c5fd"),
    brightMagenta: dark ? "#d8b4fe" : "#6d28d9",
    brightCyan: dark ? "#67e8f9" : "#0e7490",
    brightWhite: "#ffffff"
  };
}

function themeColor(name, fallback) {
  const bodyValue = getComputedStyle(document.body).getPropertyValue(name).trim();
  const rootValue = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return bodyValue || rootValue || fallback;
}

function setTerminalControlsDisabled(value) {
  terminalNewButton.disabled = value;
  terminalShellButton.disabled = value;
  terminalCodexButton.disabled = value;
  terminalClaudeButton.disabled = value;
}

function setSuggestionPanelOpen(open) {
  sourcePane.classList.toggle("suggestion-open", open);
  suggestionPanel.hidden = !open;
  terminalPanel.hidden = open;
  suggestionModeButton.classList.toggle("active", open);

  if (open) {
    suggestionPromptInput.focus();
  } else {
    scheduleTerminalFit();
  }
}

async function runSuggestionMode() {
  if (!activeProject) return;

  const prompt = suggestionPromptInput.value.trim();
  if (!prompt) {
    suggestionStatus.textContent = "Add instructions before running suggestion mode.";
    return;
  }
  const promptWithProfile = withProfileContext(prompt);

  setSuggestionBusy(true);
  suggestionState = null;
  suggestionDiff.hidden = true;
  suggestionStatus.textContent = `Running ${suggestionModelSelect.value === "claude" ? "Claude" : "Codex"} on a temporary copy...`;

  try {
    const result = await window.localOverleaf.runSuggestion(
      activeProject.id,
      activeFile && activeFile.relativePath,
      getSourceText(),
      suggestionModelSelect.value,
      promptWithProfile
    );

    const hunks = (result.hunks || []).map((hunk) => ({ ...hunk, status: "pending" }));
    suggestionState = {
      provider: result.provider,
      originalText: result.originalText,
      suggestedText: result.suggestedText,
      hunks,
      activeIndex: 0,
      lineOffset: 0
    };

    if (!hunks.length) {
      suggestionStatus.textContent = "No manuscript changes were suggested.";
      suggestionDiff.hidden = true;
      return;
    }

    suggestionStatus.textContent = `${hunks.length} suggested hunk${hunks.length === 1 ? "" : "s"} ready for review.`;
    suggestionDiff.hidden = false;
    renderSuggestionHunk();
  } catch (error) {
    suggestionStatus.textContent = formatError(error);
    suggestionDiff.hidden = true;
  } finally {
    setSuggestionBusy(false);
  }
}

function setSuggestionBusy(value) {
  runSuggestionButton.disabled = value;
  suggestionModelSelect.disabled = value;
  suggestionPromptInput.disabled = value;
  fixCompileLogButton.disabled = value;
}

function renderSuggestionHunk() {
  if (!suggestionState || !suggestionState.hunks.length) {
    suggestionCounter.textContent = "Hunk 0 / 0";
    suggestionDiffBody.textContent = "";
    return;
  }

  const hunk = suggestionState.hunks[suggestionState.activeIndex];
  suggestionCounter.textContent = `Hunk ${suggestionState.activeIndex + 1} / ${suggestionState.hunks.length}${hunk.status === "pending" ? "" : ` - ${hunk.status}`}`;
  suggestionDiffBody.innerHTML = hunk.diff
    .split("\n")
    .map((line) => `<span class="${diffLineClass(line)}">${escapeHtml(line || " ")}</span>`)
    .join("\n");

  const pending = hunk.status === "pending";
  applySuggestionButton.disabled = !pending;
  rejectSuggestionButton.disabled = !pending;
  previousSuggestionButton.disabled = suggestionState.activeIndex === 0;
  nextSuggestionButton.disabled = suggestionState.activeIndex === suggestionState.hunks.length - 1;
}

function diffLineClass(line) {
  if (line.startsWith("@@")) return "diff-hunk-header";
  if (line.startsWith("+") && !line.startsWith("+++")) return "diff-added";
  if (line.startsWith("-") && !line.startsWith("---")) return "diff-removed";
  return "diff-context";
}

function moveSuggestion(delta) {
  if (!suggestionState) return;
  suggestionState.activeIndex = clampNumber(
    suggestionState.activeIndex + delta,
    0,
    suggestionState.hunks.length - 1,
    suggestionState.activeIndex
  );
  renderSuggestionHunk();
}

function applyCurrentSuggestionHunk() {
  const hunk = currentSuggestionHunk();
  if (!hunk || hunk.status !== "pending") return;

  const source = getSourceText();
  const next = applyHunkToText(source, hunk, suggestionState.lineOffset);
  suggestionState.lineOffset += hunk.newLines - hunk.oldLines;
  hunk.status = "applied";

  suppressSourceChange = true;
  setSourceText(next);
  handleSourceChanged({ renderVisual: !visualEditor.hidden });
  suggestionStatus.textContent = "Applied current hunk.";
  advanceSuggestionAfterDecision();
}

function rejectCurrentSuggestionHunk() {
  const hunk = currentSuggestionHunk();
  if (!hunk || hunk.status !== "pending") return;

  hunk.status = "skipped";
  suggestionStatus.textContent = "Skipped current hunk.";
  advanceSuggestionAfterDecision();
}

function applyAllSuggestionHunks() {
  if (!suggestionState) return;

  suppressSourceChange = true;
  setSourceText(suggestionState.suggestedText);
  suggestionState.hunks.forEach((hunk) => {
    if (hunk.status === "pending") hunk.status = "applied";
  });
  handleSourceChanged({ renderVisual: !visualEditor.hidden });
  suggestionStatus.textContent = "Applied all suggested hunks.";
  renderSuggestionHunk();
}

function advanceSuggestionAfterDecision() {
  if (!suggestionState) return;

  const nextPending = suggestionState.hunks.findIndex((hunk, index) => index > suggestionState.activeIndex && hunk.status === "pending");
  if (nextPending !== -1) suggestionState.activeIndex = nextPending;
  renderSuggestionHunk();
}

function currentSuggestionHunk() {
  if (!suggestionState || !suggestionState.hunks.length) return null;
  return suggestionState.hunks[suggestionState.activeIndex];
}

function applyHunkToText(source, hunk, lineOffset) {
  const exactIndex = source.indexOf(hunk.oldText);
  if (exactIndex !== -1) {
    return `${source.slice(0, exactIndex)}${hunk.newText}${source.slice(exactIndex + hunk.oldText.length)}`;
  }

  const lines = source.split("\n");
  const start = clampNumber(hunk.oldStart - 1 + lineOffset, 0, lines.length, 0);
  lines.splice(start, hunk.oldLines, ...hunk.newText.split("\n"));
  return lines.join("\n");
}

async function loadProjects() {
  projectGrid.innerHTML = '<div class="project-loading">Loading projects...</div>';

  try {
    const data = await window.localOverleaf.listProjects();
    projects = data.projects || [];
    renderProjectGrid();
  } catch (error) {
    projectGrid.innerHTML = `<div class="project-loading project-error">${escapeHtml(formatError(error))}</div>`;
    projectEmpty.hidden = true;
  }
}

function renderProjectGrid() {
  updateProjectViewButtons();
  const query = projectSearch.value.trim().toLowerCase();
  const visibleProjects = projects.filter((project) => {
    const haystack = `${project.name} ${project.texName} ${project.folderName} ${project.texPath}`.toLowerCase();
    return haystack.includes(query);
  });

  projectGrid.innerHTML = "";
  projectEmpty.hidden = visibleProjects.length > 0;

  visibleProjects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.role = "button";
    card.tabIndex = 0;
    card.dataset.projectId = project.id;
    card.innerHTML = `
      <button class="project-remove-button" type="button" aria-label="Remove ${escapeHtml(project.name)} from editor" title="Remove project">
        ${TRASH_ICON_SVG}
      </button>
      <span class="project-preview" aria-hidden="true">
        <span class="project-preview-message">${project.pdfExists ? "Rendering preview" : "No PDF yet"}</span>
      </span>
      <span class="project-card-copy">
        <span class="project-name">${escapeHtml(project.name)}</span>
        <span class="project-file">${escapeHtml(project.texName)} · ${escapeHtml(project.folderName)}</span>
        <span class="project-meta">Edited ${escapeHtml(relativeTime(project.modifiedAt))}</span>
      </span>
    `;
    card.addEventListener("click", (event) => {
      if (card.classList.contains("renaming") || event.target.closest("button, input")) return;
      openProject(project.id);
    });
    card.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (card.classList.contains("renaming")) return;
      showProjectContextMenu(event, project);
    });
    card.addEventListener("keydown", (event) => {
      if (card.classList.contains("renaming")) return;
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      openProject(project.id);
    });
    card.querySelector(".project-remove-button").addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      removeProject(project);
    });
    projectGrid.appendChild(card);
    renderProjectPreview(card, project);
  });
}

function showProjectContextMenu(event, project) {
  closeProjectContextMenu();
  closeFileContextMenu();

  const menu = document.createElement("div");
  menu.className = "project-context-segment";
  menu.setAttribute("role", "menu");

  const renameButton = document.createElement("button");
  renameButton.type = "button";
  renameButton.textContent = "Rename";
  renameButton.addEventListener("click", (clickEvent) => {
    clickEvent.stopPropagation();
    renameProject(project);
  });

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.textContent = "Remove";
  removeButton.className = "danger";
  removeButton.addEventListener("click", (clickEvent) => {
    clickEvent.stopPropagation();
    removeProject(project);
  });

  menu.append(renameButton, removeButton);
  document.body.appendChild(menu);

  const margin = 8;
  const rect = menu.getBoundingClientRect();
  const left = Math.min(event.clientX, window.innerWidth - rect.width - margin);
  const top = Math.min(event.clientY, window.innerHeight - rect.height - margin);
  menu.style.left = `${Math.max(margin, left)}px`;
  menu.style.top = `${Math.max(margin, top)}px`;
  projectContextMenu = menu;
}

function closeProjectContextMenu() {
  if (!projectContextMenu) return;
  projectContextMenu.remove();
  projectContextMenu = null;
}

async function renameProject(project) {
  closeProjectContextMenu();
  const card = Array.from(projectGrid.querySelectorAll(".project-card")).find((item) => item.dataset.projectId === project.id);
  if (!card) return;
  startProjectRename(card, project);
}

function startProjectRename(card, project) {
  const nameElement = card.querySelector(".project-name");
  if (!nameElement || card.querySelector(".project-rename-input")) return;

  const input = document.createElement("input");
  input.className = "project-rename-input";
  input.type = "text";
  input.value = project.name;
  input.setAttribute("aria-label", "Project name");
  input.spellcheck = false;

  nameElement.replaceWith(input);
  card.classList.add("renaming");
  card.tabIndex = -1;

  let finished = false;
  const finish = async (commit) => {
    if (finished) return;
    finished = true;
    input.disabled = true;
    const name = input.value.trim();
    if (!commit || !name || name === project.name) {
      renderProjectGrid();
      return;
    }
    await saveProjectName(project, name);
  };

  input.addEventListener("click", (event) => event.stopPropagation());
  input.addEventListener("pointerdown", (event) => event.stopPropagation());
  input.addEventListener("contextmenu", (event) => event.stopPropagation());
  input.addEventListener("keydown", (event) => {
    event.stopPropagation();
    if (event.key === "Enter") {
      event.preventDefault();
      finish(true);
    } else if (event.key === "Escape") {
      event.preventDefault();
      finish(false);
    }
  });
  input.addEventListener("blur", () => finish(true));

  requestAnimationFrame(() => {
    input.focus();
    input.select();
  });
}

async function saveProjectName(project, name) {
  setProjectBusy(true);
  try {
    const result = await window.localOverleaf.renameProject(project.id, name);
    projects = result.projects || projects.map((item) => (item.id === project.id ? { ...item, name } : item));
    renderProjectGrid();
  } catch (error) {
    projectGrid.innerHTML = `<div class="project-loading project-error">${escapeHtml(formatError(error))}</div>`;
  } finally {
    setProjectBusy(false);
  }
}

async function removeProject(project) {
  closeProjectContextMenu();
  const confirmed = window.confirm(`Remove "${project.name}" from the editor?\n\nThis will not delete any files from disk.`);
  if (!confirmed) return;

  setProjectBusy(true);
  try {
    const result = await window.localOverleaf.removeProject(project.id);
    projects = result.projects || projects.filter((item) => item.id !== project.id);
    renderProjectGrid();
  } catch (error) {
    projectGrid.innerHTML = `<div class="project-loading project-error">${escapeHtml(formatError(error))}</div>`;
  } finally {
    setProjectBusy(false);
  }
}

async function renderProjectPreview(card, project) {
  const preview = card.querySelector(".project-preview");
  if (!preview || !project.pdfExists) return;

  try {
    const [pdfjsLib, pdfBuffer] = await Promise.all([
      loadPdfJs(),
      window.localOverleaf.readPdf(project.id)
    ]);
    if (!card.isConnected) return;

    const loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(pdfBuffer) });
    const pdf = await loadingTask.promise;
    const page = await pdf.getPage(1);
    if (!card.isConnected) return;

    const baseViewport = page.getViewport({ scale: 1 });
    const targetWidth = Math.max(120, preview.clientWidth);
    const targetHeight = Math.max(120, preview.clientHeight);
    const scale = Math.max(targetWidth / baseViewport.width, targetHeight / baseViewport.height) * 1.08;
    const viewport = page.getViewport({ scale });
    const outputScale = Math.min(window.devicePixelRatio || 1, 2);
    const canvas = document.createElement("canvas");
    canvas.width = Math.floor(viewport.width * outputScale);
    canvas.height = Math.floor(viewport.height * outputScale);
    canvas.style.width = `${Math.floor(viewport.width)}px`;
    canvas.style.height = `${Math.floor(viewport.height)}px`;

    const context = canvas.getContext("2d");
    context.setTransform(outputScale, 0, 0, outputScale, 0, 0);
    await page.render({ canvasContext: context, viewport }).promise;
    if (!card.isConnected) return;

    preview.replaceChildren(canvas);
  } catch (error) {
    if (!card.isConnected) return;
    preview.innerHTML = '<span class="project-preview-message">Preview unavailable</span>';
  }
}

function toggleNewProjectPanel(force) {
  const show = typeof force === "boolean" ? force : newProjectPanel.hidden;
  if (show) openNewProjectPanel();
  else closeNewProjectPanel();
}

function openNewProjectPanel() {
  closeCommandPalette();
  closeSettings({ keepBackdrop: true });
  closeTemplatesPanel({ keepBackdrop: true });
  settingsBackdrop.hidden = false;
  newProjectPanel.hidden = false;
  addProjectButton.classList.add("active");
  projectDropZone.focus();
}

function closeNewProjectPanel({ keepBackdrop = false } = {}) {
  newProjectPanel.hidden = true;
  newProjectPanel.classList.remove("drop-active");
  projectDropZone.classList.remove("drop-active");
  addProjectButton.classList.remove("active");
  if (!keepBackdrop) updateOverlayBackdrop();
}

async function addProject(kind) {
  setProjectBusy(true);

  try {
    const result = await window.localOverleaf.addProject(kind);
    projects = result.projects || projects;
    renderProjectGrid();
    if (result.project) toggleNewProjectPanel(false);
    if (result.project) await openProject(result.project.id);
  } catch (error) {
    projectGrid.innerHTML = `<div class="project-loading project-error">${escapeHtml(formatError(error))}</div>`;
  } finally {
    setProjectBusy(false);
  }
}

function wireProjectDrop(target) {
  target.addEventListener("click", () => addProject("folder"));
  target.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    addProject("folder");
  });

  target.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.stopPropagation();
    target.classList.add("drop-active");
    newProjectPanel.classList.add("drop-active");
  });

  target.addEventListener("dragleave", (event) => {
    event.stopPropagation();
    if (!target.contains(event.relatedTarget)) {
      target.classList.remove("drop-active");
      newProjectPanel.classList.remove("drop-active");
    }
  });

  target.addEventListener("drop", async (event) => {
    event.preventDefault();
    event.stopPropagation();
    target.classList.remove("drop-active");
    newProjectPanel.classList.remove("drop-active");

    const paths = Array.from(event.dataTransfer.files)
      .map(projectPathFromFile)
      .filter(Boolean);
    if (!paths.length) return;

    setProjectBusy(true);
    try {
      const result = await window.localOverleaf.addProjectFromPath(paths);
      projects = result.projects || projects;
      renderProjectGrid();
      toggleNewProjectPanel(false);
      if (result.project) await openProject(result.project.id);
    } catch (error) {
      projectGrid.innerHTML = `<div class="project-loading project-error">${escapeHtml(formatError(error))}</div>`;
    } finally {
      setProjectBusy(false);
    }
  });
}

function projectPathFromFile(file) {
  if (file.path) return file.path;
  try {
    return window.localOverleaf.getPathForFile(file);
  } catch (error) {
    return "";
  }
}

async function openProject(projectId) {
  resetTextTabs();
  const project = projects.find((item) => item.id === projectId);
  activeProject = project || { id: projectId, name: "Project", texName: "main.tex" };
  showEditorShell();
  await loadManuscript(projectId);
  await loadProjectFiles();
}

function showEditorShell() {
  projectScreen.hidden = true;
  editorScreen.hidden = false;
  requestAnimationFrame(() => editor.refresh());
}

async function showProjects() {
  syncActiveTextTabFromEditor();
  if (activeProject && openTextTabs.some((tab) => tab.dirty)) {
    const confirmed = window.confirm("Return to Projects and keep unsaved editor changes only in this window?");
    if (!confirmed) return;
  }

  clearTimeout(autoCompileTimer);
  projectScreen.hidden = false;
  editorScreen.hidden = true;
  await loadProjects();
}

async function loadManuscript(projectId = activeProject && activeProject.id) {
  if (!projectId) return;

  setBusy(true);
  isLoading = true;
  setSaveState("Loading...");
  setCompileState("Loading PDF...");

  try {
    const data = await window.localOverleaf.load(projectId);
    activeProject = data.project;
    resetTextTabs();
    setActiveLoadedTextFile(data.file, data.tex);
    editor.setValue(data.tex);
    updateEditorFileTitle();
    pdfTitle.textContent = activeProject.pdfName || "main.pdf";
    pdfMeta.textContent = "Loading pages...";
    updateActiveDocumentTitle();
    updateStats();
    scheduleSourceMinimapUpdate();
    renderVisualEditor();
    await setPdf();
    setSaveState("Saved", "ok");
    setCompileState("PDF loaded", "ok");
    compileLog.textContent = `Loaded ${activeProject.name}.`;
  } catch (error) {
    setSaveState("Load failed", "error");
    setCompileState("Load failed", "error");
    pdfViewer.innerHTML = '<div class="pdf-loading pdf-error">Could not load this project.</div>';
    compileLog.textContent = formatError(error);
  } finally {
    isLoading = false;
    setBusy(false);
    requestAnimationFrame(() => editor.refresh());
  }
}

async function loadProjectFile(relativePath, { confirmUnsaved = true } = {}) {
  if (!activeProject || !relativePath) return;

  syncActiveTextTabFromEditor();
  const existingTab = openTextTabs.find((tab) => tab.relativePath === relativePath);
  if (existingTab) {
    switchTextTab(relativePath);
    return;
  }

  setBusy(true);
  isLoading = true;
  setSaveState("Loading...");

  try {
    const data = await window.localOverleaf.load(activeProject.id, relativePath);
    activeProject = data.project;
    setActiveLoadedTextFile(data.file, data.tex);
    editor.setValue(data.tex);
    updateEditorFileTitle();
    updateActiveDocumentTitle();
    updateStats();
    scheduleSourceMinimapUpdate();
    renderVisualEditor();
    setSaveState("Saved", "ok");
    compileLog.textContent = `Loaded ${activeFile.relativePath}.`;
  } catch (error) {
    setSaveState("Load failed", "error");
    compileLog.textContent = formatError(error);
  } finally {
    isLoading = false;
    setBusy(false);
    requestAnimationFrame(() => editor.refresh());
  }
}

async function loadProjectFiles() {
  if (!activeProject) return;

  fileTree.innerHTML = '<div class="file-message">Loading files...</div>';

  try {
    const data = await window.localOverleaf.listProjectFiles(activeProject.id);
    activeProject = data.project || activeProject;
    projectFiles = data.files || [];
    updateActiveDocumentTitle();
    renderFileTree();
  } catch (error) {
    fileTree.innerHTML = `<div class="file-message file-error">${escapeHtml(formatError(error))}</div>`;
  }
}

function renderFileTree() {
  if (!fileTree || !activeProject) return;
  fileTree.innerHTML = "";

  if (!projectFiles.length) {
    fileTree.innerHTML = '<div class="file-message">No files found.</div>';
    return;
  }

  projectFiles.forEach((node) => fileTree.appendChild(renderFileNode(node, 0)));
}

function renderFileNode(node, depth) {
  const depthIndent = `${depth * 14}px`;

  if (node.kind === "folder") {
    const details = document.createElement("details");
    details.className = "file-folder";
    details.open = depth < 2 || node.name === "figures";
    details.style.setProperty("--depth-indent", depthIndent);

    const summary = document.createElement("summary");
    summary.innerHTML = `<span class="folder-name">${escapeHtml(node.name)}</span>`;
    attachFileContextMenu(summary, node);
    details.appendChild(summary);

    const children = document.createElement("div");
    children.className = "file-children";
    children.style.setProperty("--depth-indent", depthIndent);
    (node.children || []).forEach((child) => children.appendChild(renderFileNode(child, depth + 1)));
    details.appendChild(children);
    return details;
  }

  const button = document.createElement("button");
  button.className = "file-item";
  button.type = "button";
  button.style.setProperty("--depth-indent", depthIndent);
  button.classList.toggle("active", Boolean(activeFile && activeFile.relativePath === node.relativePath));
  button.innerHTML = `
    <span class="file-icon file-icon-${fileIconClass(node)}" aria-hidden="true"></span>
    <span class="file-name">${escapeHtml(node.name)}</span>
  `;
  button.addEventListener("click", () => selectProjectFile(node));
  attachFileContextMenu(button, node);
  return button;
}

function fileIconClass(node) {
  const name = node.name.toLowerCase();
  if (node.image) return "image";
  if (name.endsWith(".tex") || name.endsWith(".cls") || name.endsWith(".bst")) return "tex";
  if (name.endsWith(".bib")) return "bib";
  if (name.endsWith(".md") || name.endsWith(".txt")) return "md";
  if (name.endsWith(".pdf")) return "pdf";
  return "generic";
}

async function selectProjectFile(node) {
  if (node.editable) {
    filePreview.hidden = true;
    await loadProjectFile(node.relativePath);
    return;
  }

  if (node.image) {
    showImagePreview(node);
    return;
  }

  filePreview.hidden = false;
  filePreview.innerHTML = `
    <strong>${escapeHtml(node.name)}</strong>
    <p>This file is listed in the project but is not editable here.</p>
  `;
}

function showImagePreview(node) {
  renderFileTree();
  filePreview.hidden = false;
  filePreview.innerHTML = `
    <strong>${escapeHtml(node.name)}</strong>
    <img src="${escapeHtml(node.fileUrl)}" alt="${escapeHtml(node.name)}">
    <code>${escapeHtml(node.relativePath)}</code>
  `;
}

function attachFileContextMenu(target, node) {
  target.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    event.stopPropagation();
    showFileContextMenu(event, node);
  });
}

function showFileContextMenu(event, node) {
  closeFileContextMenu();

  const menu = document.createElement("div");
  menu.className = "file-context-menu";
  menu.setAttribute("role", "menu");

  const actions = [
    { id: "open", label: node.kind === "folder" ? "Open in Finder" : "Open" },
    { id: "reveal", label: "Reveal in Finder" },
    { separator: true },
    { id: "copy", label: "Copy" },
    { id: "paste", label: "Paste", disabled: !copiedProjectItem },
    { id: "duplicate", label: "Duplicate" },
    { separator: true },
    { id: "copy-path", label: "Copy Path" },
    { id: "copy-relative-path", label: "Copy Relative Path" },
    { id: "copy-name", label: "Copy Name" },
    { separator: true },
    { id: "rename", label: "Rename" },
    { id: "delete", label: "Delete", danger: true }
  ];

  actions.forEach((item) => {
    if (item.separator) {
      const separator = document.createElement("div");
      separator.className = "file-context-separator";
      menu.appendChild(separator);
      return;
    }

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = item.label;
    button.disabled = Boolean(item.disabled);
    button.classList.toggle("danger", Boolean(item.danger));
    button.addEventListener("click", () => runFileContextAction(item.id, node));
    menu.appendChild(button);
  });

  document.body.appendChild(menu);
  const margin = 8;
  const rect = menu.getBoundingClientRect();
  const left = Math.min(event.clientX, window.innerWidth - rect.width - margin);
  const top = Math.min(event.clientY, window.innerHeight - rect.height - margin);
  menu.style.left = `${Math.max(margin, left)}px`;
  menu.style.top = `${Math.max(margin, top)}px`;
  fileContextMenu = menu;
}

function closeFileContextMenu() {
  if (!fileContextMenu) return;
  fileContextMenu.remove();
  fileContextMenu = null;
}

async function runFileContextAction(action, node) {
  closeFileContextMenu();
  if (!activeProject || !node || !node.relativePath) return;

  try {
    if (action === "open") {
      if (node.editable || node.image) await selectProjectFile(node);
      else await window.localOverleaf.projectFileAction(activeProject.id, node.relativePath, "open");
      return;
    }

    if (action === "copy") {
      copiedProjectItem = node;
      compileLog.textContent = `Copied ${node.relativePath}.`;
      return;
    }

    if (action === "paste") {
      if (!copiedProjectItem) return;
      const result = await window.localOverleaf.projectFileAction(activeProject.id, node.relativePath, "copy-into", {
        sourceRelativePath: copiedProjectItem.relativePath
      });
      applyFileActionResult(result);
      compileLog.textContent = `Pasted ${copiedProjectItem.name}.`;
      return;
    }

    if (action === "rename") {
      const nextName = window.prompt("Rename file", node.name);
      if (nextName === null || nextName.trim() === node.name) return;
      const result = await window.localOverleaf.projectFileAction(activeProject.id, node.relativePath, "rename", { name: nextName });
      const renamedTab = openTextTabs.find((tab) => tab.relativePath === node.relativePath);
      if (renamedTab && result.file) {
        renamedTab.relativePath = result.file.relativePath;
        renamedTab.name = result.file.name;
        renamedTab.file = result.file;
        if (activeTextTabPath === node.relativePath) activeTextTabPath = result.file.relativePath;
      }
      if (activeFile && activeFile.relativePath === node.relativePath && result.file) activeFile = result.file;
      applyFileActionResult(result);
      compileLog.textContent = `Renamed ${node.name} to ${nextName.trim()}.`;
      return;
    }

    if (action === "delete") {
      const confirmed = window.confirm(`Delete "${node.name}" from disk?\n\nThis cannot be undone.`);
      if (!confirmed) return;
      const result = await window.localOverleaf.projectFileAction(activeProject.id, node.relativePath, "delete");
      removeTextTabsUnderPath(node.relativePath);
      applyFileActionResult(result);
      compileLog.textContent = `Deleted ${node.relativePath}.`;
      return;
    }

    const result = await window.localOverleaf.projectFileAction(activeProject.id, node.relativePath, action);
    if (["duplicate"].includes(action)) applyFileActionResult(result);
    if (action.startsWith("copy-")) compileLog.textContent = `${result.value || node.relativePath} copied.`;
  } catch (error) {
    compileLog.textContent = formatError(error);
  }
}

function applyFileActionResult(result) {
  if (!result) return;
  activeProject = result.project || activeProject;
  projectFiles = result.files || projectFiles;
  renderFileTree();
  renderTextTabs();
}

async function chooseProjectFiles() {
  if (!activeProject) return;

  try {
    const result = await window.localOverleaf.chooseProjectFiles(activeProject.id);
    projectFiles = result.files || projectFiles;
    renderFileTree();
    compileLog.textContent = `Imported ${(result.imported || []).length} file(s).`;
  } catch (error) {
    compileLog.textContent = formatError(error);
  }
}

function wireFileDrop(target) {
  target.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.stopPropagation();
    filePane.classList.add("drop-active");
  });

  target.addEventListener("dragleave", (event) => {
    event.stopPropagation();
    if (!filePane.contains(event.relatedTarget)) filePane.classList.remove("drop-active");
  });

  target.addEventListener("drop", async (event) => {
    event.preventDefault();
    event.stopPropagation();
    filePane.classList.remove("drop-active");
    if (!activeProject) return;

    const files = await Promise.all(Array.from(event.dataTransfer.files).map(fileToImportPayload));
    const usableFiles = files.filter(Boolean);
    if (!usableFiles.length) return;

    try {
      const result = await window.localOverleaf.importProjectFiles(activeProject.id, usableFiles);
      projectFiles = result.files || projectFiles;
      renderFileTree();
      compileLog.textContent = `Imported ${(result.imported || []).length} file(s).`;
    } catch (error) {
      compileLog.textContent = formatError(error);
    }
  });
}

async function fileToImportPayload(file) {
  const filePath = projectPathFromFile(file);
  if (filePath) return { path: filePath, name: file.name };
  const bytes = await file.arrayBuffer();
  return { name: file.name, bytes };
}

async function reloadFromDisk() {
  if (!activeProject) return false;
  if (getSourceText() !== savedText) {
    const confirmed = window.confirm("Reload from disk and discard unsaved editor changes?");
    if (!confirmed) return false;
  }

  await loadProjectFile(activeFile ? activeFile.relativePath : "", { confirmUnsaved: false });
  return true;
}

async function refreshActiveProject() {
  if (!activeProject) return;
  setCompileState("Refreshing project...");

  try {
    const reloaded = await reloadFromDisk();
    if (!reloaded) {
      setCompileState("Refresh cancelled");
      return;
    }
    await loadProjectFiles();
    await renderPdf({ showLoading: true });
    setCompileState("Project refreshed", "ok");
  } catch (error) {
    setCompileState("Refresh failed", "error");
    compileLog.textContent = formatError(error);
  }
}

async function saveManuscript({ auto = false } = {}) {
  if (!activeProject) return;
  if (auto && getSourceText() === savedText) return;

  setBusy(true);
  clearTimeout(autoSaveTimer);
  if (!auto) clearTimeout(autoCompileTimer);
  setSaveState(auto ? "Auto-saving..." : "Saving...");

  try {
    const tex = getSourceText();
    const result = await window.localOverleaf.save(activeProject.id, activeFile && activeFile.relativePath, tex);
    activeProject = result.project || activeProject;
    activeFile = result.file || activeFile;
    savedText = tex;
    updateActiveTextTabAfterSave(activeFile, tex);
    updateEditorFileTitle();
    updateActiveDocumentTitle();
    setSaveState(`${auto ? "Auto-saved" : "Saved"} ${timeStamp()}`, "ok");
  } catch (error) {
    setSaveState("Save failed", "error");
    compileLog.textContent = formatError(error);
  } finally {
    setBusy(false);
  }
}

async function compileManuscript({ manual = false } = {}) {
  if (!activeProject) return;

  clearTimeout(autoCompileTimer);
  clearTimeout(autoSaveTimer);

  if (isCompiling) {
    pendingCompile = true;
    setCompileState("Compile queued");
    return;
  }

  setBusy(true);
  isCompiling = true;
  setSaveState("Saving...");
  setCompileState(manual ? "Compiling..." : "Auto compiling...");
  compileLog.textContent = `Running tectonic ${activeProject.texName || "main.tex"}...`;

  try {
    const tex = getSourceText();
    const result = await window.localOverleaf.compile(activeProject.id, activeFile && activeFile.relativePath, tex);
    activeProject = result.project || activeProject;
    activeFile = result.file || activeFile;
    savedText = tex;
    updateActiveTextTabAfterSave(activeFile, tex);
    updateEditorFileTitle();
    updateActiveDocumentTitle();
    await setPdf();
    setSaveState(`Saved ${timeStamp()}`, "ok");
    setCompileState(`${manual ? "Compiled" : "Auto compiled"} ${timeStamp()}`, "ok");
    compileLog.textContent = result.output.trim() || "Compiled successfully.";
  } catch (error) {
    setSaveState(getSourceText() === savedText ? "Saved" : "Unsaved changes");
    setCompileState("Compile failed", "error");
    compileLog.textContent = formatError(error);
  } finally {
    isCompiling = false;
    setBusy(false);

    if (pendingCompile) {
      pendingCompile = false;
      scheduleAutoCompile("Changes queued while compiling");
    }
  }
}

async function openPdf() {
  if (!activeProject) return;

  try {
    await window.localOverleaf.openPdf(activeProject.id);
  } catch (error) {
    compileLog.textContent = formatError(error);
  }
}

async function downloadPdf() {
  if (!activeProject) return;

  setBusy(true);
  setCompileState("Preparing PDF download...");

  try {
    const result = await window.localOverleaf.downloadPdf(activeProject.id);
    if (result && result.filePath) setCompileState("PDF downloaded", "ok");
    else setCompileState("Download canceled");
  } catch (error) {
    setCompileState("Download failed", "error");
    compileLog.textContent = formatError(error);
  } finally {
    setBusy(false);
  }
}

async function loadAgentsFile() {
  const token = ++agentsLoadToken;
  if (!activeProject) {
    agentsPathLabel.textContent = "Open a project to edit AGENTS.md.";
    agentsEditor.value = "";
    agentsEditor.disabled = true;
    reloadAgentsButton.disabled = true;
    saveAgentsButton.disabled = true;
    agentsStatus.textContent = "No project is open.";
    setStatusClass(agentsStatus);
    return;
  }

  agentsEditor.disabled = true;
  reloadAgentsButton.disabled = true;
  saveAgentsButton.disabled = true;
  agentsStatus.textContent = "Loading AGENTS.md...";
  setStatusClass(agentsStatus);

  try {
    const result = await window.localOverleaf.readAgents(activeProject.id);
    if (token !== agentsLoadToken) return;
    agentsPathLabel.textContent = result.path || "AGENTS.md";
    agentsEditor.value = result.text || "";
    agentsStatus.textContent = result.exists ? "AGENTS.md loaded." : "AGENTS.md will be created when saved.";
  } catch (error) {
    if (token !== agentsLoadToken) return;
    agentsStatus.textContent = formatError(error);
    setStatusClass(agentsStatus, "error");
  } finally {
    if (token === agentsLoadToken) {
      agentsEditor.disabled = false;
      reloadAgentsButton.disabled = false;
      saveAgentsButton.disabled = false;
    }
  }
}

async function saveAgentsFile() {
  if (!activeProject) return;

  agentsEditor.disabled = true;
  reloadAgentsButton.disabled = true;
  saveAgentsButton.disabled = true;
  agentsStatus.textContent = "Saving AGENTS.md...";
  setStatusClass(agentsStatus);

  try {
    const result = await window.localOverleaf.saveAgents(activeProject.id, agentsEditor.value);
    agentsPathLabel.textContent = result.path || agentsPathLabel.textContent;
    agentsStatus.textContent = `Saved AGENTS.md ${timeStamp()}`;
    setStatusClass(agentsStatus, "ok");
  } catch (error) {
    agentsStatus.textContent = formatError(error);
    setStatusClass(agentsStatus, "error");
  } finally {
    agentsEditor.disabled = false;
    reloadAgentsButton.disabled = false;
    saveAgentsButton.disabled = false;
  }
}

async function fixCompileLogWithCodex() {
  if (!activeProject) return;
  const logText = compileLog.textContent.trim();
  if (!logText || logText === "No compile run yet." || /^compiled successfully\.?$/i.test(logText)) {
    compileLog.textContent = "No compile issue to send to Codex.";
    return;
  }

  closeSettings();
  setMode("source");
  setSuggestionPanelOpen(true);
  suggestionModelSelect.value = "codex";
  suggestionPromptInput.value = compileLogFixPrompt(logText);
  await runSuggestionMode();
}

function compileLogFixPrompt(logText) {
  return [
    "Fix the LaTeX compile errors reported below.",
    "Keep the change minimal and focused on making the document compile.",
    "Do not rewrite unrelated prose.",
    "",
    "Compile log:",
    logText.slice(-12000)
  ].join("\n");
}

function handleSourceChanged({ renderVisual = false } = {}) {
  updateStats();
  scheduleSourceMinimapUpdate();
  updateActiveDocumentTitle();
  updateActiveTextTabDirtyState();
  setSaveState(getSourceText() === savedText ? "Saved" : "Unsaved changes");
  if (renderVisual) renderVisualEditor();
  scheduleAutoSave();
  scheduleAutoCompile("Waiting for edits to settle...");
}

function setupSourceMinimap() {
  if (!sourceMinimap || !editor) return;

  const jumpToPointer = (clientY) => {
    const rect = sourceMinimap.getBoundingClientRect();
    if (!rect.height) return;

    const info = editor.getScrollInfo();
    const ratio = clampNumber((clientY - rect.top) / rect.height, 0, 1, 0);
    const maxTop = Math.max(0, info.height - info.clientHeight);
    const top = ratio * info.height - info.clientHeight / 2;
    editor.scrollTo(null, Math.max(0, Math.min(maxTop, top)));
  };

  sourceMinimap.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    sourceMinimapDragging = true;
    sourceMinimap.setPointerCapture(event.pointerId);
    jumpToPointer(event.clientY);
  });

  sourceMinimap.addEventListener("pointermove", (event) => {
    if (!sourceMinimapDragging) return;
    event.preventDefault();
    jumpToPointer(event.clientY);
  });

  sourceMinimap.addEventListener("pointerup", (event) => {
    sourceMinimapDragging = false;
    if (sourceMinimap.hasPointerCapture(event.pointerId)) sourceMinimap.releasePointerCapture(event.pointerId);
  });
}

function scheduleSourceMinimapUpdate() {
  if (!sourceMinimap || !sourceMinimapLines || !editor) return;
  cancelAnimationFrame(sourceMinimapFrame);
  sourceMinimapFrame = requestAnimationFrame(updateSourceMinimap);
}

function updateSourceMinimap() {
  if (!sourceMinimap || !sourceMinimapLines || !editor) return;

  const lines = editor.getValue().split("\n");
  sourceMinimapLines.style.setProperty("--minimap-lines", String(Math.max(lines.length, 1)));
  sourceMinimapLines.innerHTML = lines.map((line) => {
    const trimmed = line.trim();
    const kind = sourceMinimapLineKind(trimmed);
    const previewText = renderSourceMinimapSyntax(line.replace(/\t/g, "  ").slice(0, 150));
    return `<span class="source-minimap-line ${kind}">${previewText || "&nbsp;"}</span>`;
  }).join("");
  updateSourceMinimapViewport();
}

function renderSourceMinimapSyntax(line) {
  if (!line) return "";

  const commentIndex = findLatexCommentIndex(line);
  const code = commentIndex === -1 ? line : line.slice(0, commentIndex);
  const comment = commentIndex === -1 ? "" : line.slice(commentIndex);
  const tokenPattern = /(\\[a-zA-Z@]+\*?|\\.|\{|\}|\[|\]|\b\d+(?:\.\d+)?\b|[$^_&#~]|--)/g;
  let html = "";
  let cursor = 0;
  let match;

  while ((match = tokenPattern.exec(code)) !== null) {
    if (match.index > cursor) {
      html += `<span class="source-minimap-token text">${escapeHtml(code.slice(cursor, match.index))}</span>`;
    }
    const token = match[0];
    html += `<span class="source-minimap-token ${sourceMinimapTokenKind(token)}">${escapeHtml(token)}</span>`;
    cursor = match.index + token.length;
  }

  if (cursor < code.length) {
    html += `<span class="source-minimap-token text">${escapeHtml(code.slice(cursor))}</span>`;
  }
  if (comment) {
    html += `<span class="source-minimap-token comment">${escapeHtml(comment)}</span>`;
  }
  return html;
}

function findLatexCommentIndex(line) {
  for (let index = 0; index < line.length; index += 1) {
    if (line[index] !== "%") continue;
    let slashCount = 0;
    for (let cursor = index - 1; cursor >= 0 && line[cursor] === "\\"; cursor -= 1) {
      slashCount += 1;
    }
    if (slashCount % 2 === 0) return index;
  }
  return -1;
}

function sourceMinimapTokenKind(token) {
  if (token.startsWith("\\")) return "keyword";
  if (token === "{" || token === "}" || token === "[" || token === "]") return "variable";
  if (/^\d/.test(token)) return "number";
  return "atom";
}

function sourceMinimapLineKind(line) {
  if (!line) return "empty";
  if (line.startsWith("%")) return "comment";
  if (/\\(section|subsection|subsubsection|title|author)\b/.test(line)) return "heading";
  if (/\\(includegraphics|caption|label)\b/.test(line)) return "figure";
  if (/^\\|\\(begin|end|usepackage|documentclass|newcommand)\b/.test(line)) return "command";
  return "text";
}

function updateSourceMinimapViewport() {
  if (!sourceMinimapViewport || !editor) return;

  const info = editor.getScrollInfo();
  const fullHeight = Math.max(info.height, 1);
  const top = clampNumber((info.top / fullHeight) * 100, 0, 100, 0);
  const height = clampNumber((info.clientHeight / fullHeight) * 100, 8, 100, 100);
  sourceMinimapViewport.style.top = `${top}%`;
  sourceMinimapViewport.style.height = `${Math.min(height, 100 - top)}%`;
}

function scheduleAutoSave() {
  if (!activeProject || !autoSaveToggle.checked || isLoading || isCompiling) return;
  if (getSourceText() === savedText) return;

  clearTimeout(autoSaveTimer);
  setSaveState("Auto-save pending");
  autoSaveTimer = setTimeout(() => {
    saveManuscript({ auto: true });
  }, 800);
}

function scheduleAutoCompile(message) {
  if (!activeProject || !autoCompileToggle.checked || isLoading) return;

  if (isCompiling) {
    pendingCompile = true;
    setCompileState("Compile queued");
    return;
  }

  clearTimeout(autoCompileTimer);
  setCompileState(message);
  autoCompileTimer = setTimeout(() => {
    compileManuscript({ manual: false });
  }, 1200);
}

function setMode(mode) {
  const visual = mode === "visual";
  sourceModeButton.classList.toggle("active", !visual);
  visualModeButton.classList.toggle("active", visual);
  editor.getWrapperElement().hidden = visual;
  if (sourceMinimap) sourceMinimap.hidden = visual;
  visualEditor.hidden = !visual;
  updateEditorFileTitle();

  if (visual) renderVisualEditor();
  else {
    editor.refresh();
    scheduleSourceMinimapUpdate();
  }
}

function renderVisualEditor() {
  const tex = getSourceText();
  visualItems = extractVisualItems(tex);
  visualBlocks = visualItems.filter((item) => item.type === "paragraph");
  visualEditor.innerHTML = "";

  if (!visualItems.length) {
    visualEditor.innerHTML = '<p class="visual-empty">No editable prose blocks found.</p>';
    return;
  }

  const page = document.createElement("article");
  page.className = "visual-page";

  const meta = extractVisualMeta(tex);
  if (meta.title) {
    const title = document.createElement("h1");
    title.className = "visual-title";
    title.textContent = meta.title;
    page.appendChild(title);
  }

  let currentSection = null;

  visualItems.forEach((item) => {
    if (item.type === "section") {
      currentSection = document.createElement("section");
      currentSection.className = "visual-section";
      currentSection.innerHTML = `<h2>${escapeHtml(item.title)}</h2>`;
      page.appendChild(currentSection);
      return;
    }

    if (!currentSection) {
      currentSection = document.createElement("section");
      currentSection.className = "visual-section";
      page.appendChild(currentSection);
    }

    if (item.type === "paragraph") currentSection.appendChild(renderVisualParagraph(item));
    if (item.type === "figure") currentSection.appendChild(renderVisualFigure(item));
    if (item.type === "table") currentSection.appendChild(renderVisualTable(item));
    if (item.type === "equation") currentSection.appendChild(renderVisualEquation(item));
  });

  visualEditor.appendChild(page);
}

function renderVisualParagraph(block) {
  const paragraph = document.createElement("p");
  paragraph.className = "visual-block";
  paragraph.contentEditable = "plaintext-only";
  paragraph.dataset.blockId = block.id;
  paragraph.spellcheck = true;
  paragraph.textContent = block.visualText;
  paragraph.addEventListener("input", () => applyVisualEdit(block.id, paragraph.innerText));
  return paragraph;
}

function renderVisualFigure(item) {
  const figure = document.createElement("figure");
  figure.className = "visual-figure";

  const imageUrls = assetUrlsFor(item.imagePath);
  if (imageUrls.length) {
    const image = document.createElement("img");
    let imageIndex = 0;
    image.src = imageUrls[imageIndex];
    image.alt = item.caption || item.imagePath;
    image.addEventListener("error", () => {
      imageIndex += 1;
      if (imageUrls[imageIndex]) {
        image.src = imageUrls[imageIndex];
        return;
      }

      image.hidden = true;
      if (!figure.querySelector(".visual-missing-asset")) {
        figure.prepend(visualMissingAsset(`Figure image not found: ${item.imagePath || "unknown path"}`));
      }
    });
    figure.appendChild(image);
  } else if (item.placeholderText) {
    const placeholder = document.createElement("div");
    placeholder.className = "visual-figure-placeholder";
    placeholder.textContent = item.placeholderText;
    figure.appendChild(placeholder);
  } else {
    figure.appendChild(visualMissingAsset(`Figure image not found: ${item.imagePath || "unknown path"}`));
  }

  if (item.caption) {
    const caption = document.createElement("figcaption");
    caption.textContent = item.caption;
    figure.appendChild(caption);
  }

  return figure;
}

function visualMissingAsset(message) {
  const missing = document.createElement("div");
  missing.className = "visual-missing-asset";
  missing.textContent = message;
  return missing;
}

function renderVisualTable(item) {
  const wrapper = document.createElement("figure");
  wrapper.className = "visual-table-figure";

  const table = document.createElement("table");
  table.className = "visual-table";

  item.rows.forEach((row, rowIndex) => {
    const tr = document.createElement("tr");
    row.forEach((cell, cellIndex) => {
      const node = document.createElement(rowIndex === 0 ? "th" : "td");
      node.textContent = cell;
      node.contentEditable = "plaintext-only";
      node.spellcheck = true;
      node.addEventListener("input", () => {
        item.rows[rowIndex][cellIndex] = node.innerText.trim();
        applyVisualTableEdit(item);
      });
      tr.appendChild(node);
    });
    table.appendChild(tr);
  });

  wrapper.appendChild(table);

  if (item.caption) {
    const caption = document.createElement("figcaption");
    caption.textContent = item.caption;
    wrapper.appendChild(caption);
  }

  return wrapper;
}

function renderVisualEquation(item) {
  const block = document.createElement("pre");
  block.className = "visual-equation";
  block.textContent = latexToVisual(item.raw);
  return block;
}

function assetUrlFor(relativePath) {
  return assetUrlsFor(relativePath)[0] || "";
}

function assetUrlsFor(relativePath) {
  if (!activeProject || !activeProject.rootUrl || !relativePath) return [];
  const paths = candidateAssetPaths(relativePath);
  return paths.map((assetPath) => {
    try {
      return new URL(assetPath.split("/").map(encodeURIComponent).join("/"), activeProject.rootUrl).href;
    } catch (error) {
      return "";
    }
  }).filter(Boolean);
}

function candidateAssetPaths(relativePath) {
  const cleanPath = normalizeLatexAssetPath(relativePath);
  if (!cleanPath) return [];
  const candidates = new Set([cleanPath]);
  const hasExtension = /\.[a-z0-9]+$/i.test(cleanPath);
  if (!hasExtension) {
    ["png", "jpg", "jpeg", "webp", "gif", "svg", "pdf"].forEach((extension) => {
      candidates.add(`${cleanPath}.${extension}`);
    });
  }

  const targetName = cleanPath.split("/").pop().toLowerCase();
  flattenProjectFiles(projectFiles).forEach((node) => {
    if (!node.image || !node.relativePath) return;
    const relative = normalizeLatexAssetPath(node.relativePath);
    const basename = relative.split("/").pop().toLowerCase();
    if (basename === targetName || (!hasExtension && basename.replace(/\.[^.]+$/, "") === targetName)) {
      candidates.add(relative);
    }
  });

  return Array.from(candidates);
}

function flattenProjectFiles(nodes) {
  return (nodes || []).flatMap((node) => {
    if (node.kind === "folder") return flattenProjectFiles(node.children || []);
    return [node];
  });
}

function normalizeLatexAssetPath(value) {
  return String(value || "")
    .trim()
    .replace(/^['"]|['"]$/g, "")
    .replace(/\\/g, "/")
    .replace(/^\.\/+/, "")
    .replace(/^\/+/, "");
}

function applyVisualEdit(blockId, value) {
  const block = visualBlocks.find((item) => item.id === blockId);
  if (!block) return;

  const current = getSourceText();
  const replacement = visualToLatex(value);
  const next = `${current.slice(0, block.start)}${replacement}${current.slice(block.end)}`;
  const delta = replacement.length - (block.end - block.start);

  suppressSourceChange = true;
  setSourceText(next);
  block.end = block.start + replacement.length;

  visualBlocks.forEach((item) => {
    if (item.start > block.start) {
      item.start += delta;
      item.end += delta;
    }
  });

  block.visualText = value;
  handleSourceChanged({ renderVisual: false });
}

function applyVisualTableEdit(item) {
  if (!Number.isFinite(item.start) || !Number.isFinite(item.end) || !item.raw) return;

  const current = getSourceText();
  const updatedTabular = rowsToLatexTableBody(item.rows);
  const replacement = `${item.raw.slice(0, item.bodyStart)}${updatedTabular}${item.raw.slice(item.bodyEnd)}`;
  const next = `${current.slice(0, item.start)}${replacement}${current.slice(item.end)}`;
  const delta = replacement.length - (item.end - item.start);

  suppressSourceChange = true;
  setSourceText(next);
  item.raw = replacement;
  item.bodyEnd += updatedTabular.length - (item.bodyEnd - item.bodyStart);
  item.end = item.start + replacement.length;

  visualItems.forEach((candidate) => {
    if (candidate.start > item.start) {
      candidate.start += delta;
      candidate.end += delta;
    }
  });
  visualBlocks.forEach((candidate) => {
    if (candidate.start > item.start) {
      candidate.start += delta;
      candidate.end += delta;
    }
  });

  handleSourceChanged({ renderVisual: false });
}

function rowsToLatexTableBody(rows) {
  return `\n${rows.map((row) => row.map(visualToLatexCell).join(" & ")).join(" \\\\\n")} \\\\\n`;
}

function visualToLatexCell(value) {
  return visualToLatex(String(value || "").replace(/\n+/g, " ").trim());
}

function extractVisualItems(tex) {
  const items = [];
  const counter = { value: 0 };

  const abstractMatch = tex.match(/\\begin\{abstract\}([\s\S]*?)\\keywords/);
  if (abstractMatch && abstractMatch.index !== undefined) {
    const start = abstractMatch.index + "\\begin{abstract}".length;
    const end = abstractMatch.index + abstractMatch[0].lastIndexOf("\\keywords");
    const raw = tex.slice(start, end).trim();
    if (raw) {
      items.push({ type: "section", title: "Abstract" });
      items.push({
        type: "paragraph",
        id: `block-${counter.value++}`,
        start: start + leadingWhitespaceLength(tex.slice(start, end)),
        end: end - trailingWhitespaceLength(tex.slice(start, end)),
        visualText: latexToVisual(raw)
      });
    }
  }

  const sectionRegex = /\\section\{([^}]+)\}/g;
  const sections = [];
  let match;
  while ((match = sectionRegex.exec(tex))) {
    sections.push({
      title: match[1],
      commandStart: match.index,
      start: match.index + match[0].length,
      end: tex.length
    });
  }
  sections.forEach((section, index) => {
    if (sections[index + 1]) section.end = sections[index + 1].commandStart;
  });

  sections.forEach((section) => {
    const content = tex.slice(section.start, section.end);
    items.push({ type: "section", title: section.title });
    items.push(...extractContentItems(content, section.start, counter));
  });

  return items;
}

function extractContentItems(content, baseOffset, counter) {
  const items = [];
  const environmentRegex = /\\begin\{(figure|table|equation)\}[\s\S]*?\\end\{\1\}/g;
  let cursor = 0;
  let match;

  while ((match = environmentRegex.exec(content))) {
    items.push(...extractParagraphItems(content.slice(cursor, match.index), baseOffset + cursor, counter));
    const raw = match[0];
    if (match[1] === "figure") items.push(parseFigureItem(raw));
    if (match[1] === "table") items.push(parseTableItem(raw, baseOffset + match.index));
    if (match[1] === "equation") items.push({ type: "equation", raw });
    cursor = match.index + raw.length;
  }

  items.push(...extractParagraphItems(content.slice(cursor), baseOffset + cursor, counter));
  return items;
}

function extractParagraphItems(content, baseOffset, counter) {
  const items = [];
  const paragraphRegex = /(^|\n\n)([^\n][\s\S]*?)(?=\n\n|$)/g;
  let paragraph;

  while ((paragraph = paragraphRegex.exec(content))) {
    const raw = paragraph[2].trim();
    if (!isEditableParagraph(raw)) continue;

    const localStart = paragraph.index + paragraph[1].length + leadingWhitespaceLength(paragraph[2]);
    const localEnd = paragraph.index + paragraph[1].length + paragraph[2].length - trailingWhitespaceLength(paragraph[2]);
    items.push({
      type: "paragraph",
      id: `block-${counter.value++}`,
      start: baseOffset + localStart,
      end: baseOffset + localEnd,
      visualText: latexToVisual(raw)
    });
  }

  return items;
}

function parseFigureItem(raw) {
  const includeMatch = raw.match(/\\includegraphics\*?(?:\s*\[[^\]]*\])?\s*\{([^}]+)\}/);
  const placeholderArgs = extractCommandArguments(raw, "figureplaceholder", 2);
  return {
    type: "figure",
    imagePath: includeMatch ? normalizeLatexAssetPath(includeMatch[1]) : "",
    placeholderSize: placeholderArgs[0] || "",
    placeholderText: latexToVisual(placeholderArgs[1] || ""),
    caption: latexToVisual(extractCommandBody(raw, "caption"))
  };
}

function parseTableItem(raw, start) {
  const tabular = extractTabularBody(raw);
  return {
    type: "table",
    start,
    end: start + raw.length,
    raw,
    bodyStart: tabular.bodyStart,
    bodyEnd: tabular.bodyEnd,
    caption: latexToVisual(extractCommandBody(raw, "caption")),
    rows: tabular.body ? parseTabularRows(tabular.body) : []
  };
}

function extractTabularBody(raw) {
  const begin = raw.indexOf("\\begin{tabular}");
  const end = raw.indexOf("\\end{tabular}");
  if (begin === -1 || end === -1 || end <= begin) return { body: "", bodyStart: 0, bodyEnd: 0 };

  const specStart = raw.indexOf("{", begin + "\\begin{tabular}".length);
  if (specStart === -1 || specStart > end) return { body: "", bodyStart: 0, bodyEnd: 0 };

  let depth = 0;
  let cursor = specStart;
  while (cursor < end) {
    const char = raw[cursor];
    const previous = raw[cursor - 1];
    if (char === "{" && previous !== "\\") depth += 1;
    if (char === "}" && previous !== "\\") depth -= 1;
    cursor += 1;
    if (depth === 0) break;
  }

  return {
    body: raw.slice(cursor, end),
    bodyStart: cursor,
    bodyEnd: end
  };
}

function parseTabularRows(raw) {
  const cleaned = raw.replace(/\\(toprule|midrule|bottomrule|hline)\s*/g, "");
  return cleaned
    .split(/\\\\/)
    .map((row) => row.trim())
    .filter(Boolean)
    .map((row) => row
      .split("&")
      .map((cell) => latexToVisual(cell.trim()))
      .filter(Boolean)
    )
    .filter((row) => row.length);
}

function isEditableParagraph(text) {
  if (!text) return false;
  if (text.startsWith("\\begin{") || text.startsWith("\\end{")) return false;
  if (text.startsWith("\\bibliographystyle") || text.startsWith("\\bibliography")) return false;
  if (text.startsWith("\\caption") || text.startsWith("\\label") || text.startsWith("\\includegraphics")) return false;
  if (text.includes("\\begin{table}") || text.includes("\\begin{figure}") || text.includes("\\begin{equation}")) return false;
  if (text.includes("\\toprule") || text.includes("\\midrule") || text.includes("\\bottomrule")) return false;
  return /[A-Za-z]/.test(text);
}

function latexToVisual(text) {
  return text
    .replace(/\\%/g, "%")
    .replace(/\\&/g, "&")
    .replace(/--/g, "-")
    .replace(/~\\ref\{([^}]+)\}/g, " [ref:$1]")
    .replace(/\\cite\{([^}]+)\}/g, "[$1]")
    .replace(/\$([^$]+)\$/g, "$1")
    .replace(/\\times/g, "x")
    .replace(/\\[a-zA-Z]+\{([^{}]*)\}/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function visualToLatex(text) {
  return text
    .trim()
    .replace(/%/g, "\\%")
    .replace(/&/g, "\\&")
    .replace(/\[ref:([^\]]+)\]/g, "~\\ref{$1}")
    .replace(/\[((?=[^\]]*[A-Za-z])[A-Za-z0-9_,:-]+)\]/g, "\\cite{$1}");
}

function getSourceText() {
  return editor.getValue();
}

function setSourceText(value) {
  const cursor = editor.getCursor();
  editor.setValue(value);
  editor.setCursor(cursor);
}

async function setPdf() {
  await renderPdf();
}

async function renderPdf({ showLoading = true } = {}) {
  if (!activeProject || editorScreen.hidden) return;

  const token = ++pdfRenderToken;
  const zoomForRender = pdfZoom;
  const hasExistingPages = Boolean(pdfViewer.querySelector(".pdf-page"));
  applyPdfRenderMode();
  if (showLoading || !hasExistingPages) {
    pdfViewer.innerHTML = '<div class="pdf-loading">Rendering PDF...</div>';
  }

  try {
    const [pdfjsLib, pdfBuffer] = await Promise.all([
      loadPdfJs(),
      window.localOverleaf.readPdf(activeProject.id)
    ]);

    if (token !== pdfRenderToken) return;

    const loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(pdfBuffer) });
    const pdf = await loadingTask.promise;
    if (token !== pdfRenderToken) return;

    const fragment = document.createDocumentFragment();
    pdfMeta.textContent = `${pdf.numPages} pages`;
    const nextPageTextLines = new Map();

    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
      if (token !== pdfRenderToken) return;

      const page = await pdf.getPage(pageNumber);
      const baseViewport = page.getViewport({ scale: 1 });
      const availableWidth = Math.max(420, pdfViewer.clientWidth - 72);
      const fitScale = Math.max(0.72, availableWidth / baseViewport.width);
      const scale = Math.min(MAX_PDF_RENDER_SCALE, fitScale * zoomForRender);
      const viewport = page.getViewport({ scale });
      const outputScale = Math.min(window.devicePixelRatio || 1, 2);

      const pageShell = document.createElement("div");
      pageShell.className = "pdf-page";
      pageShell.dataset.page = `${pageNumber}`;
      pageShell.dataset.renderedWidth = `${Math.floor(viewport.width)}`;
      pageShell.dataset.renderedHeight = `${Math.floor(viewport.height)}`;
      pageShell.style.width = `${Math.floor(viewport.width)}px`;
      pageShell.style.height = `${Math.floor(viewport.height)}px`;

      const canvas = document.createElement("canvas");
      canvas.width = Math.floor(viewport.width * outputScale);
      canvas.height = Math.floor(viewport.height * outputScale);
      canvas.dataset.renderedWidth = `${Math.floor(viewport.width)}`;
      canvas.dataset.renderedHeight = `${Math.floor(viewport.height)}`;
      canvas.style.width = `${Math.floor(viewport.width)}px`;
      canvas.style.height = `${Math.floor(viewport.height)}px`;

      const context = canvas.getContext("2d");
      context.setTransform(outputScale, 0, 0, outputScale, 0, 0);

      const textContent = await page.getTextContent();
      nextPageTextLines.set(pageNumber, buildPdfTextLines(textContent, viewport, pdfjsLib));
      pageShell.addEventListener("click", (event) => jumpToSourceFromPdfClick(event, pageNumber));
      const annotations = await page.getAnnotations({ intent: "display" });
      const linkLayer = buildPdfLinkLayer(annotations, viewport);

      pageShell.appendChild(canvas);
      if (linkLayer) pageShell.appendChild(linkLayer);
      fragment.appendChild(pageShell);
      await page.render({ canvasContext: context, viewport }).promise;
      if (pdfDarkMode && pdfRenderMode === "adaptive") applyDarkPdfCanvas(context, canvas);
    }

    if (token !== pdfRenderToken) return;
    const preserveScroll = !showLoading && hasExistingPages;
    const scrollLeft = pdfViewer.scrollLeft;
    const scrollTop = pdfViewer.scrollTop;
    pdfPageTextLines = nextPageTextLines;
    renderedPdfPageCount = pdf.numPages;
    renderedPdfZoom = zoomForRender;
    pdfViewer.replaceChildren(fragment);
    if (preserveScroll) {
      pdfViewer.scrollLeft = scrollLeft;
      pdfViewer.scrollTop = scrollTop;
    }
    if (pdfZoom !== zoomForRender) applyPdfLiveZoom();
  } catch (error) {
    if (token !== pdfRenderToken) return;
    pdfViewer.innerHTML = '<div class="pdf-loading pdf-error">Could not render PDF. Compile once if this project has no PDF yet.</div>';
    compileLog.textContent = formatError(error);
  }
}

function buildPdfLinkLayer(annotations, viewport) {
  const links = annotations
    .map((annotation) => ({
      rect: Array.isArray(annotation.rect) ? annotation.rect : null,
      url: normalizePdfLinkUrl(annotation.url || annotation.unsafeUrl)
    }))
    .filter((link) => link.rect && link.url);

  if (!links.length) return null;

  const layer = document.createElement("div");
  layer.className = "pdf-link-layer";
  layer.style.width = `${Math.floor(viewport.width)}px`;
  layer.style.height = `${Math.floor(viewport.height)}px`;

  links.forEach((link) => {
    const rect = viewport.convertToViewportRectangle(link.rect);
    const left = Math.min(rect[0], rect[2]);
    const top = Math.min(rect[1], rect[3]);
    const width = Math.abs(rect[0] - rect[2]);
    const height = Math.abs(rect[1] - rect[3]);
    if (width <= 0 || height <= 0) return;

    const button = document.createElement("button");
    button.className = "pdf-link-region";
    button.type = "button";
    button.title = link.url;
    button.setAttribute("aria-label", `Open ${link.url}`);
    button.style.left = `${left}px`;
    button.style.top = `${top}px`;
    button.style.width = `${width}px`;
    button.style.height = `${height}px`;
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openPdfLink(link.url);
    });
    layer.appendChild(button);
  });

  return layer.childElementCount ? layer : null;
}

function normalizePdfLinkUrl(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";

  try {
    const url = new URL(raw);
    if (!["http:", "https:", "mailto:"].includes(url.protocol)) return "";
    return url.toString();
  } catch (error) {
    return "";
  }
}

async function openPdfLink(url) {
  const confirmed = window.confirm(`Do you want to go to ${url}?`);
  if (!confirmed) return;

  try {
    await window.localOverleaf.openExternalLink(url);
  } catch (error) {
    setCompileState(formatError(error), "error");
  }
}

function applyDarkPdfCanvas(context, canvas) {
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  const figureBoxes = detectPdfFigureBoxes(data, canvas.width, canvas.height);
  const paper = cssColorToRgb(themeColor("--pdf-dark-paper", "#111827"), { r: 17, g: 24, b: 39 });
  const text = cssColorToRgb(themeColor("--text", "#f8fafc"), { r: 248, g: 250, b: 252 });

  for (let index = 0; index < data.length; index += 4) {
    const pixelIndex = index / 4;
    const x = pixelIndex % canvas.width;
    const y = Math.floor(pixelIndex / canvas.width);
    if (pointInBoxes(x, y, figureBoxes)) continue;

    const r = data[index];
    const g = data[index + 1];
    const b = data[index + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const chroma = max - min;
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    const saturation = max === 0 ? 0 : chroma / max;
    const neutral = saturation < 0.18 || chroma < 24;

    if (!neutral && luminance < 242) continue;

    const mix = clampNumber(luminance / 255, 0, 1, 1);
    data[index] = Math.round(text.r + (paper.r - text.r) * mix);
    data[index + 1] = Math.round(text.g + (paper.g - text.g) * mix);
    data[index + 2] = Math.round(text.b + (paper.b - text.b) * mix);
  }

  context.putImageData(imageData, 0, 0);
}

function detectPdfFigureBoxes(data, width, height) {
  const cellSize = 14;
  const cols = Math.ceil(width / cellSize);
  const rows = Math.ceil(height / cellSize);
  const cells = new Uint8Array(cols * rows);

  for (let y = 0; y < height; y += 4) {
    for (let x = 0; x < width; x += 4) {
      const index = (y * width + x) * 4;
      const r = data[index];
      const g = data[index + 1];
      const b = data[index + 2];
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      const saturation = max === 0 ? 0 : (max - min) / max;

      if (saturation > 0.24 && luminance > 28 && luminance < 248) {
        const cellX = Math.floor(x / cellSize);
        const cellY = Math.floor(y / cellSize);
        cells[cellY * cols + cellX] = 1;
      }
    }
  }

  const boxes = [];
  const visited = new Uint8Array(cells.length);
  const stack = [];

  for (let cell = 0; cell < cells.length; cell += 1) {
    if (!cells[cell] || visited[cell]) continue;

    let minX = cols;
    let minY = rows;
    let maxX = 0;
    let maxY = 0;
    let count = 0;
    stack.push(cell);
    visited[cell] = 1;

    while (stack.length) {
      const current = stack.pop();
      const x = current % cols;
      const y = Math.floor(current / cols);
      count += 1;
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);

      [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(([dx, dy]) => {
        const nextX = x + dx;
        const nextY = y + dy;
        if (nextX < 0 || nextY < 0 || nextX >= cols || nextY >= rows) return;
        const next = nextY * cols + nextX;
        if (!cells[next] || visited[next]) return;
        visited[next] = 1;
        stack.push(next);
      });
    }

    const boxWidth = (maxX - minX + 1) * cellSize;
    const boxHeight = (maxY - minY + 1) * cellSize;
    if (count >= 10 && boxWidth >= 48 && boxHeight >= 38) {
      const pad = 36;
      boxes.push({
        left: Math.max(0, minX * cellSize - pad),
        top: Math.max(0, minY * cellSize - pad),
        right: Math.min(width, (maxX + 1) * cellSize + pad),
        bottom: Math.min(height, (maxY + 1) * cellSize + pad)
      });
    }
  }

  return boxes;
}

function pointInBoxes(x, y, boxes) {
  return boxes.some((box) => x >= box.left && x <= box.right && y >= box.top && y <= box.bottom);
}

function cssColorToRgb(value, fallback) {
  const color = String(value || "").trim();
  const hex = color.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
  if (hex) {
    const raw = hex[1].length === 3
      ? hex[1].split("").map((char) => `${char}${char}`).join("")
      : hex[1];
    const number = Number.parseInt(raw, 16);
    return {
      r: (number >> 16) & 255,
      g: (number >> 8) & 255,
      b: number & 255
    };
  }

  const rgb = color.match(/rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/i);
  if (rgb) {
    return {
      r: clampNumber(Number(rgb[1]), 0, 255, fallback.r),
      g: clampNumber(Number(rgb[2]), 0, 255, fallback.g),
      b: clampNumber(Number(rgb[3]), 0, 255, fallback.b)
    };
  }

  return fallback;
}

function loadPdfJs() {
  if (!pdfJsPromise) {
    pdfJsPromise = import("./node_modules/pdfjs-dist/build/pdf.mjs").then((pdfjsLib) => {
      pdfjsLib.GlobalWorkerOptions.workerSrc = "./node_modules/pdfjs-dist/build/pdf.worker.mjs";
      return pdfjsLib;
    });
  }

  return pdfJsPromise;
}

function buildPdfTextLines(textContent, viewport, pdfjsLib) {
  const lineBuckets = [];
  const tolerance = 5;
  const viewportScale = Number(viewport.scale) || 1;

  (textContent.items || []).forEach((item) => {
    const text = String(item.str || "").trim();
    if (!text) return;

    const transform = pdfjsLib.Util.transform(viewport.transform, item.transform);
    const x = transform[4];
    const y = transform[5];
    const width = Math.max(
      Math.abs(Number(item.width) || 0) * viewportScale,
      Math.abs(Number(transform[0]) || 0) * text.length * 0.45,
      text.length * 3
    );
    let bucket = lineBuckets.find((line) => Math.abs(line.y - y) <= tolerance);

    if (!bucket) {
      bucket = { y, items: [] };
      lineBuckets.push(bucket);
    }

    bucket.items.push({ x, width, text });
  });

  return lineBuckets
    .map((line) => {
      const items = line.items
        .sort((a, b) => a.x - b.x)
        .map((item) => ({ ...item, words: splitPdfItemWords(item) }));
      return {
        y: line.y,
        items,
        words: items.flatMap((item) => item.words),
        text: items
          .map((item) => item.text)
          .join(" ")
          .replace(/\s+/g, " ")
          .trim()
      };
    })
    .filter((line) => line.text)
    .sort((a, b) => a.y - b.y);
}

function splitPdfItemWords(item) {
  const matches = Array.from(item.text.matchAll(/\S+/g));
  const characterWidth = item.width / Math.max(item.text.length, 1);

  return matches.map((match) => {
    const text = match[0];
    const index = match.index || 0;
    return {
      text,
      normalized: normalizeSearchText(text).split(" ")[0] || "",
      x: item.x + index * characterWidth,
      width: Math.max(text.length * characterWidth, 6)
    };
  });
}

function jumpToSourceFromPdfClick(event, pageNumber) {
  if (!activeProject || event.defaultPrevented) return;

  const pageShell = event.currentTarget;
  const canvas = pageShell.querySelector("canvas");
  if (!canvas) return;

  const bounds = canvas.getBoundingClientRect();
  const x = event.clientX - bounds.left;
  const y = event.clientY - bounds.top;
  if (x < 0 || y < 0 || x > bounds.width || y > bounds.height) return;

  const renderedHeight = Number(canvas.dataset.renderedHeight) || bounds.height;
  const renderedWidth = Number(canvas.dataset.renderedWidth) || bounds.width;
  const textX = x * (renderedWidth / Math.max(bounds.width, 1));
  const textY = y * (renderedHeight / Math.max(bounds.height, 1));
  const lines = pdfPageTextLines.get(pageNumber) || [];
  const nearest = lines.reduce((best, line) => {
    const distance = Math.abs(line.y - textY);
    return !best || distance < best.distance ? { line, distance } : best;
  }, null);

  const clickedWord = nearest && nearest.line ? findClickedPdfWord(nearest.line, textX) : null;
  const sourcePosition = nearest && nearest.distance < 26
    ? findBestSourcePositionForPdfText(nearest.line.text, clickedWord && clickedWord.text)
    : null;
  const fallbackLine = sourcePosition
    ? sourcePosition.line
    : approximateSourceLineFromPdfPosition(pageNumber, textY, renderedHeight);
  jumpToSourcePosition(sourcePosition || { line: fallbackLine });
}

function findClickedPdfWord(line, x) {
  const words = line.words || [];
  if (!words.length) return null;

  const direct = words.find((word) => x >= word.x - 3 && x <= word.x + word.width + 3);
  if (direct) return direct;

  return words.reduce((best, word) => {
    const center = word.x + word.width / 2;
    const distance = Math.abs(center - x);
    return !best || distance < best.distance ? { word, distance } : best;
  }, null)?.word || null;
}

function findBestSourcePositionForPdfText(lineText, clickedWord) {
  const target = normalizeSearchText(lineText);
  const targetWord = normalizeSearchText(clickedWord).split(" ")[0] || "";
  if (target.length < 5 && targetWord.length < 3) return null;

  const sourceLines = getSourceText().split("\n");
  let best = { line: -1, ch: 0, length: 0, score: 0 };

  sourceLines.forEach((line, index) => {
    const visualLine = latexToVisual(line);
    const candidate = normalizeSearchText(visualLine);
    if (!candidate) return;

    let score = 0;
    if (candidate.includes(target)) score = target.length + 100;
    else if (target.includes(candidate) && candidate.length > 8) score = candidate.length + 70;
    else {
      const targetWords = target.split(" ").filter((word) => word.length > 3);
      const candidateWords = new Set(candidate.split(" ").filter((word) => word.length > 3));
      const matches = targetWords.filter((word) => candidateWords.has(word)).length;
      score = matches * 10 + Math.min(candidate.length, target.length) / 100;
    }

    if (targetWord && candidate.includes(targetWord)) score += 35;

    if (score > best.score) {
      const wordColumn = findSourceColumnForPdfWord(line, visualLine, targetWord);
      best = {
        line: index,
        ch: wordColumn.ch,
        length: wordColumn.length,
        score
      };
    }
  });

  return best.score >= 20 ? { line: best.line, ch: best.ch, length: best.length } : null;
}

function findSourceColumnForPdfWord(sourceLine, visualLine, targetWord) {
  const firstTextColumn = Math.max(0, sourceLine.search(/\S/));
  if (!targetWord) return { ch: firstTextColumn, length: 0 };

  const tokens = Array.from(sourceLine.matchAll(/[A-Za-z0-9][A-Za-z0-9_-]*/g));
  const exact = tokens.find((match) => normalizeSearchText(match[0]) === targetWord);
  if (exact) return { ch: exact.index || firstTextColumn, length: exact[0].length };

  const fuzzy = tokens.find((match) => {
    const token = normalizeSearchText(match[0]);
    return token && (token.includes(targetWord) || targetWord.includes(token));
  });
  if (fuzzy) return { ch: fuzzy.index || firstTextColumn, length: fuzzy[0].length };

  const visualIndex = normalizeSearchText(visualLine).indexOf(targetWord);
  return {
    ch: visualIndex >= 0 ? Math.min(sourceLine.length, firstTextColumn + visualIndex) : firstTextColumn,
    length: 0
  };
}

function approximateSourceLineFromPdfPosition(pageNumber, y, pageHeight) {
  const sourceLines = getSourceText().split("\n");
  const pageProgress = (Math.max(0, pageNumber - 1) + clampNumber(y / Math.max(pageHeight, 1), 0, 1, 0)) / Math.max(renderedPdfPageCount, 1);
  return clampNumber(Math.round(pageProgress * sourceLines.length), 0, Math.max(sourceLines.length - 1, 0), 0);
}

function jumpToSourcePosition(position) {
  const sourceLines = getSourceText().split("\n");
  const line = clampNumber(position && position.line, 0, Math.max(sourceLines.length - 1, 0), 0);
  const defaultColumn = Math.max(0, sourceLines[line].search(/\S/));
  const ch = clampNumber(position && Number.isFinite(position.ch) ? position.ch : defaultColumn, 0, sourceLines[line].length, defaultColumn);
  const length = clampNumber(position && Number.isFinite(position.length) ? position.length : 0, 0, sourceLines[line].length - ch, 0);
  const cursorPosition = { line, ch };

  setMode("source");
  requestAnimationFrame(() => {
    editor.focus();
    editor.setCursor(cursorPosition);
    if (length > 0) {
      const mark = editor.markText(cursorPosition, { line, ch: ch + length }, { className: "source-word-flash" });
      setTimeout(() => mark.clear(), 900);
    }
    editor.scrollIntoView(cursorPosition, 120);
  });
}

function normalizeSearchText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function setupFileSplitter() {
  let dragStartX = 0;
  let dragStartWidth = 0;
  let collapsedDuringDrag = false;

  const stopDragging = (event) => {
    if (fileSplitter.hasPointerCapture(event.pointerId)) fileSplitter.releasePointerCapture(event.pointerId);
    document.body.classList.remove("is-resizing-files");
    window.removeEventListener("pointermove", resize);
    window.removeEventListener("pointerup", stopDragging);
    if (!collapsedDuringDrag) localStorage.setItem("latexStudioFileWidth", String(Math.round(getFileSidebarWidth())));
    renderPdf({ showLoading: false });
    scheduleTerminalFit();
  };

  const resize = (event) => {
    const bounds = workspace.getBoundingClientRect();
    const minFile = MIN_FILE_WIDTH;
    const maxFile = Math.min(MAX_FILE_WIDTH, Math.max(minFile, bounds.width - 320 - getPdfMinimumWidth() - splitter.offsetWidth - fileSplitter.offsetWidth));
    const nextWidth = dragStartWidth + event.clientX - dragStartX;
    if (nextWidth < FILE_COLLAPSE_THRESHOLD) {
      collapsedDuringDrag = true;
      setFileSidebarVisible(false);
      stopDragging(event);
      return;
    }

    const clamped = Math.min(maxFile, Math.max(minFile, nextWidth));
    workspace.style.setProperty("--file-width", `${clamped}px`);
  };

  fileSplitter.addEventListener("pointerdown", (event) => {
    if (workspace.classList.contains("files-hidden")) return;
    collapsedDuringDrag = false;
    dragStartX = event.clientX;
    dragStartWidth = filePane.getBoundingClientRect().width;
    fileSplitter.setPointerCapture(event.pointerId);
    document.body.classList.add("is-resizing-files");
    window.addEventListener("pointermove", resize);
    window.addEventListener("pointerup", stopDragging);
  });

  fileSplitter.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const currentWidth = filePane.getBoundingClientRect().width;
    const delta = event.key === "ArrowLeft" ? -24 : 24;
    const nextWidth = clampNumber(currentWidth + delta, MIN_FILE_WIDTH, MAX_FILE_WIDTH, DEFAULT_FILE_WIDTH);
    workspace.style.setProperty("--file-width", `${nextWidth}px`);
    localStorage.setItem("latexStudioFileWidth", String(Math.round(nextWidth)));
    renderPdf({ showLoading: false });
    scheduleTerminalFit();
  });
}

function setupTerminalResize() {
  let dragStartY = 0;
  let dragStartHeight = 0;

  const maxTerminalHeight = () => {
    const sourceHeight = sourcePane.getBoundingClientRect().height;
    return Math.min(MAX_TERMINAL_HEIGHT, Math.max(MIN_TERMINAL_HEIGHT, sourceHeight - 220));
  };

  const stopDragging = (event) => {
    if (terminalResizeHandle.hasPointerCapture(event.pointerId)) terminalResizeHandle.releasePointerCapture(event.pointerId);
    document.body.classList.remove("is-resizing-terminal");
    window.removeEventListener("pointermove", resize);
    window.removeEventListener("pointerup", stopDragging);
    localStorage.setItem("latexStudioTerminalHeight", String(Math.round(getTerminalHeight())));
    scheduleTerminalFit();
  };

  const resize = (event) => {
    const nextHeight = dragStartHeight + dragStartY - event.clientY;
    if (nextHeight <= TERMINAL_COLLAPSE_THRESHOLD) {
      setTerminalCollapsed(true);
      return;
    }

    if (sourcePane.classList.contains("terminal-collapsed")) setTerminalCollapsed(false);
    setTerminalHeight(clampNumber(nextHeight, MIN_TERMINAL_HEIGHT, maxTerminalHeight(), DEFAULT_TERMINAL_HEIGHT), { persist: false });
  };

  terminalResizeHandle.addEventListener("pointerdown", (event) => {
    dragStartY = event.clientY;
    dragStartHeight = sourcePane.classList.contains("terminal-collapsed") ? MIN_TERMINAL_HEIGHT : getTerminalHeight();
    terminalResizeHandle.setPointerCapture(event.pointerId);
    document.body.classList.add("is-resizing-terminal");
    window.addEventListener("pointermove", resize);
    window.addEventListener("pointerup", stopDragging);
  });

  terminalResizeHandle.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
    event.preventDefault();
    if (sourcePane.classList.contains("terminal-collapsed")) setTerminalCollapsed(false);
    const delta = event.key === "ArrowUp" ? 24 : -24;
    const nextHeight = getTerminalHeight() + delta;
    if (nextHeight <= TERMINAL_COLLAPSE_THRESHOLD) setTerminalCollapsed(true);
    else setTerminalHeight(clampNumber(nextHeight, MIN_TERMINAL_HEIGHT, maxTerminalHeight(), DEFAULT_TERMINAL_HEIGHT));
  });
}

function setupCompileLogResize() {
  let dragStartY = 0;
  let dragStartHeight = 0;

  const maxCompileLogHeight = () => {
    const previewHeight = previewPane.getBoundingClientRect().height;
    return Math.min(MAX_COMPILE_LOG_HEIGHT, Math.max(MIN_COMPILE_LOG_HEIGHT, previewHeight - 220));
  };

  const stopDragging = (event) => {
    if (compileLogResizeHandle.hasPointerCapture(event.pointerId)) compileLogResizeHandle.releasePointerCapture(event.pointerId);
    document.body.classList.remove("is-resizing-log");
    window.removeEventListener("pointermove", resize);
    window.removeEventListener("pointerup", stopDragging);
    localStorage.setItem("latexStudioCompileLogHeight", String(Math.round(getCompileLogHeight())));
  };

  const resize = (event) => {
    const nextHeight = dragStartHeight + dragStartY - event.clientY;
    if (nextHeight <= COMPILE_LOG_COLLAPSE_THRESHOLD) {
      setCompileLogCollapsed(true);
      return;
    }

    if (compileLogPanel.classList.contains("log-collapsed")) setCompileLogCollapsed(false);
    setCompileLogHeight(clampNumber(nextHeight, MIN_COMPILE_LOG_HEIGHT, maxCompileLogHeight(), DEFAULT_COMPILE_LOG_HEIGHT), { persist: false });
  };

  compileLogResizeHandle.addEventListener("pointerdown", (event) => {
    dragStartY = event.clientY;
    dragStartHeight = compileLogPanel.classList.contains("log-collapsed") ? MIN_COMPILE_LOG_HEIGHT : getCompileLogHeight();
    compileLogResizeHandle.setPointerCapture(event.pointerId);
    document.body.classList.add("is-resizing-log");
    window.addEventListener("pointermove", resize);
    window.addEventListener("pointerup", stopDragging);
  });

  compileLogResizeHandle.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
    event.preventDefault();
    if (compileLogPanel.classList.contains("log-collapsed")) setCompileLogCollapsed(false);
    const delta = event.key === "ArrowUp" ? 24 : -24;
    const nextHeight = getCompileLogHeight() + delta;
    if (nextHeight <= COMPILE_LOG_COLLAPSE_THRESHOLD) setCompileLogCollapsed(true);
    else setCompileLogHeight(clampNumber(nextHeight, MIN_COMPILE_LOG_HEIGHT, maxCompileLogHeight(), DEFAULT_COMPILE_LOG_HEIGHT));
  });
}

function setupSplitter() {
  let dragStartX = 0;
  let dragStartWidth = 0;

  const stopDragging = (event) => {
    if (splitter.hasPointerCapture(event.pointerId)) splitter.releasePointerCapture(event.pointerId);
    document.body.classList.remove("is-resizing");
    window.removeEventListener("pointermove", resize);
    window.removeEventListener("pointerup", stopDragging);
    renderPdf({ showLoading: false });
  };

  const resize = (event) => {
    const bounds = workspace.getBoundingClientRect();
    const fileWidth = workspace.classList.contains("files-hidden")
      ? fileRail.getBoundingClientRect().width
      : filePane.getBoundingClientRect().width + fileSplitter.offsetWidth;
    const nextWidth = dragStartWidth + event.clientX - dragStartX;
    const minLeft = 320;
    const minRight = Math.min(760, Math.max(getPdfMinimumWidth(), bounds.width * 0.4));
    const maxLeft = Math.max(minLeft, bounds.width - fileWidth - minRight - splitter.offsetWidth);
    const clamped = Math.min(maxLeft, Math.max(minLeft, nextWidth));
    workspace.style.setProperty("--editor-width", `${clamped}px`);
  };

  splitter.addEventListener("pointerdown", (event) => {
    dragStartX = event.clientX;
    dragStartWidth = document.querySelector(".source-pane").getBoundingClientRect().width;
    splitter.setPointerCapture(event.pointerId);
    document.body.classList.add("is-resizing");
    window.addEventListener("pointermove", resize);
    window.addEventListener("pointerup", stopDragging);
  });

  splitter.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    const bounds = workspace.getBoundingClientRect();
    const fileWidth = workspace.classList.contains("files-hidden")
      ? fileRail.getBoundingClientRect().width
      : filePane.getBoundingClientRect().width + fileSplitter.offsetWidth;
    const minRight = Math.min(760, Math.max(getPdfMinimumWidth(), bounds.width * 0.4));
    const maxLeft = Math.max(320, bounds.width - fileWidth - minRight - splitter.offsetWidth);
    const currentWidth = document.querySelector(".source-pane").getBoundingClientRect().width;
    const delta = event.key === "ArrowLeft" ? -32 : 32;
    workspace.style.setProperty("--editor-width", `${Math.min(maxLeft, Math.max(320, currentWidth + delta))}px`);
    renderPdf({ showLoading: false });
  });
}

function updateLogState() {
  previewPane.classList.toggle("log-collapsed", compileLogPanel.classList.contains("log-collapsed"));
}

function updateStats() {
  const text = getSourceText();
  const lines = text ? text.split("\n").length : 0;
  const words = (text.match(/\b[\w'-]+\b/g) || []).length;
  sourceStats.textContent = `${lines.toLocaleString()} lines · ${words.toLocaleString()} words`;
  updateRelativeLineNumbers();
}

function setSaveState(message, type) {
  saveState.textContent = message;
  setStatusClass(saveState, type);
  updateTopSaveStatus(message, type);
}

function updateTopSaveStatus(message, type) {
  const status = saveStatusForMessage(message, type);
  topSaveStatusButton.dataset.saveStatus = status.kind;
  topSaveStatusButton.title = message;
  topSaveStatusLabel.textContent = status.label;
}

function saveStatusForMessage(message, type) {
  const text = String(message || "").toLowerCase();

  if (type === "error" || text.includes("failed")) return { kind: "error", label: "Error" };
  if (text.includes("saving") || text.includes("pending") || text.includes("loading")) return { kind: "busy", label: "Saving" };
  if (text.includes("unsaved")) return { kind: "unsaved", label: "Unsaved" };
  if (type === "ok" || text.includes("saved")) return { kind: "saved", label: "Saved" };
  return { kind: "neutral", label: message || "Not loaded" };
}

function setCompileState(message, type) {
  compileState.textContent = message;
  setStatusClass(compileState, type);
}

function setStatusClass(node, type) {
  node.classList.remove("status-ok", "status-error");
  if (type === "ok") node.classList.add("status-ok");
  if (type === "error") node.classList.add("status-error");
}

function setBusy(value) {
  saveButton.disabled = value;
  compileButton.disabled = value;
  openPdfButton.disabled = value;
  downloadPdfButton.disabled = value;
}

function setProjectBusy(value) {
  addProjectButton.disabled = value;
  templatesButton.disabled = value;
  importTemplateButton.disabled = value;
  refreshProjectsButton.disabled = value;
}

function timeStamp() {
  return new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

function relativeTime(value) {
  if (!value) return "recently";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "recently";

  const seconds = Math.round((Date.now() - date.getTime()) / 1000);
  if (seconds < 60) return "just now";

  const minutes = Math.round(seconds / 60);
  if (minutes < 60) return `${minutes} min ago`;

  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours} hr ago`;

  const days = Math.round(hours / 24);
  if (days < 14) return `${days} day${days === 1 ? "" : "s"} ago`;

  return date.toLocaleDateString([], { month: "short", day: "numeric", year: "numeric" });
}

function formatError(error) {
  if (!error) return "Unknown error.";
  if (typeof error === "string") return error;
  return error.message || JSON.stringify(error, null, 2);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function extractVisualMeta(tex) {
  return {
    title: latexToVisual(extractCommandBody(tex, "title"))
  };
}

function extractCommandBody(tex, command) {
  const pattern = new RegExp(`\\\\${command}\\{`);
  const match = pattern.exec(tex);
  if (!match) return "";

  let depth = 1;
  let cursor = match.index + match[0].length;
  while (cursor < tex.length) {
    const char = tex[cursor];
    const previous = tex[cursor - 1];
    if (char === "{" && previous !== "\\") depth += 1;
    if (char === "}" && previous !== "\\") depth -= 1;
    if (depth === 0) return tex.slice(match.index + match[0].length, cursor);
    cursor += 1;
  }

  return "";
}

function extractCommandArguments(tex, command, count) {
  const pattern = new RegExp(`\\\\${command}\\*?`);
  const match = pattern.exec(tex);
  if (!match) return [];

  const args = [];
  let cursor = match.index + match[0].length;

  while (args.length < count && cursor < tex.length) {
    while (/\s/.test(tex[cursor] || "")) cursor += 1;
    if (tex[cursor] !== "{") break;

    const start = cursor + 1;
    let depth = 1;
    cursor = start;

    while (cursor < tex.length) {
      const char = tex[cursor];
      const previous = tex[cursor - 1];
      if (char === "{" && previous !== "\\") depth += 1;
      if (char === "}" && previous !== "\\") depth -= 1;
      if (depth === 0) {
        args.push(tex.slice(start, cursor));
        cursor += 1;
        break;
      }
      cursor += 1;
    }
  }

  return args;
}

function leadingWhitespaceLength(value) {
  const match = value.match(/^\s*/);
  return match ? match[0].length : 0;
}

function trailingWhitespaceLength(value) {
  const match = value.match(/\s*$/);
  return match ? match[0].length : 0;
}
