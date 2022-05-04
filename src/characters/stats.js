var Airtable = require('airtable');
var base = new Airtable({apiKey: 'key8V1kV2CxOIOxba'}).base('app3VzwwwzznkRq5y');

function getCharacters(){
    var obj = {};
    base('Character Sheets').select({
        // Selecting the first 3 records in Grid view:
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {
            obj[record.get('Name')] = record.fields;
        });
        fetchNextPage();
    }, function done(err) {
        if (err) { console.error(err); return; }
        return obj;
    });
}

console.log(getCharacters());