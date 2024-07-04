import { useEffect, useState } from "react";
// import { ImageAPI } from "./ImageAPI";
import { Loader } from "./Loader";
import { Card } from "./Card";
import { v4 as uuidv4 } from "uuid";

function GameBoard() {
    // "use strict";
    const newLoader = Loader();
    let [imageArray, setImageArray] = useState(null);
    // let imageArray = [];

    let [grid, setGrid] = useState(imageArray);
    // console.log(grid);

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    // async function getCardsFromApi() {
    //     const images = await ImageAPI();
    //     // console.log(images);
    //     setImageArray(
    //         await images.map((ele) => {
    //             return (
    //                 <Card
    //                     url={ele.url}
    //                     key={uuidv4()}
    //                     shuffleFun={handleClick}
    //                 ></Card>
    //             );
    //         })
    //     );
    //     setGrid(() => imageArray);
    // }
    // getCardsFromApi();
    useEffect(() => {
        const handleClick = () => {
            let currentArray = imageArray;
            let shuffledArray = shuffle(currentArray);
            setImageArray(shuffledArray);
        };
        fetch("https://picsum.photos/v2/list?page=2&limit=10")
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setImageArray(
                    json.map((ele) => {
                        return (
                            <Card
                                url={ele.url}
                                key={uuidv4()}
                                shuffleFun={handleClick}
                            ></Card>
                        );
                    })
                );
            })
            .catch((error) => console.error(error));
    }, [imageArray]);
    setGrid(imageArray);
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
                // gridTemplateColumns: "1fr",
                gridTemplateRows: "1fr 1fr",
                gridAutoFlow: "column dense",
                alignItems: "center",
                justifyItems: "center",
            }}
        >
            {imageArray ? grid : newLoader}
            {/* <button onClick={handleClick}>shuffle</button> */}
        </div>
    );
}

export { GameBoard };
