var txtCor=document.getElementById("txtCor");
var txtCon=document.getElementById("txtCon");
var btnRegistrar=document.getElementById("btnRegistrar");

function Limpiar(){
    txtCor.value="";
    txtCon.value="";
    txtCor.focus();
}

function Registrar(){
    if(txtCor.value=="" || txtCor.value==null){
        alert("Ingresa el correo");
        txtCor.focus();
    }else if(txtCon.value=="" || txtCon.value==null){
        alert("Ingrese la contraseña");
        txtCor.focus();
    }else{
        var cor=txtCor.value;
        var con=txtCon.value;
        firebase.auth().createUserWithEmailAndPassword(cor, con)
        .then((userCredential) => {
        alert("Se registro el usuario");
        Limpiar();
        })
        .catch((error) => {
        alert("No se registro el usuario")
        });
    }
}


btnRegistrar.addEventListener("click",Registrar);