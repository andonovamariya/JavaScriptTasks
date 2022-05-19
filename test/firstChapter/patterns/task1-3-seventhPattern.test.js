import { beforeEach, describe, it, expect, vi } from "vitest";
import { seventhPattern } from "../../../dist/chapter1/patterns/task1-3-seventhPattern";

describe("seventhPattern()", () => {
  global.console = { log: vi.fn() };
  beforeEach(() => {
    global.console.log.mockReset();
  });
  it("should have called console.log() at least once", () => {
    const n = 6;
    seventhPattern(n);
    expect(console.log).toBeCalled();
  });
});
