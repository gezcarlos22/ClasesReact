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

const listaMutantes = mutantes.filter(function(mutante){
    if (mutante !=="Scott Summers"){
        return mutante 
    }
})

console.log(mutantes[1])
console.log(listaMutantes[1])