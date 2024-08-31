import { LoginCredentials, AuthResponse, AuthError } from './types';

export const loginUser = async (credentials: LoginCredentials): Promise<AuthResponse | AuthError> => {
    try {
        const response = await fetch('https://api.hikasami.com/auth/user/login/credential', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'accept': 'application/json',
                'x-custom-lang': 'ru',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });

        const result: AuthResponse = await response.json();

        if(result.statusCode !== 200){
            throw { message: result.message || 'Ошибка при авторизации', statusCode: result.statusCode };
        }

        return result;
    } catch (error: any) {
        return { 
            message: error.message || 'Unknown error',
            statusCode: error.statusCode || 500
        };
    }
};