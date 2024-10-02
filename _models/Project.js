const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    type: { type: Number, required: true }, // 0: achat 1: vente
    user_id: { type: String, required: true },
    user_firstname: { type: String, required: true },
    date: { type: Date, required: true },
    tags: { type: [Number], required: true },
    categorie: { type: Number, required: true },
    nbRooms: { type: Number, required: false },
    nbBedrooms: { type: Number, required: false },
    nbBathrooms: { type: Number, required: false },
    surface: { type: Number, required: false },
    gardenSurface: { type: Number, required: false },
    budget: { type: Number, required: false },
    description: { type: String, required: false },
    zone: { type: Object, required: false },
    address: { type: Object, required: false },
    status: { type: String, required: true },
    isPublic: { type: Boolean, required: true },
});

module.exports = mongoose.model('Project', projectSchema);