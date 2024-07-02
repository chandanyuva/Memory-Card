// import { useEffect, useState } from "react";
import { ImageAPI } from "./ImageAPI";
import { Loader } from "./Loader";
import { useEffect, useState } from "react";
import { Shuffle } from "../utilFunctions/Shuffle";
// import { CardGrid } from "./CardGrid";

import { createGrid } from "./Grid";
// import { CardGrid } from "./CardsGridGen";

function GameBoard(props) {
    // const { setScoresProp, gameStatusPrp } = props;
    const showLoader = Loader();
    // let sampleData = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let [imagesLoaded, setImagesLoaded] = useState(false);
    let [imageUrls, setImageUrls] = useState([]);
    async function getImages() {
        let urls = await ImageAPI();
        setImageUrls(await urls);
    }
    useEffect(() => {
        getImages();
        return setImagesLoaded(true);
    }, []);

    console.log(imagesLoaded);
    // console.log(cards);
    const [grid, setGrid] = useState(createGrid(imageUrls));
    // console.log(grid);
    // setCardsArray();
    function shuffleImageFun() {
        let shuffledData = Shuffle(imageUrls);
        setGrid(createGrid(shuffledData));
    }
    // console.log(grid);
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                margin: "4px",
                padding: "2px",
                display: "grid",
                // gridTemplateColumns: "repeat(1fr,6)",
                gridTemplateColumns: "1fr",
                gridTemplateRows: "1fr 1fr",
                gridAutoFlow: "column dense",
                alignItems: "center",
                justifyItems: "center",
            }}
        >
            {grid}
            {/* {imagesLoaded ? showLoader : grid} */}
            <button onClick={shuffleImageFun}>shuffle</button>
        </div>
    );
}

export { GameBoard };
