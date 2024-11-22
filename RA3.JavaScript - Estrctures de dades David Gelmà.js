let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];

let setFusionat = new Set();
for (let i in array1) {
    setFusionat.add(array1[i]);
}
for (let element of array2) {
    setFusionat.add(element);
}
let arrayFusionat = [...setFusionat];

console.log("Array fusionat sense duplicats:", arrayFusionat);
