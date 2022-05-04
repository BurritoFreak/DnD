const formattedReturn = require('./helpers/formattedReturn');
const getCharacters = require('./helpers/getCharacters');
const createCharacter = require('./helpers/createCharacter');
const updateCharacter = require('./helpers/updateCharacter');
const deleteCharacter = require('./helpers/deleteCharacter');

exports.handler = async (event) => {
    if (event.httpMethod === 'GET') {
        return await getCharacters(event);
    } else if (event.httpMethod === 'POST') {
        return await createCharacter(event);
    } else if (event.httpMethod === 'PUT') {
        return await updateCharacter(event);
    } else if (event.httpMethod === 'DELETE') {
        return await deleteCharacter(event);
    } else {
        return formattedReturn(405, 'Method Not Allowed');
    }
};