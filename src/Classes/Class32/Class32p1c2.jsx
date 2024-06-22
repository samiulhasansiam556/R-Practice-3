

import {useState} from 'react';
import PropTypes from 'prop-types';

function Class32p1c2(props) {

    const [todo,setTodo] = useState ("")
  

    const handleChange =(e)=>{

        setTodo(e.target.value)
   }
    const handleSubmit =()=>{

        props.addTodo(todo)
        setTodo("");
   }

    return (

        <div>
            <div className="div281">
                <label htmlFor='todo'>Todo:</label>
                <input value={todo} type='todo' name='todo' id='todo' onChange={handleChange}></input>
                
            </div>
            <button type='submit' onClick={handleSubmit}>Submit</button>
             
        </div>
    );
}

Class32p1c2.propTypes = {
    addTodo: PropTypes.func.isRequired,
};

export default Class32p1c2;