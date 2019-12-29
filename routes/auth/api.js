const mongoose = require('mongoose');
const users = require("../../models/usersSchema");
const uri = "mongodb://localhost:27017/hotels";
const mongooseOption = {useNewUrlParser: true, useUnifiedTopology: true};
const crypto = require('crypto');

exports.checkUser = function (userData) {
    mongoose.connect(uri, mongooseOption);
    return users
        .findOne({login: userData.login})
        .then(function (doc) {
            if (doc) {
                if (doc.password == hash(userData.password)) {
                    return Promise.resolve(doc);
                } else {
                    return Promise.reject(null);
                }
            } else {
                return doc;
            }
        });
};

exports.findUser = function (userData) {
    mongoose.connect(uri, mongooseOption);

    return users
        .findOne({login: userData.login})
        .then(function (res) {
            return res;
        }, function (err) {
            return err;
        });
};

function hash(text) {
    return crypto.createHash('sha1')
        .update(text).digest('base64');
}
