const RegisterPage = require('../pageobjects/register.page');

describe('Testing Selectors', () => {

  it('Testing Register Selectors doing click', () => {
    RegisterPage.open();
    RegisterPage.inputFullname.click();
    RegisterPage.inputEmail.click();
    RegisterPage.inputPassword.click();
    RegisterPage.inputRepeatpassword.click();
    RegisterPage.btnReset.click();
    RegisterPage.btnSend.click();
    browser.pause(1000);
    RegisterPage.loginLink.click();
    browser.pause(2000);
    expect(browser).toHaveUrl('https://emilianojaime.github.io/JavaScriptForms/html/form-login.html')
  })
} )