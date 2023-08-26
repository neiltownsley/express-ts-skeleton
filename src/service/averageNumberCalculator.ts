export const averageNumberCalculator = (array: number[]): number => {
    return array.reduce((a: number, b: number) => a + b) / array.length;
}
