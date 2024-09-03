const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstname: { type: String, required: false },
    lastname: { type: String, required: false },
    birthdate: { type: String, required: false },
    languages: { type: [Number], required: false },
    imageUrl: { type: String, required: false },
    type: { type: String, required: true }, // user or agent
    // next fields are for agents
    network: { type: String, required: false },
    status: { type: String, required: false },
    specialities: { type: [String], required: false },
    experience: { type: Number, required: false }, // in years
    presentation: { type: String, required: false },
    zones: { type: [Object], required: false },
    // subscription
    plan: { type: Number, required: false }, // premium or basic
    bill: { type: Number, required: false }, // month or year
    subscriptionDate: { type: Date, required: false },
    expirationDate: { type: Date, required: false },

});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);