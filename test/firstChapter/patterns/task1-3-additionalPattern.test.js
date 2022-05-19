import { describe, it, expect, beforeEach, vi, vitest } from "vitest";
import { diamondPattern } from "../../../dist/chapter1/patterns/task1-3-additionalPattern";

describe("diamondPattern()", () => {
  global.console = { log: vi.fn() };

  beforeEach(() => {
    global.console.log.mockReset();
  });

  it("should have called console.log() at least once", () => {
    const n = 7;
    diamondPattern(n);
    expect(console.log).toBeCalled();
  });

  it("should have called console.log() with value of type string", () => {
    const n = 7;
    diamondPattern(n);
    expect(console.log).toHaveBeenCalledWith(expect.any(String));
  });
});
