'use strict';
// -  Create a variable named `numbers` with the following content:
//   `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `numbers` to the console

function sumAll() {
    let numbers = [3, 4, 5, 6, 7];
    let sum: number = 0;
    numbers.forEach(function (e) {
        sum += e;
    });
    console.log(sum);
}

//sumAll();