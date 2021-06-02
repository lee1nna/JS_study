// console.log('Greettings han');
// console.log('Greettings na');
// console.log('Greettings hong');
// console.log('Greettings gun');

function sayHello(name){
    // console.log('Hello', name);
    // console.log(`Hello ${name}`);
    return `Hello ${name}`;
}

const greetHanna = sayHello("Hanna");

console.log(greetHanna);

const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    multiple: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    }
}

console.log(calculator.plus(4,2));
console.log(calculator.minus(4,2));
console.log(calculator.multiple(4,2));
console.log(calculator.divide(4,2));
