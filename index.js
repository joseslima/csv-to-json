let csvToJson = require('convert-csv-to-json');

let fileInputName = 'file.csv'; 
let fileOutputName = 'output.json';

csvToJson.fieldDelimiter(',').formatValueByType().generateJsonFileFromCsv(fileInputName,fileOutputName);