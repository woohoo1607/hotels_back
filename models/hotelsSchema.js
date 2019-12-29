const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hotelsSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    description: {
        type: String
    },
    hotelRooms: [
        {
            id: {
                type: Number
            },
            number: {
                type: Number
            },
            type: {
                type: String
            },
            cost: {
                type: Number
            },
            isAvailable: {
                type: Boolean
            },
            description: {
                type: String
            }
        }
    ]
});

module.exports = mongoose.model('hotels', hotelsSchema);