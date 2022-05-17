import React from 'react';

const Character = ({ character, refreshCharacters }) => {
    const updatedCharacter = async () => {
        try {
            await fetch('/.netlify/functions/characters', {
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
            await fetch('/.netlify/functions/characters', {
                method: 'DELETE',
                body: JSON.stringify({ id: character.id }),
            });
            refreshCharacters();
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <div class="box">
        <button class="custom-btn btn-15">
            <h2>{character.Player}</h2>
            <h3>{character.Name}</h3>
        </button>
        </div>
    )
};
//onClick={window.location.href = '/' + character.Player}

export default Character;