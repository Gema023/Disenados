
class PantallaRuleta {
    juegoConf = null;
    juego = null;

    ruleta        = null;
    selector_r    = null;
    boton_tirar   = null;
    listado_preg  = null;
    pantalla_preg = null; 
    puntuador     = null;
    
    constructor( params ){
        this.juegoConf = params.configuracionJuego;
        this.juego     = params.juego;
    }

    preload(){
        
        this.listado_preg  = new ListadoPreguntas();

        let configRuleta = {
            colorBorde: '#888',
            colorRelleno: 'yellow',
            anchoBordeExterior: 4,
            categorias:[
                { id:0, color: '#4FC1E9', a_i:0, a_f:0, nombre: 'GRAFICO' },
                { id:1, color: '#5D9BEC', a_i:0, a_f:0, nombre: 'DISEÑADORES'  },
                { id:2, color: '#ED87C0', a_i:0, a_f:0, nombre: 'MODA' },
                { id:3, color: '#ED5463', a_i:0, a_f:0, nombre: 'HISTORIA DEL ARTE' },
                { id:4, color: '#FB6E52', a_i:0, a_f:0, nombre: 'PRODUCTO' },
                { id:5, color: '#FFCE54', a_i:0, a_f:0, nombre: 'LLAVE' },
                { id:6, color: '#A1D469', a_i:0, a_f:0, nombre: 'INTERIORES' },             
            ],

            listado_preguntas: this.listado_preg,
            pantalla_preguntas: this.pantalla_preg
        };
        this.ruleta = new Ruleta({ configuracionJuego:this.juegoConf, juego:this.juego,  imgURL:'./assets/imagen/ruleta.svg', nombreImg:'ruleta', configuracionRuleta:configRuleta } );
        this.ruleta.cargarImg();
        this.ruleta.cargarAudio();

        this.selector_r = new ElementoJuego( { configuracionJuego:this.juegoConf, juego:this.juego, imgURL:'./assets/imagen/select_ruleta.svg', nombreImg:'select_ruleta' } );
        this.selector_r.cargarImg();
        this.boton_tirar = new Boton( { configuracionJuego:this.juegoConf, juego:this.juego, imgURL:'./assets/imagen/btn_tirar.svg', nombreImg:'btn_tirar' } );
        this.boton_tirar.cargarImg();
        
        this.puntuador = new Puntuador({ configuracionJuego:this.juegoConf, juego:this.juego });

        this.pantalla_preg.setRuleta( this.ruleta );
        this.pantalla_preg.setPuntuador( this.puntuador );
        this.pantalla_preg.setBotonTirar( this.boton_tirar );
        this.pantalla_preg.setSelector( this.selector_r );
    }

    ocultarVista(){
        this.ruleta.ocultar();
        this.boton_tirar.ocultar();
        this.selector_r.ocultar();
    }

    mostrarVista(){
        this.ruleta.mostrar();
        this.boton_tirar.mostrar();
        this.selector_r.mostrar();
    }

    create(){
        this.ruleta.defPhaserSprite();
        this.ruleta.phaserSprite.setScale(1.5);
        this.ruleta.defAudio();
        this.ruleta.posicionar( this.juegoConf.width / 2, this.juegoConf.height / 2.5 );
        this.ruleta.callback_resultado = () => { this.pantalla_preg.mostrarVista( this.ruleta.ultima_pregunta ); }
        
        this.selector_r.defPhaserSprite();
        this.selector_r.posicionar( this.juegoConf.width / 2, this.juegoConf.height / 2.65 );
        this.selector_r.phaserSprite.setScale(1.5);

        this.boton_tirar.defPhaserSprite();
        this.boton_tirar.posicionar( this.juegoConf.width / 2, this.juegoConf.height * 0.4 );
        this.boton_tirar.phaserSprite.setScale(2);
        
        this.boton_tirar.setOnClick( ()=> {
            this.ruleta.tirar();
        });        
    }

    update(){
        this.ruleta.update();
    }

}