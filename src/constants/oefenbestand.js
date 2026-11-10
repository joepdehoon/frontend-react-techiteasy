import { inventory } from './inventory.js';

function showOutcomeInConsole() {

    const tvTypes = inventory.map((tv) => {
        return tv.type;
    });

    console.log('Uitkomst opdracht 1a:');
    console.log(tvTypes);


    const soldOutTvs = inventory.filter((tv) => {
        return tv.sold === tv.originalStock;
    });

    console.log('Uitkomst opdracht 1b:');
    console.log(soldOutTvs);
}

export default showOutcomeInConsole;

//opdracht 1c
const specificTv = inventory.find((tv) => {
    return tv.type === 'NH3216SMART';
});

console.log('Uitkomst opdracht 1c:');
console.log(specificTv);


// Opdracht 1d
const suitableForSports = inventory.map((tv) => {
    return {
        name: `${tv.brand} ${tv.name}`,
        suitable: tv.refreshRate >= 100
    };
});

console.log('Uitkomst opdracht 1d:');
console.log(suitableForSports);

// Opdracht 1e
const largeScreenTvs = inventory.filter((tv) => {
    return tv.availableSizes.some((size) => {
        return size >= 65;
    });
});

console.log('Uitkomst opdracht 1e:');
console.log(largeScreenTvs);

// Opdracht 1f
const ambilightTvs = inventory.filter((tv) => {
    return tv.options.ambilight === true;
});

console.log('Uitkomst opdracht 1f:');
console.log(ambilightTvs);