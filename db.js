var Sequelize = require('sequelize');
var fs = require('fs');
var path = require('path');
var db = {};
var basename = 'node';

var sequelize = new Sequelize(basename, 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 10000,
    },
    sync: { force: true },
});


sequelize
  .authenticate()
  .then(() => {
    console.log('Probando la Conexión a la base de datos: correcta:');
  })
  .catch(err => {
    console.error('No es posible conectarse a la base de datos:', err);
  });


var directorioModelos = __dirname + '/models';

fs
    .readdirSync(directorioModelos)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        console.log("here!3");
        var model = sequelize['import'](path.join(directorioModelos, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;