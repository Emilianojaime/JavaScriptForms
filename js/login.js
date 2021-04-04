const expressions = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const form = document.getElementById('form');            // Formulario 
const inputs = document.querySelectorAll('#form input'); // inputs
const labels = document.querySelectorAll('#form label'); // labels	
const login = document.querySelector('#form #login-btn');// login button
const register_link = document.querySelector('#form a'); // Link to form
const number_of_fields = 2															 // amount of fields
const div_error = document.querySelector('#div_for_errors'); // div to use for errors of elements missing

/*-------------------------- Funciones para Validaciones de existencia del formulario -----------------------------*/

function form_components_check() {
	formExist();
	loginButtonExist();
	link_to_register_page();
	amount_of_fields();
	button_text();
	labels_and_fields();
}

function formExist() {   // preguntar si formulario existe
	if(form) {                                    
		console.log('el formulario existe');
		return true;
	}else {
		var text_error_form = document.createTextNode('Form is Missing');
     div_error.appendChild(text_error_form);
		 div_error.classList.add('check-unsuccessful');	
	}
}

function loginButtonExist() {   // preguntar si boton login existe
	if(login) {                                    
		console.log('el boton login existe');
	}else {
		 var text_error_login = document.createTextNode('Login Buttom is Missing');
     div_error.appendChild(text_error_login);
		 div_error.classList.add('check-unsuccessful');	
		 return false;
	}
}

function link_to_register_page() {   // preguntar si link a la pagina de registro existe 
	if(register_link === null) {                                           
		console.log('el link no existe');
		var text_error_link = document.createTextNode('Link to login Page is Missing');
    div_error.appendChild(text_error_link);
		div_error.classList.add('check-unsuccessful');	
		return false;
	}else if(register_link.href === "file:///C:/Users/emi_g/Downloads/Main%20Folder/Radium/Week%209///////////////////////////html/form-register.html") {
		 console.log('el link a la pag de registro existe y dirige a la pagina correcta');
		 return true;
		}else {
		console.log('el link existe pero no dirige a la pagina correcta');
		var text_error_link = document.createTextNode('Link to login Page is not working properly');
    div_error.appendChild(text_error_link);
		div_error.classList.add('check-unsuccessful');	
		return false;
	}
}

function amount_of_fields() {   // preguntar si la cantidad de campos es la correcta
	if(inputs.length == number_of_fields) {
		console.log('La cantidad de campos (inputs) es correcta');
		return true;
	}else {
		 var text_error_amount_of_fields = document.createTextNode('Input Fields are Missing');
     div_error.appendChild(text_error_amount_of_fields);
		 div_error.classList.add('check-unsuccessful');	
		 return false;
	}
}

function button_text() {   // preguntar si el contenido del boton es la correcta
	if(login.innerText == "Login") {
		console.log('El contenido del texto del boton es el correcto');	
		return true;
	}else if(login.innerText !== "Login") {
		var text_error_login_content = document.createTextNode('Content of "Login" button is incorrect');
		div_error.appendChild(text_error_login_content);
		div_error.classList.add('check-unsuccessful');
		return false;
  }
}

function labels_and_fields() {   // preguntar si las labels tienen los campos asociados
	for(var i = 0; i < (number_of_fields); i++) {
		if(labels[i].control === null) {
			console.log('La etiqueta', i,'no tiene un campo asociado (Error)');
			var text_error_reset = document.createTextNode('The tag', i,'is missing from the form');
      div_error.appendChild(text_error_reset);
		  div_error.classList.add('check-unsuccessful');
		  return false
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
				document.querySelector('form .form__message .error__email').classList.remove('error__email-active');
			} else {
					document.getElementById('group__email').classList.add('form__group-error');
					document.querySelector('form .form__message').classList.add('form__message-active');
					document.querySelector('form .form__message .error__email').classList.add('error__email-active');
			}	
		break;
		case 'password':
			if(expressions.password.test(e.target.value)){
				document.getElementById('group__password').classList.remove('form__group-error');
				document.querySelector('form .form__message').classList.remove('form__message-active');
				document.querySelector('form .form__message .error__password').classList.remove('error__password-active');
			} else {
					document.getElementById('group__password').classList.add('form__group-error');
					document.querySelector('form .form__message').classList.add('form__message-active');
					document.querySelector('form .form__message .error__password').classList.add('error__password-active');
			}	
		break;
	}

}

inputs.forEach((input) => {
	input.addEventListener('keyup', validationForm);
	input.addEventListener('blur', validationForm);
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
		}
});

/*---------------------------------------------------------------------------------------------------------------------*/
