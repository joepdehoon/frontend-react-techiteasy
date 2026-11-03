
import { inventory } from "./constants/inventory.js";

import getTotalSold from "./helpers/getTotalSold.js";
import getTotalStock from "./helpers/getTotalStock.js";
import getRemainingStock from "./helpers/getRemainingStock.js";

function App() {
  const totalSold = getTotalSold(inventory);
  const totalStock = getTotalStock(inventory);
  const remainingStock = getRemainingStock(inventory);

  console.log("Totaal verkocht:", totalSold);
  console.log("Totaal ingekocht:", totalStock);
  console.log("Nog te verkopen:", remainingStock);

  return (
      <div>
        <h1>Tech It Easy Dashboard</h1>

        <p style={{ color: "green" }}>
          Totaal verkocht: {totalSold}
        </p>

        <p style={{ color: "blue" }}>
          Totaal ingekocht: {totalStock}
        </p>

        <p style={{ color: "red" }}>
          Nog te verkopen: {remainingStock}
        </p>
      </div>
  );
}

export default App;
