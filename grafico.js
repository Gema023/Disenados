let INDEX_PREGUNTA = 0;
let puntaje = 0;

const preguntas = [
    {
        pregunta: "¿Qué es la tipografía en diseño gráfico?",
        opciones: ["El arte y técnica de seleccionar y diseñar tipos de letra", "Un estilo de danza", "Una técnica de cocina", "Un género musical"],
        respuesta: "El arte y técnica de seleccionar y diseñar tipos de letra",
        ayuda: "Implica la selección y diseño de fuentes para comunicar visualmente un mensaje."
    },
    {
        pregunta: "¿Qué es el color RGB en diseño gráfico?",
        opciones: ["Un modelo de color basado en la combinación de luz roja, verde y azul", "Un formato de archivo de imagen", "Un estilo de música", "Una técnica de construcción"],
        respuesta: "Un modelo de color basado en la combinación de luz roja, verde y azul",
        ayuda: "Se utiliza en pantallas y dispositivos digitales para representar colores mediante la mezcla de luz."
    },
    {
        pregunta: "¿Qué es el concepto de 'espacio negativo' en diseño gráfico?",
        opciones: ["El espacio vacío alrededor y entre los objetos en un diseño", "Una técnica de escultura", "Una técnica de jardinería", "Una forma de hacer deporte"],
        respuesta: "El espacio vacío alrededor y entre los objetos en un diseño",
        ayuda: "Es el área no ocupada por elementos visuales en un diseño, que puede ser tan importante como los elementos positivos."
    },
    {
        pregunta: "¿Qué es el diseño de marca?",
        opciones: ["La creación de una identidad visual que representa a una empresa o producto", "Una técnica de construcción", "Un estilo de pintura", "Una forma de hacer manualidades"],
        respuesta: "La creación de una identidad visual que representa a una empresa o producto",
        ayuda: "Involucra el diseño de elementos visuales, como logotipos y paletas de colores, para comunicar la identidad de una marca."
    },
    {
        pregunta: "¿Qué es la retícula en diseño gráfico?",
        opciones: ["Una estructura de líneas y espacios utilizada para organizar contenido", "Una técnica de costura", "Una forma de hacer música", "Una técnica de dibujo"],
        respuesta: "Una estructura de líneas y espacios utilizada para organizar contenido",
        ayuda: "Es un sistema de cuadrícula utilizado para alinear y organizar elementos en un diseño de manera coherente."
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
