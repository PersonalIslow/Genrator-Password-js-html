const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

function generateRandomChar(useUppercase, useLowercase, useNumbers, useSymbols) {
	let possibleChars = "";
	if (useUppercase) {
		possibleChars += uppercaseChars;
	}
	if (useLowercase) {
		possibleChars += lowercaseChars;
	}
	if (useNumbers) {
		possibleChars += numberChars;
	}
	if (useSymbols) {
		possibleChars += symbolChars;
	}
	return possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
}

function generateRandomString(numCharacters, useUppercase, useLowercase, useNumbers, useSymbols) {
	let result = "";
	for (let i = 0; i < numCharacters; i++) {
		result += generateRandomChar(useUppercase, useLowercase, useNumbers, useSymbols);
	}
	return result;
}

const generateButton = document.getElementById("generate-button");
generateButton.addEventListener("click", function() {
	const numCharacters = document.getElementById("num-characters").value;
	const useUppercase = document.getElementById("use-uppercase").