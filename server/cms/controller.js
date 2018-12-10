const express = require('express')
const router = express.Router()
const cmsService = require('./cms.service')

router.get('/', cmsService.getAll)

module.exports = router