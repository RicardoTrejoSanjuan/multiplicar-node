const { argv } = require('./config/yargs');
const colors = require('colors');
const { crearTabla, listarTablas } = require('./multiplicar');

// console.log(argv);
// console.log('Limite', argv.limite);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        // console.log('listar');
        listarTablas(argv.base, argv.limite);
        break;
    case 'crear':
        // console.log('crear');
        crearTabla(argv.base, argv.limite)
            .then(mensaje => console.log((mensaje).green))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido'.red);
        break;
}