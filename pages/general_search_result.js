
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },

  // insert your locators and methods here

  fields: {
    vehiclesCategoryResult(vehicleCategory) {return {xpath: '//ul[@class="multi-line"]//li[@data-id="3517"]//a[contains(text(),"' + vehicleCategory + '")]'};}
  },

}
