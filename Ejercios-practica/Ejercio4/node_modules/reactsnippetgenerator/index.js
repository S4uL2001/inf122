#! /usr/bin/env node
const inquirer = require("inquirer");
const { reactSnippetGenerator } = require("./GenerateReactFile");
const { reduxSnippetGenerator } = require("./GenerateReduxFile");
const { errorMessage } = require("./Messages");

const initGenerator = async () => {
	try {
		const { type, name } = await inquirer.prompt([
			{
				name: "type",
				message: "What you want to generate",
				type: "list",
				choices: ["views", "components", "redux-snippet"],
			},
			{
				name: "name",
				message: "Enter the name of component/view",
				type: "input",
			},
		]);

		switch (type) {
			case "redux-snippet":
				reduxSnippetGenerator(name);
				return;
			default:
				reactSnippetGenerator(type, name);
		}
	} catch (error) {
		errorMessage(error);
	}
};

initGenerator();
