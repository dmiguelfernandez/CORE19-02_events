// Importar modulo Later.js:
const later = require('later');
const EventEmitter = require('./events');

class Programador extends EventEmitter{
    constructor(configurar) {
      super();
    later.date.localTime();

    if (configurar instanceof Array){
      for(var i=0; i<configuracion.lenght;i++){
        var pos =ArrayHora[i];

        console.log("Hora"+ pos.hora + "temperaturaIdeal")
        later.setInterval(
          () => this.emit('ideal', pos.temperatura),
          later.parse.text ('at' + pos.hora)
        );
      }
    }
    // Crear planificación para todos los dias a las 18:00
    const sched = later.parse.text('at 18:00');


	}
}

exports = module.exports = Programador;
