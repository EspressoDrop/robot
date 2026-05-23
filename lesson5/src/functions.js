function sumOfArray(a) {
    let b = checkOnArrayContent(a) ? 0 : '';
    for (let i = 0; i < a.length; i++) {
        b += a[i];
    }
    return b;
}

function checkOnArrayContent(e) {
    if (typeof e[0] == 'number') {
        return true;
    } else {
        return false;
    }
}

const c = [1, 2, 3, 4, 5];
console.log(sumOfArray(c));

const d = ['This', ' ', 'is', ' ', 'an', ' ', 'array', '.'];
console.log(sumOfArray(d));
