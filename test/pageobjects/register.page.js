const Page = require('./page');

class RegisterPage extends Page {

    //register page selectors
  
    get inputFullname () { return $('#fullname') };
    get inputEmail () { return $('#email') };
    get inputPassword () { return $('#password') };
    get inputRepeatPassword () { return $('#repeat-password') };
    get btnSend () { return $('#send-btn') };
    get btnReset () { return $('#reset-btn') };
    get loginLink () { return $('#loginLink') };
    get noInputs () { return $('.errorMissingInputs') }
    get divError1 () { return $('#div_for_errors').$('p=Full Name: Emiliano Jaime')};
    get divError2 () { return $('#div_for_errors').$('p=Email: emilianojaime123@gmail.com')};
    get divError3 () { return $('#div_for_errors').$('p=Password: Testing36010722')};
    get divsent () { return $('.form__message-sent')};
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
