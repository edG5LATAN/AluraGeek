const listaVideoJuego=()=>{
    return fetch("http://localhost:3000/videojuego").then(res=>res.json());
 }
 
 const crearVideoJuegos=(url,categoria,nombre,precio,descripcion)=>{
    return fetch("http://localhost:3000/videojuego",{
        method:"POST",
        headers:{
           "Content-Type":"application/json"
        },
        body:JSON.stringify({url,categoria,nombre,precio,descripcion,id:uuid.v4()})
    })  ;
}
 
const eliminarVideoJuego=(id)=>{
    return fetch(`http://localhost:3000/videojuego/${id}`,{
        method:"DELETE"}
    );
} 

const updateVideoJuego=(url,categoria,nombre,precio,descripcion,id)=>{
    return fetch(`http://localhost:3000/videojuego/${id}`,{
        method:"PUT",
        headers:{
           "Content-Type":"application/json"
        },
        body:JSON.stringify({url,categoria,nombre,precio,descripcion})
    })  ;
}

const detalleVideoJuego=(id)=>{
  return fetch(`http://localhost:3000/videojuego/${id}`).then(res=>res.json());  
}
 
 
 export const listasVideoJuegos={
     listaVideoJuego,
     crearVideoJuegos,
     eliminarVideoJuego,
     detalleVideoJuego,
     updateVideoJuego,
 }