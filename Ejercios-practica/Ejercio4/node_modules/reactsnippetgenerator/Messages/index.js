const chalk = require("chalk");

/* Success Message */
const successMessage = (type, name) => {
    console.log(chalk.green.bold(`${name} ${type} generated successfully! 😁`));
};

/* Error Message */
const errorMessage = (error) => {
	console.log(error.message);
	console.log(
		chalk.green.bold(
			`Unable to generate 🤕, check the above log for reference 😅`
		)
	);
	process.exit(1);
};


module.exports = {
    successMessage,
    errorMessage
}