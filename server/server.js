require('./config/config');
<<<<<<< HEAD
const express = require('express');
=======

const express = require('express');
const mongoose = require('mongoose');

>>>>>>> c32407a456402cf3630148d20e72a4283d0a5dd9
const app = express();

const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
<<<<<<< HEAD


app.get('/usuario', function(req, res) {
    res.json('getUsuario')
});

app.post('/usuario', function(req, res) {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'

        });
    } else {
        res.json({ persona: body });
    }
});

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({ id });
});

app.delete('/usuario', function(req, res) {
    res.json('deleteUsuario')
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', 3000);
=======
app.use(require('./routes/usuario'));

mongoose.connect(process.env.URLDB, (err, res) => {
    if(err) throw err;

    console.log('Base de datos Online');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
>>>>>>> c32407a456402cf3630148d20e72a4283d0a5dd9
});