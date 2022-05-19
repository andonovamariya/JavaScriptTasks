import { it, expect, vi, describe, beforeEach } from "vitest";
import { firstPattern } from "../../../dist/chapter1/patterns/task1-3-firstPattern";

describe("firstPattern()", () => {
  global.console = { log: vi.fn() };

  beforeEach(() => {
    global.console.log.mockReset();
  });

  it("should have called console.log() only once", () => {
    firstPattern(6);
    expect(console.log).toHaveBeenCalledTimes(1);
  });

  it("should have called console.log() with value of type string", () => {
    const n = 7;
    firstPattern(n);
    expect(console.log).toHaveBeenCalledWith(expect.any(String));
  });
});
