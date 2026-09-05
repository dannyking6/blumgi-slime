#!/usr/bin/env bash
cd "$(dirname "$0")"
PORT="${1:-8080}"
python3 -m http.server "$PORT" --bind 0.0.0.0
