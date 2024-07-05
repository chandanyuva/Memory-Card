/* eslint-disable react/prop-types */
import "../styles/Card.css";

function Card(props) {
    // console.log(props);
    return (
        <div className="cardContainer" key={props.key}>
            <div className="box">
                <img src={props.url} alt="image" />
                {/* <p>{props.data}</p> */}
            </div>
        </div>
    );
}

export { Card };
