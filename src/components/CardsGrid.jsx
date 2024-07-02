import { Card } from "./Card";

async function CardsGrid(images) {
    let cardGrid = [];
    cardGrid = await images.map((ele) => {
        return <Card url={ele.url} key={ele.key}></Card>;
    });
    let compCardGrid = [...(await cardGrid)];
    // console.log(compCardGrid);
    return compCardGrid;
}

export { CardsGrid };
