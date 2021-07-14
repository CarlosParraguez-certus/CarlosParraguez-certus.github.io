var producto=[];

function Registrar(nomproducto,preproducto,catproducto,canproducto){
    var NuevoProducto={
        nombre:nomproducto,
        precio:preproducto,
        categoria:catproducto,
        cantidad:canproducto
    };
    registro.push(NuevoProducto);
}

function Mostrar(){
    return producto;
}