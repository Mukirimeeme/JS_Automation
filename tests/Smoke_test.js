/**
 * Created by innocentmeeme on 7/23/18.
 */
'use strict';

const def = require("../config/test_data.json");

module.exports = {

    '@tags': ['smoke'],

    'Should land on home Page': function (browser) {

        const landingPage = browser.page.landing_page();




        browser.maximizeWindow();

        landingPage.navigateToPage();

        landingPage.waitForPageToLoad();
        browser.end();

    }
}

