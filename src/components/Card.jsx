/* eslint-disable react/prop-types */
import "../styles/Card.css";

function Card(props) {
    return (
        <div
            className="cardContainer"
            onClick={(e) => {
                props.handleClick(e);
            }}
        >
            <div className="box">
                <img src={props.img.url} alt="image" id={props.img.key} />
                <p>{props.img.clicked}</p>
            </div>
        </div>
    );
}

export { Card };
