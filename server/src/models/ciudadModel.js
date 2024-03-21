const mongoose = require('mongoose');

const ciudadSchema = mongoose.Schema({
    NomCiudad : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model("Ciudad", ciudadSchema);