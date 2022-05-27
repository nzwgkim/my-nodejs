console.log(1);

console.log(2^3);

console.log(Number(null));
console.log(Number(undefined));
console.log(Number(0));
console.log(Number('0'));
console.log(Number(''));
console.log(Number(' '));

let a=10;
switch(a)
{
    default:
        console.log("Not found!");
        break;

    case 1:
        break;
    case 10:
        console.log(a);
        break;
}


const nums = [1,3,8,2,5];
let min = Math.min(...nums);
let max = Math.max(...nums);
console.log(min, max);
