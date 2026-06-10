import { describe, expect, test } from 'vitest';
import { printDrinkDetails } from '../src/function';
import { RumBased, ColaBased } from '../src/classes';

describe('Drink Tests', () => {
    const mojito = new RumBased('Mojito', 10, true, 11, false);
    const colaCherry = new ColaBased('Coca-Cola Cherry', 5, false, true, 'Cherry', false);
    const pureRum = new RumBased('Pure Rum', 15, true, 40, true);
    const dietCola = new ColaBased('Diet Cola', 4, false, true, 'Cola', true);

    test('should print the correct rum-based drink', () => {
        expect(printDrinkDetails(mojito)).to.be.equal('Name: Mojito, Price: $10, Alcohol Content: 11%');
    });

    test('Should not be strong for high threshold', () => {
        expect(mojito.isStrongDrink(12)).to.be.false;
    });

    test('Should be strong for low threshold', () => {
        expect(mojito.isStrongDrink(9)).to.be.true;
    });

    test('Should be strong for high threshold', () => {
        expect(pureRum.isStrongDrink(12)).to.be.true;
    });

    test('should print the correct cola-based drink', () => {
        expect(printDrinkDetails(colaCherry)).to.be.equal('Name: Coca-Cola Cherry, Price: $5, Flavor: Cherry');
    });

    test('should print diabetes information for the drink', () => {
        expect(dietCola.getDiabetesInfo()).to.be.equal('This drink is sugar-free.');
    });

    test('Non alcoholic drink should have a flavor', () => {
        expect(printDrinkDetails(colaCherry).includes('Flavor')).to.be.true;
    });
});
