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

  configuring() {
    this._private_copyConfigurationFiles();
  }

  writing() {
    this._private_copySourceFiles();
  }

  conflicts() {
    // handle errors
  }

  install() {
    this._private_installDependencies();
    this.config.set("stack", "react");
    this.config.set("manager", this.answers.manager ? "yarn" : "npm");
    this.config.set("styles", this.answers.styles);
    this.config.save();
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
