'use strict';
// -  Create a variable named `numbers`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numbers`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numbers`

function reverse() {
    let numbers: number[] =[3, 4, 5, 6, 7];
    console.log(numbers.reverse());
    let tempArray: number[] = [];
    let numbersAgain: number[] =[3, 4, 5, 6, 7];
    for (let i = numbersAgain.length-1; i >=0 ; i--) {
        tempArray[numbersAgain.length-i-1] = numbersAgain[i];
    }
    numbersAgain = tempArray;
    console.log(numbersAgain);
}
reverse();