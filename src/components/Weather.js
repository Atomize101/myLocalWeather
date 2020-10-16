
import React from 'react'

const Weather = ({description, city, country, error, temperature}) => {
    
    // The && acts as a logic check to make sure the data is true before being passed
    return (
        <div>
            {city && country && <p>{city}, {country}</p>}
            {temperature && <p>{temperature}</p>}
            {description && <p> {description}</p>}
            {error && <p>{error}</p>}
        </div>
    )
}

export default Weather; 