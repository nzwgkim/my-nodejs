
var args = process.argv;
// console.log(args);
// console.log(args[2]);

if( args[2] ){
    console.log(true);
    console.log(1==1);
    console.log(5==2+3);
    console.log(14===2+3*4);
}
else{
    console.log(false);
    console.log(2>4);    
    console.log(8==2^3);
}

