import { useEffect, useState } from "react";
import { Card } from "./Card";
import { ImageAPI } from "./ImageAPI";
import { Loader } from "./Loader";

function GameBoard() {
    const newLoader = Loader();
    let [imageArray, setImageArray] = useState([]);
    // let imageArray = [];

    let [grid, setGrid] = useState(imageArray);
    // console.log(grid);

    // Fisher-Yates Sorting Algorithm
    const shuffle = () => {
        console.log("shuffling");
        let array = imageArray;
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        setImageArray(array);
        // setGrid(imageArray); shuffles 3 times
    };

    useEffect(() => {
        
        async function getCardsFromApi() {
            const images = await ImageAPI();
            // console.log(images);
            setImageArray(
                await images.map((ele) => {
                    return <Card url={ele.url} key={ele.key}></Card>;
                })
            );
            setGrid(imageArray);
        }
        getCardsFromApi();
    }, [imageArray]);
    // console.log(imageArray.length);
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                margin: "4px",
                padding: "2px",
                display: "grid",
                gridTemplateColumns: "repeat(1fr,6)",
                gridTemplateRows: "1fr 1fr",
                gridAutoFlow: "column dense",
                alignItems: "center",
                justifyItems: "center",
            }}
        >
            {imageArray.length === 0 ? newLoader : grid}
            <button onClick={shuffle}>shuffle</button>
        </div>
    );
}

export { GameBoard };
