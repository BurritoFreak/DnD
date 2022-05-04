import React from 'react';

const Character = ({ character, refreshCharacters }) => {
    return (
        <div className="character-card">
            <div className="character-card-header">
                <h3>{character.name}</h3>
            </div>
            <div className="character-card-body">
                <h3>{character.level}</h3>
            </div>
        </div>
    )
};

export default Character;