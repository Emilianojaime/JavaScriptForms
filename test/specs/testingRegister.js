const RegisterPage = require('../pageobjects/register.page');

describe('Testing Selectors', () => {

  it('Testing Register Selectors, some error messages and Link doing click', () => {
    RegisterPage.open();
    RegisterPage.inputFullname.click();
    RegisterPage.inputEmail.click();
    RegisterPage.inputPassword.click();
    RegisterPage.inputRepeatPassword.click();
    RegisterPage.btnReset.click();
    RegisterPage.btnSend.click();
    browser.pause(1000);
    RegisterPage.loginLink.click();
    browser.pause(2000);
    expect(browser).toHaveUrlContaining('form-login.html');
  })

  it('Testing Blank Login', () => {

    RegisterPage.open();
    RegisterPage.btnSend.click();
    browser.pause(2000);

    expect(RegisterPage.noInputs).toBeDisplayed();
  })

  it('Testing Register of a valid user', () => {

    RegisterPage.open();
    RegisterPage.inputFullname.setValue('Emiliano Jaime');
    RegisterPage.inputEmail.setValue('emilianojaime123@gmail.com');
    RegisterPage.inputPassword.setValue('Testing36010722');
    RegisterPage.inputRepeatPassword.setValue('Testing36010722');
    RegisterPage.send();
    browser.pause(2000);
    expect(RegisterPage.divsent).toBeDisplayed('Your form has been successfully sent !'); 
    expect(RegisterPage.divError1).toHaveText('Full Name: Emiliano Jaime');
    expect(RegisterPage.divError2).toHaveText('Email: emilianojaime123@gmail.com');
    expect(RegisterPage.divError3).toHaveText('Password: Testing36010722');
  })

  // BackEnd / Nota: instale el pack : npm install wdio-intercept-service -D para hacer los test, requiere modificar wdio.conf.js agregando 'intercept' a services: [...]

  it('Testing Register with valid credentials / Backend Response', () => {

    RegisterPage.open();
    browser.pause(2000);
    RegisterPage.inputFullname.setValue('Jonh Does');
    RegisterPage.inputEmail.setValue('jonhdoe@gmail.com');
    RegisterPage.inputPassword.setValue('Testing36010722');
    RegisterPage.inputRepeatPassword.setValue('Testing36010722');
    RegisterPage.send();
    browser.setupInterceptor();
    browser.pause(2000);
    browser.expectRequest('POST', '/api/register', 400); // expect POST request to /api/foo with 400 statusCode
    var request = browser.getRequests();
    request.response
    // Nota , estoy intentando pero al parecer no logro visualizar el body de la respuesta desde el backend
    // deberia verse con request.response.body pero creo que probablemente wdio no lo este logrando obtener. 
    // Analizando el response se pueden ver lineas como "Could not parse sessionStorage data" por lo cual por 
    // ahora supongo que no podre obtenerla para comparar. Al menos puedo corroborar el pedido de request con
    // el metodo Put.
  });
} )