const {table} = require('./airtable');
const formattedReturn = require('./formattedReturn');

module.exports = async (event) => {
    try {
        const characters = await table.select().firstPage();
        const formattedCharacters = characters.map((character) => ({
                id: character.id,
                ...character.fields,
            }));
        return formattedReturn(200, formattedCharacters);
    } catch (error) {
        console.log(error);
        return formattedReturn(500, error);
    }
};
