let INDEX_PREGUNTA = 0;
let puntaje = 0;

const preguntas = [
    {
        pregunta: "¿Qué diseñador es conocido como el padre del minimalismo en la moda?",
        opciones: ["Coco Chanel", "Calvin Klein", "Yves Saint Laurent", "Giorgio Armani"],
        respuesta: "Calvin Klein",
        ayuda: "Este diseñador es famoso por su enfoque minimalista y su estilo moderno y elegante."
    },
    {
        pregunta: "¿Qué diseñador italiano es conocido por su estilo extravagante y su amor por el exceso?",
        opciones: ["Gianni Versace", "Karl Lagerfeld", "Ralph Lauren", "Donatella Versace"],
        respuesta: "Gianni Versace",
        ayuda: "Este diseñador fundó una de las casas de moda más icónicas del mundo, conocida por sus diseños audaces y su estilo glamoroso."
    },
    {
        pregunta: "¿Qué diseñador francés es famoso por sus diseños de alta costura y su icónico traje de esmoquin para mujeres?",
        opciones: ["Christian Dior", "Alexander McQueen", "Yves Saint Laurent", "Coco Chanel"],
        respuesta: "Yves Saint Laurent",
        ayuda: "Este diseñador revolucionó la moda femenina con su estilo elegante y sofisticado, desafiando las normas de género en la moda."
    },
    {
        pregunta: "¿Qué diseñadora es conocida por su enfoque innovador en la moda urbana y el streetwear?",
        opciones: ["Rihanna", "Vivienne Westwood", "Stella McCartney", "Kanye West"],
        respuesta: "Rihanna",
        ayuda: "Además de su exitosa carrera musical, esta artista ha incursionado en el mundo de la moda con su marca de ropa urbana y su colaboración con importantes diseñadores."
    },
    {
        pregunta: "¿Qué diseñador español es conocido por su estilo surrealista y sus diseños vanguardistas?",
        opciones: ["Paco Rabanne", "Manolo Blahnik", "Cristóbal Balenciaga", "Alexander Wang"],
        respuesta: "Manolo Blahnik",
        ayuda: "Este diseñador de calzado es famoso por sus creaciones únicas y extravagantes que han cautivado a celebridades y amantes de la moda en todo el mundo."
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
