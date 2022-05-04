const {table} = require('./airtable');
const formattedReturn = require('./formattedReturn');

module.exports = async (event) => {
    const { id } = JSON.parse(event.body);
    try {
        const deletedCharacter = await table.destroy(id);
        return formattedReturn(200, deletedCharacter);
    } catch (err) {
        console.log(err);
        return formattedReturn(500, err);
    }
};