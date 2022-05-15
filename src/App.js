import React from 'react';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "./App.css";
import CharacterList from "./components/CharacterList";
import CharacterSheet from "./components/CharacterSheet";


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
    <Router>
    <div className="App">

      <Switch>
      <Route exact path="/" component={CharacterList({characters})} />
        {characters.map((character) => 
            <Route exact path="/{character.Player}" component={CharacterSheet({character})} />
        )}
      </Switch>

    </div>
  </Router>
      
  );
}

export default App;