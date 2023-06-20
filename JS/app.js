const precioticket = 200;
var form = document.getElementById("form");

form.addEventListener("submit", e => {
    e.preventDefault();
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let email = document.getElementById("email");
    let cantidad = document.getElementById("cantidad");
    let categoria = document.getElementById("Categoria");
    let cantidadApagar = document.getElementById("cantidadApagar");
    if (nombre.value.trim() == "" || apellido.value.trim() == "" || email.value.trim() == "") {
        alert("complete todos los datos");
    } else if (!isValidEmail(email.value)) {
        alert("el mail no es valido");

    } else if (cantidad.value == "") {
        alert("indique la cantidad de tickets");
    } else if (categoria.value == 1) {
        const valorfinal = totalApagar(precioticket, 80, cantidad.value);
        cantidadApagar.value = valorfinal;

    } else if (categoria.value == 2) {
        const valorfinal = totalApagar(precioticket, 50, cantidad.value);
        cantidadApagar.value =valorfinal;
    } else if (categoria.value == 3) {
        const valorfinal = totalApagar(precioticket, 15, cantidad.value);
        cantidadApagar.value =valorfinal;
    }else
    console.log("entrada invalida");
console.log(cantidadApagar.value);

form.submit()
});
    
        function totalApagar(precioticket, porcentaje, cantidad) {
            const ticketdescuento = (precioticket * porcentaje) / 100;
            const valorfinal = +((precioticket - ticketdescuento) * cantidad);
            return valorfinal;

        };

function isValidEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email);
}
