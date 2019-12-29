const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/hotels";
const mongooseOption = {useNewUrlParser: true, useUnifiedTopology: true};
const crypto = require('crypto');

const hotels = require("./models/hotelsSchema");
const users = require("./models/usersSchema");

function hash(text) {
    return crypto.createHash('sha1')
        .update(text).digest('base64');
}

mongoose.connect(uri, mongooseOption);

const hotel1 = new hotels ({
    id: 0,
    name: "Hotel Sumy",
    img: "https://q-cf.bstatic.com/images/hotel/max1024x768/224/22443294.jpg",
    description: "Наш отель является самым большим отелем города. У нас вы получите отличный отдых, высококачественное обслуживание и исключительно положительные емоции=)",
    hotelRooms: [
        {id: 0, number: 101, type: "Люкс", cost: 500, isAvailable: true, description: "Люкс номер на первом этаже"},
        {id: 1, number: 102, type: "Люкс", cost: 500, isAvailable: true, description: "Люкс номер на первом этаже"},
        {id: 2, number: 103, type: "Економ", cost: 150, isAvailable: false, description: "Економ номер на первом этаже"},
        {id: 3, number: 201, type: "Люкс", cost: 500, isAvailable: true, description: "Люкс номер на втором этаже"},
        {id: 4, number: 202, type: "Полу-Люкс", cost: 400, isAvailable: false, description: "Полу-Люкс номер на втором этаже"},
        {id: 5, number: 203, type: "Стандарт", cost: 300, isAvailable: true, description: "Стандарт номер на втором этаже"},
        {id: 6, number: 301, type: "Економ", cost: 150, isAvailable: true, description: "Економ номер на третьем этаже"},
        {id: 7, number: 302, type: "Економ", cost: 150, isAvailable: false, description: "Економ номер на третьем этаже"},
        {id: 8, number: 303, type: "Стандарт", cost: 300, isAvailable: false, description: "Стандарт номер на третьем этаже"},
        {id: 9, number: 304, type: "Люкс", cost: 500, isAvailable: true, description: "Люкс номер на первом этаже"}
    ]
});

const hotel2 = new hotels ({
    id: 1,
    name: "У Саши",
    img: "https://www.pgshotel.com/wp-content/uploads/2018/01/slider.jpg",
    description: "Наш мини-отель предлогает не только комфортный сон, но и прекрасный отдых. У нас Вы можете посетить сауну, бильярд, каракоке-бар и отличный рсторан европейской кухни",
    hotelRooms: [
        {id: 0, number: 101, type: "Люкс", cost: 500, isAvailable: false, description: "Люкс номер на первом этаже"},
        {id: 1, number: 102, type: "Люкс", cost: 500, isAvailable: true, description: "Люкс номер на первом этаже"},
        {id: 2, number: 103, type: "Економ", cost: 150, isAvailable: false, description: "Економ номер на первом этаже"},
        {id: 3, number: 104, type: "Економ", cost: 150, isAvailable: true, description: "Економ номер на первом этаже"},
        {id: 4, number: 105, type: "Економ", cost: 150, isAvailable: false, description: "Економ номер на первом этаже"},
        {id: 5, number: 201, type: "Люкс", cost: 500, isAvailable: true, description: "Люкс номер на втором этаже"},
        {id: 6, number: 202, type: "Полу-Люкс", cost: 400, isAvailable: false, description: "Полу-Люкс номер на втором этаже"},
        {id: 7, number: 203, type: "Стандрат", cost: 300, isAvailable: true, description: "Стандрат номер на втором этаже"},
        {id: 8, number: 204, type: "Стандрат", cost: 300, isAvailable: false, description: "Стандрат номер на втором этаже"},
        {id: 9, number: 301, type: "Економ", cost: 150, isAvailable: true, description: "Економ номер на третьем этаже"},
        {id: 10, number: 302, type: "Економ", cost: 150, isAvailable: false, description: "Економ номер на третьем этаже"},
        {id: 11, number: 303, type: "Стандрат", cost: 300, isAvailable: false, description: "Стандрат номер на третьем этаже"},
        {id: 12, number: 304, type: "Люкс", cost: 500, isAvailable: true, description: "Люкс номер на первом этаже"},
        {id: 13, number: 401, type: "Економ", cost: 150, isAvailable: true, description: "Економ номер на четвертом этаже"},
        {id: 14, number: 402, type: "Економ", cost: 150, isAvailable: true, description: "Економ номер на четвертом этаже"},
        {id: 15, number: 403, type: "Стандрат", cost: 300, isAvailable: false, description: "Стандрат номер на четвертом этаже"},
        {id: 16, number: 404, type: "Люкс", cost: 500, isAvailable: false, description: "Люкс номер на четвертом этаже"}
    ]
});

