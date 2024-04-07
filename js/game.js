const ruleta = document.querySelector('#ruleta');

ruleta.addEventListener('click', girar);
giros = 0;
function girar(){
  if (giros < 3) {
    let rand = Math.random() * 7200;
    calcular(rand);
    giros++;
    var sonido = document.querySelector('#audio');
    sonido.setAttribute('src', 'sonido/ruleta.mp3');
    document.querySelector('.contador').innerHTML = 'TURNOS: ' + giros; 
  }else{
    Swal.fire({
      icon: 'success',
      title: 'VUELVA PRONTO EL JUEGO TERMINO!!',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Aceptar',
      allowOutsideClick: false
    }).then((result)=>{
      if (result.value == true) {
        giros = 0;
         document.querySelector('.elije').innerHTML = 'TU CORTESIA ES: ';
         document.querySelector('.contador').innerHTML = 'TURNOS: ' + giros;        
      }
    })
  }


function premio(premios){

  document.querySelector('.elije').innerHTML = 'TU CORTESIA ES: ' + premios;

}


 function calcular(rand) {

  valor = rand / 360;
  valor = (valor - parseInt(valor.toString().split(".")[0]))* 360;
  ruleta.style.transform = "rotate("+rand+"deg)";

  setTimeout(() => {
    switch (true) {
      case valor > 0 && valor <= 51.43:
        window.location.href = "producto.html";
        break;
      case valor > 51.44 && valor <= 102.86:
        window.location.href = "llave.html";
        break;
      case valor > 102.87 && valor <= 154.29:
        window.location.href = "historia.html";
        break;
      case valor > 154.30 && valor <= 205.72:
        window.location.href = "moda.html";
        break;
      case valor > 205.73 && valor <= 257.15:
        window.location.href = "diseñadores.html";
        break;
      case valor > 257.16 && valor <= 308.58:
        window.location.href = "grafico.html";
        break;
      case valor > 308.59 && valor <= 360:
        window.location.href = "interiores.html";
        break;
    }
  }, 5000); // 5000 milisegundos = 5 segundos de retraso
}
}