import React,{useState} from 'react';

function Class28p1(props) {

    const [Name,setName] = useState ('')
    const [Email,setEmail ] = useState('')
    const [Password,setPassword] = useState ('')

const nameHandler =(e)=>{
     setName(e.target.value)
}

const emailHandler =(e)=>{
    setEmail(e.target.value)
    
}


const passwordHandler =(e)=>{
    setPassword(e.target.value)

    
}

const submitHandler = (e)=>{
    e.preventDefault();

    // console.log(Name,Email,Password)

    // let information ={
    //     Name:Name,
    //     Email:Email,
    //     Password:Password
    // }

    // console.log(information);

    //if same
    let information ={
        Name,
        Email,
        Password,
    }

    console.log(information);
}




    return (
        <div>

          <form action='' onSubmit={submitHandler}>

             <div className="div281">
                <label htmlFor='name'>Name:</label>
                <input value={Name} type='name' name='name' id='name' onChange={nameHandler}></input>
                
             </div>

             <div className="div282">
                <label htmlFor='email'>Email:</label>
                <input type='email' name='email' id='email'onChange={emailHandler}></input>
             </div>

             <div className="div283">
                <label htmlFor='password'>Password:</label>
                <input type='password' name='password' id='password'onChange={passwordHandler}></input>
             </div>
              <button type='submit'>Submit</button>

            </form>

        </div>
    );
}

export default Class28p1;