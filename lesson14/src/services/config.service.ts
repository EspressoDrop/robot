import { ApiConfigDto, AuthConfigDto, ConfigDto } from '../models/the-cat-api/config.dto';
import { config } from 'dotenv';
import * as fs from 'fs';

export class ConfigService {
    public constructor() {
        config();
    }

    public getConfig(): ConfigDto {
        const apiConfig = this.getFileConfig();
        const authConfig = this.getAuthConfig();
        return {
            api: apiConfig,
            auth: authConfig
        };
    }

    public getFileConfig(): ApiConfigDto {
        const configDto = JSON.parse(fs.readFileSync('config.json', 'utf8'));
        return configDto as ApiConfigDto;
    }

    public getAuthConfig(): AuthConfigDto {
        return {
            theCatApi: {
                apiKey: process.env.CAT_API_KEY || ''}
        };
    }
}
