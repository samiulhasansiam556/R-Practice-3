import React,{useState} from 'react';

function Class26p1(props) {

        const handaleParent = (event =>{
            event.stopPropagation();
            console.log("Parent:",event)
        })
        const handaleClild = (event =>{
            event.stopPropagation();
            console.log("Child:",event)
        })

    return (


        <div onClick={handaleParent}>         
                <h2>Welcome</h2>
               
               <button onClick={handaleClild}>sert</button>
        </div>
    );
}

export default Class26p1;