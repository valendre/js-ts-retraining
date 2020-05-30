'use strict';
// -  Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method
// -  Print the fourth element as a test

function changeNumber() {
    let numbers = [1, 2, 3, 8, 5, 6];
    numbers = numbers.map(function (e) {
        if (e == 8) {
            return 4
        }
        return e;
    });
    console.log(numbers[3]);
}

//changeNumber();