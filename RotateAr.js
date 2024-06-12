
function rotate(arr, data) {
    let len = arr.length;
    data = data % len;

    //creating temporary arr
    let temp = [len];
    let temIndex = 0;

    for (let i = data; i < len; i++) {
        temp[temIndex] = arr[i];
        temIndex++;
    }
    for (let i = 0; i < data; i++) {
        temp[temIndex] = arr[i];
        temIndex++;
    }

    console.log(temp)
}
const arr = [1, 2, 3, 4, 5, 6, 7];
const data = 4;

rotate(arr, data);



