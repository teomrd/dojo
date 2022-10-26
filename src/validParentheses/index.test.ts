import { isValid } from "./index";

describe("Valid Parentheses", () => {
  it.each([
    ["()", true],
    ["()[]{}", true],
    ["(]", false],
    ["([{}])", true],
    ["([{})", false],
    ["([}{])", false],
  ])(
    "should validate the parentheses, according to the rules",
    (input, expected) => {
      expect(isValid(input)).toBe(expected);
    }
  );
});
