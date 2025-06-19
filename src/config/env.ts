import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const GOOGLE_API_KEY=process.env.GOOGLE_API_KEY;
export const isDev = process.env.NODE_ENV !== 'production';
