import { ImageUploadResponseDto } from '../models/the-cat-api/image.dto';
import { SetBreedRequestDto } from '../models/the-cat-api/set-breed.request.dto';
import { ImageBreedDto } from '../models/the-cat-api/get-breeds-by-imageid.response.dto';
import { IApiService } from '../services/i-api.service';
import * as fs from 'fs';

export class TheCatApi {
    public constructor(private readonly apiService: IApiService<Response>) {}

    public async uploadImageAsync(imagePath: string): Promise<[Response, ImageUploadResponseDto]> {
        const formData = new FormData();
        const imageRaw = fs.readFileSync(imagePath);
        const file = new File([new Uint8Array(imageRaw)], imagePath, { type: 'image/jpeg' });

        formData.append('file', file);

        const response = await this.apiService.postFormDataAsync('/images/upload', formData);

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to upload image: ${response.status} - ${errorText}`);
        }

        const responseBody = await response.json() as ImageUploadResponseDto;

        return [response, responseBody];
    }

    public async setImageBreedAsync(imageId: string, body: SetBreedRequestDto): Promise<[Response, SetBreedRequestDto]> {
        const response = await this.apiService.postAsync(`/images/${imageId}/breeds`, body, {
            'Content-Type': 'application/json'
        });

        // Check if response is ok before parsing JSON
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to set image breed: ${response.status} - ${errorText}`);
        }

        const responseBody = await response.json() as SetBreedRequestDto;

        return [response, responseBody];
    }

    public async getImageBreedsAsync(imageId: string): Promise<[Response, ImageBreedDto[]]> {
        const response = await this.apiService.getAsync(`/images/${imageId}/breeds`);

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to get image breeds: ${response.status} - ${errorText}`);
        }

        const responseBody = await response.json() as ImageBreedDto[];

        return [response, responseBody];
    }

    public async deleteImageBreedAsync(imageId: string, breedId: string): Promise<Response> {
        const response = await this.apiService.deleteAsync(`/images/${imageId}/breeds/${breedId}`);

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to delete image breed: ${response.status} - ${errorText}`);
        }

        return response;
    }
}
