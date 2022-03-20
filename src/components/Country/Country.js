import React from 'react';
import './Country.css'

const Country = (props) => {
    const {area, region, population, name, flags} = props.country
    return (
        <div className='country bg-warning'>
            <h2>Country name: {name.common}</h2>
            <p>Population: {population}</p>
            <p><small>Area: {area}</small></p>
            <p><small>Region: {region}</small></p>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;