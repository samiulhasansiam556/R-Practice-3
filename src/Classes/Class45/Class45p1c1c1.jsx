import React from 'react';

function Class45p1c1c1(props) {
    const { name, flags, capital, population, area } = props.country;

    // Correct the syntax of the handleClick function
    const handleClick = (countryName) => {
        props.onRemoveCountry(countryName)
    }

    return (
        <article>
            <div>
                <img src={flags?.png} alt={`${name?.common} flag`} />
            </div>
            <div>
                <h2>{name?.common}</h2>
                <p>Capital: {capital?.[0]}</p>
                <p>Population: {population}</p>
                <p>Area: {area} km²</p>
                {/* Correct the usage of handleClick and name.common */}
                <button onClick={() => handleClick(name.common)}>Remove</button>
            </div>
        </article>
    );
}

export default Class45p1c1c1;



// import React from 'react';

// function Class45p1c1c1(props) {
  
//      const {country} = props;
//      const {name,flags,capital,population,area} = country;
    
//     const handleClick = (e) =>{

//         alert(e.target.name)
//     }


//     return (
//         <article>

//             <div className='country1'>
//                <img src={flags.png} alt={name.common}/>
//                <h2>{name.common}</h2>
//                <p>Capital: {capital}</p>
//                <p>Population: {population}</p>
//                <p>Area: {area} km²</p>
            
//                <button onClick={handleClick}>Remove</button>
            

//            </div>

//         </article>
        
//     );
// }

// export default Class45p1c1c1;