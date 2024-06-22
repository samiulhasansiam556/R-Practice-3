
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Class45p1c1c1 from './Class45p1c1c1';

function Class45p1c1(props) {

    const {countries} = props
    return (
        <section>
            {countries.length > 0 ? (
                countries.map((country) => {
                    const countryNew = { ...country, id: uuidv4() };
                    return <Class45p1c1c1 key={countryNew.id} country={countryNew}
                    onRemoveCountry={props.onRemoveCountry} />;
                })
            ) : (
                <p>No countries available</p>
            )}
        </section>
    );
}

export default Class45p1c1;



// import React from 'react';
// import {v4 as uuidv4} from 'react'
// import Class45p1c1c1 from './Class45p1c1c1';

// function Class45p1c1(props) {
        
 
//     return (
//         <section>
//             {props.countries.map((country)=>{

//                 const countryNew = {country,id:uuidv4()};

//                 return <Class45p1c1c1  {...countryNew} kew={countryNew.id} />

//             })}

           
//         </section>
//     );
// }

// export default Class45p1c1;