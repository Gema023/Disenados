
class DisplayPreguntas extends ElementoJuego{
    alto = 190;
    ancho = 690;

    pregunta_actual = null;
    texto = null;

    constructor ( params ){
        super( params );
    }

    cargar_pregunta( pregunta ){
        this.pregunta_actual = pregunta;
        if (this.texto != null){
            this.texto.destroy();
        }
        this.texto = this.juego.add.text(this.x-this.ancho*.1, this.y-this.alto/2+8, '', 
                        { fontFamily: 'Arial Rounded MT Bold, Arial Rounded', fontSize: 40, color: '#000000' });
        this.texto.setWordWrapWidth( this.ancho*.8, true );
        this.texto.setText('¿'+this.pregunta_actual.t+'?');
    }

    ocultar(){
        super.ocultar();
        if ( this.texto != null)
            this.texto.destroy();
    }
}