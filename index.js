var express = require('express');
var morgan = require("morgan");
var app = express();

var db = require('./db');


db.sequelize.sync().done(() => {
    console.log("base de datos generada"); 
});

app.use(morgan("dev"));

app.use(function(req, res, next) {
    console.log("Procesando petición...0");
    next();
});


app.use(function(req, res, next) {
    if (req.url === '/DETENER') {
        res.end("DETENIDO\n");
    } else {
        console.log("Procesando petición...1");
        next();
    }
});

app.get("/usuarios/:idUsuario", function(req, res, next) {
    if (parseInt(req.params.idUsuario) > 1000) { 
        res.end("Devolviendo usuario mayor a 1000: " + req.params.idUsuario + '\n');
    } else {
        next();
    }
    
});

app.get('*', function(req, res) {
    res.end("Corriendo aplicación en expressjs\n");
});

app.listen(4000);