// I love India"

// let str = "I love India";

// let newStr = str.split(' ')

// let st1 = newStr.map((str) => {
//     return str.slice(0, -1) + str.slice(-1).toUpperCase();
// })
// console.log(st1)

let arr = [0, 1, 0, 1, 0, 0, 3, 2, 8, 9, 8];
// let newArr = [];

let uniqueNumber = new Set(arr);
console.log([...uniqueNumber])

// console.log(newArr)

let newArr2 = arr.filter((num, index) => {
    return arr.indexOf(num) === index
})

// console.log(newArr2)