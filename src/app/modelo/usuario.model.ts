export interface Usuario {
    username : string,
    password : string,
    informacion? : Informacion,
    roles? : Roles
}

export interface Informacion {
    ci : string,
    nombre : string,
    ap : string,
    am : string,
    direc? : Direc,
    files? : Files
}

export interface Roles{
    rolname : string
}

export interface Direc{
    zona : string,
    calle : string
}

export interface Files{
    nombre : string,
    path : string
}