const mongoose = require('mongoose')
const { schema } = require('../../../users/models/User')
const Schema = mongoose.Schema

const ProductSchema = new mongoose.Schema({
    category:{type: Schema.Types.Objectid , ref: 'Category'},
    name: String,
    price: Number,
    image: String,
    description: String
})

module.exports = mongoose.model('Product, ProductSchema')