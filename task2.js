function getFormvalue(event){
    //event.preventDefault();
    const formulario = document.querySelector("#form1");
    const nombre = formulario.elements["fname"].value;
    const apellido = formulario.elements["lname"].value;
    
    console.log("nombre: " + nombre);
    console.log("apellido: " + apellido);
}