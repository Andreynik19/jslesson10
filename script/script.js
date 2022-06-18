//1

function calcSumm(number1, number2, ...other) {
    console.log(other);
    return number1 + number2;

};

console.log(calcSumm(1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 4));

//2

let drivers = ["Dominic", "Brian", "Letty", "Roman"];
let antagonists = ["Deckard", "Luke"];

let sumConcat = drivers.concat(antagonists);
console.log(sumConcat);

// Array.prototype.push.apply(drivers, antagonists);

let sumPush = [...drivers];
sumPush.push.apply(sumPush, antagonists);
console.log(sumPush);

let sumSpred = [...drivers, ...antagonists];
console.log(sumSpred);

let sumSplice = [];
sumSplice.splice(0, 0, ...drivers, ...antagonists);
console.log(sumSplice);

let sumForEach = [];
drivers.forEach(item => {
    sumForEach.push(item)
});
antagonists.forEach(item => {
    sumForEach.push(item)
});
console.log(sumForEach);

//3

let cars = ["Jeep", "Jeep", "Kia", "BMW", "BMW", "BMW", "Renault"];
let filteredCars = [...new Set(cars)];
console.log(filteredCars);

//4

function showCauntry(country) {
    return function(city) {
        return [country, city];
    };
};

let country = showCauntry('France');
console.log(country('Paris'));

5 //

const time = 1654420481877;

let newDate = Date.now();
console.log(new Date(1654420481877));

let date = new Date()
console.log(date.getFullYear(1654420481877) + '/' + date.getMonth(1654420481877) + '/' + date.getDate(1654420481877) + '(' + date.getMinutes(1654420481877) + ":" + date.getSeconds(1654420481877) + ')');