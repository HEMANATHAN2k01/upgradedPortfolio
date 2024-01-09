const express = require('express')
const Router = express.Router()
const AllData = require('../controllers/GetControls')

Router.get('/', AllData.FullData)


module.exports = Router