

import React from 'react';
import Class7p2c1 from './Class7p2c1';
import './Class7p2.css';
import Data from './Class7p2.json';

// console.log(Data)

function Class7p2() {




    //usinf for loop

    // let items = [];

    // for(let x=0;x<Data.length;x++){
    //      items.push(<Class7p2c1 name={Data[x].name} age={Data[x].age} city={Data[x].city}/>
    //     )


    // }



    //usinf for loop
    // let items = [];
    // items = Data.map((item) => <Class7p2c1 name={item.name} age={item.age} city={item.city}/>);


 
     

    return (
        <div>
           
            <h2 className='student-List'>Student List For Mapping</h2>
        
            <div className="div2">
              
                  {Data.map((item,index) => <Class7p2c1 key={index} name={item.name} age={item.age} city={item.city}/>)}
              
                 
               
            </div>
               
            
        </div>
    );
}

export default Class7p2;