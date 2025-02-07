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
];

const stringMutantes = mutantes.reduce(function(cadena,mutante,index){
    if (index !== mutantes.length-1){
        return cadena + mutante +", "
    }
    return cadena + mutante;
    
},"");

console.log(stringMutantes);