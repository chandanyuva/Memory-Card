import { Card } from "./Card";
function createGrid(cards) {
    // console.log(cards);
    let list = cards.map((ele) => {
        return <Card data={ele} key={cards.indexOf(ele)}></Card>;
    });
    // console.log(list);
    return <>{list}</>;
}

export { createGrid };
