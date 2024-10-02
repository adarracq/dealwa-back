const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstname: { type: String, required: false },
    lastname: { type: String, required: false },
    birthdate: { type: String, required: false },
    presentation: { type: String, required: false },
    languages: { type: [Number], required: false },
    imageUrl: { type: String, required: false },
    type: { type: String, required: true }, // user or agent
    status: { type: String, required: false }, // verify, unverify, pending or banned
    verified: { type: Boolean, required: false },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);