import logo from './logo.svg';
import './App.css';
import LDJS from './LDJS.js';
import LDReact from './LDReact.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* Only use one of these on the page, as only one will receive updates.
        You should only have one instance of the LD SDK (ldClient). */}
        
        <LDJS />
        <LDReact />
        
      </header>
    </div>
  );
}

export default App;