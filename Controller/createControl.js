const createModal = require('../Modals/createModal')
const route = require('express');
route.get('/create', async (req, res) => {
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
exports.module = createModal