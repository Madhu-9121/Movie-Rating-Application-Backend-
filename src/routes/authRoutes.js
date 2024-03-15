const express = require('express')
const authenticateToken = require('../middleware/authenticateToken')
const router = express.Router()
const authController = require('../controllers/authController')

router.post('/register',authController.registerUser)
router.post('/login',authController.loginUser)
module.exports = router