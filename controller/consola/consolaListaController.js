import { listasConsola } from "../../services/listaConsolas.js";

const crearCaja=(url,nombre,precio,categoria,id)=>{
   const caja=document.createElement("div");
   caja.classList.add("caja_caja");
    const contenido =`
          <img src="${url}" class="caja_img" alt="" />
          <h5>${nombre}</h5>
          <p><span>$</span> ${precio}</p>
          <a href="./paginasVarias/paginaIndividual.html?id=${id}&tipo=${categoria}" class="caja_caja-btn">ver producto</a>`;
       caja.innerHTML=contenido;   
       return caja
};


const contenedor1=document.querySelector("[data-contenedor1]");


listasConsola.listaConsola().then(data=>{
    data.forEach(({url,nombre,precio,categoria,id})=> {
       const nuevaLinea= crearCaja(url,nombre,precio,categoria,id)
       contenedor1.appendChild(nuevaLinea);
    });
})