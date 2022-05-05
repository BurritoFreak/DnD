import React from "react";
import Character from "./Character";

const CharacterList = ({ characters, refreshCharacters }) => {
    return (
        <div className="characters">
        {characters.map((character) => 
            <Character
            key={character.id}
            character={character}
            refreshCharacters={refreshCharacters}
            />
        )}
        </div>
    );
};

export default CharacterList;