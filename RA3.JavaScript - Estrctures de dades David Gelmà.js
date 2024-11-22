let array1 = [1, 2, 3, 4]
let array2 = [3, 4, 5, 6]


let arrayFusionat = []


for (let i in array1) {
    if (!arrayFusionat.includes(array1[i])) {
        arrayFusionat.push(array1[i])
    }
}

for (let element of array2) {
    if (!arrayFusionat.includes(element)) {
        arrayFusionat.push(element)
    }
}

console.log("Array fusionat sense duplicats:", arrayFusionat)