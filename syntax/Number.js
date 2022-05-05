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