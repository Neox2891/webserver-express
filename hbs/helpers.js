const hbs = require('hbs');

/** 
 * helpers: permite ejecutar una funcion cuando el template 
 * lo necesita, puede ser tambien llamado middleware
 **/
hbs.registerHelper('getAnio', () => new Date().getFullYear());
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((element, idx) => {
        palabras[idx] = element.charAt().toUpperCase() + element.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});