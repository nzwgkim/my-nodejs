//class는 ES5 에 추가된 스펙이다.


// return 값이 없는 함수
const UserFunction = function(name,age){
    this.name  = name;
    this.age = age;
}

class UserClass {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    showName(){
        console.log(this.name);
    }
}
const mike = UserFunction('Mike', 31);  // no error, but undefined 
const joy = new UserClass('Joy', 18);   // class는 new 없이 실행할 수 없다.

class Car {
    constructor(color){
        this.color = color;
        this.wheel = 4;
    }
    start(){
        console.log(`${this.color} Car Start...`);
    }
    stop(){
        console.log('Car stop...');
    }
}

// extends for inheritance
class Bmw extends Car {
    constructor(color){
        super(color);
        this.navi = 1;
        console.log(`${this.wheel} ${this.color} navi = ${this.navi}`)
    }
    park(){
        console.log(`${this.color} BMW Park...`);
    }
    stop(){
        super.stop();
        console.log('Bmw stop...')
    }
}
const i4 = new Bmw('white');
i4.start();
i4.park();
i4.stop();
