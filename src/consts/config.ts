import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

// Load environment variables
const envPath = path.resolve(process.cwd(), '.env');
const envDefaultPath = path.resolve(process.cwd(), '.env.defaults');
dotenv.config({ path: fs.existsSync(envPath) ? envPath : envDefaultPath });

/**
 * Configure variables
 */
const config = {
  dev: process.env.NODE_ENV !== 'production',
  nodeEnv: process.env.NODE_ENV,
  projectName: process.env.PROJECT_NAME || 'defaults',
  port: Number(process.env.PORT) || 3001,
  dbUsername: process.env.DATABASE_USERNAME || ' development',
  dbPassword: process.env.DATABASE_PASSWORD || ' development',
  dbName: process.env.DATABASE_NAME || ' development',
  dbHost: process.env.DATABASE_HOST || ' development',
  dbPort: process.env.DATABASE_PORT || ' 5432'
};

export default config;
