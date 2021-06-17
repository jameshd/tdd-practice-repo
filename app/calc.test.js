const calc = require("./calc");

describe("The Tests", () => {
  it("should reject no arguments", () => {
    expect(() => {
      calc(undefined);
    }).toThrow();
  });

  it("should not accept empty arrays", () => {
    expect(() => {
      calc([]);
    }).toThrow();
  });

  it("should reject an array with more than 5 numbers", () => {
    expect(() => {
      calc([1, 2, 3, 4, 5, 6]);
    }).toThrow();
  });

  it.each([
    [0, [6, 2, 4, 2, 3]],
    [50, [5, 2, 4, 2, 3]],
    [100, [1, 2, 4, 2, 3]],
    [150, [1, 2, 5, 2, 3]],
    [200, [2, 2, 2, 3, 4]],
    [300, [2, 2, 3, 3, 3]],
    [400, [2, 4, 2, 4, 4]],
    [500, [2, 4, 5, 5, 5]],
    [600, [2, 4, 6, 6, 6]],
    [1000, [2, 4, 1, 1, 1]],
    [1100, [1, 4, 1, 1, 1]],
    [1150, [1, 5, 1, 1, 1]],
    [1200, [1, 1, 1, 1, 1]],
  ])("expected: %d from set %s", (expected, input) => {
    expect(calc(input)).toEqual(expected);
  });
});
