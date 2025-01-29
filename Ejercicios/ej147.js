const usuario ={
    username: "batman",
    password: "Alfred1960KPO!",
    autenticarUsuario: function(usuario){
        if (usuario.username==="batman" && usuario.password==="Alfred1960KPO!"){
            console.log(usuario)
        } else {
            console.log("Usuario no autenticado")
        }
    }
};

usuario.autenticarUsuario();