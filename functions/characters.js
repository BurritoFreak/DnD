const formattedReturn = require('./helpers/formattedReturn');
const getCharacters = require('./helpers/getCharacters');
const createCharacter = require('./helpers/createCharacter');
const updateCharacter = require('./helpers/updateCharacter');
const deleteCharacter = require('./helpers/deleteCharacter');

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