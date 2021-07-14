//declarando variables para lso controles
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var btnRegistrar=document.getElementById("btnRegistrar");

//creamos un procedimiento para mostrar
function MostrarRegistro() {
//declaramos una variable para mostrarguardar datos
var listaregistro=Mostrar();
//selecciono el tbody de la tabla donde voy a guardar
tbody=document.querySelector("#tbRegistro tbody");
tbody.innerHTML="";
//agregamos columnas que se rgistren
}for(var i=0; i<listasregistro.length;i++){
    //declaramos una variable para la fila 
    var fila=tbody.insertRow(i);
    //declaramos variables para los titulos
    var titulonombre=fila.insertCell(0);
    var tituloapellido=fila.insertCell(1);
    var titulocorreo=fila.insertCell(2);
    //agregamos valores
    titulonombre.innerHTML=listaregistro[1].nombre;
    tituloapellido.innerHTML=listaregistro[1].apellido;
    titulocorreo.innerHTML=listaregistro[1].correo;
    tbody.appendchild(fila); 
}

{
    //creamos un procedimiento para registrar loas datos
    function RegistrarDatos() {
        //capturando valores 
        var nom=txtNom.value;
        var ape=txtApe.value;
        var cor=txtCor.value;
        //llamamos al procedimiento registrar
        Registrar(nom,ape,cor);
        MostrarRegistro();
    }
}

//agregamos un evento al boton
// btnRegistrar.addEventListener("click",function(){
//    alert("hola");
//});
// creamos un procedimiento para el mensaje
// function Mensaje(){
//    alert("hola");
//}
//agregamos el evento al boton
//btnRegistrar.addEvenListener("click",RegistrarDatos);