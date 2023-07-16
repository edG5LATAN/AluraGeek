import {listasVideoJuegos} from '../../services/listaVideoJuegos.js'

const crearCaja=(url,nombre,precio,categoria,id)=>{
   const caja=document.createElement("div");
   caja.classList.add("producto_caja_caja");
    const contenido =`<p class="btn_modificadores">  
    <a href="../../html/homeLogin/login.html?id=${id}&tipo=videojuego&btn=delete">
    <span class="material-symbols-outlined btn_op" id="${id}" data-btn-delete>
      delete
    </span> 
 </a> 
 
 <a href="../../html/homeLogin/login.html?id=${id}&tipo=videojuego&btn=update">
      <span class="material-symbols-outlined btn_op" id="${id}" data-btn-edit>
        edit
     </span>  
    </a>
      
  </p>
    
          <img src="${url}" class="producto_caja_img" alt="" />
          <h5>${nombre}</h5>
          <p><span>$</span> ${precio}</p>
          <a href="../../paginasVarias/paginaIndividual.html?id=${id}&tipo=${categoria}" class="producto_caja_caja-btn">ver producto</a>
      
  `;
       caja.innerHTML=contenido;   
       return caja
};

const contenedor1=document.querySelector("[data-videoJuego]");


listasVideoJuegos.listaVideoJuego().then(data=>{
    data.forEach(({url,nombre,precio,categoria,id})=> {
       const nuevaLinea= crearCaja(url,nombre,precio,categoria,id)
       contenedor1.appendChild(nuevaLinea);
    });
})