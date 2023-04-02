const mongoose = require("mongoose"); 


const listingSchema = new mongoose.Schema({
    user_id: {type: Number, required: true}, 
    name: { type: String, required: true },
    picture: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    weight: { type: Number, required: true },
    quantity: { type: Number, required: true },
});

module.exports = mongoose.model('Listing', listingSchema);