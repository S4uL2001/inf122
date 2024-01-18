exports.convertToHyphenated = (name) => {
	let convertedName = "";

	name.split("").map((word, index) => {
		if (index === 0) {
			convertedName += word.toLowerCase();
			return;
		}
		if (word === word.toLowerCase()) {
			convertedName += word;
			return;
		}
		convertedName += "-" + word.toLowerCase();
	});
    return convertedName;
};


exports.convertFirstLetterToLower = (name) => name.charAt(0).toLowerCase() + name.slice(1);

exports.convertFirstLetterToUpper = (name) => name.charAt(0).toUpperCase() + name.slice(1);

exports.stringReplace = (content, match, fileName) => {
    return content.toString().replace(match, fileName);
}