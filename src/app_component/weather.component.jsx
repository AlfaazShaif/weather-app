import React from 'react';

const Weather = (props) => {
    return (
        <div className="container text-light">
            <div className="cards pt-4">
                <h1>
                    {props.city}
                </h1>
                <h5 className="py-4">
                    <i className={`wi ${props.weatherIcon} display-1`} />
                </h5>

                {props.temp_celsius ? (<h1 className="py-2">{props.temp_celsius}&deg;</h1>) : null}

                {/*show max and min temp */}
                {minMaxTemp(props.temp_min, props.temp_max)}

                <h4 className="py-3">
                    {props.description}
                </h4>

            </div>
        </div>
    );
}

function minMaxTemp(min, max) {
    if (min && max) {
        return (
            <h3>
                <span className="px-4">
                  low  {min}&deg;
                </span>
                <span className="px-4">
                  high  {max}&deg;
                </span>
            </h3>
        );
    }

}

export default Weather;