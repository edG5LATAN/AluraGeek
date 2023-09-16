const url ="https://apialurageek-1yme.onrender.com/videojuego"

const listaVideoJuego=()=>{
    return fetch(url).then(res=>res.json());
 }
 
 const crearVideoJuegos=(url,categoria,nombre,precio,descripcion)=>{
    return fetch("https://apialurageek-1yme.onrender.com/videojuego",{
        method:"POST",
        headers:{
           "Content-Type":"application/json"
        },
        body:JSON.stringify({url,categoria,nombre,precio,descripcion,id:uuid.v4()})
    })  ;
}
 
const eliminarVideoJuego=(id)=>{
    return fetch(`${url}/${id}`,{
        method:"DELETE"}
    );
} 

const updateVideoJuego=(url,categoria,nombre,precio,descripcion,id)=>{
    return fetch(`https://apialurageek-1yme.onrender.com/videojuego/${id}`,{
        method:"PUT",
        headers:{
           "Content-Type":"application/json"
        },
        body:JSON.stringify({url,categoria,nombre,precio,descripcion})
    })  ;
}

const detalleVideoJuego=(id)=>{
  return fetch(`${url}/${id}`).then(res=>res.json());  
}
 
 
 export const listasVideoJuegos={
     listaVideoJuego,
     crearVideoJuegos,
     eliminarVideoJuego,
     detalleVideoJuego,
     updateVideoJuego,
 }