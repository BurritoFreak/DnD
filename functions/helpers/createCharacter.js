const {table} = require('./airtable');
const formattedReturn = require('./formattedReturn');

module.exports = async (event) => {
    const fields = JSON.parse(event.body);
    try {
        const createdCharacter = await table.create([{fields}]);
        return formattedReturn(200, createdCharacter);
    } catch (err) {
        console.log(err);
        return formattedReturn(500, err);
    }
};
