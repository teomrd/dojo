const { mouse } = require("./animals");

describe("animals", () => {
  it("mouse should introduce itself when .hello", () => {
    expect(mouse.hello()).toEqual("Hello, my name is Mickey");
  });
});
