const superman = {
    name:"Clerk",               // property
    age:33,              // property
}

superman.haircolor = 'black';
superman['hobby'] = 'football';

console.log(superman);      // { name: 'Clerk', age: 33, haircolor: 'black', hobby: 'football' }

delete superman['hobby'];

for(let key in superman){
    console.log(key,superman[key]);
}
// name Clerk
// age 33
// haircolor black


function makeObject(name, age){
    return{
        name,   //name: name,
        age,    //age: age,
        hobby: 'football'
    }
}
let Storeman = makeObject("Mike", 31);
console.log(Storeman);
console.log('age' in Storeman);
console.log('haircolor' in Storeman);

function isAdult(user){
    if(('age' in user)&&user.age>20)
        return true;
    return false;
}

const Mike = {
    age:21,
    name:"Mike",
};
const Jane = {
    name:"Jane",
};
console.log(isAdult(Jane));
console.log(isAdult(Mike));

// const superman = {
//     name:"Clerk",               // property
//     age:33,              // property
//     fly: function{                             // method
//     console.log('날아간다');
//     }
//     }
superman.fly=()=>{
    console.log('날아간다');
};
superman.fly();

var sayHello=function(){   // 화살표함수는 this를 가지지 못한다.
    console.log(`My name is ${this.name}`);
}
const user={
    name: 'Mike',
    sayHello,
}
user.sayHello();

// var sayHello=()=>{   // 화살표함수는 this를 가지지 못한다.
//     console.log(`My name is ${this.name}`);
// }
    


// 다른 개발자가 만들어 놓은 작업
const user1 = {
    name:"Mike",
    age:20,
};

// 내가 작업한 것
// user.showName = function(){};
const showName = Symbol();
user1[showName] = function(){
    console.log('This is ', this.name);
}
user1[showName]();

for(let k in user1){
    console.log(`${k} is ${user1[k]}`);
}

// 두개의 object를 합치고자 할때: Good code
item = {
    type: 'shirts',
    size: 'M',
}
detail = {
    price: 20,
    made: 'Korea',
    gender: 'M',
}
const shirt0 = Object.assign(item,detail);                  // Good code using Object.assign
const shirt_new = { ... item, ...detail, price:40};         // Better code using spread syntax
console.log(shirt_new);