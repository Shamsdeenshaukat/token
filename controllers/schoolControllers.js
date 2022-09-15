const school = require("../models/schoolSchema")
const createschool = (req, res) => {
    const newSchool = new school({
        schoolname: req.body.schoolname,
        location: req.body.location,
        category: req.body.category,
        facilities: req.body.facilities,
        numOfstudents: req.body.numOfstudents,
        address: req.body.address,
        contacts: req.body.contact,
        
    })
    newSchool.save();
    res.status(200).json(newSchool)
    

}
module.exports = { createschool };