/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Loader } from "./Loader";
import { Card } from "./Card";

function GameBoard(props) {
    // console.log(props);
    // const { currentScoreState, bestScoreState } = props;s
    // console.log(props.currentScoreState.setCurrentScore);

    // props.currentScoreState.setCurrentScore(11)
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
        // console.log(e);
        const index = images.findIndex((item) => item.key === e.target.id);
        console.log(images[index].clicked);
        if (images[index].clicked === false) {
            console.log(index, "in if");
            // Increase the round score
            props.currentScoreState.setCurrentScore(
                (prevScore) => prevScore + 1
            );
            // Mark the targeted image as clicked
            setImages((prevArr) => {
                // console.log(prevArr);
                return shuffleArray(
                    prevArr.map((item) => {
                        // console.log(
                        //     item.key === e.target.id
                        //         ? { ...item, clicked: true }
                        //         : item
                        // );
                        return item.key === e.target.id
                            ? { ...item, clicked: false }
                            : item;
                    })
                );
            });
            // console.log(images);
        } else {
            console.log(index, "in else");
            resetRound();
        }
        // const shuffled = [...images].sort(() => Math.random() - 0.5);
        // setImages(shuffled);
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
        // Reset round score
        props.currentScoreState.setCurrentScore(0);
        // Change all images back to unclicked
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
