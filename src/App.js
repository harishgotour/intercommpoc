import logo from './logo.svg';
import './App.css';
import Axios from './Axios';

function App() {

  const fetchAPI = () => {
    Axios.get('https://jsonplaceholder.typicode.com/todos/1').then(() => {
      debugger
    }).catch((error) => {
      debugger
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick={fetchAPI}
          className="App-link"
          // href="https://reactjs.org"
        >
          Learn React
        </button>
      </header>
    </div>
  );
}

export default App;
