const expressions = {
	name: /^(?!.{52,})[a-zA-Z\.\'\-]{2,50}(?: [a-zA-Z\.\'\-]{4,50})+$/, // Nombre con al menos 2 partes donde la primera puede tener minimo de 2 caracteres maximo de 50 y las siguientes partes puede tener minumo de 4 caracteres y maximo de 50 (como minimo el nombre tendra 6 caracteres)
	password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, // 8 digitos al menos 1 letra y 1 numero
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}
const fields = {
	fullname: false,
	email: false,
	password: false,
	repeatPassword: false
}
const form = document.getElementById('form');            // Formulario 
const inputs = document.querySelectorAll('#form input'); // inputs
const labels = document.querySelectorAll('#form label'); // labels	
const submit = document.querySelector('#form #send-btn');// submit button
const reset = document.querySelector('#form #reset-btn');// reset button
const loginLink = document.querySelector('#form a');    // Link to Login page
const numberOfFields = 4;							     // amount of fields
const divError = document.querySelector('#div_for_errors'); // div to use for errors of elements missing
/*-------------------------- Funciones para Validaciones de existencia del formulario -----------------------------*/
function formComponentsCheck() {
	validateFormResults = formExist();
	validateSendResult = sendButtonExist();
	validateResetResult = resetButtonExist();
	validateLinkResult = linkToLoginPage();
	validateFieldsResult = amount_of_fields();
	validateButtonTextResult = button_text();
	labelsAndFields();
	if(validateFormResults && validateSendResult && validateResetResult && validateLinkResult && validateFieldsResult && validateButtonTextResult) {
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
	}
}
function sendButtonExist() {   // preguntar si boton existe
	if(submit) {                                    
		console.log('Send button exists');
		return true;
	}else {
			var textErrorSubmit = document.createTextNode('Send button is Missing');
			var pTextErrorSubmit = document.createElement('p');
			pTextErrorSubmit.appendChild(textErrorSubmit);
			divError.appendChild(pTextErrorSubmit);
			divError.classList.add('check-unsuccessful');	
			return false;
	}
}
function resetButtonExist() {   // preguntar si boton reset existe
	if(reset) {                                    
		console.log('Reset Button exists');
		return true;
	}else {
			var textErrorReset = document.createTextNode('Reset button is Missing');
			var pTextErrorReset = document.createElement('p');
			pTextErrorReset.appendChild(textErrorReset);
			divError.appendChild(pTextErrorReset);
			divError.classList.add('check-unsuccessful');		
			return false;
	}
}
function linkToLoginPage() {   // preguntar si link a la pagina de login existe
	if(loginLink === null) {  
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
function amount_of_fields() {   // preguntar si la cantidad de inputs es la correcta
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
function button_text() {   // preguntar si el contenido de los botones es el correcto
	if(submit.innerText == "Send" && reset.innerText == "Reset Fields" ) {
		console.log('The content of the button "Send" and "Reset" is correct');
		return true;	
	}else if(submit.innerText !== "Send" && reset.innerText !== "Reset Fields") {
			var textErrorSendContent = document.createTextNode('Content of "Send" button is incorrect');
			var pTextErrorSendContent = document.createElement('p');
			pTextErrorSendContent.appendChild(textErrorSendContent)
			divError.appendChild(pTextErrorSendContent);
			divError.classList.add('check-unsuccessful');
			var textErrorResetContent = document.createTextNode('Content of "Reset" button is incorrect');
			var pTextErrorResetContent = document.createElement('p');
			pTextErrorResetContent.appendChild(textErrorResetContent);
			divError.appendChild(pTextErrorResetContent);
			divError.classList.add('check-unsuccessful');
			return false;
	}else if(submit.innerText !== "Send") {
				var textErrorSendContent = document.createTextNode('Content of "Send" button is incorrect');
				var pTextErrorSendContent = document.createElement('p');
				pTextErrorSendContent.appendChild(textErrorSendContent)
				divError.appendChild(pTextErrorSendContent);
				divError.classList.add('check-unsuccessful');
				return false;
	}else {
					var textErrorResetContent = document.createTextNode('Content of "Reset" button is incorrect');
					var pTextErrorResetContent = document.createElement('p');
					pTextErrorResetContent.appendChild(textErrorResetContent);
					divError.appendChild(pTextErrorResetContent);
					divError.classList.add('check-unsuccessful');
					return false;
					
	}
	
}
function labelsAndFields() {   // preguntar si las labels tienen campos asociados                                   
	for(var i = 0; i < numberOfFields; i++) {
		if(labels[i].control == null) {
			console.log('The tag', i,'does not have an associated field (Error)');
			var textErrorLabels = document.createTextNode('There are a Tag with no input associated');
			var pTextErrorLabels = document.createElement('p');
			pTextErrorLabels.appendChild(textErrorLabels);
      divError.appendChild(pTextErrorLabels);
		  divError.classList.add('check-unsuccessful');
		}
	}
}
/*------------------------------ Funciones para Validaciones dentro del formulario ---------------------------------*/
const validationForm = (e) => {
	switch (e.target.name) {
		case 'fullname':
			if(expressions.name.test(e.target.value)){
				document.getElementById('group__fullname').classList.remove('form__group-error');
				document.querySelector('form .form__message').classList.remove('form__message-active');
				document.querySelector('form .error__name').classList.remove('error__name-active');
				fields['fullname'] = true;
			} else {
					document.getElementById('group__fullname').classList.add('form__group-error');
					document.querySelector('form .form__message').classList.add('form__message-active');
					document.querySelector('form .error__name').classList.add('error__name-active');
					fields['fullname'] = false;
			}	
		break;
		case 'email':
			if(expressions.email.test(e.target.value)){
				document.getElementById('group__email').classList.remove('form__group-error');
				document.querySelector('form .form__message').classList.remove('form__message-active');
				document.querySelector('form .error__email').classList.remove('error__email-active');
				fields['email'] = true;
			} else {
					document.getElementById('group__email').classList.add('form__group-error');
					document.querySelector('form .form__message').classList.add('form__message-active');
					document.querySelector('form .error__email').classList.add('error__email-active');
					fields['email'] = false;
			}	
		break;
		case 'password':
			if(expressions.password.test(e.target.value)){
				document.getElementById('group__password').classList.remove('form__group-error');
				document.querySelector('form .form__message').classList.remove('form__message-active');
				document.querySelector('form .error__password').classList.remove('error__password-active');
				fields['password'] = true;
			} else {
					document.getElementById('group__password').classList.add('form__group-error');
					document.querySelector('form .form__message').classList.add('form__message-active');
					document.querySelector('form .error__password').classList.add('error__password-active');
					fields['password'] = false;
			}	
		break;
		case 'repeat-password':
			const inputpasssword1 = document.getElementById('password');
			const inputpasssword2 = document.getElementById('repeat-password');
			if(inputpasssword1.value == inputpasssword2.value){
				document.getElementById('group__repeat-password').classList.remove('form__group-error');
				document.querySelector('form .form__message').classList.remove('form__message-active');
				document.querySelector('form .error__repeat-password').classList.remove('error__repeat-password-active');
				fields['repeatPassword'] = true;	
			} else {
					document.getElementById('group__repeat-password').classList.add('form__group-error');
					document.querySelector('form .form__message').classList.add('form__message-active');
					document.querySelector('form .error__repeat-password').classList.add('error__repeat-password-active');
					fields['repeatPassword'] = false;		
			}	
		break;
	}
}
const ClearFields = (e) => {
	switch (e.target.name) {
		case 'fullname':
				document.getElementById('group__fullname').classList.remove('form__group-error');
				document.querySelector('form .form__message').classList.remove('form__message-active');
				document.querySelector('form .error__name').classList.remove('error__name-active');
				fields['fullname'] = true;
		break;
		case 'email':
				document.getElementById('group__email').classList.remove('form__group-error');
				document.querySelector('form .form__message').classList.remove('form__message-active');
				document.querySelector('form .error__email').classList.remove('error__email-active');
				fields['email'] = true;
		break;
		case 'password':
				document.getElementById('group__password').classList.remove('form__group-error');
				document.querySelector('form .form__message').classList.remove('form__message-active');
				document.querySelector('form .error__password').classList.remove('error__password-active');
				fields['password'] = true;
		break;
		case 'repeat-password':
				document.getElementById('group__repeat-password').classList.remove('form__group-error');
				document.querySelector('form .form__message').classList.remove('form__message-active');
				document.querySelector('form .error__repeat-password').classList.remove('error__repeat-password-active');
				fields['repeatPassword'] = true;	
		break;
	}
}
/*------------------------------ Funciones para request -----------------------------------------------------------*/
async function handleRegister() {
	let fullnameValue = document.getElementById('fullname').value;
	let emailValue = document.getElementById('email').value
	let passwordValue = document.getElementById('password').value
	/* const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({username: fullnameValue, email: emailValue, password: passwordValue})
	} */

	const res = await fetch('http://localhost:4000/api/register', {
		method: 'POST',
		mode: 'cors',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			username: fullnameValue, 
			email: emailValue, 
			password: passwordValue})
	});

	const data = await res.json();
	console.log (data);
	
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
		if (fields.fullname && fields.email && fields.password && fields.repeatPassword) {
			handleRegister();
			document.querySelector('form .form__message-sent').classList.add('form__message-sent-active');
			setTimeout(() => {
			document.querySelector('form .form__message-sent').classList.remove('form__message-sent-active');
			}, 6000);
			var pTextFullnameSend= document.createElement('p');
			var pTextEmailSend= document.createElement('p');
			var pTextPasswordSend= document.createElement('p');
			var textFullnameShow = document.createTextNode('Full Name: ')
			var textEmailShow = document.createTextNode('Email: ')
			var textPasswordShow = document.createTextNode('Password: ')
			var textFullnameSend = document.createTextNode(inputs[0].value);
			var textEmailSend = document.createTextNode(inputs[1].value)
			var textPasswordSend = document.createTextNode(inputs[2].value)
			pTextFullnameSend.appendChild(textFullnameShow);
			pTextFullnameSend.appendChild(textFullnameSend);
			pTextEmailSend.appendChild(textEmailShow);
			pTextEmailSend.appendChild(textEmailSend);
			pTextPasswordSend.appendChild(textPasswordShow);
			pTextPasswordSend.appendChild(textPasswordSend);
			divError.appendChild(pTextFullnameSend);
			divError.appendChild(pTextEmailSend);
			divError.appendChild(pTextPasswordSend);
			form.reset();
			setTimeout(() => {
				divError.removeChild(pTextFullnameSend);
				divError.removeChild(pTextEmailSend);
				divError.removeChild(pTextPasswordSend);
			}, 6000);

		} else {
				document.querySelector('form .form__message').classList.add('form__message-active');
				document.querySelector('form .form__message .error__missing-inputs').classList.add('error__missing-inputs-active')
				setTimeout(() => {
					document.querySelector('form .form__message').classList.remove('form__message-active');
					document.querySelector('form .form__message .error__missing-inputs').classList.remove('error__missing-inputs-active');
			}, 6000);
		}
});
form.addEventListener('reset', (e) => {
	document.querySelector('form .form__message').classList.remove('form__message-active');
  document.getElementById('group__fullname').classList.remove('form__group-error');
	document.querySelector('form .error__name').classList.remove('error__name-active');
	document.getElementById('group__email').classList.remove('form__group-error');
	document.querySelector('form .error__email').classList.remove('error__email-active');
	document.getElementById('group__password').classList.remove('form__group-error');
	document.querySelector('form .error__password').classList.remove('error__password-active');
	document.getElementById('group__repeat-password').classList.remove('form__group-error');
	document.querySelector('form .error__repeat-password').classList.remove('error__repeat-password-active');
});


/*---------------------------------------------------------------------------------------------------------------------*/

