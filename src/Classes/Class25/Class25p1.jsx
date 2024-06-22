import React,{useState} from 'react';



function Class25p1(props) {

    const [Count,setCount] = useState(0);

    const handleIncrement = () => {
        setCount((Count) => Count + 1);
        setCount((Count) => Count + 1);
        
        setCount((Count) => {
           return  Count + 1 ;

        });

    };
 

    return (
        <div>

               <p>{Count}</p>
               <button onClick={handleIncrement}>+</button>
             
        </div>
    );
}

export default Class25p1;