const deleteModal = require('../Modals/deleteModal')
const route = require('express');
route.delete('/delete/id', async (req, res) => {
    try {
        const details = {
            employeeId: '',
            firstName: '',
            lastName: '',
            email: '',
            postion: '',
            department: '',
            hireDate: ''
        }
        console.log(details);
        
    } catch (err) {
        console.log("error occured" + err);
    }
})
exports.module = deleteModal