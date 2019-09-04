var miPedido = new Array();

function gestionarCantidad(){
	var cantidad = document.getElementById("cantidad");
	miPedido.push(miPizza, cantidad);
	confirmacion.addEventListener("click", tipoConfirmacion, false);
};

function tipoConfirmacion() {
    miPedido.seleccionarConfirmacion(this.value);
};

var miPizza = new Pizza();

function Pizza() {
    // cambiar valores para preseleccion en la pagina
    this.tamano = "Mediana";
    this.masa = "Normal";
    this.salsa = "TOMATE Y ORÉGANO";
    this.ingredientes = new Array();

    // establecer valores de nuestra Pizza
    this.seleccionarTamano = function (tamanoSeleccionado) {
        this.tamano = tamanoSeleccionado;
    };
    this.seleccionarMasa = function (masaSeleccionado) {
        this.masa = masaSeleccionado;
    };
    this.seleccionarSalsa = function (salsaSeleccionada) {
        this.salsa = salsaSeleccionada;
    };
    this.anadirIngrediente = function (numIngrediente, cantidadIngrediente) {
        this.ingredientes[numIngrediente] = cantidadIngrediente;
    };

    // funciones para visualizar el contenido de nuestra Pizza
    this.verTamano = function () {
        return this.tamano;
    };

    this.verIngredientes = function () {
        return this.ingredientes;
    };

    this.verSalsa = function () {
        return this.salsa;
    };
};


//Programa principal
window.addEventListener("load", gestorEventos, false);

function gestorEventos() {
    gestionarTamanos();
    gestionarMasas();
    gestionarSalsas();
    gestionarIngredientes();
	gestionarCantidad();
};

// añade evento "click" a cada elemento
function gestionarTamanos() {
    var tamanos = document.getElementsByName("tamano");
    for (var i = 0; i < tamanos.length; i++) {
        tamanos[i].addEventListener("click", tipoTamano, false);
    };
};

//guarda en la variable el valor en el que hemos hecho click
function tipoTamano() {
    miPizza.seleccionarTamano(this.value);
};

// añade evento "click" a cada elemento
function gestionarMasas() {
    var masas = document.getElementsByName("masa");
    for (var i = 0; i < masas.length; i++) {
        masas[i].addEventListener("click", tipoMasa, false);
    }
};

//guarda en la variable el valor en el que hemos hecho click
function tipoMasa() {
    miPizza.seleccionarMasa(this.value);
};

// añade evento "click" a cada elemento
function gestionarSalsas() {
    var salsa = document.getElementById("salsas");
    salsa.addEventListener("change", tipoSalsa, false);
};

//guarda en la variable el valor en el que hemos hecho "click"
function tipoSalsa() {
    var salsa = "";
    switch (this.value) {
    case "0":
        salsa = "BARBACOA CRÉME DOBLE";
        break;
    case "1":
        salsa = "BARBACOA DOBLE";
        break;
    case "2":
        salsa = "BURGER DOBLE";
        break;
    case "3":
        salsa = "CARBONARA DOBLE";
        break;
    case "4":
        salsa = "JALISCO DOBLE";
        break;
    case "5":
        salsa = "TOMATE Y ORÉGANO DOBLE";
        break;
    case "6":
        salsa = "BARBACOA CRÉME";
        break;
    case "7":
        salsa = "BARBACOA";
        break;
    case "8":
        salsa = "BURGER";
        break;
    case "9":
        salsa = "CARBONARA";
        break;
    case "10":
        salsa = "JALISCO";
        break;
    case "11":
        salsa = "TOMATE Y ORÉGANO";
        break;
    case "12":
        salsa = "SIN SALSA";
        break;
    };
    miPizza.seleccionarSalsa(salsa);
};

var ingredientes = ["Mozzarella", "5 Quesos", "Aceitunas negras", "Anchoas", "Atún", "Bacón", "Calabacín parrilla", "Carne de vacuno", "Cebolla", "Cerdo Nueva Orleans",
"Champiñón", "Cordero", "Espárragos Trigueros", "Gambas", "Maíz", "Pepperoni", "Pimiento asado", "Pimiento marrón", "Pimiento verde", "Pollo marinado", "Pops de pollo", "Queso cheddar",
"Queso de rulo", "Queso provolone", "Queso suizo curado", "Rúcula", "Salami", "Salchicha", "Tomate Cherry", "Tomate natural", "York"];

function gestionarIngredientes() {
    gestionarIncrementos();
    gestionarDecrementos();
};

function gestionarIncrementos() {
    var suma = document.getElementsByName("suma");
    for (var i = 0; i < suma.length; i++) {
        suma[i].addEventListener("click", incrementar, false);
    };
};

function incrementar() {
	var posicion = parseInt(this.id.toString());
	if(document.pedido.ingrediente[posicion].value==3){
        alert('Maximo permitido alcanzado: 3');
    }
    else {
        document.pedido.ingrediente[posicion].value++;
		miPizza.añadirIngrediente(posicion, parseInt(document.pedido.ingrediente[posicion].value));
    };
};

function gestionarDecrementos() {
    var resta = document.getElementsByName("resta");
    for (var i = 0; i < resta.length; i++) {
        resta[i].addEventListener("click", decrementar, false);
    };
};

function decrementar() {
	var posicion = parseInt(this.id.toString());
	if(document.pedido.ingrediente[posicion].value==0){
        alert('Minimo permitido alcanzado: 0');
    }
    else {
        document.pedido.ingrediente[posicion].value--;
		miPizza.añadirIngrediente(posicion, parseInt(document.pedido.ingredientes[posicion].value));
    };
};