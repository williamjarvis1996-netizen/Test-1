#!/bin/bash
# Generate WebP thumbnails from GIF files in public/images/
# Usage: ./scripts/generate-thumbs.sh
# Requires: ffmpeg

IMAGES_DIR="public/images"
THUMBS_DIR="public/images/thumbs"

mkdir -p "$THUMBS_DIR"

count=0
for gif in "$IMAGES_DIR"/*.gif; do
  [ -f "$gif" ] || continue
  name=$(basename "$gif" .gif)
  out="$THUMBS_DIR/${name}.webp"
  if [ -f "$out" ]; then
    echo "  skip  $name (thumbnail exists)"
    continue
  fi
  ffmpeg -y -i "$gif" -vframes 1 -q:v 80 "$out" 2>/dev/null
  echo "  created  $out"
  count=$((count + 1))
done

echo ""
echo "Done. $count new thumbnail(s) generated."
