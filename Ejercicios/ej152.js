const usuario = {
    username: null,
    password: null,
    saludar: function(){
        if (this.username){
            console.log(`Hola, soy el usuario ${this.username}`);
        } else {
            console.log("Este usuario no tiene username")
        }
    },

    updatePassword: function(contraseña){
        this.password= contraseña; 
    },

    updateUsername: function(nombre){
        this.username= nombre; 
    },
}

usuario.updateUsername("Carlos");
usuario.updatePassword("12345");
usuario.saludar()

console.log("Contraseña:", usuario.password)