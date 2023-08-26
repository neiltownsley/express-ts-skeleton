import {averageNumberCalculator} from "../../src/service/averageNumberCalculator";
describe('averageNumberCalculator', (): void => {
    it('When averageNumberCalculator is called with valid number, should return the average number',(): void=>{
        const numberList: number[] = [2, 4, 5, 8];
        expect(averageNumberCalculator(numberList)).toEqual(4.75);
    });

});
