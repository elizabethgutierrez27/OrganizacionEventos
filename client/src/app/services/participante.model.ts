export interface Participante {
    Nombres : String,
    ApePaterno : String,
    ApeMaterno : String,
    Edad : Number,
    Genero : String,
    Telefono : String,
    Correo : String,
    Ciudad : String,
    Password : String,
    Eventos : {
        NomEvento : String,
        Area : String
    }
}