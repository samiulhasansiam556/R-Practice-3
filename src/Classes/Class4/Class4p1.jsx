import React from 'react';



function Class1(props) {

    
    const name ="Samiul Hasan Siam";
    
    const old = 22;
    const age = <h3>I am {old} years old</h3>
    

    //try to complex
    const user = {
        firstName: "Samiul",
        lastName : "Hasan Siam"
    };

    function  fullName(props) {
        return user.firstName + " " + user.lastName;
        
    };
    //try to complex



   
    //try to more complex 
    const users = {
       
        baby1: {
                firstName: "Samiul",
                lastName : "Hasan Siam"
                  },

         baby2:  {
                firstName: "Mahadi",
                lastName : "Hasan Rafi"
          },

    };

    function  FullName(props) {
        return props.firstName + " " + props.lastName;
        
    };
    //try to more complex

  
     //tru to more complex
     
     const baby1N = FullName(users.baby1)
     const baby2N =  <h2> {FullName(users.baby2)} </h2>

     //tru to more complex


     //Tyr to another 
     

      
     //Tyr to another 




   
   
    return (

        <div>
              <h1>in This Tutorial ,we will learn JSX </h1>
              <h2>JSX Stand for javascript XML</h2>
              <p>JSX is a syntax extension for JavaScript that allows you to write HTML-like code</p>
              <p>It also allow us any valid javascript coad in with curly bracates in  </p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
               
             <h3>My name is {name}</h3>

             {age}

             <h2>My name is {fullName(user)}</h2>

             <h2>My name is {FullName(users.baby1)}</h2>
             <h2>My name is {FullName(users.baby2)}</h2>

             <h2>{baby1N}</h2>
             {baby2N}


             <p>Today is {new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear()}</p>

 
             {2+9+9+9}

        </div>
    );
}

export default Class1;