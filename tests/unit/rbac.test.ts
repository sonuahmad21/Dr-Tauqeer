import assert from "node:assert/strict";
import test from "node:test";
import { can, permissionsFor } from "../../src/lib/rbac.js";

test("patient can manage appointments but not admin system", () => {
  assert.equal(can("patient", "manage:appointments"), true);
  assert.equal(can("patient", "admin:system"), false);
});

test("administrator includes system permission", () => {
  assert.equal(can("administrator", "admin:system"), true);
  assert.ok(permissionsFor("administrator").includes("use:ai"));
});

test("guest remains public-scoped", () => {
  assert.equal(can("guest", "view:public"), true);
  assert.equal(can("guest", "manage:clinical"), false);
});
