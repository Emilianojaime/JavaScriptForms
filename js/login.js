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
	}else {
		console.log('el formulario no existe');
	}
}

function loginButtonExist() {   // preguntar si boton login existe
	if(login) {                                    
		console.log('el boton login existe');
	}else {
		 console.log('el boton login no existe');
	}
}

function link_to_register_page() {   // preguntar si link a la pagina de registro existe 
	if(register_link === null) {                                           
		console.log('el link no existe');
	}else if(register_link.href == "file:///C:/Users/emi_g/Downloads/Main%20Folder/Radium/Week%209///////////////////////////html/form-register.html") {
		 console.log('el link a la pag de registro existe y dirige a la pagina correcta');
		}else {
		console.log('el link existe pero no dirige a la pagina correcta');
	}
}

function amount_of_fields() {
	if(inputs.length == number_of_fields) {
		console.log('La cantidad de campos (inputs) es correcta');
	}else {
		 console.log('La cantidad de campos (inputs) es correcta es incorrecta');
	}
}

function button_text() {
	if(login.innerText == "Login") {
		console.log('El contenido del texto del boton es el correcto');	
	}else {
		 console.log('El contenido del texto del boton es incorrecto');
	}
}

function labels_and_fields() {
	for(var i = 0; i < (number_of_fields); i++) {
		if(labels[i].control === null) {
			console.log('La etiqueta', i,'no tiene un campo asociado (Error)');
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
