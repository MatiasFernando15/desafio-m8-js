// Ejercicio del anterior módulo

function calcularSaldoFlujoCaja(flujos) {
    let saldo = 0;

    for (let i = 0; i < flujos.length; i++) {
    saldo += flujos[i].Ingreso || 0;
    saldo -= flujos[i].Egreso || 0;
    }

    return saldo;
}

function determinarGananciasPerdidas(saldo) {
    if (saldo > 0) {
    return "Genera ganancias";
    } else if (saldo < 0) {
    return "Genera pérdidas";
    } else {
    return "Equilibrio";
    }
}

const flujoDeCaja = [
    { Mes: "Enero", Ingreso: 1500, Egreso: 1500 },
    { Mes: "Febrero", Ingreso: 2500, Egreso: 2500 },
    { Mes: "Marzo", Ingreso: 84683, Egreso: 1155 },
    { Mes: "Abril", Ingreso: 135353, Egreso: 1533 },
    { Mes: "Mayo", Ingreso: 1535, Egreso: 5434 },
    { Mes: "Junio", Ingreso: 4343354, Egreso: 5434543 },
    { Mes: "Julio", Ingreso: 435453, Egreso: 4543 },
    { Mes: "Agosto", Ingreso: 78351, Egreso: 7816 },
    { Mes: "Septiembre", Ingreso: 1878, Egreso: 95634 },
    { Mes: "Octubre", Ingreso: 48483, Egreso: 9433 },
    { Mes: "Noviembre", Ingreso: 35483, Egreso: 53133 },
    { Mes: "Diciembre", Ingreso: 3843, Egreso: 348133 }
];

const saldoTotal = calcularSaldoFlujoCaja(flujoDeCaja);
const resultadoE1 = determinarGananciasPerdidas(saldoTotal);

console.log("Flujo de caja del último año:");
for (let i = 0; i < flujoDeCaja.length; i++) {
    console.log(`${flujoDeCaja[i].Mes}: Ingreso - ${flujoDeCaja[i].Ingreso || 0},
    Egreso - ${flujoDeCaja[i].Egreso || 0}`);
}
console.log("Resultado:", resultadoE1);

// -------------------------------------------------------------------------------
//Ejercicio de este módulo

function analizarFlujoCaja(flujos) {
    let saldo = 0;

    for (let i = 0; i < flujos.length; i++) {
    saldo += flujos[i].Ingreso || 0;
    saldo -= flujos[i].Egreso || 0;
    }

    if (saldo > 0) {
    return 1;
    } else if (saldo < 0) {
    return -1;
    } else {
    return 0;
    }
}

const resultado = analizarFlujoCaja(flujoDeCaja);

if (resultado === 1) {
console.log("Hay ganancias");
} else if (resultado === -1) {
console.log("Hay pérdidas");
} else {
console.log("Ingresos iguales a egresos (equilibrio)");
}