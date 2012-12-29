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
	 * Password Pattern
	 * This pattern is a starting point and should be modified
	 * to match the need of the application.
	 *
	 * Base pattern requirements are:
	 * 1 Uppercase
	 * 1 Number
	 * Be between 6 and 12 characters
	 *
	 * Accepts:
	 * Uppercase characters
	 * Lowercase characters
	 * Numbers
	 * Special Characters !, @, #, $, %
	 *
	 * @type {RegExp}
	 */
	PASSWORD = /^(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9!@#$%]{6,12}$/,
	/**
	 * Canadian Postal Code Pattern
	 * Validating canadian postal code
	 *
	 * @type {RegExp}
	 */
	POSTAL_CODE = /^[a-ceghj-nprstvxy]\d[a-ceghj-nprstv-z](\s)?\d[a-ceghj-nprstv-z]\d$/i,
	/**
	 * URL Pattern
	 * Matches ftp, git and http(s) patterns as below
	 * scheme://domain:port/path?query_string#fragment_id
	 *
	 * @type {RegExp}
	 */
	URL = /^((ftp|git|https?):\/\/)?[a-z0-9][a-z0-9\.\-]{4,252}\.[a-z]{2,6}(:\d{1,5})?(\/([\w\.\/\-&\?=#]?)+)?$/i,
	/**
	 * Username Pattern
	 * This pattern is a starting point and should be modified
	 * to match the need of the application.
	 * Base pattern requirements are: characters, numbers, -, _
	 * and between 4 and 18 characters.
	 *
	 * @type {RegExp}
	 */
	USERNAME = /^[a-zA-Z0-9\-_]{4,18}$/,
	/**
	 * US Zip Code Pattern
	 * Matches both the 5 and 9 (10 with space or dash) digits (zip + 4)
	 *
	 * @type {RegExp}
	 */
	ZIP_CODE = /^\d{5}([ \-]?\d{4})?$/;
