// Library 
import React from 'react';
// Component
import Todo from './Todo';

// Function Component
const TodoList = ({ todos, setTodos, filter}) => {
    // JSX
    return (
        <div className='todo-container'>
            <ul className='todo-list'>
            {/* Map over the State Array and return a New Todo Element*/}
             {
                 filter.map(item => {
                     return (
                         <Todo 
                            key={item.id} 
                            value={item.text} 
                            todos={todos}
                            todo={item} 
                            setTodos={setTodos} 
                        />
                     )
                 })
             }
            </ul>
        </div>
    )
}

export default TodoList