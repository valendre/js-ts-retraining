'use strict';
// -  Create a variable named `numbers` with the following content: `[4, 5, 6, 7]`
// -  Log each the element of `numbers` to the console*
// *hint: use a loop, console.log(numbers) won't cut it
// -  bonus for using the correct built in array method

function printAll() {
    let numbers = [4, 5, 6, 7];
    numbers.forEach(function (e) {
        console.log(e);
    });
}

//printAll();