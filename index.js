var express = require('express');

var app = express();

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