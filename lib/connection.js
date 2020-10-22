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

const SelectStaffMember = async (ID) => {
    await connection();
    let result;
    try {
        result = await sql.query `SELECT * FROM Staff WHERE ID = ${ID}`
    } catch (err) {
        console.log('error')
    }
    return result;
}

const createStaffMember = async (ID, Name, Role, Location, Salary, Commission) => {
    await connection();
    let result;
    try {
        result = await sql.query `INSERT INTO Staff VALUES(${ID}, ${Name}, ${Role}, ${Location}, ${Salary}, ${Commission})`
        // ID, Name, Role, Location, Salary, Commission
    } catch (error) {
        console.log('error');
    }
    return result;
}

const deleteDiwa = async (ID) => {
    await connection();
    try {
        const result = await sql.query `DELETE FROM Staff WHERE ID = ${ID}`;
        console.log(result);
    } catch (error) {
        console.log('error');
    }
}

module.exports = {
    SelectAllStaff,
    SelectStaffMember,
    createStaffMember,
    deleteDiwa
}