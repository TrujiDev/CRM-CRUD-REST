/**
 * Displays an alert message on the page.
 * @param {string} msg - The message to be displayed in the alert.
 */
export function showAlert(msg) {
	const alert = document.querySelector('.alert');

	if (!alert) {
		const alert = document.createElement('div');
		alert.classList.add(
			'bg-red-100',
			'border-red-400',
			'text-red-700',
			'px-4',
			'py-3',
			'rounded',
			'relative',
			'max-w-lg',
			'mx-auto',
			'mt-6',
			'text-center',
			'alert'
		);

		alert.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${msg}</span>
        `;

		const form = document.querySelector('#form');
		form.appendChild(alert);

		setTimeout(() => {
			alert.remove();
		}, 3000);
	}
}

/**
 * Validates an object by checking if all its values are not empty.
 * @param {Object} obj - The object to be validated.
 * @returns {boolean} - Returns true if any value in the object is empty, otherwise returns false.
 */
export function validate(obj) {
	return !Object.values(obj).every(input => input !== '');
}
