// import React, { useState } from 'react';

// function Class22p1(props) {

//     const [State,setState] = useState("")


//     const changeHandle = (e)=>{
//           setState(e.target.value);



          
//      };

//     return (
//         <div>

//                  <input type='text' onChange={changeHandle}/>
//                  <p>{State}</p>
            
//         </div>
//     );
// }

// export default Class22p1;






// import React, { useState } from 'react';

// function Class22p1(props) {
//     // Initialize the state with an empty array
//     const [values, setValues] = useState([]);
//     const [inputValue, setInputValue] = useState('');

//     // Change handler to update the state with new values
//     const changeHandle = (e) => {
//         setInputValue(e.target.value);
//         const newValue = e.target.value;
//         setValues(prevValues => [...prevValues, newValue]);
//     };
//     console.log(values)
//     console.log(inputValue)
//     return (
//         <div>
//             <input type='text' onChange={changeHandle} />
                 
//                  <p>{inputValue}</p>
//             <ul>
//                 {values.map((value, index) => (
//                     <li key={index}>{value}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Class22p1;









import React, { useState } from 'react';

function Class22p1(props) {
    const [inputValue, setInputValue] = useState("");
    const [values, setValues] = useState([]);

    const changeHandle = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);

        // Update the values array based on the current input value
        const newValues = newValue ? newValue.split('') : [];
        setValues(newValues);
    };

    return (
        <div>
            <input type='text' value={inputValue} onChange={changeHandle} />
            <ul>
                {values.map((value, index) => (
                    <li type='1' key={index}>{value}</li>
                ))}
            </ul>
        </div>
    );
}

export default Class22p1;
