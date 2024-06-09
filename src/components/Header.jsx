/* eslint-disable react/prop-types */
function Header(props) {
    console.info(
        `BS:${props.scores.bestScore} CS:${props.scores.currentScore}`
    );
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                margin: "4px",
                padding: "4px",
            }}
        >
            Current Score: {props.scores.currentScore} | Best Score:
            {props.scores.bestScore}
        </div>
    );
}

export { Header };
