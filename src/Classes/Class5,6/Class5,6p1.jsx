import React from 'react';
import './Class5,6p1.css'

function Class2(props) {



    const inline = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        textAlign: 'center'

    };
 

    return (
        <div>
            <h1>Here i will explore how we have to use CSS in JSX</h1>
            
            {/* inline  */}

              <p style={{color:'blue',fontSize:'20px' ,textAlign:"center",}}>I am inline css</p>
              <p style={inline}>I am also inline</p>
            {/* inline  */}





            {/* css file */}

            <p className='cssFile'>I am degined by another css file.for this first i have import this file </p>
            
            
            
            {/* css file */}


        </div>
    );
}

export default Class2;