import { getCustomerById, updateCustomer } from './API.js';
import { showAlert, validate } from './functions.js';

(function () {
	const inputName = document.querySelector('#name');
	const inputEmail = document.querySelector('#email');
	const inputPhone = document.querySelector('#phone');
	const inputCompany = document.querySelector('#company');
	const inputId = document.querySelector('#id');

	document.addEventListener('DOMContentLoaded', async () => {
		const urlParameters = new URLSearchParams(window.location.search);
		const customerId = parseInt(urlParameters.get('id'));

		const customer = await getCustomerById(customerId);

		fillFields(customer);

		const form = document.querySelector('#form');

		form.addEventListener('submit', validateCustomer);
	});

	/**
	 * Fills the input fields with the values from the customer object.
	 * @param {Object} customer - The customer object containing the name, email, phone, company, and id.
	 */
	function fillFields(customer) {
		const { name, email, phone, company, id } = customer;

		inputName.value = name;
		inputEmail.value = email;
		inputPhone.value = phone;
		inputCompany.value = company;
		inputId.value = id;
	}

	/**
	 * Validates the customer data and updates the customer if valid.
	 * @param {Event} evt - The event object.
	 */
	function validateCustomer(evt) {
		evt.preventDefault();

		const customer = {
			company: inputCompany.value,
			email: inputEmail.value,
			name: inputName.value,
			phone: inputPhone.value,
			id: parseInt(inputId.value),
		};

		if (validate(customer)) {
			showAlert('All fields are required');
			return;
		}

		updateCustomer(customer);
	}
})();
