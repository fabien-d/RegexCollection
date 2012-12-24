var
	/**
	 * Email Pattern
	 * 
	 * Validating email is only 100% sure by attempting to send an email
	 * This pattern will catch the most common errors
	 * 
	 * @type {RegExp}
	 */
	EMAIL = /^(?!.*([.])\1)[^.][^@]+[^.]@[^\s@]+$/;