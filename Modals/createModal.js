const mongoose = require('mongoose')
const createUser = new mongoose.Schema({
    employeeId: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    position: { type: String, required: true },
    department: { type: String, required: true },
    hireDate: { type: String, required: true }
});

module.exports = mongoose.modal("create", createUser);