import React from "react";
import Character from "./Character";

const CharacterSheet = ({ characters, refreshCharacters }) => {
    return (
        <section id="characters">
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

export default CharacterSheet;