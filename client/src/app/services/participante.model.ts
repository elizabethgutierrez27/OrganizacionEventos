export interface Participante {
    NomParticipante : string,
    ApePaterno : string,
    ApeMaterno : string,
    Edad : number,
    Genero : string,
    Telefono : string,
    Correo : string,
    Ciudad : string,
    Contraseña : string,
    Eventos : {
        NomEvento : string,
        Area : string
    }
}