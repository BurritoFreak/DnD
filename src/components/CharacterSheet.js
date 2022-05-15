import React from "react";
import Character from "./Character";

const CharacterList = ({ characters, refreshCharacters }) => {
    return (
        <>
        {characters.map((character) => 
            <section id={character.Player}>
            <Character
            key={character.id}
            character={character}
            refreshCharacters={refreshCharacters}
            />
            </section>
        )}
        </>
    );
};

export default CharacterList;