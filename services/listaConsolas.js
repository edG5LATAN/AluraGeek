const url="https://apialurageek-1yme.onrender.com/consolas"

const listaConsola=()=>{
   return fetch(url).then(res=>res.json());
}

const crearConsola=(url,categoria,nombre,precio,descripcion)=>{
    return fetch("https://apialurageek-1yme.onrender.com/consolas",{
        method:"POST",
        headers:{
           "Content-Type":"application/json"
        },
        body:JSON.stringify({url,categoria,nombre,precio,descripcion,id:uuid.v4()})
    })  ;
}

const eliminarConsola=(id)=>{
    return fetch(`${url}/${id}`,{
        method:"DELETE"}
    );
}

const updateConsola=(url,categoria,nombre,precio,descripcion,id)=>{
    return fetch(`https://apialurageek-1yme.onrender.com/consolas/${id}`,{
        method:"PUT",
        headers:{
           "Content-Type":"application/json"
        },
        body:JSON.stringify({url,categoria,nombre,precio,descripcion})
    })  ;
}

const detalleConsola=(id)=>{
  return fetch(`${url}/${id}`).then(res=>res.json());  
}

const nombreConsola=(nombre)=>{
    return fetch(`${url}/?q=${nombre}`).then(res=>res.json());  
  }

export const listasConsola={
    listaConsola,
    crearConsola,
    eliminarConsola,
    detalleConsola,
    updateConsola,
    nombreConsola,
}