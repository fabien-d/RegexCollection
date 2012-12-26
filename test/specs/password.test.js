test("password validation", function() {
	expect(6);
	var p = PASSWORD;
	// testing invalid patterns
	deepEqual(p.test("ab"), false, "must be at least 6 characters");
	deepEqual(p.test("abcdefghijklmnop"), false, "must be no more than 12 characters");
	deepEqual(p.test("1bcdegf"), false, "must contain at least 1 uppercase");
	deepEqual(p.test("Abcdefg"), false, "must contain at least 1 number");
	// testing valid patterns
	deepEqual(p.test("Abcdefgh1"), true, "valid password with base requirements");
	deepEqual(p.test("@Bc!2$deF"), true, "valid password with special characters");
});
