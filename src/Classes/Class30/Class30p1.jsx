

import React,{useState} from 'react';
import Class30p1c1 from './Class30p1c1';


function Class30p1(props) {

    const [p,setP] = useState(0)

    let data1= "I am from Parent Data";

     const Method = (data3)=>{
        setP(data3)
        // console.log(props)           
     }


    return (
        <div>

                
         
             <p>{p}</p>

              <Class30p1c1 parentData={data1}  ChildData={Method} />
        </div>
    );
}

export default Class30p1;