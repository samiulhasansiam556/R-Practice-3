


import React, { useEffect, useState } from 'react';
import Class45p1c1 from './Class45p1c1';
import Class45p1c2 from '../Class41/Class45p1c2';

const url = "https://restcountries.com/v3.1/all";

function Class45p1(props) {

   const [isLoading,setIsloading] = useState(true);
   const [error,setError] = useState(null);
   const [countries,setCountries] = useState([]);
   const [filterCountries,setFilterCountries] = useState(countries)


    const fetchData = async (url) =>{
        setIsloading(true);

         try{
            const response = await fetch(url);
            if(!response.ok){
                throw new Error("Failed to fetch data");
            }
            const data = await response.json();
            setCountries(data);
            setFilterCountries(data);
            setIsloading(false);    
            setError(null);
            console.log(countries);
         
           
         }catch(error){
            setIsloading(false);    
            setError(error.message)
         }

    }


    useEffect(()=>{
          
        fetchData(url);

    },[])



    console.log(countries);
    console.log(filterCountries);


    const handleRemoveCountry =(name)=>{
       
        setFilterCountries(filterCountries.filter((country)=>country.name.common !== name));
       
        // const newCountries = countries.filter((country)=> country.name.common !== name);
        // setCountries(newCountries);

    }

    const handleSearch = (e) => {
        const searchValue = e.target.value.toLowerCase();
        const newCountries = countries.filter((country) =>
            country.name.common.toLowerCase().includes(searchValue)
        );
        setFilteredCountries(newCountries);
    };



      
    return (
        <div>
             <h1>Country App</h1>
             <Class45p1c2 searchCountry = {handleSearch}/>
             {isLoading && <h2>Loading..</h2>}
             {error && <h2>{error}</h2>}
             <Class45p1c1 countries={filterCountries}  
             onRemoveCountry={handleRemoveCountry}
          
             />
             
        </div>
    );
}

export default Class45p1;

import React, { useEffect, useState } from 'react';

const url = "https://restcountries.com/v3.1/all";

function Class45p1(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setCountries(data);
                console.log(data); // Log the fetched data
                setIsLoading(false);
                setError(null);
            } catch (error) {
                setIsLoading(false);
                setError(error.message);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <p>Data fetched, check console for details.</p>
            )}
        </div>
    );
}

export default Class45p1;




// import React, { useEffect, useState } from 'react';

// const url = "https://restcountries.com/v3.1/all";

// function Class45p1(props) {

//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [countries, setCountries] = useState([]);

//     const fetchData = async (url) => {
//         setIsLoading(true);
//         setError(null);

//         try {
//             const response = await fetch(url);
//             if (!response.ok) {
//                 throw new Error("Failed to fetch data");
//             }
//             const data = await response.json();
//             setCountries(data);
//             console.log(data); // Log the fetched data
//             setIsLoading(false);
//             setError(null);
//         } catch (error) {
//             setIsLoading(false);
//             setError(error.message);
//         }
//     }

//     useEffect(() => {
//         fetchData(url);
//     }, []);

//     return (
//         <div>
//             {isLoading ? (
//                 <p>Loading...</p>
//             ) : error ? (
//                 <p>Error: {error}</p>
//             ) : (
//                 <p>Data fetched, check console for details.</p>
//             )}
//         </div>
//     );
// }

// export default Class45p1;



// import React, { useEffect, useState } from 'react';
// const url = "https://restcountries.com/v3.1/all";

// function Class45p1(props) {

//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [countries, setCountries] = useState([]);

//     const fetchData = async (url) => {
//         setIsLoading(true);
//         setError(null);

//         try {
//             const response = await fetch(url);
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const data = await response.json();
//             setCountries(data);
//             setIsLoading(false);
//             console.log(data); // Use `data` instead of `countries`
//         } catch (error) {
//             setIsLoading(false);
//             setError(error.message);
//         }
//     }

//     useEffect(() => {
//         fetchData(url);
//     }, []);

//     return (
//         <div>
//             {isLoading ? (
//                 <p>Loading...</p>
//             ) : error ? (
//                 <p>Error: {error}</p>
//             ) : (
//                 <ul>
//                     {countries.map((country) => (
//                         <li key={country.cca3}>{country.name.common}</li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// }

// export default Class45p1;
