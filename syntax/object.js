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

