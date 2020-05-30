'use strict';
// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

function diagonalMatrix() {
    let matrixSize: number = 4;
    let matrix: number[][] = [];
    for (let i = 0; i < matrixSize; i++) {
        let row: String = '';
        matrix[i] = [];
        for (let j = 0; j < matrixSize; j++) {
            matrix[i][j] = 0;
            if (i + j === 3) {
                matrix[i][j] = 1;
            }
            row += matrix [i][j] + ' ';
        }
        console.log(row);
    }
}

//diagonalMatrix();

