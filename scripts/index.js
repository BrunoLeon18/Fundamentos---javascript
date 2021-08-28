// CONDICIONALES
function ejercicioUno(){
let sexo = prompt("Ingresa tu sexo");
let edad = prompt("Ingrsa tu edad");
let nacionalidad = prompt("Ingresa tu nacionalidad");

if (sexo == "m" && edad > 18 && nacionalidad != "peruana"){
    alert("bienvenido al club");
    } else {
        alert("No eres Bienvenido")
    }
}

function ejercicioDos() {
    let nameUser = prompt("Ingresa tu nombre")

    if (nameUser == "bruno") {
        alert("Hola bienvenido Bruno");
    }else if (nameUser == "Alexander") {
        alert("Hola bienvenido Alexander");
    }else if (nameUser == "Marcelo") {
        alert("Hola , bieenvenido Marcelo");
    }else{
        alert("no te conozco");
    }
}


function ejercicioTres() {
    let frutas = prompt("Ingresa tu fruta ('uva', 'mandarina', 'manzana')");

    switch (frutas) {
        case "uva":{
            alert("Elegiste la uva");
            break;
        }
        case "mandarina":{
            alert("elegiste la mandarina")
            break;
        }
        case "manzana":{
            alert("elegiste la manzana")
            break;
        }   
        default:{
            alert("Esa fruta no la tenemos en stock")
        }
    }
}

function esHombre() {
    console.log("es Hombre!!")
}


function esMujer() {
    console.log("es mujer!!")
}

function ejercicioCuatro() {
    let sexo = prompt ("Ingresa tu sexo (m,f)")

    sexo === "m" ? esHombre() : esMujer();
}

function ejercicioCinco() {
    function suma(a,b) {
        if (arguments.length > 2 ) throw new Error("No soporta mas de dos argumentos");
            return a+b;  
    }

    suma(2,3,4,5,6)
}

function ejercicioSeis() {
    function setName(name) {
        let message = "";
        try {
            if(name.length < 6) throw "Short";
            if(name.length > 10)throw "Long";

            message = `El nombre ${name} es correcto`
        } catch (error) {
            console.log("error", error);
            if(error == "Short") message = `El nombre ${name} es muy corto`;
            if(error == "Long") message = `El nombre ${name} es muy largo`;
        }finally{
            console.log("Nombre evaluado: ", message);
        }
    }

    setName("ana")
    setName("bruno alexander")
    setName("marcelo")
}

function ejercicioSiete() {
    let impresora = {
        color: "negro",
        marca : "hp",
        modelo: "b7",
        cantidadDeHojas: 0,
        imprimir : function (){
            if (this.cantidadDeHojas > 0){
                console.log("imprimir!!");
            }else if (this.cantidadDeHojas <= 0){
                console.log("agrega hojas");
            }
        },
        skaner: function () {
            console.log("impresora skaneando");
        },
        copiar: function(){},
        creadores: {
            uno:{
                nombre: "Pedro",
            },
            dos:{
                nombre:"juan",
            },
            tres:{
                nombre:"luis",
            },
        },
    };
    const button = document.querySelector("button");
    button.onclick = function () {
        impresora.imprimir();
    };

    const form = document.querySelector("form");

    form.onsubmit = function(event) {
        event.preventDefault();
        impresora.cantidadDeHojas = 10;
        console.log("registrado envio de hojas");
        console.log(impresora);
    };
}




//ejercicioSiete()
//ejercicioSeis()
//ejercicioCuatro()
//ejercicioTres()
//ejercicioDos()
//ejercicioUno();