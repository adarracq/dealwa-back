const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    type: { type: Number, required: true }, // 0: achat 1: vente
    user_id: { type: String, required: true },
    user_firstname: { type: String, required: true },
    date: { type: Date, required: true },
    status: { type: String, required: true },
    description: { type: String, required: true },
    coord: { type: [Number], required: true },
    address: { type: String, required: false },
    radius: { type: Number, required: false },
});

module.exports = mongoose.model('Project', projectSchema);
