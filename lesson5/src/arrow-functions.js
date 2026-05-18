const sumOfArray = (a) => {
    let b = checkOnArrayContent(a) ? 0 : '';
    for (let i = 0; i < a.length; i++) {
        b += a[i];
    }
    return b;
};

const checkOnArrayContent = (e) => typeof e[0] === 'number';

const c = [1, 2, 3, 4, 5];
console.log(sumOfArray(c));

const d = ['This', ' ', 'is', ' ', 'an', ' ', 'array', '.'];
console.log(sumOfArray(d));
