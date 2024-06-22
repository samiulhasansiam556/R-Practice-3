import React from 'react';
import {useState} from 'react';

function Class24p1(props) {

    const [Count,setCount] = useState(0)


    return (
        <div>
              
              <p style={{fontSize:'38px', textAlign:'center', color:'blue', marginTop:'80px'}}>{Count}</p>
              <button style={{fontSize:'32px', textAlign:'center', color:'white',padding:'6px', marginLeft:'45%', backgroundColor:'blue'}} onClick={()=>setCount(Count+1)}>Click me</button>
              
        </div>
    );
}

export default Class24p1;