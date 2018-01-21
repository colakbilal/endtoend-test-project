
Feature('Detail Search');
Before((I) =>{
    I.amOnPage('/');
});

Scenario('test Detail Search', (I,detail_searchPage, homePage, search_resultPage) =>{
    homePage.waitForPageLoad();
    detail_searchPage.openDetailSearchPage();

    I.click(detail_searchPage.fields.categoryVehicleLink);
    I.click(detail_searchPage.fields.categoryMotorcycleLink);

    I.click(detail_searchPage.fields.categoryMotorcycleBrandLink);
    I.pressKey(['Control','End']);
    I.wait(1);
    //Click on 'Yamaha'
    I.click({xpath: '//span[@href="/arama/detayli?category=11757"]'});


    I.click(detail_searchPage.fields.categoryMotorcycleModelLink);

    for (let i=0; i<6; i++)
       {
          I.pressKey('PageDown');

        }

    I.wait(1);
    //Click on 'MT-07 ABS'
    I.click({xpath: '//span[@href="/arama/detayli?category=221415"]'});

    I.scrollTo(detail_searchPage.fields.minYearInput);
    I.fillField(detail_searchPage.fields.minYearInput, '1998');
    I.fillField(detail_searchPage.fields.maxYearInput, '1999');

    I.scrollTo(detail_searchPage.fields.colorFilterCombo);
    I.click(detail_searchPage.fields.colorFilterCombo);
    I.click(detail_searchPage.fields.greyColorLabel);

    I.scrollTo(detail_searchPage.fields.tractionControlLabel);
    I.click(detail_searchPage.fields.tractionControlLabel);

    I.click(detail_searchPage.fields.searchButton);
    search_resultPage.waitForLoadPage();
    search_resultPage.displayNoListingSearchMessage();


});
