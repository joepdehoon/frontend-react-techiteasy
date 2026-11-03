
import getTotalStock from "./getTotalStock.js";
import getTotalSold from "./getTotalSold.js";

function getRemainingStock(inventory) {
    return getTotalStock(inventory) - getTotalSold(inventory);
}

export default getRemainingStock;