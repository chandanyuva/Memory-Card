/* eslint-disable react/prop-types */
function Header(props) {
    return (
        <div
            style={{
                fontFamily: "sans-serif",
                fontWeight: "bold",
                margin: "10px",
                width: "100%",
                height: "100%",
                // margin: "4px",
                padding: "4px",
                display: "flex",
                flexDirection: "column",
                alignContent: "space-around",
                justifyContent: "center",
                alignItems: "center",
                backdropFilter: "blur(5px)",
            }}
        >
            <p
                style={{
                    fontSize: "1.8em",
                }}
            >
                Memory Cards Game
            </p>
            <p>
                Current Score: {props.scores.currentScore} | Best Score:
                {props.scores.bestScore}
            </p>
            <p
                style={{
                    fontWeight: "normal",
                }}
            >
                Select all 10 images without repeating to win
            </p>
        </div>
    );
}

export { Header };
