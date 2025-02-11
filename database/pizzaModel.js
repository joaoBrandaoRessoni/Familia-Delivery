const sequelize = require("sequelize")
const connection = require("./database")

const pizza = connection.define('pizza', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: sequelize.STRING(100),
        allowNull: false
    },
    tipo: {
        type: sequelize.STRING(10),
        allowNull: false
    },
    valor: {
        type: sequelize.FLOAT,
        default: 0,
        allowNull: false
    },
    imagem: {
        type: sequelize.STRING(100),
        allowNull: true,
    }
})

module.exports = pizza