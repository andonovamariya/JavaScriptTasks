import { beforeEach, expect, it, describe, vi } from "vitest";
import { fifthPattern } from "../../../dist/chapter1/patterns/task1-3-fifthPattern";

describe("fifthPattern()", () => {
  global.console = { log: vi.fn() };
  beforeEach(global.console.log.mockReset());
  it("should have called console.log() at least once", () => {
    const n = 6;
    fifthPattern(n);
    expect(console.log).toBeCalled();
  });
});
