import { Card } from "./Card";
import { ImageAPI } from "./ImageAPI";

const imageArray = await ImageAPI();
// console.log(imageArray);
let cards = await imageArray.map((ele) => {
    return <Card url={ele.url} key={ele.key}></Card>;
});
// console.log(cards);
function GameBoard() {
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
            }}
        >
            {cards}
        </div>
    );
}

export { GameBoard };
