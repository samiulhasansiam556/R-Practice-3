

import React from 'react';
import './Class7p1.css'
import Class7p1c1 from './Class7p1c1';




function Class7p1(props) {
    
    return (
        
        <div>
            <h2 className='head'>Students List</h2>
              
               <Class7p1c1 Name="Samiul"Depermant="CSE" Univarsity="DIU"/>
               <Class7p1c1 Name="Tanim"Depermant="CSE" Univarsity="DIU"/>
               <Class7p1c1 Name="Noman"Depermant="CSE" Univarsity="DIU"/>
        </div>
    );
}

export default Class7p1;