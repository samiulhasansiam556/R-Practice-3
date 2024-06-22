import React, { useEffect, useState } from 'react';

function Class32p1c1(props) {

 const [count1,setCount1] = useState(0)
 const [count2,setCount2] = useState(0)



      useEffect(()=>{
        console.log("Class32p1c1 mounted");
      },[count1])

    return (
        <div>
              <p>{count1}</p>
              <button onClick={()=>setCount1(count1+1)}>Increment</button>
             
              <p>{count2}</p>
              <button onClick={()=>setCount2(count2+1)}>Increment</button>
               
        </div>
    );
}

export default Class32p1c1;