var txtCor=document.getElementById("txtCor");
var txtCon=document.getElementById("txtCon");
var btnIngresar=document.getElementById("btnIngresar");


function Ingresar(){
    if(txtCor.value=="" || txtCor.value==null){
        alert("Ingresa el correo");
        txtCor.focus();
    }else if(txtCon.value=="" || txtCon.value==null){
        alert("Ingrese la contraseña");
        txtCor.focus();
    }else{
        var cor=txtCor.value;
        var con=txtCon.value;
        firebase.auth().signInWithEmailAndPassword(cor, con)
        .then((userCredential) => {
            alert("Bienvenidos al sistema");
            window.location="pagina11.html";
        })
        .catch((error) => {
            alert("Usuario o clave no valida");
            // var errorCode = error.code;
            // var errorMessage = error.message;
        });
    
    }
}

btnIngresar.addEventListener("click",Ingresar);