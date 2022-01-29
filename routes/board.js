const express = require('express')
const router = express.Router()
const checkAuth = require('../middleware/check_auth')
const boardDBO = require('../dbos/boardDBO')
// get boards
router.get('/', checkAuth, boardDBO.getAll)
// get board
router.get('/:boardId', checkAuth, boardDBO.get)
// save board
router.post('/save/board', checkAuth, boardDBO.save)
// update board
router.post('/update/:boardId', checkAuth, boardDBO.update)
// delete boards
router.post('/delete', checkAuth, boardDBO.deleteAll)
// detele board
router.post('/delete/:boardId', checkAuth, boardDBO.delete)
module.exports = router