/*
Geovanni Rojas Mazariegos
Zero Innovation
2016
*/

/*
Define la clase de articulo que tiene los atributos
Codigo, Nombre, Precio.
*/
function ArticuloClass(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
}

/*
This function is at the start of everthing
*/
window.onload = function() {

    var articulo = new ArticuloClass("125","Disco Duro",456.3);
    var articulo2 = new ArticuloClass("185","Bicicleta",1400);
    var articulo3 = new ArticuloClass("1875","Silla de cuero de oficina",1000);


    document.getElementById("element1").innerHTML = articulo.codigo;
    document.getElementById("element2").innerHTML = articulo.nombre;
    document.getElementById("element3").innerHTML = articulo.precio;
    document.getElementById("element4").innerHTML = articulo2.codigo;
    document.getElementById("element5").innerHTML = articulo2.nombre;
    document.getElementById("element6").innerHTML = articulo2.precio;
    document.getElementById("element7").innerHTML = articulo3.codigo;
    document.getElementById("element8").innerHTML = articulo3.nombre;
    document.getElementById("element9").innerHTML = articulo3.precio;

    


}
