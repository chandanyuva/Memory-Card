/* eslint-disable react/prop-types */
import "../styles/Card.css";

function Card(props) {
    return (
        <div className="cardContainer">
            <div className="box">
                <img src={props.url} alt="" />
            </div>
        </div>
    );
}

export { Card };
