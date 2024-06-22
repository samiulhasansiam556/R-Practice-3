import React, { useEffect, useState } from 'react';

function Class40p1c1(props) {

    const [user,setUser] = useState(null)


     useEffect(()=>{


          setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(data => setUser(data))
            console.log(user);
          },1000);
       

     },[])



     

    return (
        <div>
        
             {
                user && user.map((item,index)=>{
                  return  <p key={index}>{item.title}{item.id}</p>
               
                })
             }
             


        </div>
    );
}

export default Class40p1c1;


