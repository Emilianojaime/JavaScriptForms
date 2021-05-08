const { missingInputs } = require('../pageobjects/login.page');
const LoginPage = require('../pageobjects/login.page');

describe('Testing Selectors', () => {

  it('Testing Register Selectors, some error messages and Link doing click', () => {
    LoginPage.open();
    LoginPage.inputEmail.click();
    LoginPage.inputPassword.click();
    LoginPage.btnSubmit.click();
    LoginPage.registerLink.click();
    browser.pause(2000);

    expect(browser).toHaveUrlContaining('form-register.html');
    
  })

  it('Testing Blank Login', () => {
    LoginPage.open();
    LoginPage.btnSubmit.click();
    browser.pause(2000);

    expect(missingInputs).toBeDisplayed();
  })
} )