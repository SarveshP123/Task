const create = require('express');
const createModal = require('../Modals/createModal')

exports.module = create('/create', createModal)