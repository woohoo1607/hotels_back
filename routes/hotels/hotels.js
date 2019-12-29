const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});
const hotelsDB = require("../../models/hotelsSchema");
const uri = "mongodb://localhost:27017/hotels";
const mongooseOption = {useNewUrlParser: true, useUnifiedTopology: true};

const hotels = (app) => {
    app.get("/hotels", function (req, res)  {
        mongoose.connect(uri, mongooseOption);
        hotelsDB.find().then(doc => {
            if (!doc) {
                return res.json({hotels: [], responseCode: 1, message: "Hotels not finded"})
            }
            return res.status(200).json({hotels: doc, responseCode: 0, message: null})
        })
    });
    app.put("/hotelroom", urlencodedParser, function (req, res)  {
        let id = req.body._id;
        let idhotel = req.body.idhotel;
        let isAvailable = req.body.isAvailable;
        mongoose.connect(uri, mongooseOption);
        hotelsDB.findOne({_id: idhotel}).then(doc => {
            let newDataHotelRooms = doc.hotelRooms.map(room => {
               if (room._id == id) {
                   room.isAvailable = isAvailable;
                   return room
               }
               return room
            });
            doc.hotelRooms = newDataHotelRooms;
            doc.save().then(newDoc => {
                if (!newDoc) {
                    return res.json({hotel: [], responseCode: 1, message: "Data not saved"})
                }
                return res.status(200).json({hotel: doc, responseCode: 0, message: null})
            });

        });
    });
};

module.exports = hotels;