import { it, expect, vi, describe, beforeEach  } from "vitest";
import { secondPattern } from "../../../dist/chapter1/patterns/task1-3-secondPattern";

describe("secondPattern()", () => {
  global.console = { log: vi.fn() };

  beforeEach(() => {
    global.console.log.mockReset();
  });

  it("should have called console.log() at least once", () => {
    const n = 6;
    secondPattern(n);
    expect(console.log).toBeCalled();
  });
});
