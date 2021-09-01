export interface Alumno {
    ru : number,
    nombre : string,
    direccion?: Dire
}

export interface Dire {
    calle : string,
    nombre : string,
    numero : number
}