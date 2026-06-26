export interface ImageUploadResponseDto {
    id: string;
    url: string;
    width: number;
    height: number;
    original_filename: string;
    pending: number;
    approved: number;
}
