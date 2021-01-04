"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Mark Webley on 31/12/2020.
 */
var express = require("express");
var fizzbuzzRouter = express.Router();
var fizzbuzzController = require('../controllers/fizzbuzzController');
var fizzbuzzService = require('../services/fizzbuzzService');
function router() {
    var index = fizzbuzzController(fizzbuzzService).index;
    fizzbuzzRouter.route('/').get(index);
    return fizzbuzzRouter;
}
module.exports = router;
