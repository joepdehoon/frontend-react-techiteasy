function getTotalStock(inventory) {
    return inventory.reduce((total, tv) => {
        return total + tv.originalStock;
    }, 0);
}

export default getTotalStock;