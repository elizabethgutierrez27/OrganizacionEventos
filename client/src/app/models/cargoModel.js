const mongoose = require('mongoose');

const cargoSchema = new mongoose.Schema({
    NomArea : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('Cargo', cargoSchema);