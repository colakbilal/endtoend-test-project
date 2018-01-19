
'use strict';

let I;
let homePage;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },

  // insert your locators and methods here

  fields: {
    detailSearchLink: {xpath: '//*[@id="searchSuggestionForm"]//a[@href="https://www.sahibinden.com/arama/detayli"]'},
    showCaseDetailedSearchGrid: {id: 'showCaseDetailedSearchGrid'},
    categoryVehicleLink: {xpath: '//*[@class="category-row"]//*[@class="category-selection-wrapper"]/div[1]//span[contains(text(),"Vasıta")]'},
    categoryMotorcycleLink: {xpath: '//*[@class="category-row"]//*[@class="category-selection-wrapper"]/div[2]//span[contains(text(),"Motosiklet")]'},
    minYearInput: {xpath: '//table[@class="categorySubTable"]//tr[6]//input[@name="a269_min"]'},
    maxYearInput: {xpath: '//table[@class="categorySubTable"]//tr[6]//input[@name="a269_max"]'},
    colorFilterCombo: {xpath: '//table[@class="categorySubTable"]//tr[13]//div[@class="filtered-select-holder"]/div[1]'},
    greyColorLabel: {xpath: '//table[@class="categorySubTable"]//tr[13]//div[@class="filtered-select-holder"]//div[@class="select-pane"]//label[@for="a1331_option_3"]'},
    tractionControlLabel: {xpath: '//*[@id="categoryMeta"]//div[@class="accordion"]//label[@for="a106200"]'},
    makeSearchButton: {css: '.mtdef'}
  },

  waitForPageLoad(){
    I.waitForVisible(this.fields.showCaseDetailedSearchGrid);
  },

  openDetailSearchPage(){
    I.click(this.fields.detailSearchLink);
    //???I.click(homePage.fields.detailSearchLink);
    this.waitForPageLoad();
  },
/*  ????
  chooseItemFromCategory(item){
    let list = yield I.grabAttributeFrom('//*[@class="category-row"]//*[@class="category-selection-wrapper"]/div[3]//li','text');
      for (var i=0; i<list; i++)
         {
           if (list[i] == item)
             {
                I.click(item);
             }
         }
  },
  */

}
