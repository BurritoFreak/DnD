import React from 'react';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom';

import "./App.css";
import CharacterList from "./components/CharacterList";
import CharacterSheet from "./components/CharacterSheet";


function App() {
  const [characters, setCharacters] = useState([]);
  let match = useRouteMatch();
  
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
      <Route path={match.url}>
        <CharacterList characters={characters} />
      </Route>
      {characters.map((character) => 
        <Route path={`${match.url}/${character.Player}`}>
            <CharacterSheet character={character} />
        </Route>
    )}
      </Switch>

    </div>
  </Router>
      
  );
}

export default App;