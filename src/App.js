// Library
import React, { useState, useEffect } from 'react';
// CSS
import './App.css';
// Components
import Form from './Components/Form';
import TodoList from './Components/TodoList';

const App = () => {
  
  // States Hook (Only in function component !)
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filter, setFilter] = useState([]);
  
  // Run once the App start
  useEffect(() => {
    getLocalStorage();
  }, []);

  // Called everytime State change: (Acts like componentWillMount & ComponentDidMount)
  useEffect(() => {
    filterHandler()
    saveLocalStorage()
  }, [todos, status]);

  // Filter the Array
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilter(todos.filter(item => item.completed === true))
        break;
      case 'uncompleted':
        setFilter(todos.filter(item => item.completed === false))
        break;
      default:
        setFilter(todos)
    } 
  }
  // Save ToDo's Locally
  const saveLocalStorage = () => {
      localStorage.setItem('todos', JSON.stringify(todos))
  }
  // Get the Local ToDo's
  const getLocalStorage = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      const todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }
  // JSX
  return (
    <div className='App'>
      <header>
        Eternal's Todo List
      </header>
      <Form 
        inputText={inputText} 
        setInputText={setInputText} 
        todos={todos}
        setTodos={setTodos}
        status={status}
        setStatus={setStatus}
        filter={filter}
        setFilter={setFilter}
        />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        filter={filter}
      />
    </div>
  )
}


export default App;
