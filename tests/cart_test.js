/**
 * Created by innocentmeeme on 7/24/18.
 */


const def = require("../config/test_data.json");

module.exports = {

    '@tags': ['prod'],

    'Count number of products on page': function (browser) {

        const landingPage = browser.page.landing_page();


        browser.maximizeWindow();
        landingPage.navigateToAddToCartPage();
        landingPage.productsOnPage();

    }
}
