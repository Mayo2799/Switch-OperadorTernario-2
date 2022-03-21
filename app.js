const contenedor = document.querySelector("#contenedor");
const crearOpciones = () => {
  let selector = `<div>
                    <label for="tiempo">Seleccione el tipo de clima hoy: </label>
                    <select id="tiempo" onchange="obtenerTiempo()">
                      <option value="">Elija una opción</option>
                      <option value="Soleado">Soleado</option>
                      <option value="Lluvioso">Lluvioso</option>
                      <option value="Nevando">Nevando</option> 
                      <option value="Nublado">Nublado</option>
                    </select>
                    <p id="parrafo"></p>
                    <div id="contenedorImagen"></div>
                  </div>`;
  contenedor.innerHTML = selector;
};
crearOpciones();
let elementoSelector = document.querySelector("#tiempo"),
  elementoParrafo = document.querySelector("#parrafo"),
  elementoDiv = document.querySelector("#contenedorImagen");
const crearImagen = (imagenes) => {
  let imagen = `<img class="imagen" src="img/${imagenes}.png" alt="${imagenes}">`;
  elementoDiv.innerHTML = imagen;
};
const obtenerTiempo = () => {
  let opcionSeleccionada = elementoSelector.value;
  switch (opcionSeleccionada) {
    case "Soleado":
      elementoParrafo.textContent =
        "Está soleado afuera hoy, ve a la playa y compra un helado.";
      break;
    case "Lluvioso":
      elementoParrafo.textContent =
        "La lluvia está cayendo afuera, llévate un paraguas.";
      break;
    case "Nevando":
      elementoParrafo.textContent =
        "La nieve está cayendo, tómate una taza de chocolate caliente.";
      break;
    case "Nublado":
      elementoParrafo.textContent =
        "Está nublado hoy, podría cambiar en cualquier momento.";
      break;
    default:
      elementoParrafo.textContent = "";
  }
  crearImagen(opcionSeleccionada);
};
