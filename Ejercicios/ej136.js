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

let cadena = "";

mutantes.forEach(function(mutante){  
    if (mutante==="Jean Elaine Grey" || mutante==='James "Logan" Howlett') {
        cadena += mutante+' / '     
    } 
});

cadena = cadena.slice(0, -3);
console.log(cadena)
