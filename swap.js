var a = parseInt(prompt('enter first number'));
var b = parseInt(prompt("enter second number"));

var temp;

temp = a;
a = b;
b = temp;

console.log(" the number after swap of num A : "+a);
console.log(' the number after swap of num B : '+b);