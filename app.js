const contenedor = document.querySelector("#contenedor");
const crearOpciones = () => {
  let selector = `<div>
                    <label for="tiempo">Seleccione el tipo de clima hoy: </label>
                    <select id="tiempo" onchange="obtenerTiempo()">
                      <option value="">Elija una opción</option>
                      <option value="soleado">Soleado</option>
                      <option value="lluvioso">Lluvioso</option>                        <option value="nevando">Nevando</option> 
                      <option value="nublado">Nublado</option>
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
const crearImagenSoleado = () => {
  let imagen = `<img class="imagen" src="img/Soleado.png" alt="Está soleado">`;
  elementoDiv.innerHTML = imagen;
};
const crearImagenLluvioso = () => {
  let imagen = `<img class="imagen" src="img/Lluvioso.png" alt="Está lluvioso">`;
  elementoDiv.innerHTML = imagen;
};
const crearImagenNevando = () => {
  let imagen = `<img class="imagen" src="img/Nevando.png" alt="Está nevando">`;
  elementoDiv.innerHTML = imagen;
};
const crearImagenNublado = () => {
  let imagen = `<img class="imagen" src="img/Nublado.png" alt="Está nublado">`;
  elementoDiv.innerHTML = imagen;
};
const obtenerTiempo = () => {
  let opcionSeleccionada = elementoSelector.value;
  switch (opcionSeleccionada) {
    case "soleado":
      elementoParrafo.textContent =
        "Está soleado afuera hoy, ve a la playa y compra un helado.";
      break;
    case "lluvioso":
      elementoParrafo.textContent =
        "La lluvia está cayendo afuera, llévate un paraguas.";
      break;
    case "nevando":
      elementoParrafo.textContent =
        "La nieve está cayendo, tómate una taza de chocolate caliente.";
      break;
    case "nublado":
      elementoParrafo.textContent =
        "Está nublado hoy, podría cambiar en cualquier momento.";
      break;
    default:
      elementoParrafo.textContent = "";
  }
  opcionSeleccionada === "soleado"
    ? crearImagenSoleado()
    : opcionSeleccionada === "lluvioso"
    ? crearImagenLluvioso()
    : opcionSeleccionada === "nevando"
    ? crearImagenNevando()
    : opcionSeleccionada === "nublado"
    ? crearImagenNublado()
    : (elementoDiv.textContent = "");
};
