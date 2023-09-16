import { listasConsola } from "../services/listaConsolas.js";
import { listaAccesorios } from "../services/listaAccesorios.js";
import { listasVideoJuegos } from "../services/listaVideoJuegos.js";

const url=new URL(window.location);
const id =url.searchParams.get("id");
const tipo =url.searchParams.get("tipo");
const btn =url.searchParams.get("btn");
console.log(btn)

const errorLogin=document.querySelector("[data-error-login]");
const formulario= document.querySelector("[data-form]");
const login="admin@gmail.com";
const clave="1234";



formulario.addEventListener("submit",(e)=>{
  e.preventDefault();
  const user=document.querySelector("[data-user]").value;
  const pass=document.querySelector("[data-pass]").value;
  if(user!=""&& clave!=""){
     if(user==login && clave==pass){
       switch (btn) {
         case "delete":
            switch (tipo) {
               case "consola":
                listasConsola.eliminarConsola(id).then(res=> window.location.href="../../paginasVarias/eliminadoCorrectamente.html");
                  break;
               case "accesorio":
                 listaAccesorios.eliminarAccesorio(id).then(res=>window.location.href="../../paginasVarias/eliminadoCorrectamente.html");
                  break;
               case "videojuego":
                  listasVideoJuegos.eliminarVideoJuego(id).then(res=>window.location.href="../../paginasVarias/eliminadoCorrectamente.html")
                  break;
               default:
                  break;
            }
            break;
         case "update":
            switch (tipo) {
               case "consola":
                  console.log(id + "consola")
                  window.location.href=`/Html_menuAgregar/menuAgregar.html?id=${id}&tipo=consola`;
                //listasConsola.eliminarConsola(id).then(res=> window.location.href="../../index.html");
                  break;
               case "accesorio":
                  console.log(id + "accesorio")
                  window.location.href=`/Html_menuAgregar/menuAgregar.html?id=${id}&tipo=accesorio`;
                 //listaAccesorios.eliminarAccesorio(id).then(res=>window.location.href="../../index.html");
                  break;
               case "videojuego":
                  console.log(id + "videojuego")
                  window.location.href=`/Html_menuAgregar/menuAgregar.html?id=${id}&tipo=videojuego`;
                 // listasVideoJuegos.eliminarVideoJuego(id).then(res=>window.location.href="../../index.html")
                  break;
               default:
                  break;
            }
            break;
         default:
            window.location.href="/Html_menuAgregar/menuAgregar.html";
            break;
       }

     }else{
      errorLogin.textContent="ingresate correo incorrecto";
     }
  }else{
     errorLogin.textContent="correo o pass invalido";
  }

})