var
	/**
	 * Email Pattern
	 * Validating email is only 100% sure by attempting to send an email
	 * This pattern will catch the most common errors
	 *
	 * @type {RegExp}
	 */
	EMAIL = /^(?!.*([.])\1)[^.][^@]+[^.]@[^\s@]+$/,
	/**
	 * Canadian Postal Code Pattern
	 * Validating canadian postal code
	 *
	 * @type {RegExp}
	 */
	POSTAL_CODE = /^[a-ceghj-nprstvxy]\d[a-ceghj-nprstv-z](\s)?\d[a-ceghj-nprstv-z]\d$/i,
	/**
	 * Username Pattern
	 * This pattern is a starting point and should be modified
	 * to match the need of the application.
	 * Base pattern requirements are characters, numbers, -, _
	 * and between 4 and 18 characters.
	 *
	 * @type {RegExp}
	 */
	USERNAME = /^[a-zA-Z0-9\-_]{4,18}$/;
