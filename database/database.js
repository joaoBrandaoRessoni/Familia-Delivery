const sequelize = require("sequelize")

const connection = new sequelize("familia_delivery", "server_familia_delivery", "familiaDelivery2025", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    timezone: "-03:00"
})

module.exports = connection