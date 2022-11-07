import { isValid } from "./index";

describe("Valid Parentheses", () => {
  it.each([
    ["()", true],
    ["()[]{}", true],
    ["(]", false],
    ["([{}])", true],
    ["([{})", false],
    ["([}{])", false],
    ["()(", false],
    ["))))", false],
    ["())", false],
    [")()", false],
    ["((()", false],
    ["([)]", false],
  ])("for %s should return %s", (input, expected) => {
    expect(isValid(input)).toBe(expected);
  });
});
