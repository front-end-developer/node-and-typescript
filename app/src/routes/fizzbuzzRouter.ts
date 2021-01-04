/**
 * Created by Mark Webley on 31/12/2020.
 */
import express = require('express');
const fizzbuzzRouter = express.Router();
const fizzbuzzController = require('../controllers/fizzbuzzController');
const fizzbuzzService = require('../services/fizzbuzzService');

function router() {
    const { index } = fizzbuzzController(fizzbuzzService);
    fizzbuzzRouter.route('/').get(index);
    return fizzbuzzRouter;
}

module.exports = router;
