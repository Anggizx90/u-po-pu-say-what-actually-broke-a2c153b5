// Say What Actually Broke — one line of error copy that tells the brutal
// truth about the failure and makes the user laugh on the way.
//
// The line opens by calling out the industry's vaguest error message
// ("Something went wrong") as the lie it is, then names two real failures
// in plain words — the disk is full and the backup never ran — lands the
// joke on the colleague who knew all along, and ends with the one thing
// the user can actually do next: delete something and retry.
//
// The program writes exactly that line, with no trailing newline, to
// entry.txt in the output directory ($MAKEFUN_OUTPUT_DIR, default
// /output), after checking it against the competition gate itself.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Something went wrong is a lie: the disk is full, the backup never ran, and Dave knew. Delete something and retry.";

// The gate, mirrored from the kit's rules: the text must be UTF-8 of
// 1 to 200 characters, not only white space. The judge's brief adds the
// shape of a shippable error line: one single line, no padding.
function validateLine(line: string): void {
  if (line.length === 0) {
    throw new Error("the line is empty");
  }
  if (line.length > 200) {
    throw new Error(`the line is ${line.length} characters, over the 200 limit`);
  }
  if (line.trim().length === 0) {
    throw new Error("the line is only white space");
  }
  if (line !== line.trim()) {
    throw new Error("the line has leading or trailing white space");
  }
  if (/[\r\n]/.test(line)) {
    throw new Error("the line is not a single line");
  }
  if (/[\u0000-\u001f\u007f]/.test(line)) {
    throw new Error("the line contains control characters");
  }
  if (/ {2,}/.test(line)) {
    throw new Error("the line is padded with double spaces");
  }
}

function main(): void {
  validateLine(LINE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
