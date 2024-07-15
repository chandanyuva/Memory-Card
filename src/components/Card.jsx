/* eslint-disable react/prop-types */
import "../styles/Card.css";

function Card(props) {
    // console.log(props);
    return (
        <div
            className="cardContainer"
            onClick={(e) => {
                // props.handleClick(props.img.key);
                props.handleClick(e);
            }}
        >
            <div className="box">
                <img src={props.img.url} alt="image" id={props.img.key} />
                {/* <p>{props.data}</p> */}
            </div>
        </div>
    );
}

export { Card };
