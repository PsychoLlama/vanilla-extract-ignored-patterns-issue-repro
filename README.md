# Issue Repro: [link](https://github.com/vanilla-extract-css/vanilla-extract/issues/1636)

This is an issue reproduction for `@vanilla-extract/vite-plugin` where file watch ignore patterns are [not inherited by the compiler](https://github.com/vanilla-extract-css/vanilla-extract/blob/e2c439ffa96dce570f2d472d2ca6ee40c69e3ee9/packages/compiler/src/compiler.ts#L113-L113), sometimes resulting in 45sec+ startup times.

_Repo created with `bun create vite`_

## Project Dependencies

- [bun](https://bun.sh/) v1.2.23 (**does not repro with `npm`/`node`**)
- [direnv](https://direnv.net/) (optional)

## Setup

**CRUCIAL:** If you're not using nix+direnv, you must symlink a large repository to the root of this repo to simulate the same behavior.

```bash
# Replace "linux" with any repo containing 50k files or more.
ln -s ../path/to/torvalds/linux .direnv
```

## Test

```bash
# Run this 5x. At least one attempt will choke.
# The bug appears to be timing related.
bun run dev
```
