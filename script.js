let gangerArray = []

$(document).ready(function(){
  const dbRef = firebase.database().ref();
  const gangerRef = dbRef.child("ganger");
  /* ganger.push({
    "name":"Ganger pro",
    "desc":"monseñor romerodaskjas"
  }) */

  gangerRef.once("value")
  .then(function(snapshot) {
    const gangerData = snapshot.val();
    gangerArray = gangerData;
    cargar();
  });
})



  const name = "";
  const desc = "";
  const nacionalidad = "";
  const nacionalidad_title = "";
  const imageUrl = ""
  const gender = ""
   
  const name_card = document.getElementById("name_card");
  const desc_card = document.getElementById("desc_card");
  const nacionalidad_card = document.getElementById("nacionalidad_card");
  const imageUrl_card = document.getElementById("imageUrl_card");
  const gender_card = document.getElementById("gender_card");

  function generar(){
    playSound();
    rotarCard();

      const index = Math.floor(Math.random() * gangerArray.length); // Generamos un índice aleatorio
      console.log(index)

      const nombre = gangerArray[index].name; // Obtenemos el nombre del personaje seleccionado
      const descripcion = gangerArray[index].desc; // Obtenemos la descripción del personaje seleccionado
      const imageUrl = gangerArray[index].imageUrl;
      const urlImagen = gangerArray[index].icono_url; // Obtenemos la URL de la imagen correspondiente al personaje seleccionado
      const nacionalidad_title = gangerArray[index].nacionalidad
      const gender = gangerArray[index].gender
      
      const imagePreload = document.getElementById("imagePreload"); // Obtenemos la imagen pre-cargada
      imagePreload.setAttribute("src", imageUrl);

    setTimeout(function() {
      name_card.innerHTML = nombre; // Asignamos el nombre al elemento HTML correspondiente
      desc_card.innerHTML = descripcion; // Asignamos la descripción al elemento HTML correspondiente
      imageUrl_card.style.backgroundImage = `url(${imageUrl})`;
      nacionalidad_card.style.backgroundImage = `url(${urlImagen})`;
      nacionalidad_card.title = nacionalidad_title
      gender_card.style.backgroundImage = `url("assets/${gender}.png")`;
      
    }, 500);
   
  }

  function cargar(){
    for (let i = 0; i < gangerArray.length; i++) {
      const image_preload_div = document.getElementById("image_preload_div");
      var nuevoDiv = document.createElement("img");
      let imageUrlfor = gangerArray[i].imageUrl;

      nuevoDiv.setAttribute("src", imageUrlfor);
      nuevoDiv.setAttribute("class", "display_none");
      image_preload_div.appendChild(nuevoDiv);
    }
  }


  //ROTAR
  function rotarCard() {
    var card = document.getElementById("card");
    var card_back = document.getElementById("card_back");

    card.classList.toggle(`rotar`);
    card_back.classList.toggle(`rotar`);

  }



  //EFECTO DE SONIDO
  let audio = null;

  function playSound() {
    if (audio) {
      // si hay un audio reproduciéndose, detenlo y reinicia la reproducción desde el principio
      audio.pause();
      audio.currentTime = 0;
    }
    // crea un nuevo objeto Audio con la ruta del archivo de sonido

    var randomInt = Math.floor(Math.random() * 3) + 1;
    audio = new Audio(`assets/audio/mus_badnote${randomInt}.wav`);
    // inicia la reproducción del audio
    audio.play();
  }




