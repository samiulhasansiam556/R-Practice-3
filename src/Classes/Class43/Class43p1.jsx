import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Class43p1(props) {

 const addTodo =()=>{
    toast("Todo is added Succesfully")

 }
 const deleteTodo =()=>{
    toast("Todo is deleted Succesfully")

 }

    return (

        <div>
             

             <button onClick={addTodo}>Add Todo</button>
             <button onClick={deleteTodo}>Delete Todo</button>
             <ToastContainer/>
  

        </div>
    );
}

export default Class43p1;