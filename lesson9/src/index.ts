import { RumBased, ColaBased } from './classes';
import { IDrink } from './interfaces';

export function printDrinkDetails(drink: IDrink): string {
    return drink.getDetails();
}

const mojito = new RumBased('Mojito', 10, true, 15, false);
const colaCherry = new ColaBased('Coca-Cola Cherry', 5, false, true, 'Cherry');

console.log(printDrinkDetails(mojito));
console.log(printDrinkDetails(colaCherry));
