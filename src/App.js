import "./App.css";
import { useEffect, useState } from "react";
import Characters from "./components/Character";
import CharacterList from "./components/CharacterList";
//import CharacterForm from "./components/CharacterForm";

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
    <div className="container mt-5">
      <Characters characters={characters} refreshCharacters={loadCharacters}/>
      <CharacterList characters={characters} refreshCharacters={loadCharacters} />
    </div>
  );
}

export default App;