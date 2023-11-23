const url = 'http://localhost:4000/customers';

/**
 * Sends a POST request to create a new customer.
 * @param {Object} customer - The customer object to be created.
 * @returns {Promise<void>} - A promise that resolves when the request is complete.
 */
export const newCustomer = async customer => {
	try {
		await fetch(url, {
			method: 'POST',
			body: JSON.stringify(customer),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		window.location.href = 'index.html';
	} catch (error) {
		console.log(error);
	}
};

/**
 * Retrieves customers from the server.
 * @returns {Promise<Array>} A promise that resolves to an array of customers.
 */
export const getCustomers = async () => {
	try {
		const response = await fetch(url);
		const customers = await response.json();
		return customers;
	} catch (error) {
		console.log(error);
	}
};

/**
 * Deletes a customer with the specified ID.
 * @param {number} id - The ID of the customer to delete.
 */
export const deleteCustomer = id => {
	try {
		fetch(`${url}/${id}`, {
			method: 'DELETE',
		});
	} catch (error) {
		console.log(error);
	}
};
