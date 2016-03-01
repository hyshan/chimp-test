module.exports = function() {

  this.Given(/^I have visited NTA XYZ$/, function () {
    browser.url('http://192.168.30.95/xyz/');
  });

  this.When(/^I press Enter Key$/, function () {
    browser.keys(['Enter']);
  });

  this.Then(/^I see "([^"]*)" page$/, function (arg1) {
    expect(browser.getText('div[style="background-color: yellow;"] h1')).toEqual(arg1);
  });

  this.Given(/^I have visited NTA XYZ EAC108E$/, function () {
     browser.url('http://192.168.30.95/xyz/EAC108E/');
  });

  this.When(/^I press create button$/, function () {
    browser.setValue('input[name="ped"]', "123");
    browser.click('.btn-primary[data-ng-click="create()"]');
  });

  this.When(/^wait for user interaction finish$/, {timeout: 90000}, function () {
    browser.waitForVisible('button[data-bb-handler="確定"]', 90000);
    browser.click('button[data-bb-handler="確定"]');
  });

  this.Then(/^I see "([^"]*)"$/, {timeout: 90000}, function (arg1) {
    
    browser.waitForVisible('#alertArea span h4', 90000)
    browser.waitUntil(function(){
       if ( browser.getText('#alertArea span h4') == arg1) {
           return true;
       } else {
           return false;
       }  
    }, 90000);
  });

  this.When(/^I press search button$/, function () {
    browser.click('.btn-primary[data-ng-click="query()"]');
  });
  
  this.When(/^I press update button$/, function () {
    browser.waitForVisible('div.blockUI.blockOverlay', 5000, true);
    browser.setValue('input[name="nam"]', "567");
    browser.click('.btn-primary[data-ng-click="save()"]');
  });
  
  this.When(/^I press delete button$/, function () {
    browser.waitForVisible('div.blockUI.blockOverlay', 5000, true);
    browser.click('.btn-primary[data-ng-click="remove()"]');
  });

}
