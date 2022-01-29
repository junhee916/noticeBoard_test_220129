const express = require('express')
const router = express.Router()
const checkAuth = require('../middleware/check_auth')
const userDBO = require('../dbos/userDBO')
// get users
router.get('/', checkAuth, userDBO.getAll)
// get user
router.get('/:userId', checkAuth, userDBO.get)
// signup
router.post('/signup', userDBO.signup)
// login
router.post('/login', userDBO.login)
// update user
router.post('/update/:userId', checkAuth, userDBO.update)
// delete users 
router.post('/delete', checkAuth, userDBO.deleteAll)
// delete user
router.post('/delete/:userId', checkAuth, userDBO.delete)
module.exports = router