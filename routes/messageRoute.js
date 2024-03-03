const express = require('express');
const {saveMessage} = require('../controller/messageController');

const router = express.Router();

router.post('/send-message', saveMessage);

module.exports = router;