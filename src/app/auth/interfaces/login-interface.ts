export interface LoginRequest {
    email:    string;
    password: string;
}

export interface LoginResponse {
    correo:        string;
    fechaCreacion: Date;
    id:            number;
    nombre:        string;
    password:      string;
}

export interface LoginErrorResponse {
    access: string;
}
