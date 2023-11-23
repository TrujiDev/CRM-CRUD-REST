import { getCustomerById } from './API.js';

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
	});

	function fillFields(customer) {
        const { name, email, phone, company, id } = customer;
        
        inputName.value = name;
        inputEmail.value = email;
        inputPhone.value = phone;
        inputCompany.value = company;
        inputId.value = id;
	}
})();
