const url="https://apialurageek-1yme.onrender.com/accesorios"

const listaAccesorio=()=>{
    return fetch(url).then(res=>res.json());
 }
 const crearAccesorio=(url,categoria,nombre,precio,descripcion)=>{
    return fetch("https://apialurageek-1yme.onrender.com/accesorios",{
        method:"POST",
        headers:{
           "Content-Type":"application/json"
        },
        body:JSON.stringify({url,categoria,nombre,precio,descripcion,id:uuid.v4()})
    })  ;
}
 
const eliminarAccesorio=(id)=>{
    return fetch(`${url}/${id}`,{
        method:"DELETE"}
    );
}
 
const updateAccesorio=(url,categoria,nombre,precio,descripcion,id)=>{
    return fetch(`https://apialurageek-1yme.onrender.com/accesorios/${id}`,{
        method:"PUT",
        headers:{
           "Content-Type":"application/json"
        },
        body:JSON.stringify({url,categoria,nombre,precio,descripcion})
    })  ;
}

const detalleAccesorio=(id)=>{
  return fetch(`${url}/${id}`).then(res=>res.json());  
}

 
 export const listaAccesorios={
     listaAccesorio,
     crearAccesorio,
     eliminarAccesorio,
     detalleAccesorio,
     updateAccesorio,
 }