const sequelize = require("sequelize")
const connection = require("./database")
const pizza = require("./pizzaModel")
const usuario = require("./usuarioModel")

const pedido_pizza = connection.define("pedido_pizza", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_pizza: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
    id_usuario: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
    status_pedido: {
        type: sequelize.BOOLEAN,
        allowNull: false,
        defautl: false
    }
})

module.exports = pedido_pizza