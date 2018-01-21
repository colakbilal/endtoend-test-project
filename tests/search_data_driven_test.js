
Feature('Search Data Driven');
const motorcycleModel = require("../data/motorcycleModel.js")();

Before((I) =>{
    I.amOnPage('/')
});


Data(motorcycleModel).Scenario('test something', (I, current, homePage, search_resultPage) => {
    I.fillField(homePage.fields.searchBox, current.model);
    I.click(homePage.fields.headerSearchSubmitButton);
    //Click on Motosiklet link after search.
    I.click({xpath: '//li[@class="category-level-3517"]//a[text()="Motosiklet"]'});
    search_resultPage.waitForLoadPage();
    let motorAnnouncementCount = (current.count+' ilan');
    I.see(motorAnnouncementCount);
});
