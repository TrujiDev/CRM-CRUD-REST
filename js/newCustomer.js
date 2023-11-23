import { showAlert } from './functions.js';

(function () {
	const form = document.querySelector('#form');

	form.addEventListener('submit', validateCustomer);

	function validateCustomer(evt) {
		evt.preventDefault();

		const name = document.querySelector('#name').value;
		const email = document.querySelector('#email').value;
		const phone = document.querySelector('#phone').value;
		const company = document.querySelector('#company').value;

		const customer = {
			name,
			email,
			phone,
			company,
		};

		if (validate(customer)) {
			showAlert('All fields are required', 'error');
			return;
		}
	}

	/**
	 * Validates an object by checking if all its values are not empty.
	 * @param {Object} obj - The object to be validated.
	 * @returns {boolean} - Returns true if any value in the object is empty, otherwise returns false.
	 */
	function validate(obj) {
		return !Object.values(obj).every(input => input !== '');
	}
})();
