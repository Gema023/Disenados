let INDEX_PREGUNTA = 0;
let puntaje = 0;

const preguntas = [
    {
        pregunta: "¿Qué es el concepto de diseño en el proceso de diseño de productos?",
        opciones: ["La idea central o la visión que guía el desarrollo del producto", "Una herramienta de software", "Una técnica de marketing", "Una forma de hacer ejercicio"],
        respuesta: "La idea central o la visión que guía el desarrollo del producto",
        ayuda: "Es la idea que proporciona dirección y coherencia al proceso de diseño."
    },
    {
        pregunta: "¿Qué es el análisis de mercado en el diseño de productos?",
        opciones: ["La evaluación de las tendencias del mercado y las necesidades de los consumidores", "Un tipo de baile popular", "Una técnica de pintura", "Un género musical"],
        respuesta: "La evaluación de las tendencias del mercado y las necesidades de los consumidores",
        ayuda: "Implica comprender las demandas y preferencias de los consumidores."
    },
    {
        pregunta: "¿Qué significa el término 'usabilidad' en el diseño de productos?",
        opciones: ["La facilidad con la que un producto puede ser utilizado de manera efectiva y eficiente", "Una técnica de jardinería", "Una forma de hacer manualidades", "Una serie de películas de ciencia ficción"],
        respuesta: "La facilidad con la que un producto puede ser utilizado de manera efectiva y eficiente",
        ayuda: "Se refiere a la experiencia del usuario al interactuar con el producto."
    },
    {
        pregunta: "¿Qué es el diseño centrado en el usuario?",
        opciones: ["Un enfoque de diseño que prioriza las necesidades y experiencias de los usuarios", "Una técnica de construcción", "Una forma de hacer música", "Una técnica de dibujo"],
        respuesta: "Un enfoque de diseño que prioriza las necesidades y experiencias de los usuarios",
        ayuda: "Coloca a los usuarios finales en el centro del proceso de diseño."
    },
    {
        pregunta: "¿Qué son los factores ergonómicos en el diseño de productos?",
        opciones: ["Los aspectos relacionados con la interacción entre los usuarios y los productos", "Una técnica de cocina", "Una técnica de pintura", "Una forma de hacer ejercicio"],
        respuesta: "Los aspectos relacionados con la interacción entre los usuarios y los productos",
        ayuda: "Incluyen consideraciones de comodidad y seguridad para los usuarios."
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
