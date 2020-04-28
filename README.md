# react-extension  
extension for create-react-app  
REM React React-router Redux Redux-Saga  
npm i --save react-router-dom  
npm i --save redux react-redux redux-saga react-router-redux  
npm i --save redux-devtools-extension  

REM Library  
npm i axios  
npm i rimraf  
npm i react-modal
npm i materialize-css@next  
npm i react-textarea-autosize
npm i --save prop-types  
npm i --save styled-components  
npm i --save react-virtualized  

REM Format-code  
npm i --save-dev eslint eslint-config-airbnb eslint-config-prettier eslint-loader  
npm i --save-dev eslint-plugin-babel eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react  
npm i --save-dev prettier  
npm i --save-dev husky  

REM Bundler  
npm i --save-dev webpack webpack-cli webpack-dev-server webpack-merge webpack-jarvis  
npm i --save-dev html-webpack-plugin clean-webpack-plugin  
npm i --save-dev css-loader img-loader html-loader url-loader file-loader style-loader postcss-loader  
npm i --save-dev extract-text-webpack-plugin sass-loader node-sass webpack mini-css-extract-plugin  
npm i --save-dev webpack-bundle-analyzer  
npm i --save-dev webpack-pwa-manifest compression-webpack-plugin

Config VS Code  
----Install plugin------------------------------------------------------------------------------  

1. Dracula Official  
2. vscode-icons  
3. font FiraCode  
4. GitLens  
5. Git History  
6. Bracket Pair Colorizer  
7. Bookmarks  
8. Code Spell Checker  
9. Settings Sync  
10. Auto Import  
11. Auto close tag  
12. Auto rename tag  
13. Import Cost  
14. npm Intellisense  
15. ESlint  
16. Prettier - Code formatter  
17. Visual Studio IntelliCode  
18. TabNine  
19. ES7 React/Redux/GraphQL/React-Native snippets  
20. IntelliJ IDEA Keybindings  
21. Editor config for VS Code  

MaterializeCSS
import M from 'materialize-css';

setting.json
{
    "workbench.startupEditor": "newUntitledFile",
    "workbench.iconTheme": "vscode-icons",
    "workbench.colorTheme": "Dracula",
    "editor.fontLigatures": true,
    "editor.fontFamily": "'FiraCode-Retina'",
    "editor.fontSize": 15,
    "editor.codeActionsOnSave": null,
    "editor.suggestSelection": "first",
    "editor.multiCursorModifier": "ctrlCmd",
    "editor.formatOnPaste": true,
    "prettier.useEditorConfig": false,
    "prettier.tabWidth": 4,
    "prettier.useTabs": true,
    "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[css]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "files.autoSave": "off",
    "git.autofetch": true,
    "javascript.updateImportsOnFileMove.enabled": "always",
    "terminal.integrated.shell.windows": "C:\\WINDOWS\\System32\\cmd.exe",
    "emmet.includeLanguages": {
        "javascript": "javascriptreact"
    },
    "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
    "files.exclude": {
        "**/.classpath": true,
        "**/.project": true,
        "**/.settings": true,
        "**/.factorypath": true
    }
}  
