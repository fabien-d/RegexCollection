test("username validation", function() {
	expect(6);
	var u = USERNAME;
	// testing invalid patterns
	deepEqual(u.test("fd"), false, "username must be minimum of 4 characters");
	deepEqual(u.test("thisisareallylongusername"), false, "username must be maximum of 12 characters");
	// testing valid patterns
	deepEqual(u.test("fabiend"), true, "valid username");
	deepEqual(u.test("fabiend12"), true, "valid username");
	deepEqual(u.test("fabien-d"), true, "valid username with dash");
	deepEqual(u.test("fabien_doiron"), true, "valid username with underscore");
});