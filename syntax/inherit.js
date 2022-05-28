const { read } = require("fs");

const car = {
    wheels: 4,
    drive(){
        console.log('Drive...');
    },
};

const bmw = {
    color: 'red',
    navigation: 1.
};
const benz = {
    color: 'black',
};
const audi = {
    color: 'yellow',
};
bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;
console.log(bmw, bmw.wheels);
bmw.drive();
