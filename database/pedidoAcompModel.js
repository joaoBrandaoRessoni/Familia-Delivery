const sequelize = require("sequelize")
const connection = require("./database")
const acompanhamento = require("./acompanhamentoModel")
const pedido_pizza = require("./pedidoPizzaModel")

const pedido_acompanhamento = connection.define("pedido_acompanhamento", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_pedido: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
    id_acompanhamento: {
        type: sequelize.INTEGER,
        allowNull: false,
    }
})

module.exports = pedido_acompanhamento