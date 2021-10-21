const fizzbuzz = require('./fizzbuzz');

describe("fizzbuzz", () => {
  test("should print fizz if received num is multiply of 3", () => {
    const expected = "fizz";
    const result = fizzbuzz(6);
    expect(expected).toBe(result);
  });
  test("should print buzz if received num is multiply of 5", () => {
    const expected = "buzz";
    const result = fizzbuzz(10);
    expect(expected).toBe(result);
  });
  test("should print fizz if received num is multiply of 3 and 5", () => {
    const expected = "fizzbuzz";
    const result = fizzbuzz(15);
    expect(expected).toBe(result);
  });
  test("should print num if received num is not a multiply of 3 or 5", () => {
    const expected = 1;
    const result = fizzbuzz(1);
    expect(expected).toBe(result);
  });
  test("should print num if received 0", () => {
    const expected = 0;
    const result = fizzbuzz(0);
    expect(expected).toBe(result);
  });
})
