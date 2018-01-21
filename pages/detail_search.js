
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
    categoryVehicleLink: {xpath: '//*[@class="category-row"]//*[@class="category-selection-wrapper"]/div[1]//span[contains(text(),"Vasıta")]'},
    //categoryVehicleLink(parameter) {return '//*[@class="category-row"]//*[@class="category-selection-wrapper"]/div[1]//span[text()=${parameter}]';},
    categoryMotorcycleLink: {xpath: '//*[@class="category-row"]//*[@class="category-selection-wrapper"]/div[2]//span[contains(text(),"Motosiklet")]'},
    categoryMotorcycleBrandLink: {xpath: '//*[@class="category-row"]//*[@class="category-selection-wrapper"]/div[3]//span[text()="Tümü"]'},
    categoryMotorcycleModelLink: {xpath: '//*[@class="category-row"]//*[@class="category-selection-wrapper"]/div[4]//span[text()="Tümü"]'},
    minYearInput: {xpath: '//table[@class="categorySubTable"]//input[@name="a269_min"]'},
    maxYearInput: {xpath: '//table[@class="categorySubTable"]//input[@name="a269_max"]'},
    colorFilterCombo: {xpath: '//table[@class="categorySubTable"]//tr[11]//div[@class="filtered-select-holder"]/div[1]'},
    greyColorLabel: {xpath: '//div[@class="filtered-select-holder"]//div[@class="select-pane"]//label[@for="a1331_option_3"]'},
    tractionControlLabel: {xpath: '//*[@id="categoryMeta"]//div[@class="accordion"]//label[@for="a106200"]'},
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
