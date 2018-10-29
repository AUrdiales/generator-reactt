# Generator RRT

## What is this package

This package is a yeoman generator for react + typescript applications.

### Features

- Create a react app with webpack + tslint + typescript + react to make frontend projects.

- Choose between css, scss and css in js for the styles of your app.

- Testing suite with mocha + chai + enzyme and karma.

- Simplicity to add react-router, redux or any package of the ecosystem.

- Create component feature to have a templated component ready fast.

### Future updates


- ~~Add emotion for css in js support.~~

- ~~Implement a create component feature to allow the developers to have a templated component ready fast.~~

- Use Jest instead of karma + mocha + chai.

- Allow the creation of React + Redux + React Router proyects.

## Getting Started

### Prerequisites

- Install node.js and npm.
- Install yo package to execute yeoman generators
```
npm i -g yo
```
### Install
```
npm i -g generator-reactt
```

### Usage
```
yo reactt
```

Answer the questions and get your app.

### Scripts

Once you have your application you can use these scripts.

- The start script will allow you to serve your application on a basic express server.
```
npm run start
```
- The clean script will clean the dist folder content with compiler files.
```
npm run clean
```
- The build script will allow you to compile your typescript/css on production mode.
```
npm run build
```
- The serve script will start a webpack-dev-server with hot reloading for development purposes.
```
npm run serve
```
- The test script will start the testing framework and check all files that end on .test.ts
```
npm run test
```
### CLI

The generator accepts the following options.

- Remove the install dependencies step to allow the developer to install manually dependencies.
```
yo reactt --skip-install
```
- Add the name of the project.
```
yo reactt myProject
```

These two functionalities can be used together.
```
yo reactt myProject --skip-install
```

# License

This project is licensed under the MIT License.

# Authors

**Alejandro** **Urdiales**.