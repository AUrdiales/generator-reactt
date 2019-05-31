const Generator = require("yeoman-generator");
const yosay = require("yosay");
const chalk = require("chalk");

const utils = require("./utils");
const packages = require("./packages");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.appname = "new-app";
    this.argument("name", { type: String, required: false });
    this.option("skip-install");
    this.configured = this.config.getAll();
  }

  initializing() {
    this.log(
      yosay(
        `Welcome to the React Generator. Please ask a few questions to get up application set up.`
      )
    );
  }

  async prompting() {
    let questions;
    if (this.config.get("manager")) {
      questions = utils.addQuestions;
      this.answers = await this.prompt(questions);
    } else {
      questions = utils.questions;
      if (this.options["skip-install"]) {
        questions = questions.filter(question => question.name !== "manager");
      }
      if (this.options.name) {
        questions = questions.filter(question => question.name !== "name");
      }
      this.answers = await this.prompt(questions);
      this._private_setAppName();
    }
  }

  configuring() {
    if (!this.config.get("manager")) {
      this._private_copyConfigurationFiles();
    }
  }

  writing() {
    if (this.config.get("manager")) {
      this._private_copyAddFeature();
    } else {
      this._private_copySourceFiles();
    }
  }

  conflicts() {
    // handle errors
  }

  install() {
    if (!this.configured.manager) {
      this._private_installDependencies();
      this.config.set("stack", "react");
      this.config.set("manager", this.answers.manager ? "yarn" : "npm");
      this.config.set("styles", this.answers.styles);
      this.config.save();
    }
  }

  end() {
    this.log(
      yosay(
        `Thanks for using my generator! if you have any suggestion for it please contact me on GitHub!`
      )
    );
  }
  /*
		Private methods to help on the generation
	*/
  _private_setAppName() {
    if (this.answers.name) {
      this.appname = this.answers.name;
    } else {
      this.appname = this.options.name;
    }
    if (this.answers.folder) {
      this.destinationRoot(this.appname);
    }
  }
  _private_copyConfigurationFiles() {
    if (this.answers.styles === "css") {
      utils.configurationFiles.forEach(file => {
        this.fs.copyTpl(
          this.templatePath(`completeApp/${file}`),
          this.destinationPath(file.replace(/\.css\./, ".")),
          {
            name: this.appname,
            styles: this.answers.styles
          }
        );
      });
      this.fs.extendJSON(
        this.destinationPath(`package.json`),
        packages.cssDependencies
      );
    } else if (this.answers.styles === "sass") {
      utils.configurationFiles.forEach(file => {
        this.fs.copyTpl(
          this.templatePath(`completeApp/${file}`),
          this.destinationPath(file.replace(/\.sass\./, ".")),
          {
            name: this.appname,
            styles: this.answers.styles
          }
        );
      });
      this.fs.extendJSON(
        this.destinationPath(`package.json`),
        packages.sassDependencies
      );
    } else if (this.answers.styles === "css-in-js") {
      utils.configurationFiles.forEach(file => {
        this.fs.copyTpl(
          this.templatePath(`completeApp/${file}`),
          this.destinationPath(file.replace(/\.cssinjs\./, ".")),
          {
            name: this.appname,
            styles: this.answers.styles
          }
        );
      });
      this.fs.extendJSON(
        this.destinationPath(`package.json`),
        packages.cssInJSDependencies
      );
    }
  }

  _private_copySourceFiles() {
    if (this.answers.styles === "css") {
      utils.sourceFilesCss.forEach(file => {
        this.fs.copyTpl(
          this.templatePath(`completeApp/${file}`),
          this.destinationPath(file.replace(/\.css\./, ".")),
          {
            name: this.appname,
            styles: this.answers.styles
          }
        );
      });
    } else if (this.answers.styles === "sass") {
      utils.sourceFilesSass.forEach(file => {
        this.fs.copyTpl(
          this.templatePath(`completeApp/${file}`),
          this.destinationPath(file.replace(/\.sass\./, ".")),
          {
            name: this.appname,
            styles: this.answers.styles
          }
        );
      });
    } else if (this.answers.styles === "css-in-js") {
      utils.sourceFilesCssInJS.forEach(file => {
        this.fs.copyTpl(
          this.templatePath(`completeApp/${file}`),
          this.destinationPath(file.replace(/\.cssinjs\./, ".")),
          {
            name: this.appname,
            styles: this.answers.styles
          }
        );
      });
    }
  }

  _private_copyAddFeature() {
    const name = `${this.answers.componentName
      .charAt(0)
      .toUpperCase()}${this.answers.componentName.slice(1)}`;
    if (this.answers.feature === "component") {
      if (this.configured.styles === "css") {
        this.destinationRoot(`${process.cwd()}/src/components/${name}`);
        this.fs.copyTpl(
          this.templatePath(`component/Component.css.tsx`),
          this.destinationPath(`${name}.tsx`),
          {
            name: name
          }
        );
      } else if (this.configured.styles === "sass") {
        this.destinationRoot(`${process.cwd()}/src/components/${name}`);
        this.fs.copyTpl(
          this.templatePath(`component/Component.sass.tsx`),
          this.destinationPath(`${name}.tsx`),
          {
            name: name
          }
        );
      } else if (this.configured.styles === "css-in-js") {
        this.destinationRoot(`${process.cwd()}/src/components/${name}`);
        this.fs.copyTpl(
          this.templatePath(`component/Component.cssinjs.tsx`),
          this.destinationPath(`${name}.tsx`),
          {
            name: name
          }
        );
      }
    } else {
      if (this.configured.styles === "css") {
        this.destinationRoot(`${process.cwd()}/src/containers/${name}`);
        this.fs.copyTpl(
          this.templatePath(`component/Container.css.tsx`),
          this.destinationPath(`${name}.tsx`),
          {
            name: name
          }
        );
      } else if (this.configured.styles === "sass") {
        this.destinationRoot(`${process.cwd()}/src/containers/${name}`);
        this.fs.copyTpl(
          this.templatePath(`component/Container.sass.tsx`),
          this.destinationPath(`${name}.tsx`),
          {
            name: name
          }
        );
      } else if (this.configured.styles === "css-in-js") {
        this.destinationRoot(`${process.cwd()}/src/containers/${name}`);
        this.fs.copyTpl(
          this.templatePath(`component/Container.cssinjs.tsx`),
          this.destinationPath(`${name}.tsx`),
          {
            name: name
          }
        );
      }
    }
    if (this.configured.styles === "css") {
      this.fs.copyTpl(
        this.templatePath(`Component/Component.css`),
        this.destinationPath(`${name}.css`)
      );
    } else if (this.configured.styles === "sass") {
      this.fs.copyTpl(
        this.templatePath(`Component/Component.css`),
        this.destinationPath(`${name}.scss`)
      );
    } else if (this.configured.styles === "css-in-js") {
      this.fs.copyTpl(
        this.templatePath(`Component/Component.styles.ts`),
        this.destinationPath(`${name}.styles.ts`)
      );
    }
    this.fs.copyTpl(
      this.templatePath(`component/IComponentProps.ts`),
      this.destinationPath(`I${name}Props.ts`),
      {
        name: name
      }
    );
    if (this.answers.feature === "component") {
      process.chdir("../../../");
      this.log(process.cwd());
      this.destinationRoot(`${process.cwd()}/test/${name}`);
      this.fs.copyTpl(
        this.templatePath(`component/Component.test.tsx`),
        this.destinationPath(`${name}.test.tsx`),
        {
          name: name
        }
      );
    } else {
      process.chdir("../../../");
      this.log(process.cwd());
      this.destinationRoot(`${process.cwd()}/test/${name}`);
      this.fs.copyTpl(
        this.templatePath(`component/Container.test.tsx`),
        this.destinationPath(`${name}.test.tsx`),
        {
          name: name
        }
      );
    }
  }

  _private_installDependencies() {
    if (!this.options["skip-install"]) {
      if (this.answers.manager) {
        this.log(
          `${chalk.grey("\nInstalling dependencies with")} ${chalk.blue(
            "yarn"
          )}\n`
        );
        this.yarnInstall();
      } else {
        this.log(
          `${chalk.grey("\nInstalling dependencies with")} ${chalk.green(
            "npm"
          )}\n`
        );
        this.npmInstall();
      }
    }
  }
};
