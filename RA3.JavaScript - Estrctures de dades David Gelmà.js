const cua_pelicules = [
     {titol: "Venom", any: 2018},
     {titol: "Deadpool", any: 2006},
     {titol: "Vengadores: EndGame", any: 2019 }
]
let peliculaAntiga = cua_pelicules[0]
for (let pelicula of cua_pelicules) {
     if (pelicula.any < peliculaAntiga.any) {
          peliculaAntiga = pelicula
     }
}
console.log(`La pel·licula més antiga és: ${peliculaAntiga.titol}, de l'any ${peliculaAntiga.any}.`)


