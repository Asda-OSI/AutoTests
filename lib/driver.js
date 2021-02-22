const formatURL = require('./formatURL');
require('dotenv').config();

const {WebDriver} = require('selenium-webdriver');

const old = WebDriver.prototype.get;

WebDriver.prototype.get = function(n) {
    const url = formatURL(n, process.env.LOGIN, process.env.PASSWORD)
    old.call(this, url);
}

module.exports = null;