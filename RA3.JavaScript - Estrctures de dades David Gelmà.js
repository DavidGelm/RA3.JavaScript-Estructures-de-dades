let array = []

for (let i = 0; i < 5; i++) {
    array.push(Math.floor(Math.random() * 100) + 1)
}

array.sort((a, b) => a - b)

console.log("Array ordenat:", array)
console.log("Primer valor:", array[0])
console.log("Últim valor:", array[array.length - 1])

let Array_nou = [...array]

console.log("Nou array copiat:", Array_nou)