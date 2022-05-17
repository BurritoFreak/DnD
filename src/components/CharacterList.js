import React from "react";
import Character from "./Character";
import CharacterSheet from "./CharacterSheet";

const CharacterList = ({ characters, refreshCharacters }) => {
    return (
        <>
        <div className="characters">
        {characters.map((character) => 
            <Character
            key={character.id}
            character={character}
            refreshCharacters={refreshCharacters}
            />
        )}
        </div>
        <div className="character-sheets">
        {characters.map((character) => 
            <CharacterSheet character={character} />
        )}
        </div>
        </>
        );
};

export default CharacterList;