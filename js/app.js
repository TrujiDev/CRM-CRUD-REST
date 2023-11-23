import { getCustomers, deleteCustomer } from './API.js';

(function () {
	const customerList = document.querySelector('#customers-list');

	document.addEventListener('DOMContentLoaded', showCustomers);
	customerList.addEventListener('click', confirmDelete);

	/**
	 * Fetches customers and displays them in a table.
	 * @returns {Promise<void>} A promise that resolves when the customers are displayed.
	 */
	async function showCustomers() {
		const customers = await getCustomers();

		customers.forEach(customer => {
			const { name, email, phone, company, id } = customer;

			const row = document.createElement('TR');
			row.innerHTML += `
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p class="text-sm leading-5 font-medium text-gray-700 text-lg font-bold">${name}</p>
                    <p class="text-sm leading-10 text-gray-700">${email}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${phone}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 leading-5 text-gray-700">    
                    <p class="text-gray-600">${company}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                    <a href="editCustomer.html?id=${id}"class="text-teal-600 hover:text-teal-900 mr-5">Edit</a>
                    <a href="#" data-customer="${id}" class="text-red-600 hover:text-red-900 delete">Delete</a>
                </td>
            `;
			customerList.appendChild(row);
		});
	}

	/**
	 * Confirms the deletion of a customer based on the event target.
	 * @param {Event} evt - The event object.
	 */
	function confirmDelete(evt) {
		if (evt.target.classList.contains('delete')) {
			const customerId = parseInt(evt.target.dataset.customer);
			const confirmDelete = confirm(
				'Are you sure you want to delete this customer?'
			);

			if (confirmDelete) {
				deleteCustomer(customerId);
			}
		}
	}
})();
