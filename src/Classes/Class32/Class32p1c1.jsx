
import PropTypes from 'prop-types';
import Class32p1c1c1 from './Class32p1c1c1';



function Class32p1c1(props) {

    // console.log(props.Todos)


    return (


        <div>
               
            {props.Todos.map((todo,index)=>(

                <Class32p1c1c1 
                key={index} 
                index={index}
                Todo={todo}
                deleteTodo={props.deleteTodo}
                />

            ))}
              

        </div>
    );
}

Class32p1c1.propTypes = {
    Todos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Class32p1c1;