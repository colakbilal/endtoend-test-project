'use strict';
Feature('Home Page');

Before((I) =>{
    I.amOnPage('/')
});

Scenario('test existence of some homepage elements', (I,homePage, detail_searchPage) => {
    homePage.waitForPageLoad();

    I.seeElement(homePage.fields.headerLogo);
    I.seeElement(homePage.fields.searchBox);
    I.seeElement(homePage.fields.detailSearchLink);
    I.seeElement(homePage.fields.loginLink);
    I.seeElement(homePage.fields.registerLink);
    I.seeElement(homePage.fields.newClassifiedButton);

    I.seeNumberOfVisibleElements(homePage.fields.showCaseList, 56);

    I.seeElement(homePage.fields.leftMenuCategoryItem('vasita'));
    I.seeElement(homePage.fields.leftMenuCategoryItem('otomobil'));
    I.seeElement(homePage.fields.leftMenuCategoryItem('arazi-suv-pick-up'));
    I.seeElement(homePage.fields.leftMenuCategoryItem('motosiklet'));

});
