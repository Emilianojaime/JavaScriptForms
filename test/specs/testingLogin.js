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

    expect(LoginPage.noInputs).toBeDisplayed();
  })

  it('Testing Login with valid credentials', () => {

    LoginPage.open();
    browser.pause(2000);
    LoginPage.inputEmail.setValue('emilianojaime123@gmail.com')
    LoginPage.inputPassword.setValue('Testing36010722')
    LoginPage.submit();
    browser.pause(2000);
    expect(LoginPage.divError1).toHaveText('Email: emilianojaime123@gmail.com');
    expect(LoginPage.divError2).toHaveText('Password: Testing36010722');
  });

  // BackEnd / Nota: instale el pack : npm install wdio-intercept-service -D para hacer los test,  requiere modificar wdio.conf.js agregando 'intercept' a services: [...]

  it('Testing Login with valid credentials / Backend Response', () => {

    LoginPage.open();
    browser.pause(2000);
    LoginPage.inputEmail.setValue('emilianojaime123@gmail.com')
    LoginPage.inputPassword.setValue('emiliano12345')
    LoginPage.submit();
    browser.setupInterceptor();
    browser.pause(2000);
    browser.expectRequest('PUT', '/api/login', 400); // expect PUT request to /api/login with 400 statusCode
    var request = browser.getRequests();
    request.response
    // Nota , estoy intentando pero al parecer no logro visualizar el body de la respuesta desde el backend
    // deberia verse con request.response.body pero creo que probablemente wdio no lo este logrando obtener. 
    // Analizando el response se pueden ver lineas como "Could not parse sessionStorage data" por lo cual por 
    // ahora supongo que no podre obtenerla para comparar. Al menos puedo corroborar el pedido de request con
    // el metodo Put.
  });
  
} )