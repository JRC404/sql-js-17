// inside of the lib folder
const sql = require('mssql'); // npm i mssql

/**
 * connections: 
 * * Select all from the CodeNation database:
 * * Staff table: receiving the details
 * 
 * TODO: Export our functions
 */

const connection = async () => {
    await sql.connect('mssql://sa:Password1@localhost,1433/CodeNation')
}

const SelectAllStaff = async () => {
    await connection(); // connects to the database
    let result; // result so we don't have to export 1,000,000 times
    try {
        result = await sql.query `SELECT * FROM Staff` // SQL syntax inside of JS
    } catch (err) { // if there is an error, say so.
        console.log('error');
    }
    return result;
}

const SelectStaffMember = async () => {
    await connection();
    let result;
    try {
        result = await sql.query `SELECT * FROM Staff WHERE ID = 3`
    } catch (err) {
        console.log('error')
    }
    return result;
}

module.exports = {
    SelectAllStaff,
    SelectStaffMember
}