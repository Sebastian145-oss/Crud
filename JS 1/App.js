//DOM de evento
document
.getElementById("formulario-producto")
.addEventListener("submit",
function(elemento){
elemento.preventDefault(); // evalua el comportamiento del elemento

//Obtener valores de formulario

const nombre = document.getElementById("name").value,
precio = document.getElementById("precio").value,
año = document.getElementById("año").value;

//Crear nuevo objeto producto
const producto= new Producto(nombre, precio, año);

//crear nuevo usuario
const usuario = new Usuario();

//Botón de validación
if(nombre== " " || precio== " " || añño== " ")
{
    usuario.showMessage("Rellenar todos los campos por favor");
}

//Guardar Producto

usuario.AddProducto(producto);
usuario.showMessage("Prodcuto agregado correctamente");
usuario.resetForm();

});


document.getElementById("Lista-producto").addEventListener("click", (elemento) => {
    const usuario = new Usuario();
    usuario.deleteProduct(elemento.target);
    elemento.preventDefault();
});

//Producto Clase

export class Prodcuto{
    constructor(nombre, precio, año) {
        this.nombre = nombre;
        this.precio = precio;
        this.año = año;
    }
}