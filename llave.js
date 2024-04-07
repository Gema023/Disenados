let INDEX_PREGUNTA = 0;
let puntaje = 0;

const preguntas = [
    {
        pregunta: "¿Qué es el diseño industrial?",
        opciones: ["El proceso de diseño de productos que se fabricarán en masa", "Un estilo de arte abstracto", "Una técnica de construcción", "Una forma de hacer deporte"],
        respuesta: "El proceso de diseño de productos que se fabricarán en masa",
        ayuda: "Implica la creación de productos que sean funcionales, estéticos y que cumplan con las necesidades del usuario."
    },
    {
        pregunta: "¿Qué es el diseño de interiores?",
        opciones: ["El arte y la ciencia de mejorar el interior de un espacio para lograr un ambiente más saludable y estéticamente agradable", "Una técnica de jardinería", "Un estilo de música", "Una forma de hacer manualidades"],
        respuesta: "El arte y la ciencia de mejorar el interior de un espacio para lograr un ambiente más saludable y estéticamente agradable",
        ayuda: "Involucra la planificación y diseño de espacios interiores para mejorar la calidad de vida y la experiencia del usuario."
    },
    {
        pregunta: "¿Qué es el diseño gráfico?",
        opciones: ["El arte y la práctica de planificar y proyectar ideas y experiencias visuales con contenido y contexto", "Una técnica de costura", "Una forma de hacer música", "Una técnica de cocina"],
        respuesta: "El arte y la práctica de planificar y proyectar ideas y experiencias visuales con contenido y contexto",
        ayuda: "Se centra en la comunicación visual mediante el uso de elementos gráficos para transmitir mensajes o información de manera efectiva."
    },
    {
        pregunta: "¿Qué es el diseño de moda?",
        opciones: ["La creación de prendas de vestir y accesorios según las tendencias y preferencias del mercado", "Una técnica de escultura", "Un estilo de danza", "Una forma de hacer manualidades"],
        respuesta: "La creación de prendas de vestir y accesorios según las tendencias y preferencias del mercado",
        ayuda: "Implica el diseño y la producción de prendas de vestir, calzado y accesorios de moda para su comercialización y uso por parte de los consumidores."
    },
    {
        pregunta: "¿Qué es el diseño arquitectónico?",
        opciones: ["El proceso de diseño y planificación de edificios y estructuras físicas", "Una técnica de dibujo", "Un formato de archivo de imagen", "Una técnica de jardinería"],
        respuesta: "El proceso de diseño y planificación de edificios y estructuras físicas",
        ayuda: "Involucra la concepción, diseño y planificación de espacios habitables y funcionales que satisfagan las necesidades humanas y estéticas."
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
