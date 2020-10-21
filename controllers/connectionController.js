const functions = require('../lib/connection');

exports.getIndex = async (req, res) => {
    let values = await functions.SelectAllStaff();
    let display = values.recordset;
    console.log(display);
    res.send(display);
}

exports.getStaffMember = async (req, res) => {
    let values = await functions.SelectStaffMember();
    let display = values.recordsets;
    console.log(display);
    res.send(display);
}