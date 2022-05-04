import React from 'react';

const Character = ({ character, refreshCharacters }) => {
    const updatedCharacter = async () => {
        try {
            await fetch('/api/characters/', {
                method: 'PUT',
                body: JSON.stringify({ ...character}),
            });
            refreshCharacters();
        } catch (error) {
            console.log(error);
        }
    };

    const deleteCharacter = async () => {
        try {
            await fetch('/api/characters/', {
                method: 'DELETE',
                body: JSON.stringify({ id: character.id }),
            });
            refreshCharacters();
        } catch (error) {
            console.log(error);
        }
    };
    
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