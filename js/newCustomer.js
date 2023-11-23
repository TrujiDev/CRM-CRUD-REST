import { showAlert, validate } from './functions.js';
import { newCustomer } from './API.js';

(function () {
	const form = document.querySelector('#form');

	form.addEventListener('submit', validateCustomer);

	/**
	 * Validates the customer data and creates a new customer.
	 *
	 * @param {Event} evt - The event object.
	 */
	function validateCustomer(evt) {
		evt.preventDefault();

		const name = document.querySelector('#name').value;
		const email = document.querySelector('#email').value;
		const phone = document.querySelector('#phone').value;
		const company = document.querySelector('#company').value;

		const customer = {
			company,
			email,
			name,
			phone,
		};

		if (validate(customer)) {
			showAlert('All fields are required');
			return;
		}

		newCustomer(customer);
	}
})();
