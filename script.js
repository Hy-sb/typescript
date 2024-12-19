"use strict";
console.log("hello world");
console.log("Haseeb");
// calculate your age
var currentyear = 2024;
var born = 1994;
var age = currentyear - born;
console.log("My AGE", age);
//  area of rectangle
var length = 20;
var width = 10;
var areaofrectangle = 20 * 10;
console.log("AREA OF RECTANGLE", areaofrectangle);
//   area of circle
var pie = 5.25;
var radius = 100;
var areaofcircle = 5.24 * 10000;
console.log("AREA OF CIRCLE", areaofcircle);
//  area of cube
var area = 15;
var num = 6;
var areaofcube = 6 * 2 ** 2;
console.log("AREA OF CUBE", areaofcube);
//  temprature to convert f into c
var fahrenheitvalue = 140;
var celsuis = (140 - 32) * 5 / 9;
console.log("TEMPERATURE IN CELSUIS", celsuis);
// percentage
var percentage = (100 / 25 * 100);
console.log("PERCENTAGE", percentage);
//increment and decrement operators
var a = 2;
var b = ++a * 2;
console.log("Q1", b);
var x = 5;
var y = x-- + 2;
console.log("Q2", y);
var x = 3;
var y = ++x + x++ + ++x;
console.log("Q3", y);
var m = 2;
var n = ++m * m++ * --m;
console.log("Q4", n);
var a = 3;
var b = 5;
var c = ++a + b-- - a++ + --b;
console.log("Q5", c);
var m = 2;
var n = 4;
var p = m++ + ++n - --m + n--;
console.log("Q6", m, n, p);
var a = 5;
var b = 3;
var c = 2;
var d = 7;
var result = ++a * (b-- + c) / --d;
console.log("Q7", a, b, c, d);
var m = 2;
var n = 3;
var o = 4;
var result = m++ * (--n + m) / (o-- - n);
console.log("Q8", m, n, o);
