export interface IApiService<T> {
    baseUrl: string;
    getAsync(url: string, params?: Record<string, string | number | boolean>, headers?: Record<string, string>): Promise<T>;
    postAsync(url: string, body: unknown, headers?: Record<string, string>): Promise<T>;
    postFormDataAsync(url: string, formData: FormData, headers?: Record<string, string>): Promise<T>;
    putAsync(url: string, body: unknown, headers?: Record<string, string>): Promise<T>;
    deleteAsync(url: string, headers?: Record<string, string>): Promise<T>;
}
