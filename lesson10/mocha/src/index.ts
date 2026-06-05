import { RumBased, ColaBased } from './classes';
import { printDrinkDetails } from './function';

export const mojito = new RumBased('Mojito', 10, true, 11, false);
export const colaCherry = new ColaBased('Coca-Cola Cherry', 5, false, true, 'Cherry', false);
export const pureRum = new RumBased('Pure Rum', 15, true, 40, true);
export const dietCola = new ColaBased('Diet Cola', 4, false, true, 'Cola', true);

console.log(printDrinkDetails(mojito));
console.log(printDrinkDetails(colaCherry));
console.log(printDrinkDetails(pureRum));
console.log(printDrinkDetails(dietCola));
