#!/usr/bin/env bash
# Optimize site videos: encode every master in src/assets/media/masters/
# into the two formats Hero.astro serves:
#   <name>.mp4   H.264 CRF 23, slow preset  — universal fallback
#   <name>.webm  VP9 CRF 26                 — ~40% smaller, modern browsers
# Audio is stripped (hero loops are muted). Faststart moves the moov atom
# to the front so playback starts while the file streams.
#
# Usage: pnpm videos   (then commit the outputs; imports stay unchanged)
set -euo pipefail

SRC_DIR="src/assets/media/masters"
OUT_DIR="src/assets/media"

command -v ffmpeg >/dev/null || { echo "ffmpeg not found"; exit 1; }
ls "$SRC_DIR"/*.mp4 >/dev/null 2>&1 || { echo "no masters in $SRC_DIR"; exit 0; }

for master in "$SRC_DIR"/*.mp4; do
  name=$(basename "$master" .mp4)

  ffmpeg -y -v error -i "$master" -c:v libx264 -crf 23 -preset slow \
    -pix_fmt yuv420p -movflags +faststart -an "$OUT_DIR/$name.mp4" &
  ffmpeg -y -v error -i "$master" -c:v libvpx-vp9 -crf 26 -b:v 0 \
    -row-mt 1 -cpu-used 3 -an "$OUT_DIR/$name.webm" &
  wait

  printf '✓ %-28s mp4 %s · webm %s\n' "$name" \
    "$(du -h "$OUT_DIR/$name.mp4" | cut -f1)" \
    "$(du -h "$OUT_DIR/$name.webm" | cut -f1)"
done
