
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
    detailSearchLink: {xpath: '//*[@id="searchSuggestionForm"]//a[@href="https://www.sahibinden.com/arama/detayli"]'},
    loginLink: '.login-text',
    registerLink: '.register-text',
    newClassifiedButton: '.new-classified',
    displayWindowList: '//ul[@class="vitrin-list clearfix"]//li',
    vehicleLink: {xpath: '//*[@class="categories-left-menu"]//*[@class="category-3517"]//a[@href="/kategori/vasita"]'},
    automobileLink: {xpath: '//*[@class="categories-left-menu"]//*[@class="category-3517"]//a[@href="/kategori/otomobil"]'},
    suvLink: {xpath: '//*[@class="categories-left-menu"]//*[@class="category-3517"]//a[@href="/kategori/arazi-suv-pick-up"]'},
    motorcycleLink: {xpath: '//*[@class="categories-left-menu"]//*[@class="category-3517"]//a[@href="/kategori/motosiklet"]'}
  },

  waitForPageLoad(){
    I.waitForText('Anasayfa Vitrini');

  },
}
