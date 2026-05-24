export const sumOfArrayArrow = (a: number[] | string[]): number | string => {
    if (checkOnArrayContent(a)) {
        let b = 0;
        for (const item of a) {
            b += item;
        }
        return b;
    }

    return a.join('');
};

export const checkOnArrayContent = (e: number[] | string[]): e is number[] => typeof e[0] === 'number';


