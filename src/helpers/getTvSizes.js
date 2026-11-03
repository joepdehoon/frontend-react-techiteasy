
function getTvSizes(availableSizes) {
    return availableSizes.map((size) => {
        const centimeters = Math.round(size * 2.54);

        return `${size} inch (${centimeters} cm)`;
    }).join(" | ");
}

export default getTvSizes;
