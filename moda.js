let INDEX_PREGUNTA = 0;
let puntaje = 0;

const preguntas = [
    {
        pregunta: "¿Qué es el diseño de moda?",
        opciones: ["El proceso de crear ropa y accesorios", "La organización de desfiles de moda", "El estudio de la historia de la moda", "La promoción de marcas de ropa"],
        respuesta: "El proceso de crear ropa y accesorios",
        ayuda: "Proceso creativo de concebir, dibujar y confeccionar prendas de vestir y accesorios."
    },
    {
        pregunta: "¿Quién es considerado uno de los diseñadores de moda más influyentes del siglo XX?",
        opciones: ["Coco Chanel", "Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci"],
        respuesta: "Coco Chanel",
        ayuda: "Una de las diseñadoras más influyentes del siglo XX."
    },
    {
        pregunta: "¿Qué es un desfile de moda?",
        opciones: ["Una exposición de arte moderno", "Una pasarela donde se muestran colecciones de diseñadores", "Un evento de música en vivo", "Una subasta de ropa vintage"],
        respuesta: "Una pasarela donde se muestran colecciones de diseñadores",
        ayuda: "Presentar nuevas colecciones de ropa y accesorios en una pasarela."
    },
    {
        pregunta: "¿Qué son los estampados en el diseño de moda?",
        opciones: ["Diseños abstractos en tela", "Instrucciones para coser una prenda", "Líneas de corte en un patrón de costura", "Colores sólidos en una prenda"],
        respuesta: "Diseños abstractos en tela",
        ayuda: "Diseños impresos en telas que se utilizan para agregar interés visual y estilo a prendas de vestir y accesorios."
    },
    {
        pregunta: "¿Cuál es el objetivo principal del diseño de moda?",
        opciones: ["Crear prendas de vestir prácticas", "Reflejar las tendencias culturales y sociales", "Impulsar las ventas de moda", "Atraer la atención de los medios de comunicación"],
        respuesta: "Reflejar las tendencias culturales y sociales",
        ayuda: "Expresar la creatividad y la identidad personal a través de la ropa y los accesorios."
    }
];


// Función para cargar la pregunta actual en la interfaz
function cargarPregunta(index) {
    const preguntaActual = preguntas[index];

    document.getElementById("pregunta").innerHTML = preguntaActual.pregunta;

    for (let i = 0; i < 4; i++) {
        document.getElementById(`opcion-${i + 1}`).innerHTML = preguntaActual.opciones[i];
    }
}

// Función para manejar la selección de opciones por el usuario
async function seleccionarOpción(index) {
    const preguntaActual = preguntas[INDEX_PREGUNTA];
    const validezRespuesta = preguntaActual.opciones[index] == preguntaActual.respuesta;

    if (validezRespuesta) {
      await Swal.fire({
          title: "Respuesta correcta",
          text: "La respuesta ha sido correcta",
          icon: "success",
          imageUrl: './assets/imagen/octavio_bien.svg', 
          imageWidth: 200, // Ancho de la imagen en píxeles
          imageHeight: 200, // Altura de la imagen en píxeles
          imageAlt: 'Imagen de respuesta correcta'
      });
      puntaje++;
  } else {
      await Swal.fire({
          title: "Respuesta Incorrecta",
          text: `La respuesta correcta es ${preguntaActual.respuesta}`,
          icon: "error",
          imageUrl: './assets/imagen/octavio_mal.svg',
          imageWidth: 200,
          imageHeight: 200,
          imageAlt: 'Imagen de respuesta incorrecta'
      });
  }
  

    INDEX_PREGUNTA++;
    if (INDEX_PREGUNTA >= preguntas.length) {
        await Swal.fire({
            title: "Has completado la categoría",
            text: `Tu puntaje fue de: ${puntaje}/${preguntas.length}`,
            imageUrl: './assets/imagen/octavio_puntuacion.svg', 
            imageWidth: 200,
            imageHeight: 200,
        });
        INDEX_PREGUNTA = 0;
        puntaje = 0;
    }

    cargarPregunta(INDEX_PREGUNTA);
}

// Función para mostrar la ayuda de la pregunta actual
function ayuda() {
    const preguntaActual = preguntas[INDEX_PREGUNTA];
    Swal.fire({
        title: "Ayuda",
        text: preguntaActual.ayuda,
        imageUrl: './assets/imagen/octavio_ayuda.svg', 
        imageWidth: 200,
        imageHeight: 200,
    });
}

// Llamar a la función para cargar la primera pregunta al cargar la página
cargarPregunta(INDEX_PREGUNTA);
