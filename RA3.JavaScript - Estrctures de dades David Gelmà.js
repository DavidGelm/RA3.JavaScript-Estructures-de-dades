function esPalindrom(paraula) {
     const cua = []
     for (let lletra of paraula) {
          cua.push(lletra)
     }
     let inversa = ""
     for (let i = cua.length - 1; i >= 0; i--) {
          inversa += cua[i]
     }
     return paraula === inversa
}

console.log(esPalindrom("civic"))
console.log(esPalindrom("hola"))
