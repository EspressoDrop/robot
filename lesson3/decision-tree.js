let temperature = 22;
let isRaining = false;

if (isRaining) {
    console.log("It rains");
}

if (temperature < 10 && !isRaining) {
    console.log("Bad weather today.");
} else if (temperature >= 10 && temperature < 25) {
    console.log("The weather is perfect.");
} else if (temperature >= 25) {
    console.log("It is hot today.");
} else {
    console.log("Better stay home");
}