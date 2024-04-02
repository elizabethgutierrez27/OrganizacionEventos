declare module '../models/eventoModel' {
    interface Evento {
        _id? : string;
        NomEvento: String,
        Ciudad: String,
        Area: String,
        Descripcion: String,
        FechaInicio: String,
        FechaFinal: String,
        Cupo: Number,
        Participantes: Number,
        Asistentes: Number,
        Imagen: String | null
    }
}

export {};