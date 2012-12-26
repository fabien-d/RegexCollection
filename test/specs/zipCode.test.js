test("zip code validation", function() {
	expect(9);
	var z = ZIP_CODE;
	// testing invalid patterns
	deepEqual(z.test("2341"), false, "insufficent numbers, must be exactly 5 or 9 digits");
	deepEqual(z.test("23412536"), false, "insufficent numbers, if over 5, must be 9");
	deepEqual(z.test("2A341"), false, "cannot include characters");
	deepEqual(z.test("21323441092"), false, "too many numbers");
	deepEqual(z.test("2A341   2341"), false, "cannot include multiple spaces");
	// testing valid patterns
	deepEqual(z.test("90210"), true, "valid zip code");
	deepEqual(z.test("90210-1234"), true, "valid zip code + 4");
	deepEqual(z.test("902101234"), true, "valid zip code + 4 no space");
	deepEqual(z.test("90210 1234"), true, "valid zip code + 4 with space");
});
