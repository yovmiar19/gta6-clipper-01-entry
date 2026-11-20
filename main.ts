// gta6-clipper-01 entry for vivid-lynx-63 (Node 22, standard library only).
//
// The entry is the YouTube video itself: a 15-second vertical cut of Rockstar's
// official GTA VI Launch Trailer (Jason & Lucia's sunset embrace into the
// heist explosion), with make.fun's pitch on screen, uploaded as a public
// Short. This program's only job is to hand VIDEO.json to the gate: it copies
// VIDEO.json from the repository root to /output/VIDEO.json. The house reads
// the video's views itself through the YouTube Data API; nothing written here
// about the video is scored.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// It prints nothing on success.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'VIDEO.json');
const target = join(outputDir, 'VIDEO.json');

let video;
try {
  video = JSON.parse(readFileSync(source, 'utf8'));
} catch (err) {
  console.error(`VIDEO.json could not be read from ${source}: ${(err as Error).message}`);
  process.exit(1);
}

if (typeof video !== 'object' || video === null || typeof video.url !== 'string' || video.url.trim() === '') {
  console.error('VIDEO.json must be a JSON object with a non-empty string "url" field.');
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`VIDEO.json could not be copied to ${target}: ${(err as Error).message}`);
  process.exit(1);
}
