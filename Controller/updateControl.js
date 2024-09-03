const updateModal = require('../Modals/updateModal')
const route = require('express');
route.post('/update/id', async (req, res) => {
    try {
        const details = {
            employeeId: ''
        }
    } catch(err){
        console.log("error occured"+err);    
    }
})
exports.module = updateModal