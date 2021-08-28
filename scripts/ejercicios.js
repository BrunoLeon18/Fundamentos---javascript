// EJERCICIO 1
function suma(a,b){
    return a+b;
}

console.log(suma(2,3))

// EJERCICIO 2

function promedio(a,b,c,d){
    return (a+b+c+d)/4;
}

console.log(promedio(10,15,16,18))

//  EJERCICIO 3

function triArea(base,height){
    return base*height * 1/2;
}

console.log(triArea(4,5))

// EJERCICO 4

function recArea(base,height){
    return base*height;
}

console.log(recArea(20,10))

//EJERCICIO 5

function circArea(radio){
    return radio**2;
}

console.log(circArea(4))

// EJERCICIO 6

function sueldoSemanal(horas , sueldoHora){
    return 7 * horas * sueldoHora;
}

console.log(sueldoSemanal(8,30))

// EJERCICIO 7 

function modista(metros){
    return metros/0.0254;
}

console.log(modista(1))

// EJERCICIO 8

function tipoDeCambio(soles, cambioDelDia){
    return soles / cambioDelDia;
}

console.log(tipoDeCambio(350,3.5))

//EJERCICIO 9

function edadPersonal(anoActual , anoNacimiento){
    return anoActual-anoNacimiento;
}

console.log(edadPersonal(2021,1993))

// EJERCICIO 10

function menor(edad1,edad2,edad3) {
    if (edad1 < edad2 && edad1 < edad3) {
      return "nombre1 es menor"
}else if (edad2 < edad3) {
    return "nombre2 es menor"
}else{
    return "nombre3 es menor"
 }
}
console.log(menor(50,50,40))

// EJERCICIO 11

function bono(age) {
    if (age == 1) {
        return "Te corresponde 100USD"     
    }else if (age == 2) {
        return "Te corresponde 200USD"
    }else if (age == 3) {
        return "Te corresponde 300USD"
    }else if (age == 4) {
        return "te corresponde 400USD"
    }else if (age == 5 ) {
        return "te corresponde 500USD"
    }else if (age > 5) {
        return "te corresponde 1000USD"
    }else{
        return "no te corresponde nada"
    }
 }
 console.log(bono(2))

 //EJERCICIO 12

 let sueldo = 1500
 let age = 1

 while (age <= 6){
     sueldo = sueldo * 1.10;
    console.log("en el age "+ age + " te corresponde el sueldo $"+ sueldo);
     age = age + 1
     console.log("el slario luego de 6 age es: ", sueldo); 
 } 
 
 //EJERCICIO 13

   
  function nAlumnos(nDeAlumnos){
      let aprobados = 0;
      let reprobados = 0;

      while (nDeAlumnos > 0) {
          let nota = prompt("escribe la Calificacion: ")
          if (nota < 11) {
              reprobados = reprobados + 1
          }else{
              aprobados = aprobados + 1
          }
        nDeAlumnos = nDeAlumnos - 1
      }
      return ("estudiantes aprobados: "+ aprobados+" estudiantes reprobados: "+ reprobados)
  }

  //console.log(nAlumnos(4))
  
 // EJERCICIO 14

  function loteFocos(nFocos) {
      let verde = 0;
      let rojo = 0;
      let blanco = 0;

      while (nFocos > 0) {
          let focosColor = prompt("Ingrese color de foco: ")
          if (focosColor == "verde") {
              verde = verde + 1;
          }else if (focosColor == "rojo"){
            rojo = rojo + 1;
          }else if (focosColor == "blanco") {
              blanco = blanco + 1;
          }else{
              return "no hay focos";
          }

          nFocos = nFocos - 1;
      }

      return ("focos verdes: "+ verde + " focos rojos: "+ rojo + " focos blanco: "+ blanco)
  }
 
 //console.log(loteFocos(10));

// EJERCICIO 15


function votaciones(edad, proximaEleccion) {
  let edadLimite = 70;
  let currentYear = 2021;

  if (edad +(proximaEleccion - currentYear) > edadLimite) {
    return 'no podra votar'
  }else{
    return 'si podra votar'
  }
}

console.log(votaciones(60,2026));

