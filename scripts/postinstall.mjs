const isAgentDeskBundleInstall = process.cwd().includes("AgentDesk.app/Contents/Resources/app");

if (!isAgentDeskBundleInstall) {
  console.log(`
AgentDesk installed.

macOS desktop app:
  npx agentdesk install

Local development:
  npm start
`);
}