const hotel3 = new hotels ({
    id: 2,
    name: "Отель 5*",
    img: "https://q-cf.bstatic.com/images/hotel/max1024x768/207/207762020.jpg",
    description: "У нас Вы получите самые комфортные условия что бы получить качственный сон. Все номер оборудованы современными кроватями, ортопедическими подушками, кондиционерами, полом с подогревом и не только.",
    hotelRooms: [
        {id: 0, number: 101, type: "Люкс", cost: 500, isAvailable: true, description: "Люкс номер на первом этаже"},
        {id: 1, number: 102, type: "Люкс", cost: 500, isAvailable: false, description: "Люкс номер на первом этаже"},
        {id: 2, number: 103, type: "Економ", cost: 150, isAvailable: true, description: "Економ номер на первом этаже"},
        {id: 3, number: 201, type: "Люкс", cost: 500, isAvailable: true, description: "Люкс номер на втором этаже"},
        {id: 4, number: 202, type: "Полу-Люкс", cost: 400, isAvailable: false, description: "Полу-Люкс номер на втором этаже"},
        {id: 5, number: 203, type: "Стандрат", cost: 300, isAvailable: true, description: "Стандрат номер на втором этаже"},
        {id: 6, number: 301, type: "Економ", cost: 150, isAvailable: false, description: "Економ номер на третьем этаже"},
        {id: 7, number: 302, type: "Економ", cost: 150, isAvailable: false, description: "Економ номер на третьем этаже"},
        {id: 8, number: 303, type: "Стандрат", cost: 300, isAvailable: false, description: "Стандрат номер на третьем этаже"},
        {id: 9, number: 304, type: "Люкс", cost: 500, isAvailable: false, description: "Люкс номер на первом этаже"},
        {id: 10, number: 401, type: "Економ", cost: 150, isAvailable: false, description: "Економ номер на четвертом этаже"},
        {id: 11, number: 402, type: "Економ", cost: 150, isAvailable: true, description: "Економ номер на четвертом этаже"},
        {id: 12, number: 403, type: "Стандрат", cost: 300, isAvailable: false, description: "Стандрат номер на четвертом этаже"},
        {id: 13, number: 404, type: "Люкс", cost: 500, isAvailable: false, description: "Люкс номер на четвертом этаже"},
        {id: 14, number: 501, type: "Люкс", cost: 500, isAvailable: true, description: "Люкс номер на пятом этаже"},
        {id: 15, number: 502, type: "Полу-Люкс", cost: 400, isAvailable: false, description: "Полу-Люкс номер на пятом этаже"},
        {id: 16, number: 503, type: "Люкс", cost: 500, isAvailable: false, description: "Люкс номер на пятом этаже"},
        {id: 17, number: 504, type: "Полу-Люкс", cost: 400, isAvailable: false, description: "Полу-Люкс номер на пятом этаже"},
        {id: 18, number: 505, type: "Люкс", cost: 500, isAvailable: true, description: "Люкс номер на пятом этаже"},
        {id: 19, number: 506, type: "Полу-Люкс", cost: 400, isAvailable: false, description: "Полу-Люкс номер на пятом этаже"}
    ]
});

const user1 = new users ({
    id: 0,
    login: "woohoo",
    password: hash("12341234"),
    firstname: "Александр",
    secondname: "Кор",
    patronymic: "Сергеевич",
    email: "woohoo@gmail.com",
    balance: 700
});

user1.save(function(err){
    mongoose.disconnect();

    if(err) return console.log(err);

    console.log("Сохранен объект user");
});


hotel1.save(function(err){
    mongoose.disconnect();

    if(err) return console.log(err);

    console.log("Сохранен объект hotel1");
});

hotel2.save(function(err){
    mongoose.disconnect();

    if(err) return console.log(err);

    console.log("Сохранен объект hotel2");
});

hotel3.save(function(err){
    mongoose.disconnect();

    if(err) return console.log(err);

    console.log("Сохранен объект hotel3");
});
