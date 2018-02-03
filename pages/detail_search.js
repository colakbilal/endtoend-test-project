
'use strict';

let I;
let homePage;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
    homePage = require('./home.js');
  },

  // insert your locators and methods here

  fields: {
    categoryGeneralLink(category) {return {xpath: '//*[@class="category-selection-wrapper"]/div[1]//span[text()="' + category + '"]'};},
    categoryVehicleLink(vehicle) {return {xpath: '//*[@class="category-selection-wrapper"]/div[2]//span[text()="' + vehicle + '"]'};},
    categoryBrandLink(brand) {return {xpath: '//*[@class="category-selection-wrapper"]/div[3]//span[text()="' + brand + '"]'};},
    categoryModelLink(model) {return {xpath: '//*[@class="category-selection-wrapper"]/div[4]//span[text()="' + model +'"]'};},
    minYearInput: {xpath: '//table[@class="categorySubTable"]//input[@name="a269_min"]'},
    maxYearInput: {xpath: '//table[@class="categorySubTable"]//input[@name="a269_max"]'},
    colorFilterCombo: {xpath: '//table[@class="categorySubTable"]//tr[11]//div[@class="filtered-select-holder"]/div[1]'},
    colorLabel(color) {return {xpath: '//div[@class="filtered-select-holder"]//div[@class="select-pane"]//label[@for="' + color +'"]'};},
    securityLabel(item) {return {xpath: '//*[@id="categoryMeta"]//label[contains(text(),"' + item + '")]'};},
    searchButton: {css: '.mtdef'}
  },

  waitForPageLoad(){
    I.waitForVisible(this.fields.searchButton);
  },

  openDetailSearchPage(){
    I.click(homePage.fields.detailSearchLink);
    this.waitForPageLoad();
  },


}
