import React from 'react';

const Character = ({ character, refreshCharacters }) => {
    return (
        <div className="character-card">
            <div className="character-card-header">
            <a hfref={`/character/${character.id}`}>
                <h3>{character.name}</h3>
            </a>
            </div>
            <div className="character-card-body">
                <h3>{character.level}</h3>
            </div>
        </div>
    )
};

export default Character;