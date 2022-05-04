import "./App.css";
import Characters from "./characters/stats.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Characters />
      </header>
    </div>
  );
}

export default App;
//fetch('https://api.airtable.com/v0/app3VzwwwzznkRq5y/Character%20Sheets?api_key=key8V1kV2CxOIOxba')