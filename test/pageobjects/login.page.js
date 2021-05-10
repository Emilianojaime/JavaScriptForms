const Page = require('./page');

class LoginPage extends Page {

    //login page selectors
  
    get inputEmail () { return $('#email') };
    get inputPassword () { return $('#password')};
    get registerLink () { return $('#registerLink')};
    get btnSubmit () { return $('button[type="submit"]')};
    get noInputs () { return $('.errorMissingInputs')};
    get divError1 () { return $('#div_for_errors').$('p=Email: emilianojaime123@gmail.com')}; 
    get divError2 () { return $('#div_for_errors').$('p=Password: Testing36010722')};

    open() {
        return super.open('form-login.html');
    }

    //butons actions

    submit() {
        this.btnSubmit.click();
    }
}

module.exports = new LoginPage();
