
import { inventory, bestSellingTv } from "./constants/inventory.js";


import getTotalSold from "./helpers/getTotalSold.js";
import getTotalStock from "./helpers/getTotalStock.js";
import getRemainingStock from "./helpers/getRemainingStock.js";
import getTvName from "./helpers/getTvName.js";
import getTvPrice from "./helpers/getTvPrice.js";
import getTvSizes from "./helpers/getTvSizes.js";
import checkIcon from "./assets/check.png";
import minusIcon from "./assets/minus.png";

function App() {
    function handleMostSoldClick() {
        console.log("Meest verkocht eerst");
    }

    function handleCheapestClick() {
        console.log("Goedkoopste eerst");
    }

    function handleSportClick() {
        console.log("Meest geschikt voor sport eerst");
    }

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

            <p style={{color: "green"}}>
                Totaal verkocht: {totalSold}
            </p>

            <p style={{color: "blue"}}>
                Totaal ingekocht: {totalStock}
            </p>

            <p style={{color: "red"}}>
                Nog te verkopen: {remainingStock}
            </p>

            {/* Productweergave */}
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

                {/* Opties */}
                <div>
                    <p>
                        <img src={checkIcon} alt="Aanwezig" width="20"/>
                        Wifi
                    </p>

                    <p>
                        <img src={minusIcon} alt="Niet aanwezig" width="20"/>
                        Speech
                    </p>

                    <p>
                        <img src={checkIcon} alt="Aanwezig" width="20"/>
                        HDR
                    </p>

                    <p>
                        <img src={checkIcon} alt="Aanwezig" width="20"/>
                        Bluetooth
                    </p>

                    <p>
                        <img src={minusIcon} alt="Niet aanwezig" width="20"/>
                        Ambilight
                    </p>
                </div>
            </div>

            {/* Sorteerknoppen */}
            <div>
                <button onClick={handleMostSoldClick}>
                    Meest verkocht eerst
                </button>

                <button onClick={handleCheapestClick}>
                    Goedkoopste eerst
                </button>

                <button onClick={handleSportClick}>
                    Meest geschikt voor sport eerst
                </button>
            </div>

        </div>
    );
}

export default App;
