// import { useEffect, useState } from "react";

import { Loader } from "./Loader";
import { Grid } from "./Grid";

function GameBoard() {
    let newLoader = Loader();

    // use react query lib
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
            {Grid ? Grid : newLoader}
            {/* <button onClick={handleClick}>shuffle</button> */}
        </div>
    );
}

export { GameBoard };
