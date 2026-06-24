import { IApiService } from './i-api.service';

export class FetchApiService implements IApiService<Response> {
    public constructor(
        public readonly baseUrl: string,
        private readonly secrets: {
            apiKey?: string;
            basicTokken?: string;
            bearerTokken?: string;
        }
    ) {}

    public async postAsync(
        uri: string,
        body: unknown,
        headers?: HeadersInit
    ): Promise<Response> {
        const url = `${this.baseUrl}${uri}`;
        const requestHeaders = { ...this.getDefaultHeaders(), ...headers };

        return await fetch(url, {
            method: 'POST',
            headers: requestHeaders,
            body: JSON.stringify(body)
        });
    }

    public async putAsync(
        uri: string,
        body: unknown,
        headers?: HeadersInit
    ): Promise<Response> {
        const url = `${this.baseUrl}${uri}`;
        const requestHeaders = { ...this.getDefaultHeaders(), ...headers };

        return await fetch(url, {
            method: 'PUT',
            headers: requestHeaders,
            body: JSON.stringify(body)
        });
    }

    public async deleteAsync(
        uri: string,
        headers?: HeadersInit
    ): Promise<Response> {
        const url = `${this.baseUrl}${uri}`;
        const requestHeaders = { ...this.getDefaultHeaders(), ...headers };

        return await fetch(url, {
            method: 'DELETE',
            headers: requestHeaders
        });
    }

    public async postFormDataAsync(
        uri: string,
        formData: FormData,
        headers?: HeadersInit
    ): Promise<Response> {
        const url = `${this.baseUrl}${uri}`;
        const requestHeaders = new Headers({ ...this.getDefaultHeaders(), ...headers });

        return await fetch(url, {
            method: 'POST',
            headers: requestHeaders,
            body: formData
        });
    }

    public async getAsync(
        uri: string,
        params?: Record<string, string | number | boolean>,
        headers?: HeadersInit
    ): Promise<Response> {
        const queries = params ? `?${Object.entries(params).map(([key, value]) => `${key}=${value}`).join('&')}` : '';
        const url = `${this.baseUrl}${uri}${queries}`;

        const requestHeaders = { ...this.getDefaultHeaders(), ...headers };

        return await fetch(url, {
            method: 'GET',
            headers: requestHeaders
        });
    }
    private getDefaultHeaders(): HeadersInit {
        const headers: HeadersInit = {};

        if (this.secrets.apiKey) {
            headers['x-api-key'] = this.secrets.apiKey;
        }

        if (this.secrets.basicTokken) {
            headers['Authorization'] = `Basic ${this.secrets.basicTokken}`;
        }

        if (this.secrets.bearerTokken) {
            headers['Authorization'] = `Bearer ${this.secrets.bearerTokken}`;
        }

        return headers;
    }
}
