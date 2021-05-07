const LoginPage = require('../pageobjects/login.page');

describe('Testing Selectors', () => {

  it('Testing Register Selectors doing click', () => {
    LoginPage.open();
    LoginPage.inputEmail.click();
    LoginPage.inputPassword.click();
    LoginPage.btnSubmit.click();
    LoginPage.registerLink.click();
    browser.pause(2000);

    expect(browser).toHaveUrl('https://emilianojaime.github.io/JavaScriptForms/html/form-register.html')
    
  })
} )