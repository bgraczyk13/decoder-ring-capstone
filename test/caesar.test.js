// Write your tests here
const { caesar } = require("../src/caesar");
const { expect } = require("chai");

describe("caesar", () => {
  it("should return an encoded message if given a string of alphabetical letters", () => {
    const actual = caesar("thinkful", 3);
    const expected = "wklqnixo";
    expect(actual).to.equal(expected);
  });
  it("should return an decoded message if encode is set to false", () => {
    const actual = caesar("wklqnixo", 3, false);
    const expected = "thinkful";
    expect(actual).to.equal(expected);
  });
  it("should return false if the shift value is equal to 0, less than -25, greater than 25, or not present", () => {
    const actual = caesar("Ricky Bobby", 27);
    expect(actual).to.be.false;
  });
  it("should ignore upper case letters", () => {
    const actual = caesar("Hello", 3);
    const expected = "khoor";
    expect(actual).to.equal(expected);
  });
  it("should handle shifts that go past the end of the alphabet", () => {
    const actual = caesar("z", 3);
    const expected = "c";
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces and other nonalphabetic symbols in the message, before and after encoding or decoding", () => {
    const actual = caesar("This is a secret message!", 8);
    const expected = "bpqa qa i amkzmb umaaiom!";
    expect(actual).to.equal(expected);
    expect(actual).to.include(" ");
  });
  it("output should be a string", () => {
    const actual = caesar("thinkful", 3);
    expect(actual).to.be.a("string");
  });
});
