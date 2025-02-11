const usuario = require("./usuarioModel")
const pizza = require("./pizzaModel")
const pedidos_pizza = require("./pedidoPizzaModel")
const pedidos_acompanhamento = require("./pedidoAcompModel")
const acompanhamentos = require("./acompanhamentoModel")

const syncAll = async function() {
    await usuario.sync({force: false})
    await pizza.sync({force: false})
    await pedidos_pizza.sync({force: false})
    await pedidos_acompanhamento.sync({force: false})
    await acompanhamentos.sync({force: false})

    pizza.hasMany(pedidos_pizza, {
        foreignKey: 'id_pizza',
        targetKey: 'id',
    })
    
    pizza.hasMany(acompanhamentos, {
        foreignKey: 'tipo',
        targetKey: 'tipo',
    })

    usuario.hasMany(pedidos_pizza, {
        foreignKey: 'id_usuario',
        targetKey: 'id',
    })

    pedidos_pizza.hasMany(pedidos_acompanhamento, {
        foreignKey: 'id_pedido',
        targetKey: 'id',
    })
    
    pedidos_pizza.belongsTo(pizza, {
        foreignKey: 'id_pizza',
        targetKey: 'id',
    })
    
    pedidos_pizza.belongsTo(usuario, {
        foreignKey: 'id_usuario',
        targetKey: 'id',
    })

    pedidos_acompanhamento.belongsTo(acompanhamentos, {
        foreignKey: 'id_acompanhamento',
        targetKey: 'id',
    })
    
    pedidos_acompanhamento.belongsTo(pedidos_pizza, {
        foreignKey: 'id_pedido',
        targetKey: 'id',
    })

    acompanhamentos.belongsTo(pizza, { 
        foreignKey: "tipo", 
        targetKey: "tipo" 
    })
    
    acompanhamentos.hasMany(pedidos_acompanhamento, {
        foreignKey: "id",
        targetKey: "id_acompanhamento"
    })
}

module.exports = syncAll