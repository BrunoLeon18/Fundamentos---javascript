function ejercicioOcho() {
    let numbers = [0, 1, 2,3, 4, 5, 6, 7, 8, 9, 10];
    let names = ['bruno', 'pedro', 'marcelo','tatiana'];
    let mix = [10, 'bruno', true, null, undefined]
    let arrayArrays = [0,['pedro',[0,1]]]
    let alumnos = [
        {
            name: 'bruno',
            age: 28,
            sex: 'm',
            materias: ['matematicas','lenguaje','arte']
        },
        {
            name: 'pedro',
            age: 26,
            sex: 'm',
            materias: ['matematicas','lenguaje','arte']
        },
        {
            name: 'marcelo',
            age: 17,
            sex: 'm',
            materias: ['matematicas','lenguaje','arte']
        },
        {
            name: 'tatiana',
            age: 26,
            sex: 'f',
            materias: ['matematicas','lenguaje','arte']
        },
];

console.log("numbers", numbers);
console.log("names", names);
console.log("mix", mix);
console.log("arrayArrays", arrayArrays[1][1]);
console.log("alumnos", alumnos[0]);



}

//ejercicioOcho()


function ejercicioNueve() {
    let numbers = [0, 1, 2,3, 4, 5, 6, 7, 8, 9, 10];
    let alumnos = [
        {
            name: 'bruno',
            age: 28,
            sex: 'm',
            materias: ['matematicas','lenguaje','arte']
        },
        {
            name: 'pedro',
            age: 26,
            sex: 'm',
            materias: ['matematicas','lenguaje','arte']
        },
        {
            name: 'marcelo',
            age: 17,
            sex: 'm',
            materias: ['matematicas','lenguaje','arte']
        },
        {
            name: 'tatiana',
            age: 26,
            sex: 'f',
            materias: ['matematicas','lenguaje','arte']
        },
];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] %2 == 0) {
        console.log('es par', numbers[i]);
    }  
}

for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i].age < 28) {
        console.log('menor de 40 es', alumnos[i]);
    }
 }
}

//ejercicioNueve();

function ejercicioDiez() {
    let alumno = {
        name: 'bruno',
        age: 28,
        sex: 'm',
        materias:['matematicas','lenguaje','arte'],
        saluda: function () {
            console.log(`Hola soy ${this.name}`);
        },
    };

    for (const key in alumno) {
      console.log(`${key}: ${alumno[key]}`);

      if (typeof alumno[key] == 'function') {
          alumno[key]();
      }
     }
    }

    ejercicioDiez()