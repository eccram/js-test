console.log("Some string");
console.log('Another string');

console.log('Some "long" string');
console.log("Some 'long' string");

console.log("Hello there".length);

console.log("Another \n\tvery long \n\t\tstring");

console.log("Another \"very \\ long\" string");

var string = "Sometimes the same is different";
console.log(string.length);
console.log(string.charAt(string.length - 1));
console.log(string.substring(10));
console.log(string.substring(10,21));
console.log(string.slice(-10));
console.log(string.substr(14,4));
console.log(string);
console.log(string.lastIndexOf("me"));
console.log(string.replace("is","is not"));

string = string.replace("is","is not");
console.log(string);

console.log(string.split(" "));
console.log(string.toUpperCase());
console.log(string.toLowerCase());

console.log(string[4]);