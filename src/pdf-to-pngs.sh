#!/bin/bash
#
# pdf-to-pngs.sh
# 2022-09-26

readonly WD="$(cd -- "$(dirname -- "${BASH_SOURCE:-$0}")" &> /dev/null && pwd)"
readonly IN1="${WD}/../dev-imgs/MOE_WCP2.2_ToM Stimulus_230822.pdf"
readonly IN2="${WD}/../dev-imgs/ToM Title Slide_260922.pdf"
readonly OUT="${WD}/../dev-imgs/slides_$(date +'%Y-%m-%d')"

mkdir -p "$OUT"

pdftoppm -png "$IN1" "${OUT}/slide"
pdftoppm -png "$IN2" "${OUT}/slide"

mogrify -resize 60% -strip "$OUT"/*

pngquant \
    --force \
    --skip-if-larger \
    --ext '.png' \
    --speed 1 \
    --strip \
    -- "$OUT"/*.png

