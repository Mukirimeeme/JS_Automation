/**
 * Created by innocentmeeme on 7/23/18.
 */
'use strict';


let landingPageCommands ={


    navigateToPage: function () {
            this.api.url('http://192.168.48.47:3000/');

    },

    navigateToAddToCartPage: function () {
        this.api.url('https://react-shopping-cart-67954.firebaseapp.com/');

    },

    waitForPageToLoad: function (){
        return this
            .waitForElementVisible('@homeHeader',5000);


    },
    productsOnPage: function () {
        return this
            .waitForElementVisible('@numberOfProducts',5000)
            .getText('@numberOfProducts');
            //.count('@numberOfProducts');
            //.getElementsByClassName('shelf-item').item(4);
            //.getElementSize('@numberOfProducts');

    },

    sleep: function(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    },
    count: function () {
    return this
        //.sleep(3000)
        .getElementSize('@numberOfProducts');
        //.then(function(result) {
        //return result[0];
   // });
}

};

module.exports = {
    elements: {
        home: {
            selector: '#root > div > div > div > ul > li:nth-child(1) > a'
        },
        login: {
            selector: '#root > div > div > div > ul > li:nth-child(2) > a'
        },
        register: {
            selector: '#root > div > div > div > ul > li:nth-child(3) > a'
        },
        forgotPassword: {
            selector: '#root > div > div > div > ul > li:nth-child(4) > a'

        },
        homeHeader: {
            selector: '//h2[contains(text(), "Home")]',
            locateStrategy: 'xpath'

        },











        numberOfProducts:{
            selector:'//div[@class="shelf-item"]',
            locateStrategy: 'xpath'
        }
    },

    commands: [landingPageCommands]


};