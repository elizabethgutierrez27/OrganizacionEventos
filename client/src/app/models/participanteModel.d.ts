declare module '../models/participanteModel' {
    interface Participante {
        _id? : string;
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
            NomEvento: String,
            Area: String
    }
    }
}

export {};