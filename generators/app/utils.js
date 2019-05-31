const questions = [
  {
    type: "input",
    name: "name",
    message: "Please tell me your proyect name",
    default: "new-app"
  },
  {
    type: "confirm",
    name: "folder",
    message: "Do you want to create a new folder for the app?",
    default: true
  },
  {
    type: "confirm",
    name: "manager",
    message: "Do you want to use yarn as the package manager?",
    default: true
  },
  {
    type: "list",
    name: "styles",
    message: "What kind of styles language do you want?",
    choices: ["css", "sass", "css-in-js"]
  }
];

const addQuestions = [
  {
    type: "input",
    name: "componentName",
    message: "Please tell me your component name",
    default: "NewComponent"
  },
  {
    type: "list",
    name: "feature",
    message: "Is this a component or a container?",
    choices: ["component", "container"]
  }
];

const configurationFiles = [".prettierrc.js",".eslintrc.js", "tsconfig.json", "package.json"];

const commonFiles = [
  "src/components/HelloWorld/IHelloWorldProps.ts",
  "src/components/HelloWorld/HelloWorld.tsx",
  "src/index.tsx",
  "src/index.html",
  "test",
  "webpack/plugins/html.ts",
  "webpack/plugins/uglify.ts",
  "webpack/plugins/ts-checker.ts",
  "webpack/webpack.dev.ts",
  "webpack/webpack.common.ts",
  "webpack/webpack.prod.ts",
  "index.js"
];

const sourceFilesCss = [
  "src/components/HelloWorld/HelloWorld.css",
  // "webpack/webpack.common.css.ts",
  // "webpack/webpack.prod.ts",
  "webpack/plugins/css.ts",
  "test/mocks/styleMock.ts",
  ...commonFiles
];

const sourceFilesSass = [
  "src/components/HelloWorld/HelloWorld.scss",
  // "webpack/webpack.common.sass.ts",
  // "webpack/webpack.prod.ts",
  "webpack/plugins/css.ts",
  "test/mocks/styleMock.ts",
  ...commonFiles
];

const sourceFilesCssInJS = [
  "src/components/HelloWorld/HelloWorld.styles.ts",
  // "webpack/webpack.common.cssinjs.ts",
  // "webpack/webpack.prod.cssinjs.ts",
  ...commonFiles
];

module.exports = {
  questions,
  addQuestions,
  configurationFiles,
  sourceFilesCss,
  sourceFilesSass,
  sourceFilesCssInJS
};
