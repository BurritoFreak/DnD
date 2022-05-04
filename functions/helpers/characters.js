const formattedReturn = require('./formattedReturn');
const getCharacters = require('./getCharacters');
const createCharacter = require('./createCharacter');
const updateCharacter = require('./updateCharacter');
const deleteCharacter = require('./deleteCharacter');

exports.handler = async (event) => {
    if (event.httpMethod === 'GET') {
        return getCharacters(event);
    } else if (event.httpMethod === 'POST') {
        return createCharacter(event);
    } else if (event.httpMethod === 'PUT') {
        return updateCharacter(event);
    } else if (event.httpMethod === 'DELETE') {
        return deleteCharacter(event);
    } else {
        return formattedReturn(405, 'Method Not Allowed');
    }
};