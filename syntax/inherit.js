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
for( x in bmw){
    if(bmw.hasOwnProperty(x)){
        console.log('o', x);
    }
    else{
        console.log('x', x);
    }
}


const Bmw = function(color){
    this.color = color;
}
const x5 = new Bmw();
const z4 = new Bmw();

x5.__proto__ = car;
for( p in x5){
    if(x5.hasOwnProperty(p)){
        console.log('o', p);
    }
    else{
        console.log('x',p);
    }
}