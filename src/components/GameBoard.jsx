import { Card } from "./Card";

function GameBoard() {
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                margin: "4px",
                padding: "4px",
                display: "grid",
                gridTemplateColumns: "repeat(1fr,6)",
                gridTemplateRows: "1fr 1fr",
                gridAutoFlow: "column dense",
            }}
        >
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    );
}

export { GameBoard };
