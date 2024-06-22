import React,{useState} from 'react';

function Class29p1(props) {

    const [user,setUser] = useState ({name:'',email:'',password:''})
    const {name,email,password} = user

// const handleChange =(e)=>{
//     let c = e.target.name;

//     if(c=="name"){
//      setUser({name:e.target.value,email,password})
//    }

//    if(c == "email"){
//     setUser({name,email:e.target.value,password})
//    }

//    if(c == "password"){
//     setUser({name,email,password:e.target.value})
//    }

// }

const handleChange =(e)=>{

     setUser({...user,[e.target.name]:e.target.value})
}



const submitHandler = (e)=>{
    e.preventDefault();

    let information ={
        name,
        email,
        password,
    }

    console.log(information);
 }



    return (
        <div>
             <h1>Class 29 Part 1</h1>
             
             <form action='' onSubmit={submitHandler}>

                    <div className="div281">
                        <label htmlFor='name'>Name:</label>
                        <input value={name} type='name' name='name' id='name' onChange={handleChange}></input>
                        
                    </div>

                    <div className="div282">
                        <label htmlFor='email'>Email:</label>
                        <input value={email} type='email' name='email' id='email'onChange={handleChange}></input>
                    </div>

                    <div className="div283">
                        <label htmlFor='password'>Password:</label>
                        <input value={password} type='password' name='password' id='password'onChange={handleChange}></input>
                    </div>
                    <button type='submit'>Submit</button>

             </form>
            
        </div>
    );
}

export default Class29p1;