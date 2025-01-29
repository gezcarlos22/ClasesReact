const usuario ={
    username: "batman",
    password: "Alfred1960KPO!",
    autenticarUsuario: function(nombreDeUsuario, clave){
        if (nombreDeUsuario==="batman" && clave==="Alfred1960KPO!"){
            console.log(usuario)
        } else {
            console.log("Usuario no autenticado")
        }
    }
};

usuario.autenticarUsuario();