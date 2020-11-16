// Library
import React from 'react';

// Function Component
const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
    // Change the state with input value
    const inputTextHandler = e => {
        setInputText( e.target.value )
    }
    // Handle the submit of the form
    const handleSubmit = e => {
        // delete default behaviour
        e.preventDefault()
        // refresh the state with new todo object
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.floor(Math.random() * 1000) }
        ])
        setInputText('');
    }
    // Return the values filtered
    const statusHandler = (e) => {
        // set the State with the selected option
        setStatus(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={inputTextHandler} value={inputText} type='text' className="todo-input" />
            <button className='todo-button' type='submit'>
                <i className='fas fa-plus-square' />
            </button>
            <div className='select'>
                <select className='filter-todo' name='todos' onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
} 

export default Form