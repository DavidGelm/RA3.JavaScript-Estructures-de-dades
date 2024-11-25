const valor = {'a':1,'b':"patata",'c':true}
let m = new Map(Object.keys(valor).map(k => [k, valor[k]]))
console.log(m)