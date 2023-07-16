const listaConsola=()=>{
   return fetch("http://localhost:3000/consolas").then(res=>res.json());
}

const crearConsola=(url,categoria,nombre,precio,descripcion)=>{
    return fetch("http://localhost:3000/consolas",{
        method:"POST",
        headers:{
           "Content-Type":"application/json"
        },
        body:JSON.stringify({url,categoria,nombre,precio,descripcion,id:uuid.v4()})
    })  ;
}

const eliminarConsola=(id)=>{
    return fetch(`http://localhost:3000/consolas/${id}`,{
        method:"DELETE"}
    );
}

const updateConsola=(url,categoria,nombre,precio,descripcion,id)=>{
    return fetch(`http://localhost:3000/consolas/${id}`,{
        method:"PUT",
        headers:{
           "Content-Type":"application/json"
        },
        body:JSON.stringify({url,categoria,nombre,precio,descripcion})
    })  ;
}

const detalleConsola=(id)=>{
  return fetch(`http://localhost:3000/consolas/${id}`).then(res=>res.json());  
}

const nombreConsola=(nombre)=>{
    return fetch(`http://localhost:3000/consolas/?q=${nombre}`).then(res=>res.json());  
  }

export const listasConsola={
    listaConsola,
    crearConsola,
    eliminarConsola,
    detalleConsola,
    updateConsola,
    nombreConsola,
}