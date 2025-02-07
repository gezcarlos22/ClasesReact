const mutantes = [
    "Prof. Charles Francis Xavier",
    "Scott Summers",
    'Dr. Henry Philip "Hank" McCoy',
    "Jean Elaine Grey",
    "Calvin Montgomery Rankin",
    "Kevin Sydney",
    "Lorna Sally Dane",
    "Alexander Summers",
    "Suzanne Chan",
    'James "Logan" Howlett',
    "Ororo Monroe",
]

const mutantesFavoritos = mutantes.map(function(mutante){
    if (mutante==="Prof. Charles Francis Xavier" || mutante==="Jean Elaine Grey" || mutante==='James "Logan" Howlett'){
        return mutante = "<3 " + mutante;
    } else {
        return mutante;
    }
})

console.table(mutantes);
console.table(mutantesFavoritos);