const o = {'a': 1, 'b': 3, 'c': 6}

let m = new Map(Object.keys(o).map(k => [k, o[k]]))
let cubics = new Map([...m].map(([k, v]) => [k, v ** 3]))

console.log("Map amb els valors cúbics:", cubics)
