const expressions = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, // 8 digitos al menos 1 letra y 1 numero.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}
const form = document.getElementById('form');            // Formulario 
const inputs = document.querySelectorAll('#form input'); // inputs
const labels = document.querySelectorAll('#form label'); // labels	
const login = document.querySelector('#form #login-btn');// login button
const registerLink = document.querySelector('#form a'); // Link to form
const numberOfFields = 2;															 // amount of fields
const divError = document.querySelector('#div_for_errors'); // div to use for errors of elements missing
/*-------------------------- Funciones para Validaciones de existencia del formulario -----------------------------*/
function formComponentsCheck() {
	validateFormResult = formExist();
	validateLoginResult = loginButtonExist();
	validateLinkResult = linkToRegisterPage();
	validateFieldsResult = amountOfFields();
	validateButtonTextResult = buttonText();
	labelsAndFields();
	if(validateFormResult && validateLoginResult && validateLinkResult && validateFieldsResult && validateButtonTextResult) {
		var textValidationsPassed = document.createTextNode('Validations results: every validation has passed');
    divError.appendChild(textValidationsPassed);
		divError.classList.add('check-successful');	
	}
}
function formExist() {   // preguntar si formulario existe
	if(form) {                                    
		console.log('Form exists');
		return true;
	}else {
			var textErrorForm = document.createTextNode('Form is Missing');
			var pTextErrorForm = document.createElement('p');
			pTextErrorForm.appendChild(textErrorForm);
			divError.appendChild(pTextErrorForm);
			divError.classList.add('check-unsuccessful');	
			return false;
	}
}
function loginButtonExist() {   // preguntar si boton login existe
	if(login) {                                    
		console.log('Login Button exists');
		return true;
	}else {
			var textErrorLogin = document.createTextNode('Login Button is Missing');
			var pTextErrorLogin = document.createElement('p');
			pTextErrorLogin.appendChild(textErrorLogin);
			divError.appendChild(pTextErrorLogin);
			divError.classList.add('check-unsuccessful');	
			return false;
	}
}
function linkToRegisterPage() {   // preguntar si link a la pagina de registro existe 
	if(registerLink === null) {                                           
		console.log('The link does not exist');
		var textErrorLink = document.createTextNode('Link to login Page is Missing');
		var pTextErrorLink = document.createElement('p');
		pTextErrorLink.appendChild(textErrorLink);
    	divError.appendChild(pTextErrorLink);
		divError.classList.add('check-unsuccessful');	
		return false;
	}else {
			console.log('Link exist');	
			return true;
	}
} 
function amountOfFields() {   // preguntar si la cantidad de campos es la correcta
	if(inputs.length == numberOfFields) {
		console.log('The number of fields (inputs) is correct');
		return true;
	}else {
			var textErrorAmountOfFields = document.createTextNode('Input Fields are Missing');
			var pTextErrorAmountOfFields = document.createElement('p');
			pTextErrorAmountOfFields.appendChild(textErrorAmountOfFields);
			divError.appendChild(pTextErrorAmountOfFields);
			divError.classList.add('check-unsuccessful');	
			return false;
	}
}
function buttonText() {   // preguntar si el contenido del boton es la correcta
	if(login.innerText == "Login") {
		console.log('The content of the button "Login" is correct');	
		return true;
	}else if(login.innerText !== "Login") {
			var textErrorLoginContent = document.createTextNode('Content of "Login" button is incorrect');
			var pTextErrorLoginContent = document.createElement('p');
			pTextErrorLoginContent.appendChild(textErrorLoginContent);
			divError.appendChild(pTextErrorLoginContent);
			divError.classList.add('check-unsuccessful');
			return false;
  }
}
function labelsAndFields() {   // preguntar si las labels tienen los campos asociados
	for(var i = 0; i < numberOfFields; i++) {
		if(labels[i].control === null) {
			console.log('The tag', i,'does not have an associated field (Error)');
			var textErrorReset = document.createTextNode('There are a Tag with no input associated');
			var pTextErrorReset = document.createElement('p');
			pTextErrorReset.appendChild(textErrorReset);
      divError.appendChild(pTextErrorReset);
		  divError.classList.add('check-unsuccessful');
		}
		
	}
}
/*------------------------------ Funciones para Validaciones dentro del formulario ---------------------------------*/
const validationForm = (e) => {
	switch (e.target.name) {
		case 'email':
			if(expressions.email.test(e.target.value)){
				document.getElementById('group__email').classList.remove('form__group-error');
				document.querySelector('form .form__message').classList.remove('form__message-active');
				document.querySelector('form .error__email').classList.remove('error__email-active');
			} else {
					document.getElementById('group__email').classList.add('form__group-error');
					document.querySelector('form .form__message').classList.add('form__message-active');
					document.querySelector('form .error__email').classList.add('error__email-active');
			}	
		break;
		case 'password':
			if(expressions.password.test(e.target.value)){
				document.getElementById('group__password').classList.remove('form__group-error');
				document.querySelector('form .form__message').classList.remove('form__message-active');
				document.querySelector('form .error__password').classList.remove('error__password-active');
			} else {
					document.getElementById('group__password').classList.add('form__group-error');
					document.querySelector('form .form__message').classList.add('form__message-active');
					document.querySelector('form .error__password').classList.add('error__password-active');
			}	
		break;
	}
}
const ClearFields = (e) => {
	switch (e.target.name) {
		case 'email':
			document.getElementById('group__email').classList.remove('form__group-error');
			document.querySelector('form .form__message').classList.remove('form__message-active');
			document.querySelector('form .error__email').classList.remove('error__email-active');
		break;
		case 'password':
			document.getElementById('group__password').classList.remove('form__group-error');
			document.querySelector('form .form__message').classList.remove('form__message-active');
			document.querySelector('form .error__password').classList.remove('error__password-active');
		break;
	}
}
/*------------------------------ Funciones para request -----------------------------------------------------------*/
function get_email() {
	fetch('https://jsonplaceholder.typicode.com/users?email='+inputs[1].value)
	.then (rsp => rsp.json())
	.then (data => {
		console.log(data)
	});
}
/*-------------------------------------------------------------------------------------------------------------------*/
inputs.forEach((input) => { 
	input.addEventListener('blur', validationForm);
});
inputs.forEach((input) => {
	input.addEventListener('focus', ClearFields);
});
form.addEventListener('submit', (e) => {
    e.preventDefault();
		if ((document.getElementById('email').value == '') || (document.getElementById('password').value == '')) {
			document.querySelector('form .form__message').classList.add('form__message-active');
			document.querySelector('form .form__message .error__missing-inputs').classList.add('error__missing-inputs-active')
			setTimeout(() => {
				document.querySelector('form .form__message').classList.remove('form__message-active');
				document.querySelector('form .form__message .error__missing-inputs').classList.remove('error__missing-inputs-active')
			}, 6000);
		}else if ((document.getElementById('email').value !== '') && (document.getElementById('password').value !== '')) {
				get_email();
				var pTextEmailSend= document.createElement('p');
				var pTextPasswordSend= document.createElement('p');
				var textEmailShow = document.createTextNode('Email: ')
				var textPasswordShow = document.createTextNode('Password: ')
				var textEmailSend = document.createTextNode(inputs[0].value)
				var textPasswordSend = document.createTextNode(inputs[1].value)
				pTextEmailSend.appendChild(textEmailShow);
				pTextEmailSend.appendChild(textEmailSend);
				pTextPasswordSend.appendChild(textPasswordShow);
				pTextPasswordSend.appendChild(textPasswordSend);
				divError.appendChild(pTextEmailSend);
				divError.appendChild(pTextPasswordSend);
				form.reset();
		}
});
/*---------------------------------------------------------------------------------------------------------------------*/
