# Slime Hop 🟢

Bounce your stretchy slime through colorful levels, dodge obstacles, and grab
the crown! A fun physics platformer with satisfying bouncy movement — easy to
pick up, hard to put down.

This is a fully **offline, self-contained build**: no ads, no tracking, no
external requests. Everything runs from local files.

## Controls

| Device | Action |
|---|---|
| Smartphone / tablet | Tap left / right half of the screen to hop that way |
| Desktop (mouse) | Left-click left / right half of the screen |
| Trackpad | Single click left / right half |
| Keyboard | Not required |

## Offline modifications

- Removed the Poki SDK (ads, analytics, session tracking) — replaced by a
  neutral local `game-driver.js` wired into the Construct 3 runtime
- Rewrote all Poki/Blumgi branding, metadata and storage keys
- Restored the missing `icons/loading-logo.png` with new art
- Regenerated all PWA icons with new original art
- New original title: **Slime Hop**

## Run locally

Games must be served over HTTP (browsers block some features on `file://`):

```bash
./serve.sh            # serves on port 8080
# or: python3 -m http.server 8080
```

Then open http://localhost:8080
