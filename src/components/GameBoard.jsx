import { useEffect, useState } from "react";
import { Card } from "./Card";
import { ImageAPI } from "./ImageAPI";
import { Loader } from "./Loader";

function GameBoard() {
    const newLoader = Loader();
    let [imageArray, setImageArray] = useState([]);

    useEffect(() => {
        async function getCardsFromApi() {
            const images = await ImageAPI();
            // console.log(images);
            setImageArray(
                await images.map((ele) => {
                    return <Card url={ele.url} key={ele.key}></Card>;
                })
            );
        }
        getCardsFromApi();
    }, []);
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
            {imageArray.length === 0 ? newLoader : imageArray}
        </div>
    );
}

export { GameBoard };
