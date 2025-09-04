# Bartman's Minimal Electron Project Template

## Technologies

[Electron](https://www.electronjs.org): Electron enables the development of desktop applications using web technologies. It brings the power of Node.js and Chromium to build cross-platform apps with ease.

[Vite](https://vitejs.dev): Vite is a lightning-fast build tool for web applications. It optimizes the development experience with near-instantaneous hot module replacement (HMR) and an efficient build process.

[TypeScript](https://www.typescriptlang.org): TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

[Svelte](https://svelte.dev): Svelte is a revolutionary JavaScript framework that compiles your code to highly efficient JavaScript at build time. It offers a refreshing approach to building web applications by eliminating runtime overhead and delivering exceptional performance.

[Tailwind](https://tailwindcss.com): Tailwind CSS is a utility-first CSS framework that empowers developers to rapidly build custom user interfaces. With its extensive set of utility classes, Tailwind CSS enables you to create visually stunning and responsive designs effortlessly.

## Troubleshooting

It appears that Ubuntu 24.04+ enforces stricter AppArmor policies that will cause problems when trying to run development builds of Electron projects. I have found that the most sane and reliable way around this issue is to run the following commands whenever you (re)install the project dependencies:

`sudo chown root ./node_modules/electron/dist/chrome-sandbox`
`sudo chmod 4755 ./node_modules/electron/dist/chrome-sandbox`

## Visual Studio Extensions

[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): Integrates ESLint JavaScript into VS Code.

[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Code formatter using prettier

[Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode): Svelte language support for VS Code

## Visual Studio Settings

```
{
  // telemetry
  "telemetry.feedback.enabled": false,
  "telemetry.editStats.enabled": false,
  "telemetry.telemetryLevel": "off",

  // editor
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.fontFamily": "JetBrains Mono, Consolas, 'Courier New', monospace",
  "editor.fontLigatures": false,
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "editor.insertSpaces": true,

  // workbench
  "workbench.startupEditor": "none",
  "workbench.settings.applyToAllProfiles": [],

  // suggestions
  "typescript.suggestionActions.enabled": false,
  "javascript.suggestionActions.enabled": false,

  // linting
  "css.lint.unknownAtRules": "ignore",

  // files
  "files.eol": "\n",
  "files.exclude": {
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true,
    "**/.vite": true,
    "**/Thumbs.db": true,
    "**/node_modules": true,
    "**/package-lock.json": true
  },

  // prettier
  "prettier.requireConfig": true,

  // eslint
  "eslint.format.enable": true,
  "eslint.validate": [
    "javascript",
    "typescript",
    "svelte"
  ],

  // svelte
  "[svelte]": {
    "editor.defaultFormatter": "svelte.svelte-vscode"
  },
  "svelte.enable-ts-plugin": true,
}
```
