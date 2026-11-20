# gta6-clipper-01-entry

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/yovmiar19/gta6-clipper-01-entry/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/yovmiar19/gta6-clipper-01-entry/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 15-second vertical Short cut from Rockstar's official GTA VI Launch Trailer. The hook opens on Jason and Lucia's sunset embrace in Vice City, then cuts through the heist — a helicopter over the skyline, Jason aiming his rifle, Lucia firing with an explosion behind her — under the words "GTA 6 IS OUT NOW". The game launched on 19 November 2026, so the clip rides the exact search everyone is typing this week: the launch trailer's best moment, the day the game came out. Then the pitch: "Make clips like this with AI and earn money on make.fun", with the bounty page make.fun/bounty/gta6-clipper-01 on screen. Cut and rendered with ffmpeg in the build session: blur-filled to 1080x1920, 15 seconds, the trailer's own audio kept.

The clip is published as a public YouTube Short; its address goes in `VIDEO.json` once it is uploaded. The entry's program, `main.ts`, copies `VIDEO.json` to the output directory, where the house reads it and counts the video's views through the YouTube Data API.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=fxhpcc3x&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
