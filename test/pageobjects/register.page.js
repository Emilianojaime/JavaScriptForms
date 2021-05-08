const Page = require('./page');

class RegisterPage extends Page {

    //register page selectors
  
    get inputFullname () { return $('#fullname') }
    get inputEmail () { return $('#email') }
    get inputPassword () { return $('#password') }
    get inputRepeatpassword () { return $('#repeat-password') }
    get btnSend () { return $('#send-btn') }
    get btnReset () { return $('#reset-btn') }
    get loginLink () { return $('#loginLink') }
    get missingInputs () { return $('.errorMissingInputs') }

    open() {
        return super.open('form-register.html');
    }

    //buttons actions

    send() {
        this.btnSend.click();
    }

    reset() {
        this.btnReset.click();
    }
}

module.exports = new RegisterPage();
