import Johnny from "../unitTesting";

describe("unit tests", () => {
  it("should squre number", () => {
    const test = Johnny().squared(5);
    expect(test).toEqual(25);
  });

  it("should concatenate", () => {
    const test = Johnny().addString(`, it's too hot for this!`);
    expect(test).toBe(`Hello World, it's too hot for this!`);
  });
});
