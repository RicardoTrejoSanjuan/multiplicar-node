// requireds
const colors = require('colors');
const fs = require('fs');

let crearTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`El dato '${base}' no es un numero`);
            return;
        }
        for (let i = 1; i <= limite; i++) {
            data += ` ${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve('Se creo el archivo tablas-' + base);
            }
        });
    });
};

let listarTablas = (base, limite) => {
    console.log('============================='.green);
    console.log(`=====Tabla del ${base}=======`.green);
    console.log('============================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(` ${base} * ${i} = ${base * i}`);
    }
}

module.exports = {
    crearTabla,
    listarTablas
};