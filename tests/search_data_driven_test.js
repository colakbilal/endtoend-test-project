
Feature('Search Data Driven');
const motorcycleModel = require("../data/motorcycleModel.js")();

Before((I) =>{
    I.amOnPage('/')
});


Data(motorcycleModel).Scenario('test something', (I, current, homePage, detail_search_resultPage, general_search_resultPage) => {
    I.fillField(homePage.fields.searchBox, current.model);
    I.click(homePage.fields.headerSearchSubmitButton);
    I.click(general_search_resultPage.fields.vehiclesCategoryResult('Motosiklet'));
    detail_search_resultPage.waitForLoadPage();
    let motorAnnouncementCount = (current.count+' ilan');
    I.see(motorAnnouncementCount);
});
