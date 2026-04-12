export interface RegisterFormData {
    first_name: string;
    last_name: string;
    email: string;  
    password: string;
    password_confirmation: string;
}

export interface LoginFormData {
    email: string,
    password: string;
}