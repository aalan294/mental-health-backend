const express = require('express')
const router = express.Router();

router.route('/helpers')
    .post(require('../CONTROLLERS/fetchUserController').fetchAllHelpers)

router.route('/:id')
    .get(require('../CONTROLLERS/messageController').getAllContacts)


module.exports = router;