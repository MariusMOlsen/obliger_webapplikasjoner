import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react'
import data from './questions.json'

function App() {

  // const getData = (i) => {
  //   data.map((obj) => {
  //     it('should not fail if the correct answer is chosen', () => {
  //       console.log(obj.answers[i].correct)
  //       expect(obj.answers[3].correct).toBe(true)

  //     })
  //   })



  // }

  // getData(3);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
