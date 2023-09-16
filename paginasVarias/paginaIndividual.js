import { listasConsola } from "../services/listaConsolas.js";
import { listasVideoJuegos } from "../services/listaVideoJuegos.js"
import { listaAccesorios } from "../services/listaAccesorios.js";


const urll = new URL(window.location);
const id = urll.searchParams.get("id");
const tipo = urll.searchParams.get("tipo");
console.log(id,tipo)

switch (tipo) {
  case "consola":
    const crearPagina=(url,categoria,nombre,precio,descripcion)=>{
      const pagina= document.createElement("div");
      pagina.classList.add("pagina")
      const contenido=`<img src="${url}" class="pagina_img" alt="">
      <div class="pagina_info">
        <h3>${nombre}</h3>
        <h5>${categoria}</h5>
        <p>
        ${descripcion}
        </p>
        <p class="pagina_precio"><span>$</span>${precio}</p>
      </div>`;
      pagina.innerHTML=contenido;
    
      return pagina;
    }

    const crearCaja=(url,nombre,precio,categoria,id)=>{
      const caja=document.createElement("div");
      caja.classList.add("caja_caja");
       const contenido =`
             <img src="${url}" class="caja_img" alt="" />
             <h5>${nombre}</h5>
             <p><span>$</span> ${precio}</p>
             <a href="../paginasVarias/paginaIndividual.html?id=${id}&tipo=${categoria}" class="caja_caja-btn">ver producto</a>`;
         
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
    
    const dataPaginaMostrar=document.querySelector("[data-pagina]");
    
    listasConsola.detalleConsola(id).then(({url,categoria,nombre,precio,descripcion})=>{
      const pag= crearPagina(url,categoria,nombre,precio,descripcion);
      dataPaginaMostrar.appendChild(pag)
    })

    break;
  case "videojuego":
    
  const crearPagina2=(url,categoria,nombre,precio,descripcion)=>{
    const pagina2= document.createElement("div");
    pagina2.classList.add("pagina")
    const contenido2=`<img src="${url}" class="pagina_img" alt="">
    <div class="pagina_info">
      <h3>${nombre}</h3>
      <h5>${categoria}</h5>
      <p>
      ${descripcion}
      </p>
      <p class="pagina_precio"><span>$</span>${precio}</p>
    </div>`;
    pagina2.innerHTML=contenido2;
  
    return pagina2;
  }

  const crearCaja2=(url,nombre,precio,categoria,id)=>{
    const caja2=document.createElement("div");
    caja2.classList.add("caja_caja");
     const contenido2 =`
           <img src="${url}" class="caja_img" alt="" />
           <h5>${nombre}</h5>
           <p><span>$</span> ${precio}</p>
           <a href="../paginasVarias/paginaIndividual.html?id=${id}&tipo=${categoria}" class="caja_caja-btn">ver producto</a>`;
       
           caja2.innerHTML=contenido2;   
           
        return caja2
 };   

 const contenedor2=document.querySelector("[data-contenedor1]");
 
 
 listasVideoJuegos.listaVideoJuego().then(data=>{
     data.forEach(({url,nombre,precio,categoria,id})=> {
        const nuevaLinea2= crearCaja2(url,nombre,precio,categoria,id)
        contenedor2.appendChild(nuevaLinea2);
     });
 })
  
  const dataPaginaMostrar2=document.querySelector("[data-pagina]");
  
  listasVideoJuegos.detalleVideoJuego(id).then(({url,categoria,nombre,precio,descripcion})=>{
    const pag2= crearPagina2(url,categoria,nombre,precio,descripcion);
    dataPaginaMostrar2.appendChild(pag2)
  })

    break;
  case "accesorio":
    const crearPagina4=(url,categoria,nombre,precio,descripcion)=>{
      const pagina= document.createElement("div");
      pagina.classList.add("pagina")
      const contenido=`<img src="${url}" class="pagina_img" alt="">
      <div class="pagina_info">
        <h3>${nombre}</h3>
        <h5>${categoria}</h5>
        <p>
        ${descripcion}
        </p>
        <p class="pagina_precio"><span>$</span>${precio}</p>
      </div>`;
      pagina.innerHTML=contenido;
    
      return pagina;
    }

    const crearCaja4=(url,nombre,precio,categoria,id)=>{
      const caja=document.createElement("div");
      caja.classList.add("caja_caja");
       const contenido =`
             <img src="${url}" class="caja_img" alt="" />
             <h5>${nombre}</h5>
             <p><span>$</span> ${precio}</p>
             <a href="../paginasVarias/paginaIndividual.html?id=${id}&tipo=${categoria}" class="caja_caja-btn">ver producto</a>`;
         
             caja.innerHTML=contenido;   
             
          return caja
   };
   

   const contenedor4=document.querySelector("[data-contenedor1]");
   
   
   listaAccesorios.listaAccesorio().then(data=>{
       data.forEach(({url,nombre,precio,categoria,id})=> {
          const nuevaLinea= crearCaja4(url,nombre,precio,categoria,id)
          contenedor4.appendChild(nuevaLinea);
       });
   })
    
    const dataPaginaMostrar4=document.querySelector("[data-pagina]");
    
    listaAccesorios.detalleAccesorio(id).then(({url,categoria,nombre,precio,descripcion})=>{
      const pag= crearPagina4(url,categoria,nombre,precio,descripcion);
      dataPaginaMostrar4.appendChild(pag)
    })
    break;
  default:
    break;
}



