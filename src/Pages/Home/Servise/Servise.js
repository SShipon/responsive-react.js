import React from 'react';
import './Servise.css'

const Servise = ({service}) => {
    const {name,price,description,images} = service;
    return (
     <div className="services-area">
        <div>
            <img className="images-size" src={images} alt="" /> 
        </div>
           
          <div>
              <h2>Name:{name}</h2>
              <h3>Price:{price}</h3>
              <p>Description: {description}</p>
          </div>
     </div>
    );
};

export default Servise;