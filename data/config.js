const knex= require("knex")
const {development} = require("../knexfile")

const knexfile = require("../knexfile")

module.exports = knex(knexfile["development"])