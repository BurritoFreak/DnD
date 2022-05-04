import "./App.css";
import { useEffect, useState } from "react";
import Characters from "./components/Character.js";
import CharacterList from "./components/CharacterList";

function App() {
  const [characters, setCharacters] = useState([]);
  const loadCharacters = async () => {
    try {
      const res = await fetch('/.netlify/functions/characters');
      const characters = await res.json();
      setCharacters(characters);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <div className="App">
        <Characters characterAdded={loadCharacters} />
        <CharacterList characters={characters} refreshCharacters={loadCharacters} />
    </div>
  );
}

export default App;
//fetch('https://api.airtable.com/v0/app3VzwwwzznkRq5y/Character%20Sheets?api_key=key8V1kV2CxOIOxba')