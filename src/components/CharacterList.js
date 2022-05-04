import React from "react";
import Character from "./Character";

const CharacterList = ({ characters, refreshCharacters }) => {
    return (
        <div className="list-characters">
        {characters.map((character, index) => (
            <Character
            key={index}
            character={character}
            refreshCharacters={refreshCharacters}
            />
        ))}
        </div>
    );
};

export default CharacterList;