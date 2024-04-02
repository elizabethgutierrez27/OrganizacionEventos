const mongoose = require('mongoose');

const participanteSchema = mongoose.Schema({
    Nombres: String,
    ApePaterno: String,
    ApeMaterno: String,
    Edad: Number,
    Genero: String,
    Telefono: String,
    Correo: String,
    Ciudad: String,
    Password: String,
    Eventos: {
        NombreEvento: String,
        Area: String
    }
});

module.exports = mongoose.model("Participante", participanteSchema);