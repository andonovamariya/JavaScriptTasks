import { it, expect, vi, describe, beforeEach } from "vitest";
import { firstPattern } from "../../../dist/chapter1/patterns/task1-3-firstPattern";

describe("firstPattern()", () => {
  global.console = { log: vi.fn() };

  beforeEach(() => {
    global.console.log.mockReset();
  });

  it("should have called console.log() at least once", () => {
    const n = 6;
    firstPattern(n);
    expect(console.log).toBeCalled();
  });
});
