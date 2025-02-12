const jugador= {
    nombre: null,
    energia: 100,
    vidas: 3,

    perderEnergia: function(danio){
        if (danio > 0){
            this.energia -= danio;
            this.energia = Math.max(this.energia, 0);
            console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`); 
        } 
    },

    recuperarEnergia: function(energiaRecuperada){
        if (energiaRecuperada>0) {
            this.energia += energiaRecuperada;
            this.energia = Math.min(this.energia, 100); 
            console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`);
            
        }
    },

    perderVida: function(){
        if (this.vidas>0) {
            this.vidas--;
            console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`);
        }
    },

    recuperarVida: function(){
        if (this.vidas>=0 && this.vidas<100) {
            this.vidas++;
            console.log(`El jugador ${jugador.nombre} tiene ${jugador.energia}% de energía y ${jugador.vidas} vidas`);
        }
    }

}

jugador.nombre= "Carlos";

jugador.perderVida();

jugador.perderEnergia(10);

jugador.perderEnergia(5);

jugador.perderEnergia(15);

jugador.perderEnergia(20);

jugador.recuperarEnergia(10);

jugador.perderEnergia(30);

jugador.perderEnergia(40);

jugador.perderVida();

jugador.perderVida();

jugador.recuperarVida();

jugador.recuperarVida();

jugador.recuperarVida();

jugador.perderVida();
