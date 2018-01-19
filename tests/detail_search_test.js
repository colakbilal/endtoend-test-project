
Feature('Detail Search');
Before((I) =>{
    I.amOnPage('/');
});

Scenario('test Detail Search', (I,detail_searchPage, homePage, search_resultPage) => {
    homePage.waitForPageLoad();
    detail_searchPage.openDetailSearchPage();

    I.click(detail_searchPage.fields.categoryVehicleLink);
    I.click(detail_searchPage.fields.categoryMotorcycleLink);
    //??detail_searchPage.chooseItemFromCategory('Yamaha');
    //
    I.scrollTo(detail_searchPage.fields.minYearInput);
    I.fillField(detail_searchPage.fields.minYearInput, '1998');
    I.fillField(detail_searchPage.fields.maxYearInput, '1999');

    I.scrollTo(detail_searchPage.fields.colorFilterCombo);
    I.click(detail_searchPage.fields.colorFilterCombo);
    I.click(detail_searchPage.fields.greyColorLabel);

    I.scrollTo(detail_searchPage.fields.tractionControlLabel);
    I.click(detail_searchPage.fields.tractionControlLabel);

    I.click(detail_searchPage.fields.makeSearchButton);
    search_resultPage.waitForLoadPage();
    I.see('Arama filtrelerinize uygun ilan bulunamadı.');


});
