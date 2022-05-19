import { describe, it, vi, expect, beforeEach } from "vitest";
import { sixthPattern } from "../../../dist/chapter1/patterns/task1-3-sixthPattern";

describe("sixthPattern()", () => {
  global.console = { log: vi.fn() };

  beforeEach(() => {
    global.console.log.mockReset();
  });
  
  it("should have called console.log() at least once", () => {
    const n = 6;
    sixthPattern(n);
    expect(console.log).toBeCalled();
  });

  it("should have called console.log() with value of type string", () => {
    const n = 7;
    sixthPattern(n);
    expect(console.log).toHaveBeenCalledWith(expect.any(String));
  });
});
