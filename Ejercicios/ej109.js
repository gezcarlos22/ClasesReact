function autenticarUsuario (usuario, password) {
    if (usuario ==="nacho"){
        if (password==="Nerd1979"){
            console.log(`Bienvenido ${usuario}, te estabamos esperando`);
        }
    } else if (usuario ==="pedro"){
        if (password==="Batman0217"){
            console.log(`Bienvenido ${usuario}, te estabamos esperando`);
        }
    } else if (usuario ==="marta"){
        if (password==="Madre2312"){
            console.log(`Bienvenido ${usuario}, te estabamos esperando`);
        }
    } else {
        console.log(`Por favor ingrese credenciales válidas`);
    }
}

autenticarUsuario("nacho", "Nerd1979")