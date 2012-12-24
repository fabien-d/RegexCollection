test("email validation", function() {
	expect(11);
	var e = EMAIL;
	// testing invalid patterns
	deepEqual(e.test(".mail@abc.com"), false, "local part: period cannot be the first character");
	deepEqual(e.test("mail.@abc.com"), false, "local part: period cannot be the last character");
	deepEqual(e.test("ma..l@abc.com"), false, "local part: period cannot appear twice in a row");
	deepEqual(e.test("email.abc.com"), false, "@ character must separate local and domain parts");
	deepEqual(e.test("email@a@bc.com"), false, "@ character must only appear once outside of quotes");
	// testing valid patterns
	deepEqual(e.test("email@abc.com"), true, "very simple valid email");
	deepEqual(e.test("first.last@abc.com"), true, "acceptable period in email");
	deepEqual(e.test("first.middle.last@abc.com"), true, "acceptable period in email");
	deepEqual(e.test("first.middle.last+@abc.com"), true, "+ character in email");
	deepEqual(e.test("user@[IPv6:2001:db8:1ff::a0b:dbd0]"), true, "testing IPv6 domain");
	deepEqual(e.test("\"much.more unusual\"@example.com"), true, "testing quotes");
});