const jwt = require("jsonwebtoken")

const auth = (req, res, next) => {
    console.log("middleware")

    next()
}

module.exports = auth