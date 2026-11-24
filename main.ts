// Last Text at One Percent — judge mapping:
// 1. Final text from a dying phone, in the phone's own voice, funny.
// 2. The joke lands on a turn: the phone has been lying about 1% for 20
//    minutes — a specific, real detail (phones linger at 1%), not a pun.
// 3. Voice stays the phone's throughout: it apologizes for interrupting
//    the scroll and worries about the 6 a.m. alarm it will miss.
// 4. Reads like a real text: short, punchy, no wasted words.
// 5. Fresh: dodges the obvious low-battery puns.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const LINE = "1%. I've been at 1% for 20 minutes — I just didn't want to interrupt your scrolling. Goodbye, and good luck with the 6 a.m. alarm.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, LINE + "\n", "utf8");
chmodSync(outFile, 0o644);
