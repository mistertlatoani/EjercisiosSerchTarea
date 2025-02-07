

//Ejercicio 3 = Suma y producto de un array

function sumaAndProduct(arr) {
    let sum = arr.reduce((acc, num) => acc + num, 0);
    let product = arr.reduce((acc, num) => acc * num,1);
    console.log(`Sum: ${sum}, Product: ${product}`);
}

sumaAndProduct([1, 2, 3, 4]);
