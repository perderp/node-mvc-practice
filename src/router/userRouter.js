const { viewData, viewError, addData, deleteData, updateData, updateViewData } = require('../controller/userController')
const express = require('express')
const router = express.Router()


router.get('/', viewData)
router.post('/addData', addData )
router.get('/deleteData/:id', deleteData )
router.route('/updateData/:id')
    .get(updateViewData)
    .post(updateData)


module.exports = router