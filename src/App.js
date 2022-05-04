import "./App.css";
import { useState } from "react";
import Characters from "./components/Character.js";

function App() {
  const [characters, setCharacters] = useState([]);
  const loadCharacters = async () => {}

  return (
    <div className="App">
      <header className="App-header">
        <Characters playeradded={loadCharacters} />
        <Characters characters={characters} refreshCharacters={loadCharacters} />
      </header>
    </div>
  );
}

export default App;
//fetch('https://api.airtable.com/v0/app3VzwwwzznkRq5y/Character%20Sheets?api_key=key8V1kV2CxOIOxba')