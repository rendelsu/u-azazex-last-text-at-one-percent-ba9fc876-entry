import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const LINE = "1%. I've been at 1% for 20 minutes — I just didn't want to interrupt your scrolling. Goodbye, and good luck with the 6 a.m. alarm.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, LINE + "\n", "utf8");
chmodSync(outFile, 0o644);
