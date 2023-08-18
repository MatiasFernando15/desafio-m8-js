// Ejercicio del modulo anterior
const planesDeCredito = [
    { Nombre: "Plan 001", Capital: 150000, Plazo: 30, Tasa: 0.15 },
    { Nombre: "Plan 002", Capital: 300000, Plazo: 180, Tasa: 0.10 },
    { Nombre: "Plan 003", Capital: 485000, Plazo: 60, Tasa: 0.23 }
];

function calcularInteres(capital, plazo, tasa) {
    return (capital * plazo * tasa) / 100;
}

const informacionCreditos = [];

let sumaTotalIntereses = 0;

for (let i = 0; i < planesDeCredito.length; i++) {
    const plan = planesDeCredito[i];
    const interés = calcularInteres(plan.Capital, plan.Plazo, plan.Tasa);

    informacionCreditos.push({
    Nombre: plan.Nombre,
    Capital: plan.Capital,
    Plazo: plan.Plazo,
    Tasa: plan.Tasa,
    Interes: interés
    });

    sumaTotalIntereses += interés;
}

console.log("Información de los créditos:");
for (let i = 0; i < informacionCreditos.length; i++) {
    console.log(informacionCreditos[i]);
}
console.log("Suma total de intereses:", sumaTotalIntereses);

// -----------------------------------------------------------------
//Ejercicio del modulo actual

function calcularInteres(capital, plazo, tasa) {
    return (capital * plazo * tasa) / 100;
}
function agregarInteresAInversiones(inversiones) {
    const inversionesConInteres = [];

    for (let i = 0; i < inversiones.length; i++) {
    const inversion = inversiones[i];
    const interés = calcularInteres(inversion.Capital, inversion.Plazo, inversion.Tasa);
    const inversionConInteres = {
        ...inversion,
        Interes: interés
    };

    inversionesConInteres.push(inversionConInteres);
    }
    return inversionesConInteres;
}

const inversionesConInteres = agregarInteresAInversiones(planesDeCredito);

console.log("Información de las inversiones con interés:");
console.log(inversionesConInteres);