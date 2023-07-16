const listaAccesorio=()=>{
    return fetch("http://localhost:3000/accesorios").then(res=>res.json());
 }
 
 const crearAccesorio=(url,categoria,nombre,precio,descripcion)=>{
    return fetch("http://localhost:3000/accesorios",{
        method:"POST",
        headers:{
           "Content-Type":"application/json"
        },
        body:JSON.stringify({url,categoria,nombre,precio,descripcion,id:uuid.v4()})
    })  ;
}
 
const eliminarAccesorio=(id)=>{
    return fetch(`http://localhost:3000/accesorios/${id}`,{
        method:"DELETE"}
    );
}
 
const updateAccesorio=(url,categoria,nombre,precio,descripcion,id)=>{
    return fetch(`http://localhost:3000/accesorios/${id}`,{
        method:"PUT",
        headers:{
           "Content-Type":"application/json"
        },
        body:JSON.stringify({url,categoria,nombre,precio,descripcion})
    })  ;
}

const detalleAccesorio=(id)=>{
  return fetch(`http://localhost:3000/accesorios/${id}`).then(res=>res.json());  
}

 
 export const listaAccesorios={
     listaAccesorio,
     crearAccesorio,
     eliminarAccesorio,
     detalleAccesorio,
     updateAccesorio,
 }