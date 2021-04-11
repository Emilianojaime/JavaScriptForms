const expressions = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, // 8 digitos al menos 1 letra y 1 numero.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}
const form = document.getElementById('form');            // Formulario 
const inputs = document.querySelectorAll('#form input'); // inputs
const labels = document.querySelectorAll('#form label'); // labels	
const login = document.querySelector('#form #login-btn');// login button
const register_link = document.querySelector('#form a'); // Link to form
const number_of_fields = 2;															 // amount of fields
const div_error = document.querySelector('#div_for_errors'); // div to use for errors of elements missing
/*-------------------------- Funciones para Validaciones de existencia del formulario -----------------------------*/
function form_components_check() {
	valite_form_resut = formExist();
	validate_login_result = loginButtonExist();
	validate_link_result = link_to_register_page();
	validate_fields_result = amount_of_fields();
	validate_button_text_result = button_text();
	labels_and_fields();
	if(valite_form_resut && validate_login_result && validate_link_result && validate_fields_result && validate_button_text_result) {
		var text_validations_passed = document.createTextNode('Validations results: every validation has passed');
    div_error.appendChild(text_validations_passed);
		div_error.classList.add('check-successful');	
	}
}
function formExist() {   // preguntar si formulario existe
	if(form) {                                    
		console.log('Form exists');
		return true;
	}else {
			var text_error_form = document.createTextNode('Form is Missing');
			var p_text_error_form = document.createElement('p');
			p_text_error_form.appendChild(text_error_form);
			div_error.appendChild(p_text_error_form);
			div_error.classList.add('check-unsuccessful');	
			return false;
	}
}
function loginButtonExist() {   // preguntar si boton login existe
	if(login) {                                    
		console.log('Login Button exists');
		return true;
	}else {
			var text_error_login = document.createTextNode('Login Button is Missing');
			var p_text_error_login = document.createElement('p');
			p_text_error_login.appendChild(text_error_login);
			div_error.appendChild(p_text_error_login);
			div_error.classList.add('check-unsuccessful');	
			return false;
	}
}
function link_to_register_page() {   // preguntar si link a la pagina de registro existe 
	if(register_link === null) {                                           
		console.log('The link does not exist');
		var text_error_link = document.createTextNode('Link to login Page is Missing');
		var p_text_error_link = document.createElement('p');
		p_text_error_link.appendChild(text_error_link);
    	div_error.appendChild(p_text_error_link);
		div_error.classList.add('check-unsuccessful');	
		return false;
	}else {
			console.log('Link exist');	
			return true;
	}
} 
function amount_of_fields() {   // preguntar si la cantidad de campos es la correcta
	if(inputs.length == number_of_fields) {
		console.log('The number of fields (inputs) is correct');
		return true;
	}else {
			var text_error_amount_of_fields = document.createTextNode('Input Fields are Missing');
			var p_text_error_amount_of_fields = document.createElement('p');
			p_text_error_amount_of_fields.appendChild(text_error_amount_of_fields);
			div_error.appendChild(p_text_error_amount_of_fields);
			div_error.classList.add('check-unsuccessful');	
			return false;
	}
}
function button_text() {   // preguntar si el contenido del boton es la correcta
	if(login.innerText == "Login") {
		console.log('The content of the button "Login" is correct');	
		return true;
	}else if(login.innerText !== "Login") {
			var text_error_login_content = document.createTextNode('Content of "Login" button is incorrect');
			var p_text_error_login_content = document.createElement('p');
			p_text_error_login_content.appendChild(text_error_login_content);
			div_error.appendChild(p_text_error_login_content);
			div_error.classList.add('check-unsuccessful');
			return false;
  }
}
function labels_and_fields() {   // preguntar si las labels tienen los campos asociados
	for(var i = 0; i < number_of_fields; i++) {
		if(labels[i].control === null) {
			console.log('The tag', i,'does not have an associated field (Error)');
			var text_error_reset = document.createTextNode('There are a Tag with no input associated');
			var p_text_error_reset = document.createElement('p');
			p_text_error_reset.appendChild(text_error_reset);
      div_error.appendChild(p_text_error_reset);
		  div_error.classList.add('check-unsuccessful');
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
				var p_text_email_send= document.createElement('p');
				var p_text_password_send= document.createElement('p');
				var text_email_show = document.createTextNode('Email: ')
				var text_password_show = document.createTextNode('Password: ')
				var text_email_send = document.createTextNode(inputs[0].value)
				var text_password_send = document.createTextNode(inputs[1].value)
				p_text_email_send.appendChild(text_email_show);
				p_text_email_send.appendChild(text_email_send);
				p_text_password_send.appendChild(text_password_show);
				p_text_password_send.appendChild(text_password_send);
				div_error.appendChild(p_text_email_send);
				div_error.appendChild(p_text_password_send);
				form.reset();
		}
});
/*---------------------------------------------------------------------------------------------------------------------*/
