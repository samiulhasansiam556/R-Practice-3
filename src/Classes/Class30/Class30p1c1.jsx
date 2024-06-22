

import React from 'react';


function Class30p1c1(props) {

    let data2= "I am from Child Data";
        
    props.ChildData(data2);


    return (


        <div>
            

            <p>{props.parentData}</p>
        </div>
    );
}

export default Class30p1c1;