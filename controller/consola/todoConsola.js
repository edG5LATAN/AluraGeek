import { listasConsola} from '../../services/listaConsolas.js'

const crearCaja=(url,nombre,precio,categoria,id)=>{
   const caja=document.createElement("div");
   caja.classList.add("producto_caja_caja");
    const contenido =` <p class="btn_modificadores">  
    <a href="../../html/homeLogin/login.html?id=${id}&tipo=consola&btn=delete">
       <span class="material-symbols-outlined btn_op" id="${id}" data-btn-delete>
         delete
       </span> 
    </a>
     
    <a href="../../html/homeLogin/login.html?id=${id}&tipo=consola&btn=update">
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

const contenedor1=document.querySelector("[data-consola]");


listasConsola.listaConsola().then(data=>{
    data.forEach(({url,nombre,precio,categoria,id})=> {
       const nuevaLinea= crearCaja(url,nombre,precio,categoria,id)
       contenedor1.appendChild(nuevaLinea);
    });
})