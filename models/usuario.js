module.exports = (sequelize, DataType) => {
    const usuario = sequelize.define('usuario', {
        id_usuario: {
            type: DataType.INTEGER,
            notNull: true,
            autoIncrement: true,
            primaryKey: true,
        },
        nombres: {
            type: DataType.STRING(100),
            notNull: true,
        },
        apellidos: {
            type: DataType.STRING(100),
            notNull: true,
        },
    });

    return usuario;
};