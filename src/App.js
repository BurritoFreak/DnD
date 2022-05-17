import React from 'react';
import { useEffect, useState } from "react";

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
    };

    useEffect(() => {
        loadCharacters();
    }, []);

    return (
        <div className="App">
            <CharacterList characters={characters} refreshCharacters={loadCharacters}/>
            <CharacterSheet character={characters[0]} />
        </div>
    );
}

//{characters.map((character) => 
//    <Route path={"/:character"}>
//        <CharacterSheet character={character} />
//    </Route>
//)}

export default App;