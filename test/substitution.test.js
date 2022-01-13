const { substitution } = require("../src/substitution");
const { expect } = require("chai");

describe("substitution", () => {
  it("should encode a message correctly", () => {
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "jrufscpw";
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces through the input", () => {
    const actual = substitution(
      "You are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibev"
    );
    const expected = "elp xhm xf mbymwwmfj dne";
    expect(actual).to.equal(expected);
  });
  it("should decode a message correctly", () => {
    const actual = substitution(
      "jrufscpw",
      "xoyqmcgrukswaflnthdjpzibev",
      false
    );
    const expected = "thinkful";
    expect(actual).to.equal(expected);
  });
  it("the alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false", () => {
    const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
    const expected = "y&ii$r&";
    expect(actual).to.equal(expected);
  });
  it("should return false if the alphabet isn't 26 characters long", () => {
    const actual = substitution("message", "lwkijkiloikrewr");
    expect(actual).to.be.false;
  });
  it("should ignore capital letters", () => {
    const actual = substitution("MEssaGE", "$wae&zrdxtfcygvuhbijnokmpl");
    const expected = "y&ii$r&";
    expect(actual).to.equal(expected);
  });
  it("should return false if there are any duplicate characters in the alphabet", () => {
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    expect(actual).to.be.false;
  });
});
