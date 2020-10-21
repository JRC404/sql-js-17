const functions = require('../lib/connection');

exports.getIndex = async (req, res) => {
    let values = await functions.SelectAllStaff();
    let display = values.recordset;
    console.log(display);
    res.send(display);
}

exports.getStaffMember = async (req, res) => {
    let {ID} = req.query;
    let values = await functions.SelectStaffMember(ID);
    let display = values.recordsets;
    console.log(display);
    res.send(display);
}