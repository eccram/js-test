// Простые типы

var myNumber = 2525,
	myString = "Some string",
	myBool = true,
	myNull = null,
	myUndef = undefined;

console.log(typeof myNumber);
console.log(typeof myString);
console.log(typeof myBool);
console.log(typeof myNull);
console.log(typeof myUndef);

console.log("Sorax".toUpperCase());

// Объектные типы

var obj = {name: "sorax"},
	array = [1,2,3],
	regexp = /w+/g,
	func = function(){};

console.log("");
console.log(typeof obj);
console.log(typeof array);
console.log(typeof regexp);
console.log(typeof func);

obj.name = "passive star";
array[1] = 325235;

console.log(array);

console.log(myString.toUpperCase());
console.log(myString);

// Оператор присваивания

var a, b, c, d;
a = b = c = d = 5;
    