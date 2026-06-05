export interface IDrink {
    name: string;
    price: number;
    isLicensed: boolean;

    getDetails(): string;
}

export interface IAlcoholicDrink extends IDrink {
    alcoholContent: number;
    imported: boolean;
}

export interface INonAlcoholicDrink extends IDrink {
    isCarbonated: boolean;
    flavor: string;
}

export interface ISugarFreeDrink extends INonAlcoholicDrink {
    isSugarFree: boolean;

    getDiabetesInfo(): string;
}
