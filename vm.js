import { createContext, runInContext } from "node:vm";
import { readFile } from "node:fs/promises";

const code = await readFile("./node.js", { encoding: "utf-8" });

async function runTest(ctx) {
  console.log("running test");
  createContext(ctx);
  const res = await runInContext(code, ctx);
  console.log("test complete, output:", res);
}

console.log("testing without Object in context (should fail)");
await runTest({
  process: {
    exitCode: undefined,
  },
  fetch,
  console,
});

console.log("testing with Object in context (should pass)");
await runTest({
  process: {
    exitCode: undefined,
  },
  fetch,
  console,
  Object,
});
