/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Loader } from "./Loader";
import { Card } from "./Card";

function GameBoard(props) {
    // console.log(props);
    const loader = Loader();

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [gameStatus, setGameStatus] = useState(true);
    // const [grid, setGrid] = useState(null);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const response = await fetch(
                "https://picsum.photos/v2/list?page=2&limit=10"
            );
            const data = await response.json();
            // console.log(data);
            const urlData = await data.map((ele) => {
                return { url: ele.download_url, key: uuidv4(), clicked: false };
            });
            // console.log(urlData);
            setImages(urlData);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching images from API: ", error);
        }
    };

    const handleClick = (e) => {
        if (props.getScoresProp.currentScore > 9) {
            setGameStatus(false);
            prompt("you won!!!");
            props.setScoresProp.setCurrentScore(0);
        }
        // console.log(e);
        images.map((img) => {
            if (img.clicked === true && img.key === e) {
                console.log("already clicked");
                setGameStatus(false);
                console.log(images);
            } else if (img.key === e) {
                // console.log(img,e);
                img.clicked = true;
                props.setScoresProp.setCurrentScore((cur) => {
                    return (cur += 1);
                });
                console.log(img);
                console.log(images);
            }
        });

        const shuffled = [...images].sort(() => Math.random() - 0.5);
        setImages(shuffled);
    };

    useEffect(() => {
        gameLoop();
    }, [gameStatus]);
    const gameLoop = () => {
        if (gameStatus) {
            console.log("running GameLoop");
            props.setScoresProp.setCurrentScore(0);
        } else {
            console.log("GameLoop not running");
            props.setScoresProp.setCurrentScore(0);
            props.getScoresProp.currentScore > props.getScoresProp.bestScore
                ? () => {
                      props.setScoresProp.setBestScore(
                          props.getScoresProp.currentScore
                      );
                      console.log("updating");
                  }
                : console.log("not updating best score");
            setGameStatus(true);
        }
    };

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
            {loading ? (
                loader
            ) : (
                <>
                    {images.map((ele) => {
                        return (
                            <Card
                                img={ele}
                                key={ele.key}
                                handleClick={handleClick}
                            ></Card>
                        );
                    })}
                </>
            )}
            {/* <button onClick={shuffleImages}>shuffle</button> */}
        </div>
    );
}

export { GameBoard };
