const express = require('express');
const router = express.Router();
const userControls = require('../controllers/userControls');

router.post('/insert-user', userControls.addUser);
router.get('/get-users', userControls.getUser);
router.post('/delete-user', userControls.deleteUser);


module.exports = router;