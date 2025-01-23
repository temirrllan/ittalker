export interface FormError {
    path?: string;
    message: string;
    inner?: FormError[];
}

export interface ValidationError extends Error {
    inner?: FormError[];
}

export interface ApiResponse {
    success: boolean;
    error?: string;
    id?: string;
} 