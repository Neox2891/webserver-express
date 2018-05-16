const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express hbs engine
/** 
 * parciales: permite hacer dinamica la pagina web mediante de 
 * modulos que permiten partir el codigo html en bloques y utilizarlos
 * donde lo necesitamos (reutilizar codigo). 
 **/
hbs.registerPartials(__dirname + '/views/parciales');
// utilizar hbs engine en express
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'néstor'
    });
    // let persona = {
    //     nombre: 'Néstor Estrada',
    //     edad: 26,
    //     url: req.url
    // };

    // res.json(persona)
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});