const express = require('express')
const router = express.Router()
const checkAuth = require('../middleware/check_auth')
const commendDBO = require('../dbos/commendDBO')
// get commend
router.get('/:commendId', checkAuth, commendDBO.get)
// save commend 
router.post('/save/:boardId', checkAuth, commendDBO.save)
// update commend
router.post('/update/:commendId', checkAuth, commendDBO.update)
// delete commend 
router.post('/delete/:commend', checkAuth, commendDBO.delete)
module.exports = router