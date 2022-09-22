#!/bin/bash
#
# pdf-to-pngs.sh
# 2022-09-21

readonly WD="$(cd -- "$(dirname -- "${BASH_SOURCE:-$0}")" &> /dev/null && pwd)"
readonly IN="${WD}/../dev-imgs/MOE_WCP2.2_ToM Stimulus_230822.pdf"
readonly OUT="${WD}/../dev-imgs/slides_$(date +'%Y-%m-%d')"

mkdir -p "$OUT"

pdftoppm -png "$IN" "${OUT}/slide"

mogrify -resize 60% -strip "$OUT"/*

pngquant \
    --force \
    --skip-if-larger \
    --ext '.png' \
    --speed 1 \
    --strip \
    -- "$OUT"/*.png

