const express = require("express");
const app = express();
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const routes = require('./routes/index');

const allowCrossDomain = function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:19000/');
    res.setHeader('Access-Control-Allow-Methods', 'PROPFIND, PROPPATCH, COPY, MOVE, DELETE, MKCOL, LOCK, UNLOCK, PUT, GETLIB, VERSION-CONTROL, CHECKIN, CHECKOUT, UNCHECKOUT, REPORT, UPDATE, CANCELUPLOAD, HEAD, OPTIONS, GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
};
app.use(allowCrossDomain);

app.use(session({
    secret: 'i like code and beer',
    cookie: {maxAge:7776000000, secure: false, httpOnly: true},
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
        url: 'mongodb://localhost:27017/hotels',
        autoRemove: 'interval',
        autoRemoveInterval: 1
    })
}));

routes(app);


app.get("/", function (request, response) {

    response.status(200).json({responseCode: 0});
});

app.listen(5000);