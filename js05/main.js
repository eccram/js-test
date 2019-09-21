// Метод Числа new Number
var N = new Number(4000),
	z = 12.77;
console.log(typeof N);

console.log(N.toFixed(3));
console.log(z.toFixed(3));
console.log(3 .toFixed(3));
console.log(z.toExponential(4));
console.log(z.toPrecision(3));

// Арифметические операторы
// Унарные операторы
console.log(+10);
console.log(-10);
// Инкрементные и Декрементные операторы
var i = 10;
console.log(++i); // префексный инкремент
console.log(i);
console.log(i++); // пост префексный инкремент
console.log(i);
console.log(5 + 10);
console.log(7 - 3);
console.log(5 * 9);
console.log(10 / 3);
console.log(10 % 3);

var n = 100;
n += 20;
console.log(n);
n *= 2;
console.log(n);

// Операторы отношения

console.log(5 > 10);
console.log(5 < 10);
console.log(10 >= 10);
console.log(8 <= 10);
console.log(10 === 10);
console.log(10 !== 10);
console.log(10 == "10");
console.log(10 === "10");

// Math.

console.log(Math.sqrt(25)); // извлечение квадратного корня
console.log(Math.pow(3,5)); // возведение в степень
console.log(Math.PI); // константа 
console.log(Math.E);  // константа

console.log(-5/0);
console.log(0/0);
console.log(Infinity/Infinity);
console.log(Math.sqrt(-10));

console.log(NaN === NaN);
