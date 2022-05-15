import React from "react";
import Character from "./Character";

const CharacterList = ({ characters, refreshCharacters }) => {
    return (
        <section id="home">
        <div className="characters">
        {characters.map((character) => 
            <Character
            key={character.id}
            character={character}
            refreshCharacters={refreshCharacters}
            />
        )}
        </div>
        </section>
    );
};

export default CharacterList;