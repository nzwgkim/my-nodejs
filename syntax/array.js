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