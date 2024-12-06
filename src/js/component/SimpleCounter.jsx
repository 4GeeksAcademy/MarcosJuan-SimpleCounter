import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export const SimpleCounter = ({ digitOne, digitTwo, digitThree, digitFour }) => {
    return (
        <div className="counter">
            <div className="clock">
                <i className="fa-regular fa-clock"></i>
            </div>
            <div className="four">{digitFour}</div>
            <div className="three">{digitThree}</div>
            <div className="two">{digitTwo}</div>
            <div className="one">{digitOne}</div>
        </div>
    );
};

SimpleCounter.propTypes = {
    digitFour: PropTypes.number.isRequired,
    digitThree: PropTypes.number.isRequired,
    digitTwo: PropTypes.number.isRequired,
    digitOne: PropTypes.number.isRequired,
};

let counter = 0;

setInterval(function () {
    const four = Math.floor(counter / 1000) % 10;
    const three = Math.floor(counter / 100) % 10;
    const two = Math.floor(counter / 10) % 10;
    const one = Math.floor(counter / 1) % 10;

    ReactDOM.createRoot(document.getElementById('app')).render(
        <SimpleCounter
            digitOne={one}
            digitTwo={two}
            digitThree={three}
            digitFour={four}
        />
    );

    counter++;
}, 1000);