// Library
import React from 'react'

// Function Component
const Todo = ({ value, todo, todos, setTodos }) => {
    // Remove the <li> From the State Array
    const deleteHandler = () => {
        // Pick up the id of one todo
        const id = todo.id;
        // Filter elt !== id
        setTodos(todos.filter(elt => elt.id !== id))
    }
    // Success the <li> From the State Array
    const completeHandler = () => {
        // Map over the state & return new Array of Completed items
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                // Return an object
                return {
                    ...item,
                    // Change for the opposite value COMPLETED : FALSE to TRUE
                    completed: !item.completed,
                }
            }
            // return the new item
            return item;
        }))
    }
    // JSX
    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? 'completed' : null}`}>
                {value}
            </li>
            <button className='complete-btn' onClick={completeHandler} >
                <i className='fas fa-check' />
            </button>
            <button className='trash-btn' onClick={deleteHandler}>
                <i className='fas fa-trash' />
            </button>
        </div>
    )
}

export default Todo