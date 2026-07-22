import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  CORE_PURPOSE,
  FOUNDER,
  GROWTH_PATH,
  VISION_PHASES,
} from "../../src/features/vision/content.ts";

describe("SHIPLA vision board content", () => {
  it("encodes the founder quote and Seemanchal vision", () => {
    assert.equal(FOUNDER.quote, "Just make it exist first. You can make it good later.");
    assert.equal(FOUNDER.motto, "Healing Today, Inspiring Tomorrow");
    assert.match(FOUNDER.vision, /Seemanchal/);
    assert.equal(FOUNDER.tagline, "ONE VISION. ONE PATH. LIMITLESS IMPACT.");
    assert.equal(FOUNDER.pillars.length, 3);
  });

  it("defines EXIST → GOOD → GREAT growth path", () => {
    assert.deepEqual(
      GROWTH_PATH.map((step) => step.label),
      ["EXIST", "GOOD", "GREAT"],
    );
  });

  it("includes all twelve vision phases in order", () => {
    assert.equal(VISION_PHASES.length, 12);
    assert.deepEqual(
      VISION_PHASES.map((phase) => phase.phase),
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    );
    assert.equal(VISION_PHASES[0].title, "Residence & Financial Base");
    assert.equal(
      VISION_PHASES[11].title,
      "Global-Standard Healthcare from Seemanchal",
    );
  });

  it("lists seven core purpose pillars", () => {
    assert.equal(CORE_PURPOSE.length, 7);
    assert.ok(CORE_PURPOSE.every((item) => item.title && item.copy && item.icon));
  });
});
