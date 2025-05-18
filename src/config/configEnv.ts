// src/config/envConfig.ts

import { config } from "dotenv";
config(); // Load .env file

export const env = {
 NODE_ENV: process.env.NODE_ENV || 'development',
 PORT: parseInt(process.env.PORT || "3000", 10),
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_PORT: parseInt(process.env.DB_PORT || "5432", 10),
  DB_USERNAME: process.env.DB_USERNAME || "postgres",
  DB_PASSWORD: process.env.DB_PASSWORD || "postgres",
  DB_NAME: process.env.DB_NAME || "postgres",
};
console.log('Loaded environment variables:');
console.log({
  NODE_ENV: env.NODE_ENV,
  DB_HOST: env.DB_HOST,
  DB_PORT: env.DB_PORT,
  DB_USERNAME: env.DB_USERNAME,
  DB_NAME: env.DB_NAME,
});
