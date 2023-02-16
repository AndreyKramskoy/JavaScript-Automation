const {Then} = require('@wdio/cucumber-framework');
const compareText = require("./utils/compare-text");

Then('Page title should {string}', async function(shouldBeParametr, titleText){
    const pageTitle = await browser.pageTitle();
    return compareText(pageTitle, titleText, shouldBeParametr);
});