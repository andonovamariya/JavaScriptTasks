import { expect, it, describe, beforeEach, vi } from "vitest";
import { fourthPattern } from "../../../dist/chapter1/patterns/task1-3-fourthPattern";

describe("fourthPattern()", () => {
  global.console = { log: vi.fn() };

  beforeEach(() => {
    global.console.log.mockReset();
  });

  it("should have called console.log() at least once", () => {
    const n = 6;
    fourthPattern(n);
    expect(console.log).toBeCalled();
  });
});
