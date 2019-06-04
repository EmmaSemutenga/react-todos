import React from 'react';

function ToDos(props){
    const todoList = props.todos.map((todo)=>{
        return(
            <div key={todo.id} className='card-panel teal lighten-2' onClick = {() => props.deleteTodo(todo.id)}>
                <p>{ todo.chore }</p>
            </div>
        )
    });
    return todoList;
}

export default ToDos;