
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },

  // insert your locators and methods here

  fields: {
    headerLogo: {xpath: '//p[@class="clearfix"]//a[@class="logo"]'},
    searchBox: {id: 'searchText'},
    headerSearchSubmitButton: {xpath: '//*[@id="searchSuggestionForm"]//button[@type="submit"]'},
    detailSearchLink: {xpath: '//*[@id="searchSuggestionForm"]//a[@href="https://www.sahibinden.com/arama/detayli"]'},
    loginLink: '.login-text',
    registerLink: '.register-text',
    newClassifiedButton: '.new-classified',
    showCaseList: {xpath: '//ul[@class="vitrin-list clearfix"]//li'},
    leftMenuCategoryItem(category) {return {xpath: '//*[@class="categories-left-menu"]//a[@href="/kategori/'+ category + '"]'};}

  },

  waitForPageLoad(){
    I.waitForText('Anasayfa Vitrini');

  },
}
