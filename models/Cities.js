const {Schema, model} = require('mongoose')

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    distance: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
})

module.exports = model('Cities', schema)