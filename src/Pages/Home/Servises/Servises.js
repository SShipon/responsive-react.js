import React, { useEffect, useState } from 'react';
import Servise from '../Servise/Servise';
import './Servises.css'

const Servises = () => {
    const [services, SetServices]= useState([])
    useEffect(() =>{
        fetch('servises.json')
        .then(res=> res.json())
        .then(data => SetServices(data));
    },[])
    return (
        <div className="services-container">
          {
           services.map(service =><Servise
           key={service.id}
           service = {service}
           ></Servise>)   
          }  
        </div>
    );
};

export default Servises;