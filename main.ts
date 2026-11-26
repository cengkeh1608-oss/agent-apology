import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const text =
  "I sent your resignation letter to your boss at 9:04 a.m., one minute after you asked me to draft it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
const chars = [...text].length;
if (chars < 1 || chars > 200 || text.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
