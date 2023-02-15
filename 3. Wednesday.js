/* ==========
* Exercise 1: Easy mathematical callback
========== */
let myArray = [4, 8, 2, 7, 5];

function processArray(arr, callback) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(callback(arr[i]));
    }
    return newArray
}

myArray = processArray(myArray, function (a) {
    return a * 2
});

/* ==========
* Exercise 2: Moving Zeros To The End
========== */
const arr = [false,1,0,1,2,0,1,3,"a"];

function moveZeros(arr) {
    let noZeroArr = [],
        zeroArr = [];
    arr.filter((number) => {
        if (number !== 0) {
            console.log(number);
            noZeroArr.push(number)
        } else {
            zeroArr.push(number);
        }
    });
    return noZeroArr.concat(zeroArr);
}
console.log(moveZeros(arr));

/* ==========
* Exercise 3: Valid Parentheses
========== */
function validParentheses(parens) {
    return [...parens].reduce((a, c) => (a + c).replace('()', ''), '') === '';
}
