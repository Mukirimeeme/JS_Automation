/**
 * Created by innocentmeeme on 7/23/18.
 */
'use strict';


let landingPageCommands ={


    navigateToPage: function () {
            this.api.url('https://www.credomobile.com/');

    },

    waitForPageToLoad: function (){
        return this
            .waitForElementVisible('@landingPage',500000)
            .assert.urlContains('credomobile');

    }

};

module.exports = {
    elements: {
        landingPage: {
            selector: '#logo-d'
        }
    },

    commands: [landingPageCommands]


};