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
    "Ororo Monroe"
]

let lista =[]
for (i=0; i<=mutantes.length-1;i++){
    if (mutantes[i]=="Lorna Sally Dane"){
        break;
    } else {
        lista.push(mutantes[i])
    }
}

console.log(lista.toString())