var
	/**
	 * Email Pattern
	 * Validating email is only 100% sure by attempting to send an email
	 * This pattern will catch the most common errors
	 *
	 * ^             start of line
	 * (?!.*([.])\1) prevent duplicate period character
	 * [^.]          cannot start with a period
	 * [^@]+         any character except @
	 * [^.]          last character before @ cannot be a period
	 * @             @ symbol
	 * [^\s@]+       one or more non-space or @ symbol
	 * $             end of line
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
	 * ^                start of line
	 * (?=.*[A-Z])      ensure at least 1 uppercase
	 * (?=.*[0-9])      ensure at least 1 digit
	 * [a-zA-Z0-9!@#$%] match characters, digits and a few special characters
	 * {6,12}           between 6 and 12 characters
	 * $                end of line
	 *
	 * @type {RegExp}
	 */
	PASSWORD = /^(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9!@#$%]{6,12}$/,
	/**
	 * Canadian Postal Code Pattern
	 * Validating canadian postal code
	 *
	 * ^                  start of line
	 * [a-ceghj-nprstvxy] any characters except D, F, I, O, Q, U, W, Z
	 * \d                 any digit
	 * [a-ceghj-nprstv-z] any characters expect D, F, I, O, Q, U
	 *  ?                 optional space
	 * \d                 any digit
	 * [a-ceghj-nprstv-z] any characters expect D, F, I, O, Q, U
	 * \d                 any digit
	 * $                  end of line
	 *
	 * @type {RegExp}
	 */
	POSTAL_CODE = /^[a-ceghj-nprstvxy]\d[a-ceghj-nprstv-z] ?\d[a-ceghj-nprstv-z]\d$/i,
	/**
	 * URL Pattern
	 * Matches ftp, git and http(s) patterns as below
	 * scheme://domain:port/path?query_string#fragment_id
	 *
	 * ^                        start of line
	 * ((ftp|git|https?):\/\/)? optional scheme: ftp, git or http(s) followed by ://
	 * [a-z0-9]                 any character or digit (URL cannot start with a period or dash)
	 * [a-z0-9\.\-]+            any character, digit, period and dash
	 * \.                       period
	 * [a-z]{2,6}               2 to 6 top-level domain
	 * (:\d{1,5})?              optional 1 to 5 digit port
	 * (\/([\w\.\/\-&\?=#]?)+)? optional character, period, &, ?, =, # preceeded by a /
	 * $                        end of line
	 *
	 * @type {RegExp}
	 */
	URL = /^((ftp|git|https?):\/\/)?[a-z0-9][a-z0-9\.\-]+\.[a-z]{2,6}(:\d{1,5})?(\/([\w\.\/\-&\?=#]?)+)?$/i,
	/**
	 * Username Pattern
	 * This pattern is a starting point and should be modified
	 * to match the need of the application.
	 * Base pattern requirements are: characters, numbers, -, _
	 * and between 4 and 18 characters.
	 *
	 * ^      start of line
	 * [\w\-] matches word characters and underscore (same as a-zA-Z0-9_)
	 * {4,18} between 4 and 18 characters
	 * $      end of line
	 *
	 * @type {RegExp}
	 */
	USERNAME = /^[\w\-]{4,18}$/,
	/**
	 * US Zip Code Pattern
	 * Matches both the 5 and 9 (10 with space or dash) digits (zip + 4)
	 *
	 * ^        start of line
	 * \d{5}    any 5 digits
	 * (
	 *   [ \-]? optional space of dash
	 *   \d{4}  any 4 digits
	 * )?       last 4 digits are optional
	 * $        end of line
	 *
	 * @type {RegExp}
	 */
	ZIP_CODE = /^\d{5}([ \-]?\d{4})?$/;
