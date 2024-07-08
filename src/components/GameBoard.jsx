import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Loader } from "./Loader";
import { Card } from "./Card";

function GameBoard() {
    const loader = Loader();

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [grid, setGrid] = useState(null);

    useEffect(() => {
        fetchImages();
    }, []);

    const handleClick = (e) => {
        console.log(e);
        const ifClicked = (currentId) => {
            console.log(currentId)
        };

        const shuffled = [...images].sort(() => Math.random() - 0.5);
        setImages(shuffled);
    };

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
