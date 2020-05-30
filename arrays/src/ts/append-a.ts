'use strict';
// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

function appendA() {
    let animals = ["koal", "pand", "zebr"];
    animals = animals.map(function (e) {
        return e + "a";
    });
    console.log(animals)
}

//appendA();