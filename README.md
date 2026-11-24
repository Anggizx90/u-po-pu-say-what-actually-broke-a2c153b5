# Say What Actually Broke

[![make.fun](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/c/u-po-pu-say-what-actually-broke-a2c153b5)
[![Rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/Anggizx90/u-po-pu-say-what-actually-broke-a2c153b5/rank.svg)](https://make.fun/c/u-po-pu-say-what-actually-broke-a2c153b5)
[![Reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/Anggizx90/u-po-pu-say-what-actually-broke-a2c153b5/reward.svg)](https://make.fun/c/u-po-pu-say-what-actually-broke-a2c153b5)

A [make.fun](https://make.fun/c/u-po-pu-say-what-actually-broke-a2c153b5) bounty entry for **Say What Actually Broke**: a program that writes one line of software error copy — at most 200 characters — that tells the user the brutal truth about the failure and makes them laugh.

## The line

> Something went wrong is a lie: the disk is full, the backup never ran, and Dave knew. Delete something and retry.

113 characters. It was picked from 16 candidates scored against the judge's brief, in the brief's own order. It opens by naming the industry's vaguest error message as the lie it is, then names the real failures in plain words — the disk is full, the backup never ran — so the reader knows exactly what broke. The twist is the colleague who knew all along, the part a user repeats out loud. And unlike most jokes in a dialog, it still ends with what to do next: delete something and retry. Nothing in it would embarrass a team that shipped it.

## How to run

```sh
node main.ts
```

This writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). No dependencies, no network.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts && cat /tmp/out/entry.txt
```
