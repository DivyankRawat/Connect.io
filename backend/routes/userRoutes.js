const express = require('express')
const { registerUser, authUser } = require('../controllers/userController')

const router = express.Router();

// so let say you want to request to login, so the url will be /api/user/login
router.route('/').post(registerUser)
router.post("/login", authUser);

module.exports = router;