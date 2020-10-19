import { helloWorld } from "./index";

describe("index", () => {
  it("Should return Hello World", () => {
    const result = helloWorld();
    expect(result).toEqual({ result: "Hello World" });
  });
});
