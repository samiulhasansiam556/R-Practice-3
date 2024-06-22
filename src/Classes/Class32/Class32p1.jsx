
import {useState} from 'react';
import Class32p1c1 from './Class32p1c1';
import Class32p1c2 from './Class32p1c2';

function Class32p1() {

    const [todos, setTodos] = useState(["samiul", "Rafi", "Jahin"]);
   

    const addTodo = (todo) => {
        if (todo.trim() !== "") {
            setTodos([...todos, todo]);
        }}

    const deleteTodo =(index) =>{
        setTodos(todos.filter(( _,i) => i !== index));
    }

    return (


        <div>

              <Class32p1c2 addTodo={addTodo}/>
              <Class32p1c1 Todos={todos} deleteTodo={deleteTodo}/>
                  
        </div>
    );
}

export default Class32p1;