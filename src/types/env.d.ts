declare global {
    namespace NodeJS {
        interface ProcessEnv {
            GOOGLE_SHEET_ID: string;
            GOOGLE_SHEET_EMAIL: string;
            GOOGLE_SHEET_PRIVATE_KEY: string;
        }
    }
}

export { } 