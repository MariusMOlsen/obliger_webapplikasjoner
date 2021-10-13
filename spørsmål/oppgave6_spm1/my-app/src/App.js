import logo from './logo.svg';
import './App.css';

import { useState } from 'react'
import CreateToDo from './Components/CreateToDo.js';


function App() {

  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState(null);

  const add = (item) => {
    setTodo(item);
    setTodos((prev) => [...prev, todo])

  }
  const mapTodos = (object) => {
    console.log(object)
    try { console.log(object.title) }

    catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="App">

      <CreateToDo add={add} />
      {todos ? todos.map(mapTodos)
        : null}

    </div>
  );
}

export default App;
