const calc = require("./calc");

describe("The Tests", () => {
  it("should reject no arguments", () => {
    expect(() => {
      calc(null);
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

  it("should return a zero on a 0 roll", () => {
    expect(calc([2, 3, 4, 4, 6])).toEqual(0);
  });

  it("should return 50 points when 5 is present in the set", () => {
    expect(calc([2, 3, 4, 5, 6])).toEqual(50);
  });

  it("should return 100 points when 1 is present in the set", () => {
    expect(calc([1, 3, 4, 4, 6])).toEqual(100);
  });

  it("should return 150 when there is a 1 and a 5", () => {
    expect(calc([1, 5, 2, 2, 3])).toEqual(150);
  });

  it("should return 150 when there is a 1 and a 5 not consecutive", () => {
    expect(calc([1, 2, 5, 2, 3])).toEqual(150);
  });

  it("should return 1000 when there is a set of three 1s", () => {
    expect(calc([1, 1, 4, 1, 3])).toEqual(1000);
  });

  it("should yield 1200 with 5 ones", () => {
    expect(calc([1, 1, 1, 1, 1])).toEqual(1200);
  });

  it("should return number times 100 if a number appears 3 times", () => {
    expect(calc([2, 2, 2, 3, 4])).toEqual(200);
    expect(calc([2, 2, 3, 3, 3])).toEqual(300);
    expect(calc([2, 4, 2, 4, 4])).toEqual(400);
    expect(calc([2, 4, 5, 5, 5])).toEqual(500);
    expect(calc([2, 4, 6, 6, 6])).toEqual(600);
  });
});
