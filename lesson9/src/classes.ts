import { IAlcoholicDrink, INonAlcoholicDrink, ISugarFreeDrink } from './interfaces';

export class RumBased implements IAlcoholicDrink {
    public name: string;
    public price: number;
    public isLicensed: boolean;
    public alcoholContent: number;
    public imported: boolean;

    public constructor(
        name: string,
        price: number,
        isLicensed: boolean,
        alcoholContent: number,
        imported: boolean
    ){
        this.name = name;
        this.price = price;
        this.isLicensed = isLicensed;
        this.alcoholContent = alcoholContent;
        this.imported = imported;
    }

    public getDetails(): string {
        return `Name: ${this.name}, Price: $${this.price}, Alcohol Content: ${this.alcoholContent}%`;
    }
}

export class ColaBased implements INonAlcoholicDrink, ISugarFreeDrink {
    public name: string;
    public price: number;
    public isLicensed: boolean;
    public isCarbonated: boolean;
    public flavor: string;
    public isSugarFree: boolean;

    public constructor(
        name: string,
        price: number,
        isLicensed: boolean,
        isCarbonated: boolean,
        flavor: string,
        isSugarFree: boolean
    ){
        this.name = name;
        this.price = price;
        this.isLicensed = isLicensed;
        this.isCarbonated = isCarbonated;
        this.flavor = flavor;
        this.isSugarFree = isSugarFree;
    }

    public getDetails(): string {
        return `Name: ${this.name}, Price: $${this.price}, Flavor: ${this.flavor}`;
    }

    public getDiabetesInfo(): string {
        if (this.isSugarFree) {
            return 'This drink is sugar-free.';
        } else {
            return 'This drink is not sugar-free.';
        }
    }
}
