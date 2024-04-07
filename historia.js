let INDEX_PREGUNTA = 0;
let puntaje = 0;

const preguntas = [
    {
        pregunta: "¿Qué movimiento artístico surgió a principios del siglo XX como una reacción contra el impresionismo y buscaba representar la realidad de una manera más subjetiva y emocional?",
        opciones: ["Expresionismo", "Surrealismo", "Fauvismo", "Cubismo"],
        respuesta: "Expresionismo",
        ayuda: "Este movimiento se caracterizaba por el énfasis en la expresión de las emociones y la distorsión de la realidad para transmitir sentimientos intensos."
    },
    {
        pregunta: "¿Qué movimiento artístico se desarrolló en el contexto de la Primera Guerra Mundial y buscaba explorar el subconsciente y los sueños a través de representaciones surrealistas y oníricas?",
        opciones: ["Dadaísmo", "Constructivismo", "Futurismo", "Cubismo"],
        respuesta: "Surrealismo",
        ayuda: "Este movimiento artístico desafiaba las convenciones artísticas establecidas y exploraba el mundo de los sueños y lo irracional."
    },
    {
        pregunta: "¿Qué movimiento artístico se caracterizaba por el uso de colores vibrantes y la representación de formas distorsionadas para expresar emociones intensas y provocar una respuesta emocional en el espectador?",
        opciones: ["Fauvismo", "Dadaísmo", "Cubismo", "Futurismo"],
        respuesta: "Fauvismo",
        ayuda: "Este movimiento recibió su nombre debido al uso audaz y salvaje del color por parte de sus artistas, que buscaban liberarse de las limitaciones del realismo."
    },
    {
        pregunta: "¿Qué movimiento artístico se caracteriza por la representación de formas geométricas y la fragmentación de la realidad para mostrar múltiples perspectivas en una sola imagen?",
        opciones: ["Cubismo", "Expresionismo", "Surrealismo", "Futurismo"],
        respuesta: "Cubismo",
        ayuda: "Este movimiento fue liderado por artistas como Pablo Picasso y Georges Braque, quienes desafiaron las convenciones artísticas tradicionales al romper y reorganizar la realidad."
    },
    {
        pregunta: "¿Qué movimiento artístico se enfocaba en la representación dinámica de la velocidad, el movimiento y la modernidad, influenciado por la era de la máquina y la tecnología emergente?",
        opciones: ["Futurismo", "Dadaísmo", "Constructivismo", "Suprematismo"],
        respuesta: "Futurismo",
        ayuda: "Este movimiento celebraba la velocidad y la energía de la vida moderna, buscando capturar la experiencia de la era industrial en sus obras."
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
