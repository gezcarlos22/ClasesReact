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

function listaOrdena(lista){
    return lista.sort()
}

function listaRevertidaOrdenada(lista){
    return lista.reverse(listaOrdena(lista))
}

function UnirMutante(lista){
    return lista.join(' * ');
}

console.log(listaOrdena(mutantes));
console.log(listaRevertidaOrdenada(mutantes));
console.log(UnirMutante(mutantes));


