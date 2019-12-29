const auth = require("./auth/auth");
const hotels = require("./hotels/hotels");

module.exports = (app) => {
    auth(app);
    hotels(app);
};