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
    let display = values.recordset;
    console.log(display);
    res.send(display);
}

exports.postStaff = async (req, res) => {
    // let { all of the values} = req.query
    let {ID, Name, Role, Location, Salary, Commission} = req.query;
    functions.createStaffMember(ID, Name, Role, Location, Salary, Commission);
    res.send('Employee created. Was it Diwa again?')
}

exports.deleteStaffMember = async (req, res) => {
    let {ID} = req.query;
    functions.deleteDiwa(ID);
    res.send('diwa has been deleted')
}