
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },

  // insert your locators and methods here
  fields: {
    searchResultsSearchForm: {id: 'searchResultsSearchForm'}
  },

  waitForLoadPage(){
    I.waitForElement(this.fields.searchResultsSearchForm);
  },

  displayNoListingSearchMessage(){
    I.see('Arama filtrelerinize uygun ilan bulunamadı.');
  },

}
