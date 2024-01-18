const fs = require("fs");
const path = require("path");

/* Template path */
const { TSX_TEMPLATE_PATH, SCSS_TEMPLATE_PATH } = require("../constants");

/* Messages */
const { successMessage, errorMessage } = require("../Messages");
const { convertFirstLetterToUpper } = require("../utils/helpers");

/* Helper function */
const {
	stringReplace,
	convertFirstLetterToLower,
	convertToHyphenated,
} = require(path.join("..", "utils", "helpers"));

const getFileName = (fileName) => {
	const path = fileName.split("/");
	return path[path.length - 1];
};

/* Write file generator */
const generateFile = (filePath, context) => {
	return fs.writeFileSync(filePath, context);
};

/* Generate file */
const generateTemplate = async (fileName, templatePath, filePath) => {
	const template = await fs.readFileSync(templatePath);
	let content = stringReplace(template, /index/g, fileName);
	content = stringReplace(
		content,
		/componentClass/g,
		convertToHyphenated(fileName)
	);
	content = stringReplace(
		content,
		/cssFileName/g,
		convertFirstLetterToLower(fileName)
	);
	content = stringReplace(content, /ComponentProps/g, `${convertFirstLetterToUpper(fileName)}Props`);
	return generateFile(filePath, content);
};

exports.reactSnippetGenerator = async (type, name) => {
	try {
		const FILE_NAME = name.charAt(0).toUpperCase() + name.slice(1);
		/* generate code base path */
		const basePath = path.join(
			"src",
			type === "components" ? `shared/${type}` : type,
			FILE_NAME
		);
		const fileName = getFileName(FILE_NAME);
		const indexFilePath = path.join(basePath, "index.tsx");
		const scssFilePath = path.join(
			basePath,
			`${convertFirstLetterToLower(fileName)}.scss`
		);

		await fs.mkdirSync(basePath, { recursive: true });

		/* Generate tsx file */
		await generateTemplate(fileName, TSX_TEMPLATE_PATH, indexFilePath);

		/* Generate scss file */
		await generateTemplate(fileName, SCSS_TEMPLATE_PATH, scssFilePath);
		successMessage(type, name);
		process.exit(0);
	} catch (error) {
		errorMessage(error);
	}
};
