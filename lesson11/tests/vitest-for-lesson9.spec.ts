import { describe, expect, test, vi } from 'vitest';
import { RumBased, ColaBased } from '../src/classes';
import * as functionModule from '../src/function';

describe('Tests using mocking and Vitest for lesson 9', () => {
    test('Should mock getDetails method on RumBased instance', () => {
        const mojito = new RumBased('Mojito', 10, true, 11, false);
        const getDetailsMock = vi.fn();
        getDetailsMock.mockImplementation(() => 'Mojito, $10, 11% alcohol');
        mojito.getDetails = getDetailsMock;

        const result = mojito.getDetails();

        expect(result).toBe('Mojito, $10, 11% alcohol');

        getDetailsMock.mockRestore();
    });

    test('Should mock isStrongDrink method', () => {
        const rum = new RumBased('Pure Rum', 15, true, 40, true);
        const isStrongDrinkMock = vi.fn();
        isStrongDrinkMock.mockImplementation((threshold: number) => {
            return rum.alcoholContent > threshold;
        });

        const result1 = rum.isStrongDrink(15);
        const result2 = rum.isStrongDrink(41);

        expect(result1).toBe(true);
        expect(result2).toBe(false);

        isStrongDrinkMock.mockRestore();
    });

    test('Should mock getDiabetesInfo method on ColaBased instance', () => {
        const cola = new ColaBased('Diet Cola', 4, false, true, 'Cola', true);
        const getDiabetesInfoMock = vi.fn().mockReturnValue('Drink is sugar-free.');

        cola.getDiabetesInfo = getDiabetesInfoMock;

        const result = cola.getDiabetesInfo();

        expect(result).toBe('Drink is sugar-free.');

        getDiabetesInfoMock.mockRestore();
    });

    test('Should mock printDrinkDetails function', () => {
        const drink = new RumBased('Mojito', 10, true, 11, false);
        const mockPrintDrinkDetails = vi.spyOn(functionModule, 'printDrinkDetails');
        mockPrintDrinkDetails.mockReturnValue('Drink details');
        const result = functionModule.printDrinkDetails(drink);

        expect(mockPrintDrinkDetails).toHaveBeenCalledTimes(1);
        expect(result).toBe('Drink details');

        mockPrintDrinkDetails.mockRestore();
    });

    test('Should verify printDrinkDetails receives correct argument type', () => {
        const mockedFn = vi.fn((drink) => functionModule.printDrinkDetails(drink));
        const rumDrink = new RumBased('Spiced Rum', 14, true, 35, false);

        mockedFn(rumDrink);

        expect(mockedFn).toHaveBeenCalledWith(rumDrink);

        mockedFn.mockRestore();
    });
});

