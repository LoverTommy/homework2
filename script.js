"use strict"


let arr = [[4, 4, 6], 8, 7, [13, 12], 2, 11, [9, 22, 3], [1]];


function sumArr(i) {
    let sum = 0;

    for (i ; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            for(let x = 0; x < arr[i].length; x++){
                sum += arr[i][x];
            }
        }else {
            sum += arr[i]
        }
    }

    return sum;
}

console.log("Сумма: " + sumArr(0));
