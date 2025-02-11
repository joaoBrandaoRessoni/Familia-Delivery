const sequelize = require("sequelize")
const connection = require("./database")

const acompanhamento = connection.define("acompanhamento", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: sequelize.STRING(100),
        allowNull: false,
    },
    preco: {
        type: sequelize.FLOAT,
        allowNull: false,
        default: 0
    }
})

module.exports = acompanhamento