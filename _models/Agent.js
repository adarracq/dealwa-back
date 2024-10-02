const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const agentSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    network: { type: String, required: false },
    workStatus: { type: Number, required: false }, // Salarié ou Indépendant
    specialities: { type: [Number], required: false },
    experience: { type: Number, required: false }, // in yearss
    zones: { type: [Object], required: false },
    maxZones: { type: Number, required: false },
    idCCI: { type: String, required: false },
    // subscription
    plan: { type: Number, required: false }, // premium or basic
    bill: { type: Number, required: false }, // monthly or yearly
    subscriptionDate: { type: Date, required: false },
    expirationDate: { type: Date, required: false },
    // boosts and leads
    boosts: { type: [Date], required: false }, // array of expiration dates
    isBoosted: { type: Boolean, required: false },
    leadsLeft: { type: Number, required: false }, // array of expiration dates

});

agentSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Agent', agentSchema);