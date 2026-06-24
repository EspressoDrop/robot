
import { TheCatApi } from '../src/apis/the-cats.api';
import { SetBreedRequestDto } from '../src/models/the-cat-api/set-breed.request.dto';
import { ConfigService } from '../src/services/config.service';
import { FetchApiService } from '../src/services/fetch-api.service';
import * as path from 'path';
import { beforeAll, describe, it, expect } from 'vitest';

describe('TheCatApi image breeds assignment', () => {
    let catApi: TheCatApi;
    let uploadedImageId: string;
    const testBreedId = 'beng';

    beforeAll(() => {
        const configService = new ConfigService();
        const config = configService.getConfig();
        const baseUrl = config.api.theCatApi.baseUrl;
        const secrets = {apiKey: config.auth.theCatApi.apiKey};

        const apiService = new FetchApiService(baseUrl, secrets);
        catApi = new TheCatApi(apiService);
    });

    it('Should upload a new cat image', async () => {
        const imagePath = path.join(__dirname, 'fixtures', 'cat.jpg');
        const [response, body] = await catApi.uploadImageAsync(imagePath);

        expect(response.status).toBe(201);
        expect(body).toHaveProperty('id');
        expect(body.id).toBeDefined();

        uploadedImageId = body.id;
    });

    it('Should assign a breed to the uploaded image', async () => {
        expect(uploadedImageId).toBeDefined();

        const requestBody: SetBreedRequestDto = {
            breed_id: testBreedId
        };

        const [response, responseBody] = await catApi.setImageBreedAsync(uploadedImageId, requestBody);

        expect(response.status).toBe(200);
        expect(responseBody).toBeDefined();
    });

    it('Should verify the correct breed is assigned to the image', async () => {
        expect(uploadedImageId).toBeDefined();

        const [response, body] = await catApi.getImageBreedsAsync(uploadedImageId);

        expect(response.status).toBe(200);
        expect(Array.isArray(body)).toBe(true);
        expect(body.length).toBeGreaterThan(0);

        const assignedBreed = body.find(b => b.id === testBreedId);
        expect(assignedBreed).toBeDefined();
        expect(assignedBreed?.name).toContain('Bengal');
    });

    it('Should remove the breed from the uploaded image', async () => {
        expect(uploadedImageId).toBeDefined();

        const deleteResponse = await catApi.deleteImageBreedAsync(uploadedImageId, testBreedId);
        expect(deleteResponse.status).toBe(204);

        const [verifyResponse, verifyBody] = await catApi.getImageBreedsAsync(uploadedImageId);
        expect(verifyResponse.status).toBe(200);

        const breedAfterDelete = verifyBody.find(b => b.id === testBreedId);
        expect(breedAfterDelete).toBeUndefined();
    });

    it('Should fail when assigning an invalid breed', async () => {
        expect(uploadedImageId).toBeDefined();

        const invalidBreedId = 'invalid_breed_xyz_123';
        const requestBody: SetBreedRequestDto = {
            breed_id: invalidBreedId
        };

        await expect(
            catApi.setImageBreedAsync(uploadedImageId, requestBody)
        ).rejects.toThrow(/Failed to set image breed/);
    });
});
