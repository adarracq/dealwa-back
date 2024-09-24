const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    type: { type: Number, required: true }, // 0: achat 1: vente
    user_id: { type: String, required: true },
    user_firstname: { type: String, required: true },
    date: { type: String, required: true },
    tag: { type: [Number], required: true },
    categorie: { type: Number, required: true },
    nbRooms: { type: Number, required: false },
    nbBedrooms: { type: Number, required: false },
    nbBathrooms: { type: Number, required: false },
    surface: { type: Number, required: false },
    gardenSurface: { type: Number, required: false },
    budget: { type: Number, required: false },
    description: { type: String, required: false },
    coord: { type: [Number], required: false },
    address: { type: String, required: false },
    radius: { type: Number, required: false },
    status: { type: String, required: true },
});

module.exports = mongoose.model('Project', projectSchema);