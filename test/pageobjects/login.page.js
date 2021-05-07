const Page = require('./page');

class LoginPage extends Page {

    //login page selectors
  
    get inputEmail () { return $('#email') };
    get inputPassword () { return $('#password') };
    get registerLink () { return $('registerLink')};
    get btnSubmit () { return $('button[type="submit"]') };

    open() {
        return super.open('form-login.html');
    }

    //butons actions

    submit() {
        this.btnSubmit.click();
    }
}

module.exports = new LoginPage();
