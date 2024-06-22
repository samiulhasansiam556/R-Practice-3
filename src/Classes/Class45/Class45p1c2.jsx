import React from 'react';

function Class45p1c2(props) {
    const handleChange = (e) => {
        props.searchCountry(e);
    };

    return (
        <div>
            <input onChange={handleChange} type="text" />
        </div>
    );
}

export default Class45p1c2;










// import React from 'react';

// function Class45p1c2(props) {

//     const handleChange = (e) =>{
//         props.searchCountry(e);
//     }
//     return (
//         <div>
//               <input onChange={(e)=> handleChange(e)} type="text" />
//         </div>
//     );
// }

// export default Class45p1c2;