const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema ({
    login: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    secondname: {
        type: String,
        required: true
    },
    patronymic: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    balance: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('users', usersSchema);