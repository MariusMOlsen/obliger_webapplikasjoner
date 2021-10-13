import logo from './logo.svg';
import './App.css';

import { useState } from 'react'
import CreateToDo from './Components/CreateToDo.js';
import Todo from './Components/Todo';
import { useEffect } from 'react'
function App() {

  const [todos, setTodos] = useState([])


  const add = (item) => {
    setTodos((prev) => [...prev, item])
  }

  return (
    <div className="App">
      <CreateToDo add={add} />
      <div className="elementWrapper">
        {todos ? todos.map((o) => <Todo todo={o} />) : null}
      </div>

    </div>
  );
}

export default App;
