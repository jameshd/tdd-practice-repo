import { calculate } from "../greed.js";

describe("Greed Tests", () => {
  describe("Input Validation", () => {
    it("should not work when null is passed", () => {
      expect(() => {
        calculate(null);
      }).toThrowError(Error);
    });

    it("should not accept an empty array", () => {
      expect(() => {
        calculate([]);
      }).toThrowError(Error);
    });

    it("should not accept more than five dice", () => {
      expect(() => {
        calculate([1, 2, 3, 4, 5, 6]);
      }).toThrowError();
    });
  });

  describe("Score calculation", () => {
    it("should calculate zero scoring roll", () => {
      expect(calculate([2, 3, 4, 2, 3])).toEqual(0);
    });

    it("should calculate single 1", () => {
      expect(calculate([2, 3, 4, 1, 3])).toEqual(100);
    });

    it("should calculate a single 5", () => {
      expect(calculate([5, 4, 3, 2, 3])).toEqual(50);
    });

    it("should calculate 150", () => {
      expect(calculate([1, 2, 3, 4, 5])).toEqual(150);
    });

    it("should should calculate triple 1s ", () => {
      expect(calculate([1, 1, 1, 3, 4])).toEqual(1000);
    });

    it('should calculate triples', () => {
      expect(calculate([2, 2, 2, 3, 4])).toEqual(200);
      expect(calculate([2, 3, 3, 3, 4])).toEqual(300);
      expect(calculate([2, 3, 4, 4, 4])).toEqual(400);
      expect(calculate([2, 3, 5, 5, 5])).toEqual(500);
      expect(calculate([2, 3, 6, 6, 6])).toEqual(600);
    });

    it('should calculate edge cases ', () => {
      expect(calculate([1, 1, 1, 1, 5])).toEqual(1150);
      expect(calculate([1, 1, 1, 1, 1])).toEqual(1200);
    }); 
  });
});
