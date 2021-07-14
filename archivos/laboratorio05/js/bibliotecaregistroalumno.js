var txtCod =document.getElementById("txtCod");
var txtNom =document.getElementById("txtNom");
var txtApe =document.getElementById("txtApe");
var txtDni =document.getElementById("txtDni");
var txtFec =document.getElementById("txtFec");
var txtDir =document.getElementById("txtDir");
var cboDistrito = document.getElementById("cboDistrito");
var txtTel =document.getElementById("txtTel");
var txtCel =document.getElementById("txtCel");
var txtCor =document.getElementById("txtCor");
var rbMas =document.getElementById("rbMas");
var rbFem =document.getElementById("rbFem");
var rbOtr =document.getElementById("rbOtr");
var chkEst =document.getElementById("chkEst");
var btnRegistrar =document.getElementById("btnRegistrar");
var btnActualizar =document.getElementById("btnActualizar");

function Mostrar(){
    var i = 0;
    tbody = document.querySelector("#tbAlumno tbody");
    tbody.innerHTML = "";

    var db = database.ref().child("alumno");
    db.once("value",function (snapshot) {
        if (snapshot.exists()) {
            snapshot.forEach(function (data){
                var cod=data.key;
                var nom = data.val().nombre;
                var ape = data.val().apellido;
                var dni = data.val().dni;
                var fec = data.val().fecha;
                var dis = data.val().distrito;
                var dir = data.val().direccion;
                var tel = data.val().telefono;
                var cel = data.val().celular;
                var cor = data.val().correo;
                var sex = data.val().sexo;
                var est = data.val().estado;

                var fila = tbody.insertRow(i);

                var titulonombre = fila.insertCell(0);
                var tituloapellido = fila.insertCell(1);
                var titulodni = fila.insertCell(2);
                var tiulofecha = fila.insertCell(3);
                var titulodireccion = fila.insertCell(4);
                var titulodistrito = fila.insertCell(5);
                var titulotelefono = fila.insertCell(6);
                var titulocelular = fila.insertCell(7);
                var titulocorreo = fila.insertCell(8);
                var titulosexo = fila.insertCell(9);
                var tituloestado = fila.insertCell(10);
                var tituloact = fila.insertCell(11);
                var titulocor = fila.insertCell(12);

                titulonombre.innerHTML = nom;
                tituloapellido.innerHTML = ape;
                titulodni.innerHTML = dni;
                tiulofecha.innerHTML = fec;
                titulodireccion.innerHTML = dir;
                titulodistrito.innerHTML = dis;
                titulotelefono.innerHTML = tel;
                titulocelular.innerHTML = cel;
                titulocorreo.innerHTML = cor;
                titulosexo.innerHTML = sex;
                tituloestado.innerHTML = est;
                tituloact.innerHTML =
                    "<a href='#' onclick=Buscar('" + cod + "')>Seleccionar</a>";
                titulocor.innerHTML = "<a href='#' onclick=Eliminar('" + cod + "')>Seleccionar</a>";
                tbody.appendChild(fila);
                i++;
            });
        }
    });
}

function Buscar(codigo){
    var db=database.ref().child("alumno");
    db.once("value").then(function (snapshot){
        snapshot.forEach(function (data){
            var key=data.key;
            if (key == codigo) {
                var cod=data.key;
                var nom = data.val().nombre;
                var ape = data.val().apellido;
                var dni = data.val().dni;
                var fec = data.val().fecha;
                var dis = data.val().distrito;
                var dir = data.val().direccion;
                var tel = data.val().telefono;
                var cel = data.val().celular;
                var cor = data.val().correo;
                var sex = data.val().sexo;
                var est = data.val().estado;

                txtCod.value = cod;
                txtNom.value = nom;
                txtApe.value = ape;
                txtDni.value = dni;
                txtFec.value = fec;
                txtDir.value = dir;
                for(var i=0;i<cboDistrito.options.length;i++){
                    if(cboDistrito.options[i].text==dis){
                        cboDistrito.options[i].selected = true;
                        break;
                    }
                }
                txtTel.value = tel;
                txtCel.value = cel;
                txtCor.value = cor;
                if(sex == "Masculino"){
                    rbMas.checked = true;
                }else if(sex == "Femenino") {
                    rbfem.checked = true;
                }else if(sex == "Otros"){
                    rbOtr.checked = true;
                }else{
                    rbMas.checked = false;
                    rbfem.checked = false;
                    rbOtr.checked = false;
                }
                if(est == "Habilitado"){
                    chkEst.checked = true;
                } else {
                    chkEst.checked = false;
                }
            }
        })
    })
}

function Inicio() {
    Mostrar();
    CargarDistrito();
}


function Registrar() {
    var nom = txtNom.value;
    var ape = txtApe.value;
    var dni = txtDni.value;
    var fec = txtFec.value;
    var dir = txtDir.value;
    var dis = cboDistrito.options[cboDistrito.selectedIndex].text;
    var tel = txtTel.value;
    var cel = txtCel.value;
    var cor = txtCor.value;
    var sex = "";
    if (rbMas.checked == true) {
        sex = "Masculino";
    } else if (rbFem.checked == true) {
        sex = "Femenino";
    } else if (rbOtr.checked == true) {
        sex = "Otros";
    } else {
        sex = "";
    }

    var est = "";
    if (chkEst.checked == true) {
        est = "Habilitado";
    } else {
        est = "Deshabilitado";
    }
    
    function Actualizar(){
        var cod=txtCod.value;
        var nom=txtNom.value;
        var ape=txtApe.value;
        var cor=txtCor.value;
    
        var db=database.ref("alumno/"+cod);
        db.update({
            nombre: nom,
            apellido: ape,
            dni: dni,
            fecha: fec,
            direccion: dir,
            distrito: dis,
            telefono: tel,
            celular: cel,
            correo: cor,
            sexo: sex,
            estado: est,
        }
        );
        alert("Se actualizo el dato");
        Mostrar();
    }

    function Eliminar(codigo){
        var result = confirm("¿Estas seguro que quieres eliminar el registro?");
        if (result){
            var cod = codigo;
            var db = database.ref("alumno/"+cod).remove();
            alert("Se elimino el dato");
        
            Mostrar();
        }
    }

    var db=database.ref("alumno");

    var registros=db.push();

    registros.set({
        nombre: nom,
        apellido: ape,
        dni: dni,
        fecha: fec,
        direccion: dir,
        distrito: dis,
        telefono: tel,
        celular: cel,
        correo: cor,
        sexo: sex,
        estado: est,
    });
    alert("Se registro los datos");
}


function CargarDistrito(){
    var i = 0;

    var db = database.ref().child("distrito");
    db.once("value",function (snapshot) {
        if (snapshot.exists()){
            snapshot.forEach(function (data){
                var cod = data.key;
                var nom = data.val().nombre;

                var options = document.createElement("option");

                options.text = nom;
                options.value = cod;

                cboDistrito.add(options);
                i++;
            });
        }
    });
}
window.onload = Inicio;
btnRegistrar.addEventListener("click", Registrar);
btnActualizar.addEventListener("click", Actualizar);

