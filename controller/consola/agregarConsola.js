import { listasConsola } from "../../services/listaConsolas.js";
import { listasVideoJuegos } from "../../services/listaVideoJuegos.js";
import { listaAccesorios } from "../../services/listaAccesorios.js";

const urll = new URL(window.location);
const id = urll.searchParams.get("id");
const tipo = urll.searchParams.get("tipo");
console.log(id, tipo);

const formulario = document.querySelector("[data-form]");
const url = document.querySelector("[data-url]");
const categoria = document.querySelector("[data-categoria]");
const nombre = document.querySelector("[data-nombre]");
const precio = document.querySelector("[data-precio]");
const descripcion = document.querySelector("[data-info]");

switch (tipo) {
  case "consola":
    listasConsola.detalleConsola(id).then((perfil) => {
      url.value = perfil.url;
      categoria.value = perfil.categoria;
      nombre.value = perfil.nombre;
      precio.value = perfil.precio;
      descripcion.value = perfil.descripcion;
    });
    break;
  case "accesorio":
    listaAccesorios.detalleAccesorio(id).then((perfil) => {
      url.value = perfil.url;
      categoria.value = perfil.categoria;
      nombre.value = perfil.nombre;
      precio.value = perfil.precio;
      descripcion.value = perfil.descripcion;
    });
    break;
  case "videojuegos":
    listasVideoJuegos.detalleVideoJuego(id).then((perfil) => {
      url.value = perfil.url;
      categoria.value = perfil.categoria;
      nombre.value = perfil.nombre;
      precio.value = perfil.precio;
      descripcion.value = perfil.descripcion;
    });
    break;
  default:
    url.value = "";
    categoria.value = "";
    nombre.value = "";
    precio.value = "";
    descripcion.value = "";
    break;
}

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  switch (tipo) {
    case "consola":
      listasConsola
        .updateConsola(
          url.value,
          categoria.value,
          nombre.value,
          precio.value,
          descripcion.value,
          
        )
        .then(
          (re) => (window.location.href = "../paginasVarias/edicionExitosa.htm")
        );
      break;
    case "accesorio":
      listaAccesorios.updateAccesorio(
          url.value,
          categoria.value,
          nombre.value,
          precio.value,
          descripcion.value,
          
        )
        .then(
          (re) => (window.location.href = "../paginasVarias/edicionExitosa.htm")
        );
      break;
    case "videojuegos":
      listasVideoJuegos.updateVideoJuego(
          url.value,
          categoria.value,
          nombre.value,
          precio.value,
          descripcion.value,
          
        )
        .then(
          (re) => (window.location.href = "../paginasVarias/edicionExitosa.htm")
        );
      break;
    default:
      switch (categoria.value) {
        case "videojuegos":
          listasVideoJuegos
            .crearVideoJuegos(
              url.value,
              categoria.value,
              nombre.value,
              precio.value,
              descripcion.value
            )
            .then((res) =>
              console.log(
                (window.location.href =
                  "../paginasVarias/creadoCorrectamente.html")
              )
            );
          break;
        case "consola":
          listasConsola
            .crearConsola(
              url.value,
              categoria.value,
              nombre.value,
              precio.value,
              descripcion.value
            )
            .then((res) =>
              console.log(
                (window.location.href =
                  "../paginasVarias/creadoCorrectamente.html")
              )
            );

          break;
        case "accesorio":
          listaAccesorios
            .crearAccesorio(
              url.value,
              categoria.value,
              nombre.value,
              precio.value,
              descripcion.value
            )
            .then((res) =>
              console.log(
                (window.location.href =
                  "../paginasVarias/creadoCorrectamente.html")
              )
            );
          break;
        case "":
          alert("no se permite vacios");
          break;

        default:
          break;
      }
      break;
  }
});
