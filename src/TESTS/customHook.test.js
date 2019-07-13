import "jest";
import init from "jooks";
import Timmy from "../customHook";

describe("Testing useState hook", () => {
  // Initialising the Jooks wrapper
  const jooks = init(() => Timmy());

  it("It should give the correct initial values", () => {
    // Run your Hook function
    const result = jooks.run();

    // And then test the result
    expect(result.first).toBe("alpha");
    expect(result.second).toBe("beta");
  });

  it("It should update the values properly", () => {
    // Run your Hook function
    let { first, second, third, update } = jooks.run();
    expect(first).toBe("alpha");
    expect(second).toBe("beta");
    expect(third).toBe("charlie");

    // Call the callback
    update();

    // Run the Hook again to get the new values
    ({ first, second, third } = jooks.run());
    expect(first).toBe("alphaa");
    expect(second).toBe("betab");
    expect(third).toBe("charliec");
  });

  it("updating #2", () => {
    // Run your Hook function
    let { second, setSecond } = jooks.run();
    expect(second).toBe("beta");

    // Call the hooks function to update state
    setSecond(second + " fish");

    // Run the Hook again to get the new values
    ({ second } = jooks.run());
    expect(second).toBe("beta fish");
  });
});
