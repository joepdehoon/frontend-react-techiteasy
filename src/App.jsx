
import { inventory, bestSellingTv } from "./constants/inventory.js";


import getTotalSold from "./helpers/getTotalSold.js";
import getTotalStock from "./helpers/getTotalStock.js";
import getRemainingStock from "./helpers/getRemainingStock.js";
import getTvName from "./helpers/getTvName.js";
import getTvPrice from "./helpers/getTvPrice.js";
import getTvSizes from "./helpers/getTvSizes.js";


function App() {
  const totalSold = getTotalSold(inventory);
  const totalStock = getTotalStock(inventory);
  const remainingStock = getRemainingStock(inventory);
  const tvName = getTvName(bestSellingTv);
  const tvPrice = getTvPrice(bestSellingTv.price);
  const tvSizes = getTvSizes(bestSellingTv.availableSizes);


    console.log("Totaal verkocht:", totalSold);
  console.log("Totaal ingekocht:", totalStock);
  console.log("Nog te verkopen:", remainingStock);
  console.log(tvName);
  console.log(tvPrice);
  console.log(tvSizes);


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

          <div>
              <h2>Bestverkochte televisie</h2>

              <img
                  src={bestSellingTv.sourceImg}
                  alt={tvName}
                  width="250"
              />

              <h3>{tvName}</h3>

              <p>{tvPrice}</p>

              <p>{tvSizes}</p>
          </div>
      </div>
  );
}

export default App;
