import "./App.css";
import { Header } from "./components/Header.jsx";
import { GameBoard } from "./components/GameBoard.jsx";
import { useState } from "react";
import "./styles/reset.css";

function App() {
    "use strict";
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    return (
        <>
            <div
                style={{
                    display: "grid",
                    alignItems: "center",
                    justifyContent: "center",
                    gridTemplateRows: "1fr 90vh",
                    gridTemplateColumns: "90vw",
                    gap: "4px",
                    padding: "4px",
                }}
            >
                <Header scores={{ bestScore, currentScore }}></Header>
                <GameBoard
                    setScoresProp={{ setBestScore, setCurrentScore }}
                    getScoresProp={{bestScore,currentScore}}
                ></GameBoard>
            </div>
        </>
    );
}

export default App;
