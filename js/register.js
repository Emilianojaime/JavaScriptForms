const expressions = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
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
const	submit = document.querySelector('#form #send-btn');// submit button
const reset = document.querySelector('#form #reset-btn');// reset button
const login_link = document.querySelector('#form a');    // Link to Login page
const number_of_fields = 4;													  	 // amount of fields

/*-------------------------- Funciones para Validaciones de existencia del formulario -----------------------------*/

function form_components_check() {
	formExist();
	sendButtonExist();
	resetButtonExist();
	link_to_login_page();
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

function sendButtonExist() {   // preguntar si boton existe
	if(submit) {                                    
		console.log('el boton send existe');
	}else {
		 console.log('el boton send no existe');
	}
}

function resetButtonExist() {   // preguntar si boton reset existe
	if(reset) {                                    
		console.log('el boton reset existe');
	}else {
		 console.log('el boton reset no existe');
	}
}

function link_to_login_page() {   // preguntar si link a la pagina de login existe
	if(login_link === null) {   
		console.log('el link no existe');
	}else if(login_link.href == "file:///C:/Users/emi_g/Downloads/Main%20Folder/Radium/Week%209////////////////////////////html/form-login.html") {
		 console.log('el link a la pag de login existe y dirige a la pagina correcta');
		}else {
		console.log('el link existe pero no dirige a la pagina correcta');
	}
}

function amount_of_fields() {   // preguntar si la cantidad de inputs es la correcta
	if(inputs.length == number_of_fields) {
		console.log('La cantidad de campos (inputs) es correcta');
	}else {
		 console.log('La cantidad de campos (inputs) es correcta es incorrecta');
	}
}

function button_text() {   // preguntar si el contenido de los botones es el correcto
	if(submit.innerText == "Send" && reset.innerText == "Reset Fields" ) {
		console.log('El contenido del texto de los botones es el correcto');	
	}else if(submit.innerText !== "Send") {
		 console.log('El contenido del texto del Boton de enviar es incorrecto');
	}else {
		 	console.log('El contenido del boton reset es incorrecto');
	}
}

function labels_and_fields() {   // preguntar si las labels tienen campos asociados                                   
	for(var i = 0; i < (number_of_fields); i++) {
		if(labels[i].control === null) {
			console.log('La etiqueta', i,'no tiene un campo asociado (Error)');
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
				document.querySelector('form .form__message .error__name').classList.remove('error__name-active');
				fields['fullname'] = true;
			} else {
					document.getElementById('group__fullname').classList.add('form__group-error');
					document.querySelector('form .form__message').classList.add('form__message-active');
					document.querySelector('form .form__message .error__name').classList.add('error__name-active');
					fields['fullname'] = false;
			}	
		break;
		case 'email':
			if(expressions.email.test(e.target.value)){
				document.getElementById('group__email').classList.remove('form__group-error');
				document.querySelector('form .form__message').classList.remove('form__message-active');
				document.querySelector('form .form__message .error__email').classList.remove('error__email-active');
				fields['email'] = true;
			} else {
					document.getElementById('group__email').classList.add('form__group-error');
					document.querySelector('form .form__message').classList.add('form__message-active');
					document.querySelector('form .form__message .error__email').classList.add('error__email-active');
					fields['email'] = false;
			}	
		break;
		case 'password':
			if(expressions.password.test(e.target.value)){
				document.getElementById('group__password').classList.remove('form__group-error');
				document.querySelector('form .form__message').classList.remove('form__message-active');
				document.querySelector('form .form__message .error__password').classList.remove('error__password-active');
				fields['password'] = true;
				
			} else {
					document.getElementById('group__password').classList.add('form__group-error');
					document.querySelector('form .form__message').classList.add('form__message-active');
					document.querySelector('form .form__message .error__password').classList.add('error__password-active');
					fields['password'] = false;
			}	
		break;
		case 'repeat-password':
			const inputpasssword1 = document.getElementById('password');
			const inputpasssword2 = document.getElementById('repeat-password');

			if(inputpasssword1.value == inputpasssword2.value){
				document.getElementById('group__repeat-password').classList.remove('form__group-error');
				document.querySelector('form .form__message').classList.remove('form__message-active');
				document.querySelector('form .form__message .error__repeat-password').classList.remove('error__repeat-password-active');
				fields['repeatPassword'] = true;
				
			} else {
					document.getElementById('group__repeat-password').classList.add('form__group-error');
					document.querySelector('form .form__message').classList.add('form__message-active');
					document.querySelector('form .form__message .error__repeat-password').classList.add('error__repeat-password-active');
					fields['repeatPassword'] = false;
					
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
		if (fields.fullname && fields.email && fields.password && fields.repeatPassword) {
			form.reset();

			document.querySelector('form .form__message-sent').classList.add('form__message-sent-active');
			setTimeout(() => {
				document.querySelector('form .form__message-sent').classList.remove('form__message-sent-active');
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
/*---------------------------------------------------------------------------------------------------------------------*/

