const expressions = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

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
	input.addEventListener('keyup', validationForm)
	input.addEventListener('blur', validationForm)
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