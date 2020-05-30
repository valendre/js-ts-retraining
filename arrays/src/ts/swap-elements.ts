'use strict';
// -  Create a variable named `names` with the following content:
//   `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `names`

function swapElements() {
    let names = ["Arthur", "Boe", "Chloe"];
    let tempVariable: string = names[0];
    names[0] = names[2];
    names[2] = tempVariable;
    console.log(names);
}

//swapElements();