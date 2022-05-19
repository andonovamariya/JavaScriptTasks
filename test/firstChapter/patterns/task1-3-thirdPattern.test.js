import { it, expect, describe, vi, beforeEach } from "vitest";
import { thirdPattern } from "../../../dist/chapter1/patterns/task1-3-thirdPattern";

describe("thirdPattern()", () => {
  global.console = { log: vi.fn() };

  beforeEach(() => {
    global.console.log.mockReset();
  });

  it("should have called console.log() at least once", () => {
    const n = 6;
    thirdPattern(n);
    expect(console.log).toBeCalled();
  });
});
