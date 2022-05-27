// call은 매개변수를 직접받지만, apply는 배열로 받는다.
// apply는 배열요소를 함수 매개변수로 사용할때 유리.

const mike = {
    name:'Mike',
}
const tom = {
    name:'Tom',
}
const jason = {
    name:'Jason',
}
function showThisName(){
    console.log(this.name);
}
showThisName.call(mike);

function update(birthYear, job){
    this.birthYear = birthYear;
    this.job = job;
}
update.call(mike,1970,'Singer');
console.log(mike);      // { name: 'Mike', birthYear: 1970, job: 'Singer' }
update.apply(tom,[2000,'Dancer']);
console.log(tom);       // { name: 'Tom', birthYear: 2000, job: 'Dancer' }
const updateJason = update.bind(jason);
updateJason(2020, 'Teacher');
console.log(updateJason);

const nums = [1,3,8,2,5];
let min = Math.min(...nums);
let max = Math.max(...nums);
console.log(min, max);

