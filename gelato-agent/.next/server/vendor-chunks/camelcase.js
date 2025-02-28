"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/camelcase";
exports.ids = ["vendor-chunks/camelcase"];
exports.modules = {

/***/ "(rsc)/./node_modules/camelcase/index.js":
/*!*****************************************!*\
  !*** ./node_modules/camelcase/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("\n\nconst UPPERCASE = /[\\p{Lu}]/u;\nconst LOWERCASE = /[\\p{Ll}]/u;\nconst LEADING_CAPITAL = /^[\\p{Lu}](?![\\p{Lu}])/gu;\nconst IDENTIFIER = /([\\p{Alpha}\\p{N}_]|$)/u;\nconst SEPARATORS = /[_.\\- ]+/;\n\nconst LEADING_SEPARATORS = new RegExp('^' + SEPARATORS.source);\nconst SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, 'gu');\nconst NUMBERS_AND_IDENTIFIER = new RegExp('\\\\d+' + IDENTIFIER.source, 'gu');\n\nconst preserveCamelCase = (string, toLowerCase, toUpperCase) => {\n\tlet isLastCharLower = false;\n\tlet isLastCharUpper = false;\n\tlet isLastLastCharUpper = false;\n\n\tfor (let i = 0; i < string.length; i++) {\n\t\tconst character = string[i];\n\n\t\tif (isLastCharLower && UPPERCASE.test(character)) {\n\t\t\tstring = string.slice(0, i) + '-' + string.slice(i);\n\t\t\tisLastCharLower = false;\n\t\t\tisLastLastCharUpper = isLastCharUpper;\n\t\t\tisLastCharUpper = true;\n\t\t\ti++;\n\t\t} else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character)) {\n\t\t\tstring = string.slice(0, i - 1) + '-' + string.slice(i - 1);\n\t\t\tisLastLastCharUpper = isLastCharUpper;\n\t\t\tisLastCharUpper = false;\n\t\t\tisLastCharLower = true;\n\t\t} else {\n\t\t\tisLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;\n\t\t\tisLastLastCharUpper = isLastCharUpper;\n\t\t\tisLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;\n\t\t}\n\t}\n\n\treturn string;\n};\n\nconst preserveConsecutiveUppercase = (input, toLowerCase) => {\n\tLEADING_CAPITAL.lastIndex = 0;\n\n\treturn input.replace(LEADING_CAPITAL, m1 => toLowerCase(m1));\n};\n\nconst postProcess = (input, toUpperCase) => {\n\tSEPARATORS_AND_IDENTIFIER.lastIndex = 0;\n\tNUMBERS_AND_IDENTIFIER.lastIndex = 0;\n\n\treturn input.replace(SEPARATORS_AND_IDENTIFIER, (_, identifier) => toUpperCase(identifier))\n\t\t.replace(NUMBERS_AND_IDENTIFIER, m => toUpperCase(m));\n};\n\nconst camelCase = (input, options) => {\n\tif (!(typeof input === 'string' || Array.isArray(input))) {\n\t\tthrow new TypeError('Expected the input to be `string | string[]`');\n\t}\n\n\toptions = {\n\t\tpascalCase: false,\n\t\tpreserveConsecutiveUppercase: false,\n\t\t...options\n\t};\n\n\tif (Array.isArray(input)) {\n\t\tinput = input.map(x => x.trim())\n\t\t\t.filter(x => x.length)\n\t\t\t.join('-');\n\t} else {\n\t\tinput = input.trim();\n\t}\n\n\tif (input.length === 0) {\n\t\treturn '';\n\t}\n\n\tconst toLowerCase = options.locale === false ?\n\t\tstring => string.toLowerCase() :\n\t\tstring => string.toLocaleLowerCase(options.locale);\n\tconst toUpperCase = options.locale === false ?\n\t\tstring => string.toUpperCase() :\n\t\tstring => string.toLocaleUpperCase(options.locale);\n\n\tif (input.length === 1) {\n\t\treturn options.pascalCase ? toUpperCase(input) : toLowerCase(input);\n\t}\n\n\tconst hasUpperCase = input !== toLowerCase(input);\n\n\tif (hasUpperCase) {\n\t\tinput = preserveCamelCase(input, toLowerCase, toUpperCase);\n\t}\n\n\tinput = input.replace(LEADING_SEPARATORS, '');\n\n\tif (options.preserveConsecutiveUppercase) {\n\t\tinput = preserveConsecutiveUppercase(input, toLowerCase);\n\t} else {\n\t\tinput = toLowerCase(input);\n\t}\n\n\tif (options.pascalCase) {\n\t\tinput = toUpperCase(input.charAt(0)) + input.slice(1);\n\t}\n\n\treturn postProcess(input, toUpperCase);\n};\n\nmodule.exports = camelCase;\n// TODO: Remove this for the next major release\nmodule.exports[\"default\"] = camelCase;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvY2FtZWxjYXNlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLHVCQUF1QixHQUFHO0FBQzFCLHVCQUF1QixHQUFHO0FBQzFCLDhCQUE4QixHQUFHLFFBQVEsR0FBRztBQUM1Qyx5QkFBeUIsTUFBTSxHQUFHLEVBQUU7QUFDcEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2VsYXRvLy4vbm9kZV9tb2R1bGVzL2NhbWVsY2FzZS9pbmRleC5qcz9hMDRmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVVBQRVJDQVNFID0gL1tcXHB7THV9XS91O1xuY29uc3QgTE9XRVJDQVNFID0gL1tcXHB7TGx9XS91O1xuY29uc3QgTEVBRElOR19DQVBJVEFMID0gL15bXFxwe0x1fV0oPyFbXFxwe0x1fV0pL2d1O1xuY29uc3QgSURFTlRJRklFUiA9IC8oW1xccHtBbHBoYX1cXHB7Tn1fXXwkKS91O1xuY29uc3QgU0VQQVJBVE9SUyA9IC9bXy5cXC0gXSsvO1xuXG5jb25zdCBMRUFESU5HX1NFUEFSQVRPUlMgPSBuZXcgUmVnRXhwKCdeJyArIFNFUEFSQVRPUlMuc291cmNlKTtcbmNvbnN0IFNFUEFSQVRPUlNfQU5EX0lERU5USUZJRVIgPSBuZXcgUmVnRXhwKFNFUEFSQVRPUlMuc291cmNlICsgSURFTlRJRklFUi5zb3VyY2UsICdndScpO1xuY29uc3QgTlVNQkVSU19BTkRfSURFTlRJRklFUiA9IG5ldyBSZWdFeHAoJ1xcXFxkKycgKyBJREVOVElGSUVSLnNvdXJjZSwgJ2d1Jyk7XG5cbmNvbnN0IHByZXNlcnZlQ2FtZWxDYXNlID0gKHN0cmluZywgdG9Mb3dlckNhc2UsIHRvVXBwZXJDYXNlKSA9PiB7XG5cdGxldCBpc0xhc3RDaGFyTG93ZXIgPSBmYWxzZTtcblx0bGV0IGlzTGFzdENoYXJVcHBlciA9IGZhbHNlO1xuXHRsZXQgaXNMYXN0TGFzdENoYXJVcHBlciA9IGZhbHNlO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgY2hhcmFjdGVyID0gc3RyaW5nW2ldO1xuXG5cdFx0aWYgKGlzTGFzdENoYXJMb3dlciAmJiBVUFBFUkNBU0UudGVzdChjaGFyYWN0ZXIpKSB7XG5cdFx0XHRzdHJpbmcgPSBzdHJpbmcuc2xpY2UoMCwgaSkgKyAnLScgKyBzdHJpbmcuc2xpY2UoaSk7XG5cdFx0XHRpc0xhc3RDaGFyTG93ZXIgPSBmYWxzZTtcblx0XHRcdGlzTGFzdExhc3RDaGFyVXBwZXIgPSBpc0xhc3RDaGFyVXBwZXI7XG5cdFx0XHRpc0xhc3RDaGFyVXBwZXIgPSB0cnVlO1xuXHRcdFx0aSsrO1xuXHRcdH0gZWxzZSBpZiAoaXNMYXN0Q2hhclVwcGVyICYmIGlzTGFzdExhc3RDaGFyVXBwZXIgJiYgTE9XRVJDQVNFLnRlc3QoY2hhcmFjdGVyKSkge1xuXHRcdFx0c3RyaW5nID0gc3RyaW5nLnNsaWNlKDAsIGkgLSAxKSArICctJyArIHN0cmluZy5zbGljZShpIC0gMSk7XG5cdFx0XHRpc0xhc3RMYXN0Q2hhclVwcGVyID0gaXNMYXN0Q2hhclVwcGVyO1xuXHRcdFx0aXNMYXN0Q2hhclVwcGVyID0gZmFsc2U7XG5cdFx0XHRpc0xhc3RDaGFyTG93ZXIgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpc0xhc3RDaGFyTG93ZXIgPSB0b0xvd2VyQ2FzZShjaGFyYWN0ZXIpID09PSBjaGFyYWN0ZXIgJiYgdG9VcHBlckNhc2UoY2hhcmFjdGVyKSAhPT0gY2hhcmFjdGVyO1xuXHRcdFx0aXNMYXN0TGFzdENoYXJVcHBlciA9IGlzTGFzdENoYXJVcHBlcjtcblx0XHRcdGlzTGFzdENoYXJVcHBlciA9IHRvVXBwZXJDYXNlKGNoYXJhY3RlcikgPT09IGNoYXJhY3RlciAmJiB0b0xvd2VyQ2FzZShjaGFyYWN0ZXIpICE9PSBjaGFyYWN0ZXI7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0cmluZztcbn07XG5cbmNvbnN0IHByZXNlcnZlQ29uc2VjdXRpdmVVcHBlcmNhc2UgPSAoaW5wdXQsIHRvTG93ZXJDYXNlKSA9PiB7XG5cdExFQURJTkdfQ0FQSVRBTC5sYXN0SW5kZXggPSAwO1xuXG5cdHJldHVybiBpbnB1dC5yZXBsYWNlKExFQURJTkdfQ0FQSVRBTCwgbTEgPT4gdG9Mb3dlckNhc2UobTEpKTtcbn07XG5cbmNvbnN0IHBvc3RQcm9jZXNzID0gKGlucHV0LCB0b1VwcGVyQ2FzZSkgPT4ge1xuXHRTRVBBUkFUT1JTX0FORF9JREVOVElGSUVSLmxhc3RJbmRleCA9IDA7XG5cdE5VTUJFUlNfQU5EX0lERU5USUZJRVIubGFzdEluZGV4ID0gMDtcblxuXHRyZXR1cm4gaW5wdXQucmVwbGFjZShTRVBBUkFUT1JTX0FORF9JREVOVElGSUVSLCAoXywgaWRlbnRpZmllcikgPT4gdG9VcHBlckNhc2UoaWRlbnRpZmllcikpXG5cdFx0LnJlcGxhY2UoTlVNQkVSU19BTkRfSURFTlRJRklFUiwgbSA9PiB0b1VwcGVyQ2FzZShtKSk7XG59O1xuXG5jb25zdCBjYW1lbENhc2UgPSAoaW5wdXQsIG9wdGlvbnMpID0+IHtcblx0aWYgKCEodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJyB8fCBBcnJheS5pc0FycmF5KGlucHV0KSkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCB0aGUgaW5wdXQgdG8gYmUgYHN0cmluZyB8IHN0cmluZ1tdYCcpO1xuXHR9XG5cblx0b3B0aW9ucyA9IHtcblx0XHRwYXNjYWxDYXNlOiBmYWxzZSxcblx0XHRwcmVzZXJ2ZUNvbnNlY3V0aXZlVXBwZXJjYXNlOiBmYWxzZSxcblx0XHQuLi5vcHRpb25zXG5cdH07XG5cblx0aWYgKEFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG5cdFx0aW5wdXQgPSBpbnB1dC5tYXAoeCA9PiB4LnRyaW0oKSlcblx0XHRcdC5maWx0ZXIoeCA9PiB4Lmxlbmd0aClcblx0XHRcdC5qb2luKCctJyk7XG5cdH0gZWxzZSB7XG5cdFx0aW5wdXQgPSBpbnB1dC50cmltKCk7XG5cdH1cblxuXHRpZiAoaW5wdXQubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Y29uc3QgdG9Mb3dlckNhc2UgPSBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UgP1xuXHRcdHN0cmluZyA9PiBzdHJpbmcudG9Mb3dlckNhc2UoKSA6XG5cdFx0c3RyaW5nID0+IHN0cmluZy50b0xvY2FsZUxvd2VyQ2FzZShvcHRpb25zLmxvY2FsZSk7XG5cdGNvbnN0IHRvVXBwZXJDYXNlID0gb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlID9cblx0XHRzdHJpbmcgPT4gc3RyaW5nLnRvVXBwZXJDYXNlKCkgOlxuXHRcdHN0cmluZyA9PiBzdHJpbmcudG9Mb2NhbGVVcHBlckNhc2Uob3B0aW9ucy5sb2NhbGUpO1xuXG5cdGlmIChpbnB1dC5sZW5ndGggPT09IDEpIHtcblx0XHRyZXR1cm4gb3B0aW9ucy5wYXNjYWxDYXNlID8gdG9VcHBlckNhc2UoaW5wdXQpIDogdG9Mb3dlckNhc2UoaW5wdXQpO1xuXHR9XG5cblx0Y29uc3QgaGFzVXBwZXJDYXNlID0gaW5wdXQgIT09IHRvTG93ZXJDYXNlKGlucHV0KTtcblxuXHRpZiAoaGFzVXBwZXJDYXNlKSB7XG5cdFx0aW5wdXQgPSBwcmVzZXJ2ZUNhbWVsQ2FzZShpbnB1dCwgdG9Mb3dlckNhc2UsIHRvVXBwZXJDYXNlKTtcblx0fVxuXG5cdGlucHV0ID0gaW5wdXQucmVwbGFjZShMRUFESU5HX1NFUEFSQVRPUlMsICcnKTtcblxuXHRpZiAob3B0aW9ucy5wcmVzZXJ2ZUNvbnNlY3V0aXZlVXBwZXJjYXNlKSB7XG5cdFx0aW5wdXQgPSBwcmVzZXJ2ZUNvbnNlY3V0aXZlVXBwZXJjYXNlKGlucHV0LCB0b0xvd2VyQ2FzZSk7XG5cdH0gZWxzZSB7XG5cdFx0aW5wdXQgPSB0b0xvd2VyQ2FzZShpbnB1dCk7XG5cdH1cblxuXHRpZiAob3B0aW9ucy5wYXNjYWxDYXNlKSB7XG5cdFx0aW5wdXQgPSB0b1VwcGVyQ2FzZShpbnB1dC5jaGFyQXQoMCkpICsgaW5wdXQuc2xpY2UoMSk7XG5cdH1cblxuXHRyZXR1cm4gcG9zdFByb2Nlc3MoaW5wdXQsIHRvVXBwZXJDYXNlKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY2FtZWxDYXNlO1xuLy8gVE9ETzogUmVtb3ZlIHRoaXMgZm9yIHRoZSBuZXh0IG1ham9yIHJlbGVhc2Vcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBjYW1lbENhc2U7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/camelcase/index.js\n");

/***/ })

};
;