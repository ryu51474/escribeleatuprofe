
function mandarMensaje () {
    let profeElegido=document.getElementById("datos_profesor").value;
    let mensajeEscrito=document.getElementById("datos_mensaje").value;
    //console.log("Activo boton");
    //console.log(profeElegido);
    //console.log(mensajeEscrito);
    if(profeElegido==""||mensajeEscrito==""){
        window.alert("Debe seleccionar a un profesor y escribir un mensaje");
    }else{
        window.open('https://wa.me/'+profeElegido+'?text='+mensajeEscrito,"_self");
    }
    
}

enviarMensaje = () =>{
    console.log("funcion arrow")
}

document.getElementById("datos_boton").addEventListener("click",mandarMensaje)

/* prueba=() =>{
    const valor = document.getElementById("apiwsp").textContent;//document.querySelector("select").value.toString();
    console.log(valor);
    document.getElementById('apiwsp').innerHTML = "insatisfaccion"//"<h1><strong>SEÑORA, USTED NO ESTA PREPARADA PARA CONVERSAR CONMIGO DEL TEMA 'IDENTIDAD' DE GENERO</strong></h1>";
} */
//prueba()
//document.getElementById('apiwsp').innerHTML = "al fin salio"
