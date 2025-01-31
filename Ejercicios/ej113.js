function obtenerPerimetroRectangulo (base,altura){
    let perimetro =0;
    if (base===altura){
        perimetro=(base*4);
        console.log(`El perímetro es ${perimetro}`)
    } else {
        perimetro=(base*2)+(altura*2);
        console.log(`El perímetro es ${perimetro}`)
    }

    if (perimetro>100){
        console.log("El perímetro es muy grande")
    } else{
        console.log("El perímetro no es muy grande")
    }
}

obtenerPerimetroRectangulo(2,5);
obtenerPerimetroRectangulo(50,60);
