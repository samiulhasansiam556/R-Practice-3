

import PropTypes from 'prop-types';
import './Class32p1.css'

function Class32p1c1c1(props) {

    const deleteTodo = ()=>{
        props.deleteTodo(props.index)
    } 


    return (
        <div className='todom'>

             <div className="todo">
                
                 <p>{props.Todo}</p>
                 <p>{props.index}</p>

                 <p><i  className="fa-solid fa-xmark" onClick={deleteTodo}></i></p> 
            </div>     
            
     
        </div>
    );
}

Class32p1c1c1.propTypes = {
    Todo: PropTypes.string.isRequired,
};

export default Class32p1c1c1;