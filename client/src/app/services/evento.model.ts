export interface Evento {
    _id? : string,
    NomEvento : string,
    Ciudad : string,
    Area : string,
    Descripcion : string,
    FechaInicio : string,
    FechaFinal : string,
    Cupo : number,
    Participantes? : number,
    Asistentes? : number,
    Imagen? : string | null
}