
Feature('Detail Search');
Before((I) =>{
    I.amOnPage('/');
});

var colorMap={
    gri: 'a1331_option_3'
};

Scenario('test Detail Search', (I,detail_searchPage, homePage, detail_search_resultPage) =>{

    homePage.waitForPageLoad();
    detail_searchPage.openDetailSearchPage();

    I.click(detail_searchPage.fields.categoryGeneralLink('Vasıta'));
    I.click(detail_searchPage.fields.categoryVehicleLink('Motosiklet'));

    I.click(detail_searchPage.fields.categoryBrandLink('Tümü'));
    I.pressKey(['Control','End']);
    I.wait(1);
    I.click(detail_searchPage.fields.categoryBrandLink('Yamaha'));

    I.click(detail_searchPage.fields.categoryModelLink('Tümü'));

    for (let i=0; i<6; i++)
       {
          I.pressKey('PageDown');

        }

    I.wait(1);
    I.click(detail_searchPage.fields.categoryModelLink('MT-07 ABS'));

    I.scrollTo(detail_searchPage.fields.minYearInput);
    I.fillField(detail_searchPage.fields.minYearInput, '1998');
    I.fillField(detail_searchPage.fields.maxYearInput, '1999');

    I.scrollTo(detail_searchPage.fields.colorFilterCombo);
    I.click(detail_searchPage.fields.colorFilterCombo);
    I.click(detail_searchPage.fields.colorLabel(colorMap.gri));

    I.scrollTo(detail_searchPage.fields.securityLabel('Çekiş Kontrolü'));
    I.click(detail_searchPage.fields.securityLabel('Çekiş Kontrolü'));

    I.click(detail_searchPage.fields.searchButton);
    detail_search_resultPage.waitForLoadPage();
    detail_search_resultPage.displayNoListingSearchMessage();


});
