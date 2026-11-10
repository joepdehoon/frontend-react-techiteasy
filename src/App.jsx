
import { inventory, bestSellingTv } from "./constants/inventory.js";

import getTotalSold from "./helpers/getTotalSold.js";
import getTotalStock from "./helpers/getTotalStock.js";
import getRemainingStock from "./helpers/getRemainingStock.js";
import getTvName from "./helpers/getTvName.js";
import getTvPrice from "./helpers/getTvPrice.js";
import getTvSizes from "./helpers/getTvSizes.js";

import checkIcon from "./assets/check.png";
import minusIcon from "./assets/minus.png";

import showOutcomeInConsole from "./constants/oefenbestand.js";
function App() {

    function handleMostSoldClick() {
        const sortedBySold = [...inventory].sort((a, b) => {
            return b.sold - a.sold;
        });

        console.log("Meest verkocht eerst:");
        console.log(sortedBySold);
    }
    function handleCheapestClick() {
        const sortedByPrice = [...inventory].sort((a, b) => {
            return a.price - b.price;
        });

        console.log("Goedkoopste eerst:");
        console.log(sortedByPrice);
    }


    function handleSportClick() {
        const sortedByRefreshRate = [...inventory].sort((a, b) => {
            return b.refreshRate - a.refreshRate;
        });

        console.log("Meest geschikt voor sport eerst:");
        console.log(sortedByRefreshRate);
    }
    function handleLargestScreenClick() {
        const sortedByLargestSize = [...inventory].sort((a, b) => {
            return Math.max(...b.availableSizes) - Math.max(...a.availableSizes);
        });

        console.log("Grootste schermgroottes eerst:");
        console.log(sortedByLargestSize);
    }
    showOutcomeInConsole();

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
            <h2>Alle merken</h2>
            <div>
                <h2>Alle televisies</h2>

                {inventory.map((tv) => {
                    const tvName = getTvName(tv);
                    const tvPrice = getTvPrice(tv.price);
                    const tvSizes = getTvSizes(tv.availableSizes);

                    return (
                        <div key={tv.type}>
                            <img
                                src={tv.sourceImg}
                                alt={tvName}
                                width="250"
                            />
                            {tv.sold === tv.originalStock && (
                                <p>UITVERKOCHT</p>
                            )}

                            <h3>{tvName}</h3>
                            <p>{tvPrice}</p>
                            <p>{tvSizes}</p>

                            <ul>
                                {Object.entries(tv.options).map(([option, value]) => {
                                    return (
                                        <li key={option}>
                                            <img
                                                src={value ? checkIcon : minusIcon}
                                                alt={value ? "Aanwezig" : "Niet aanwezig"}
                                                width="20"
                                            />
                                            {option}
                                        </li>
                                    );
                                })}
                            </ul>


                        </div>
                    );
                })}
            </div>
            <ul>
                {inventory.map((tv) => (
                    <li key={tv.type}>{tv.brand}</li>
                ))}
            </ul>
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

                <div>
                    <p>
                        <img src={checkIcon} alt="Aanwezig" width="20" />
                        Wifi
                    </p>

                    <p>
                        <img src={minusIcon} alt="Niet aanwezig" width="20" />
                        Speech
                    </p>

                    <p>
                        <img src={checkIcon} alt="Aanwezig" width="20" />
                        HDR
                    </p>

                    <p>
                        <img src={checkIcon} alt="Aanwezig" width="20" />
                        Bluetooth
                    </p>

                    <p>
                        <img src={minusIcon} alt="Niet aanwezig" width="20" />
                        Ambilight
                    </p>
                </div>
            </div>

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
                <button onClick={handleLargestScreenClick}>
                    Grootste schermgroottes eerst
                </button>
            </div>
        </div>
    );
}

export default App;
