function showName(name){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments.length);
}

showName('Mike');               //Mike, Undefined, 1
showName('Mike', 'Jone');       // Mike, Jone, 2

// Rest Parameter
function showName_Res(...names){
    if( names.length == 0){
        console.log('Woody');
    }
    else{
        names.forEach( name=> console.log(name));
    }    
}
showName_Res();
showName_Res('Mike', 'Jone', "Jason");   // [ 'Mike', 'Jone' ]

// Constructor for User object using rest parameter
// rest parameter should be the last argument
function User(name, age, ...skills){
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const user1 = new User('Mike', 30, 'html', 'css');
const user2 = new User('Tom', 20, 'JS', 'React', "Typescript");
const user3 = { name:'Raj', age:31, skills:'Math'};
const user4 = {...user3};
user4.age = 55;
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);

