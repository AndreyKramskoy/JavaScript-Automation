const {Given} = require('@wdio/cucumber-framework');
const {page} = require('../po');

Given('I open {string} page', function(pageName) {
    return page(pageName).open();
});

Given('I click {string} link from the side menu', function (link) {
    return page('dashboard').sideMenu.item(link).click();
  });
  
Given('I click add new doctor button from list header', function () {
    return page('doctors').doctorListHeader.addNewDoctorBtn.click();
  });
  
Given('I click {string} button in modal window', function (button) {
    return page('doctors').addDoctorModal.click(button);
  });
  
Given('I wait {int} seconds', function (timeToWaitInSeconds) {
    return browser.pause(timeToWaitInSeconds * 2000);
  });
  