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
