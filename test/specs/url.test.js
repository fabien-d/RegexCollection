test("URL validation", function() {
	expect(20);
	var u = URL;
	// testing invalid patterns
	deepEqual(u.test("-example.com"), false, "URL cannot begin with a dash");
	deepEqual(u.test("http://example.com:"), false, "URL must have a number for a port");
	deepEqual(u.test("http://example.com:123123"), false, "URL port must be no more than 5 digits");
	deepEqual(u.test("htp://example.com"), false, "URL scheme is wrong, should be http");
	deepEqual(u.test("ftp;//example.com"), false, "URL scheme is wrong, cannot be a semicolon");
	deepEqual(u.test("http:/example.com"), false, "URL scheme is wrong, should have 2 slashes");
	deepEqual(u.test("http://www.abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefg.com"), false, "URL domain must be between 4 and 255");
	deepEqual(u.test("http://www.example.a"), false, "URL top-level domain must be between 2 and 6 characters");
	// testing valid patterns
	deepEqual(u.test("http://www.example.com"), true, "valid URL with http scheme");
	deepEqual(u.test("https://www.example.com"), true, "valid URL with https scheme");
	deepEqual(u.test("ftp://www.example.com"), true, "valid URL with ftp scheme");
	deepEqual(u.test("git://github.com"), true, "valid URL with git scheme");
	deepEqual(u.test("http://www.exa-mple.com"), true, "valid URL with a dash");
	deepEqual(u.test("www.3xampl3.com"), true, "valid URL with numbers");
	deepEqual(u.test("example.com:8080"), true, "valid URL with port");
	deepEqual(u.test("http://example.com:80"), true, "valid URL with port");
	deepEqual(u.test("http://www.example.com/"), true, "valid URL with trailing slash");
	deepEqual(u.test("http://www.example.com/path_name/page.html"), true, "valid URL with path");
	deepEqual(u.test("http://www.example.com/path_name/page.html?foo=1&bar=2"), true, "valid URL with query string");
	deepEqual(u.test("http://www.example.com/path_name/page.html?foo=1&bar=2#anchor"), true, "valid URL with anchor");
});
