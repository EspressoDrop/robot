export function sumOfArray(a: number[]): number;
export function sumOfArray(a: string[]): string;

export function sumOfArray(a: number[] | string[]): number | string {
    if (typeof a[0] === 'number') {
        let b = 0;
        for (const value of a as number[]) {
            b += value;
        }
        return b;
    }
    return a.join('');
}

