;(function(){
	window.addEventListener("load", cargar);
	var boton = document.getElementById("enviar");
	var textArea= document.getElementById("mensaje");

	function cargar(){
		boton.addEventListener("click", postear)
		textArea.addEventListener("keyup", validarMensaje);
	}

	function postear(e){
		e.preventDefault();

		if (existeContenido(textArea.value)){
			var contenedor = document.getElementById("mensajes");

			var contenedorPost= document.createElement("div");
			contenedorPost.classList.add("card-panel", "overflow");

			contenedor.insertBefore(contenedorPost, contenedor.firstElementChild);

			crear("div", "col", "s1", contenedorPost);
			crear("div", "col", "s11", contenedorPost);

			var nombre= document.createElement("span");
			nombre.innerHTML="Maryori Quiroz Chavez";
			nombre.classList.add("bold");

			var imagen= document.createElement("img");
			imagen.src= "img/perfil.jpg" ;
			imagen.classList.add("perfil");

			var mensaje = document.createElement("span");
			mensaje.innerHTML= textArea.value;


			contenedorPost.firstElementChild.appendChild(imagen);
			contenedorPost.lastElementChild.appendChild(nombre);
			hora(contenedorPost.lastElementChild);
			contenedorPost.lastElementChild.appendChild(mensaje);

			boton.disabled = true;
			textArea.value= "";
		} else{
			alert("Ingresa un texto")
		}
	}


	function crear(div, clase1, clase2, padre){
		var contenedorTexto= document.createElement(div);
		contenedorTexto.classList.add(clase1, clase2);
		padre.appendChild(contenedorTexto);
	}

	function hora(contenedorTexto){
		var horaActual = new Date();
		var hora = horaActual.getHours();
		var minutos = horaActual.getMinutes();

		if(minutos < 10)
			minutos = "0" + minutos;

		var post = "Publicado a las " + hora + ":" + minutos;
		var tiempo = document.createElement("span");
		tiempo.innerHTML= post;
		tiempo.classList.add("hora");

		contenedorTexto.appendChild(tiempo);
	}

	function contenido(img, src, a, clase, padre){
		var imagen= document.createElement(img);
		imagen.src= a;
		imagen.classList.add(clase);
		padre.appendChild(imagen);
	}

	function validarMensaje() {
 		var mensaje = textArea.value.trim();
 		if (mensaje.length == 0) {
 			boton.disabled = true;
 		} else {
 			boton.disabled = false;
 		}
 	}

 	function existeContenido(mensaje) {
 		mensaje = mensaje.trim();
 		if (mensaje.length == 0) {
 			return false;
 		} else {
 			return true;
 		}
 	}
})();