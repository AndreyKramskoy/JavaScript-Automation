const {Then} = require('@wdio/cucumber-framework');
const compareText = require("./utils/compare-text");
const {page} = require('../po');

Then('Page title should {string} {string}', async function(shouldBeParametr, titleText){
    const pageTitle = await browser.getTitle();
    return compareText(pageTitle, titleText, shouldBeParametr);
});

Then(/^modal window should( not)? be displayed$/, async param => {
    let assert = expect(page('doctors').addDoctorModal.rootEl);
    if (param) {
      assert = assert.not;
    }
    return assert.toBeDisplayed();
  });
  
  