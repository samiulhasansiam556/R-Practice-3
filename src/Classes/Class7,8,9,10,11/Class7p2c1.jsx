
import React from 'react';
import './Class7p2.css'


function Class7p2c1(props) {

    const {name,age,city} = props;

    return (
        <div className='div3'>
             
            <h2 className='Name'>{name}</h2>
            <h2 className='Depermant'>{age}</h2>
            <h2 className='Univarsity'>{city}</h2>

             
        </div>
    );
}

export default Class7p2c1;