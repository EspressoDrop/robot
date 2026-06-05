import { IDrink } from './interfaces';

export function printDrinkDetails(drink: IDrink): string {
    return drink.getDetails();
}
