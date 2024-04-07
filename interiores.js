let INDEX_PREGUNTA = 0;
let puntaje = 0;

const preguntas = [
    {
        pregunta: "¿Qué elemento de iluminación se utiliza para crear un ambiente acogedor en una sala de estar?",
        opciones: ["Lámpara de pie", "Foco empotrado en el techo", "Candelabro de techo", "Luz de lectura"],
        respuesta: "Lámpara de pie",
        ayuda: "Es un tipo de lámpara portátil que se coloca en el suelo y proyecta luz hacia arriba para iluminar el espacio de manera suave y difusa."
    },
    {
        pregunta: "¿Cuál de los siguientes materiales es comúnmente utilizado para revestir pisos en áreas de alto tráfico?",
        opciones: ["Madera maciza", "Piso laminado", "Cerámica", "Moqueta"],
        respuesta: "Cerámica",
        ayuda: "Es duradera y resistente, lo que la hace ideal para áreas de alto tráfico como pasillos y cocinas."
    },
    {
        pregunta: "¿Qué función cumple un espejo grande en un espacio pequeño?",
        opciones: ["Ampliar la luz natural", "Añadir profundidad visual", "Reflejar colores", "Crear un punto focal"],
        respuesta: "Añadir profundidad visual",
        ayuda: "Los espejos grandes pueden hacer que un espacio pequeño parezca más grande al reflejar la luz y crear una sensación de profundidad."
    },
    {
        pregunta: "¿Qué tipo de cortina se recomienda para permitir el paso de luz natural mientras se mantiene la privacidad?",
        opciones: ["Persianas enrollables", "Cortinas opacas", "Estores", "Cortinas traslúcidas"],
        respuesta: "Cortinas traslúcidas",
        ayuda: "LPermiten que la luz natural entre en la habitación mientras filtran la vista desde el exterior, manteniendo la privacidad."
    },
    {
        pregunta: "¿Qué color se utiliza comúnmente para crear una sensación de calma y serenidad en un dormitorio?",
        opciones: ["Rojo", "Verde", "Amarillo", "Azul"],
        respuesta: "Azul",
        ayuda: "Se asocia comúnmente con la tranquilidad y puede ayudar a reducir el estrés, por lo que es una opción popular para dormitorios."
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
