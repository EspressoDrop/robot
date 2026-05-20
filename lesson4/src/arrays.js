const stringArray = ['Apple', 'Cherry', 'Kiwi', 'Lemon', 'Banana'];

const numberArray = [45, 12, 89, 34, 67, 100, 23];

const booleanArray = [true, false, true, true, false];

const anyArray = [
    { id: 1, name: 'John', role: 'Teacher', active: true, score: 95 },
    { id: 2, name: 'Andrew', role: 'Student', active: false, score: 48 },
    { id: 3, name: 'Valery', role: 'Student', active: true, score: 76 },
    { id: 4, name: 'Helena', role: 'Student', active: true, score: 88 },
    { id: 5, name: 'Mark', role: 'Student', active: false, score: 12 }
];

const newReducedNumberArray = numberArray.reduce((acc, value) => acc + value, 0);

const sortedNumberArray = numberArray.sort((a, b) => a - b);

const newFilteredStringArray = stringArray.filter(value => value.length > 5);

const findAnyArray = anyArray.find(value => value.name === 'Valery');

const indexOfAnyArray = anyArray.findIndex(value => value.role === 'Teacher');

const concatStringArray = stringArray.concat(['Grapes', 'Orange']);

const groupedByRole = anyArray.groupBy(active => active.role);

console.log(newReducedNumberArray);
console.log(sortedNumberArray);
console.log(newFilteredStringArray);
console.log(findAnyArray);
console.log(indexOfAnyArray);
console.log(concatStringArray);
console.log(groupedByRole);

const mapBooleanArray = booleanArray.map(value => !value);

console.log(mapBooleanArray);

const forNumberArray = [];
for (let i = 0; i < numberArray.length; i++) {
    forNumberArray.push(numberArray[i] * 2);
}
console.log(forNumberArray);
