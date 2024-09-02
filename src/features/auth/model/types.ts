export interface LoginCredentials {
    login: string;
    password: string;
}

export interface RegisterCredentials {
    email: string;
    username: string;
    password: string;
}

export interface AuthResponse {
    message: string;
    statusCode: number;
    data?: AuthData;
}

export interface AuthData {
    tokenType: string,
    roleType: string,
    expiresIn: number,
    accessToken: string,
    refreshToken: string
}

export interface AuthError {
    message: string;
    statusCode: number;
}