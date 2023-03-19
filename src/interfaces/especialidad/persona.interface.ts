export interface Persona {
    id: number;
    persona: string;
    Origen: number;
    apellidoPaterno: string;
    apellidoMaterno:string;
    nombres: string;
    nombreCompleto:string;
    tipoDocumento:number;
    numeroDocumento:string;
    esCliente:number;
    esProveedor:number;
    esEmpleado:number;
    tipoPersona:string;
    birthdate:string;
    ciudadNacimiento:string;
    genero:string;
    Nacionalidad:string;
    estadoCivil:number;
    nivelInstruccion:string;
    direccion:string;
    codigoPostal:string;
    pais:string;
    provncia:string;
    departamento:string;
    telefono:string;
    documentoFiscal:string;
    NombreEmergencia:string;
    DireccionEmergencia:string;
    telefonoEmergencia:string;
    email:string;
    celular:string;
    parentescoEmergencia:string;
    celularEmergencia:string;
    lugarNacimiento:string;
    estado:number;
    Edad:string;
    raza:string;
    createAd: string;
    updateAd: string;
}