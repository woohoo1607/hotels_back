const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});
const api = require("./api");

const auth = (app) => {
    app.get("/auth/me", function (req, res)  {
        if (!req.session.user) {
            return res.json({userData: {}, responseCode: 1, message: "You are not login"});
        }
        api.findUser(req.session.user)
            .then(function (user) {
                if (user) {
                    return res.json({userData: {
                        id: user._id, login: user.login, firstname: user.firstname, secondname: user.secondname, patronymic: user.patronymic, email: user.email, balance: user.balance}, responseCode: 0, message: null});
                } else {
                    return res.json({userData: {}, responseCode: 1, message: "User is not corrected"});
                }
            }).catch(function (error) {
            return res.json({userData: {}, responseCode: 1, message: error});
        });
    });

    app.post("/auth/login", urlencodedParser, function (req, res) {

    if (req.session.user){
        return res.json({responseCode: 0, message: null});
    }
    api.checkUser(req.body)
        .then(function (user) {
            if (user) {
                req.session.user = {id: user._id, login: user.login};
                req.session.save();
                return res.json({responseCode: 0, message: null});
            } else {
                return res.json({responseCode: 1, message: "Login or password not correct"});
            }
        })
        .catch(function (error) {
            return res.json({responseCode: 1, message: error});
        });
    });
    app.delete('/auth/login', urlencodedParser, function (req, res) {
        if (req.session.user) {
            delete req.session.user;

            res.json({responseCode: 0, message: null});
        }
    });
    app.put("/user", urlencodedParser, function (req, res)  {
        let cost = req.body.cost;
        api.findUser(req.session.user).then(user => {
            user.balance = user.balance-cost;
            user.save().then(user=> {
                if (!user) {
                    return res.json({userData: {}, responseCode: 1, message: "User data not saved"})
                }
                return res.status(200).json({userData: {
                        id: user._id, login: user.login, firstname: user.firstname, secondname: user.secondname, patronymic: user.patronymic, email: user.email, balance: user.balance}, responseCode: 0, message: null})
            })
        })
    });
};

module.exports = auth;