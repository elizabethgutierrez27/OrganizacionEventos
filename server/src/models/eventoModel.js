const mongoose = require('mongoose');

const eventoSchema = mongoose.Schema({
    NomEvento: String,
    Ciudad: String,
    Area: String,
    Descripcion: String,
    FechaInicio: String,
    FechaFinal: String,
    Cupo: Number,
    Participantes: Number,
    Asistentes: Number,
    Imagen: String
});

module.exports = mongoose.model("Evento", eventoSchema);