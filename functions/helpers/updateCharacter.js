const {table} = require('./airtable');
const formattedReturn = require('./formattedReturn');

module.exports = async (event) => {
    const {id, ...fields} = JSON.parse(event.body);
    try {
        const updatedCharacter = await table.update([{id, fields}]);
        return formattedReturn(200, updatedCharacter);
    } catch (err) {
        console.log(err);
        return formattedReturn(500, err);
    }
};