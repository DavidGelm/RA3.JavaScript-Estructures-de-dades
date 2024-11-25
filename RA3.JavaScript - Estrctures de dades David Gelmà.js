let array_String =["hola","patata","dia","tarda"]
let array1 = []
let voc = "a"
for(let i = 0;i<array_String.length;i++){
    let string1 = array_String[i]
    let contador = 0
    for(let j =0;j<string1.length;j++){
        if(string1[j]===voc){
            contador++
        }
    }
    if(contador>1){
        array1.push(string1)
    }
}
console.log(array1)