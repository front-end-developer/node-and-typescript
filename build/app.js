"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Mark Webley on 28/12/2020.
 */
var express = require("express");
require('dotenv').config();
var chalk = require('chalk');
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;
var fizzbuzzRouter = require('./src/routes/fizzbuzzRouter')();
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));
app.use('/js', express.static(path.join(__dirname, '../node_modules/jquery/dist')));
app.use('/js', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')));
app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')));
app.set('views', './app/src/views');
app.set('view engine', 'ejs');
app.use('/', fizzbuzzRouter);
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + chalk.green(port));
});
