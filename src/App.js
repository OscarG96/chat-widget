import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { FaRegPaperPlane } from 'react-icons/fa'

function App() {
  return (
    <div style={{position: 'fixed',
      bottom: '20px',
      right: '10px'}} className="App">
      {/* <header className="App-header">
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
      </header> */}
      <Button className="rounded-circle" variant="primary"><FaRegPaperPlane /></Button>{' '}
    </div>
  );
}

export default App;
