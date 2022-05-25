const { isArgumentsObject } = require("util/types");

var arr = ["abcd","bcd",10,20,30,'a','b'];
console.log(arr);
console.log(arr.length);
arr.push(100);
console.log(arr);



// https://love2dev.com/blog/javascript-remove-from-array/
arr.length = 4;     // // Removing Elements from End
console.log(arr);
// [ 'abcd', 'bcd', 10, 20 ]
arr.pop();          // Removing Elements from End
console.log(arr);
// [ 'abcd', 'bcd', 10 ]
arr.shift();        // Removing Elements from Beginning
console.log(arr);
// [ 'bcd', 10 ]

arr = [1, 2, 3, 4, 5, 6, 5, 7, 8, 5, 9, 0, "bar", "baz", "foo", "qux"];
var removed = arr.splice(2,2);  // Using Splice to Remove Array Elements
console.log(removed);
// [ 3, 4 ]

for(var i=0; i<arr.length;i++){
    if( arr[i]===5) arr.splice(i,1);
}
console.log(arr);
// [
//     1,     2,     6,
//     7,     8,     9,
//     0,     'bar', 'baz',
//     'foo', 'qux'
// ]

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var filtered = array.filter(function(value, index, arr){ 
    return value > 5;
});
console.log(filtered);  //[ 6, 7, 8, 9 ]

// var array = [1, 2, 3, 4];
// var evens = _.remove(array, function(n) { 
//     return n % 2 === 0;
// });
// console.log(array);// => [1, 3]console.log(evens);// => [2, 4]


// Making a Remove Method
function arrayRemove(arr, value) {     
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}

var result = arrayRemove(array, 6);
console.log(result);     // [1, 2, 3, 4, 5, 7, 8, 9, 0]



// Explicitly Remove Array Elements Using the Delete Operator
var ar = [1, 2, 3, 4, 5, 6];
    
delete ar[4]; // delete element with index 4
console.log( ar );  // [ 1, 2, 3, 4, <1 empty item>, 6 ]

// alert( ar ); // 1,2,3,4,,6

var arr = [27, 8, 5, 13];
arr.sort();     // [ 13, 27, 5, 8 ] <-- 숫자를 문자열로 치환해서 알파벳 정렬을 하기 때문.
arr.sort( (a,b)=>{
    return a-b; // [ 5, 8, 13, 27 ] 
});         
console.log(arr);
let ret = 0;
arr.forEach(n=>{
    ret += n;
});
console.log('Sum: ', ret);

var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];
  items.sort((a,b)=>{
      return a.value - b.value;
  });
  console.log(items);

//   let acc_ls = [];
//   let acc_age ;
//   var ret_items = items.reduce((accm,cur)=>{
//     if( cur.value >19){
//         acc_ls.push(cur.name);
//         acc_age += Number(cur.value);
//     }
//    console.log(cur.value, `${acc_age}`);
//     return acc_ls;
//   });

// Spread syntax for Array
const arr1 = [4,5,6];
const arr2 = [22,44,66,78,99];
const tot1 = ['a','b',...arr1, 'c', ...arr2, 'd','e','f'];
tot1.forEach(num=>console.log(num));
console.log(tot1.join());   // a,b,4,5,6,c,22,44,66,78,99,d,e,f

let tot2=[arr2, arr1];
console.count(tot2.join()); // 22,44,66,78,99,4,5,6: 1