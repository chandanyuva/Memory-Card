/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Loader } from "./Loader";
import { Card } from "./Card";

function GameBoard(props) {
    const loader = Loader();

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const response = await fetch(
                "https://picsum.photos/v2/list?page=2&limit=10"
            );
            const data = await response.json();
            const urlData = await data.map((ele) => {
                return { url: ele.download_url, key: uuidv4(), clicked: false };
            });
            setImages(urlData);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching images from API: ", error);
        }
    };

    const handleClick = (e) => {
        if (props.currentScoreState.currentScore >= 9) {
            alert("You won!!!");
        }
        const index = images.findIndex((item) => item.key === e.target.id);
        if (images[index].clicked === false) {
            console.log(index, "in if");
            props.currentScoreState.setCurrentScore(
                (prevScore) => prevScore + 1
            );
            setImages((oldArray) => {
                let newArray = oldArray.map((img) => {
                    return img.key === e.target.id
                        ? { ...img, clicked: true }
                        : img;
                });
                let shuffledArray = shuffleArray(newArray);
                return shuffledArray;
            });
        } else {
            console.log(index, "in else");
            resetRound();
        }
    };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const resetRound = () => {
        console.log("reset");
        props.currentScoreState.setCurrentScore(0);
        setImages((prevArr) => {
            return prevArr.map((item) => {
                return { ...item, clicked: false };
            });
        });
    };

    useEffect(() => {
        if (
            props.currentScoreState.currentScore >
            props.bestScoreState.bestScore
        )
            props.bestScoreState.setBestScore(
                props.currentScoreState.currentScore
            );
    }, [props.currentScoreState.currentScore]);

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
        </div>
    );
}

export { GameBoard };
