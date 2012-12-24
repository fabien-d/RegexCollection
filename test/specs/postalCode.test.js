test("canadian postal code validation", function() {
	expect(8);
	var p = POSTAL_CODE;
	// testing invalid patterns
	deepEqual(p.test("DDDDDD"), false, "postal code format must be A0A0A0");
	deepEqual(p.test("W0A0A0"), false, "W cannot be the first character");
	deepEqual(p.test("Z0A0A0"), false, "Z cannot be the first character");
	deepEqual(p.test("D0F0I0"), false, "postal code cannot include D, F, I, O, Q or U");
	deepEqual(p.test("K0F0I0"), false, "postal code cannot include D, F, I, O, Q or U");
	deepEqual(p.test("K0K0I0"), false, "postal code cannot include D, F, I, O, Q or U");
	// testing valid patterns
	deepEqual(p.test("K1A0B1"), true, "very simple valid postal code");
	deepEqual(p.test("K1A 0B1"), true, "optional space at 4th character");
});