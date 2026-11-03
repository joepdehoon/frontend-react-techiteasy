
function getTotalSold(inventory) {
    return inventory.reduce((total, tv) => {
        return total + tv.sold;
    }, 0);
}

export default getTotalSold;

