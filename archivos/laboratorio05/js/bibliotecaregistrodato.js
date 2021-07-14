var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var tbRegistro=document.getElementById("tbRegistro");
var btnActualizar=document.getElementById("btnActualizar");

// function writeUserData(nm, ap, cr) {
//     database.ref('registro/').set({
//         nombre: nm,
//         apellido: ap,
//         correo: cr
//     });
// }
function Buscar(codigo){
    var db=database.ref().child("registro");
    db.once("value").then(function (snapshot){
        snapshot.forEach(function (data){
            var key=data.key;
            if (key == codigo) {
                var cod = key;
                var nom = data.val().nombre;
                var ape = data.val().apellido;
                var cor = data.val().correo;

                txtCod.value = cod;
                txtNom.value = nom;
                txtApe.value = ape;
                txtCor.value = cor;
            }
        })
    })
}


function Limpiar(){
    txtNom.value="";
    txtApe.value="";
    txtCor.value="";
    txtNom.focus();
}

function Mostrar(){
    var i = 0;
    tbody = document.querySelector("#tbRegistro tbody");
    tbody.innerHTML = "";

    var db = database.ref().child("registro");
    db.once("value",function (snapshot) {
        if (snapshot.exists()) {
            snapshot.forEach(function (data){
                var cod=data.key;
                var nom = data.val().nombre;
                var ape = data.val().apellido;
                var cor = data.val().correo;

                var fila = tbody.insertRow(i);

                var titulonombre = fila.insertCell(0);
                var tituloapellido = fila.insertCell(1);
                var titulocorreo = fila.insertCell(2);
                var tituloact = fila.insertCell(3);
                var titulocor = fila.insertCell(4);

                titulonombre.innerHTML = nom;
                tituloapellido.innerHTML = ape;
                titulocorreo.innerHTML = cor;
                tituloact.innerHTML =
                    "<a href='#' onclick=Buscar('" + cod + "')>Seleccionar</a>";
                titulocor.innerHTML = "<a href='#' onclick=Eliminar('" + cod + "')>Seleccionar</a>";
                tbody.appendChild(fila);
                i++;
            });
        }
    });
}

window.onload = Mostrar;


function Registrar(){
    if(txtNom.value=="" || txtNom.value==null){
        alert("Ingrese su nombre");
        txtNom.focus();
    }else if(txtApe.value=="" || txtApe.value==null){
        alert("Ingresa su apellido");
        txtApe.focus();
    }else if(txtCor.value=="" || txtCor.value==null){
        alert("Ingrese su correo");
        txtCor.focus();
    }else{
        var nom=txtNom.value;
        var ape=txtApe.value;
        var cor=txtCor.value;
        
        var db=database.ref('registro');

        var registros=db.push();

        registros.set({
            'nombre': nom,
            'apellido': ape,
            'correo': cor,
        });
        alert("Se registro los datos");
        Limpiar();
        Mostrar();
    }
}
function Actualizar(){
    var cod=txtCod.value;
    var nom=txtNom.value;
    var ape=txtApe.value;
    var cor=txtCor.value;

    var db=database.ref("registro/"+cod);
    db.update({
        nombre: nom,
        apellido: ape,
        correo: cor
    }
    );
    alert("Se actualizo el dato");
    Limpiar();

    Mostrar();
}

function Eliminar(codigo){
    var result = confirm("¿Estas seguro que quieres eliminar el registro?");
    if (result){
        var cod = codigo;
        var db = database.ref("registro/"+cod).remove();
        alert("Se elimino el dato");

        Limpiar();

        Mostrar();
    }
}
btnRegistrar.addEventListener("click", Registrar);
btnActualizar.addEventListener("click", Actualizar);