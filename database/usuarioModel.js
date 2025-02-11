const sequelize = require("sequelize")
const connection = require("./database")

const usuario = connection.define('usuario', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email:{
        type: sequelize.STRING(100),
        allowNull: false,
    },
    nome:{
        type: sequelize.STRING(100),
        allowNull: false
    },
    celular:{
        type: sequelize.STRING(12),
        allowNull: true
    },
    cpf:{
        type: sequelize.STRING(14),
        allowNull: true
    },
    senha:{
        type: sequelize.STRING(100),
        allowNull: false
    },
    role: {
        type: sequelize.STRING(100),
        allowNull: false,
        default: "user"
    },
})

module.exports = usuario