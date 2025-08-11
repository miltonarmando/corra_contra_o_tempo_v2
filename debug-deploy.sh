#!/bin/bash

echo "=== GitHub Pages Deploy Debug ==="
echo "Environment: $NODE_ENV"
echo "GitHub Pages Base: /corra_contra_o_tempo_v2/"
echo "Build Command: npm run build"
echo ""

echo "=== Environment Variables ==="
echo "VITE_OPENROUTER_API_KEY length: ${#VITE_OPENROUTER_API_KEY}"
if [ ! -z "$VITE_OPENROUTER_API_KEY" ]; then
    echo "VITE_OPENROUTER_API_KEY preview: ${VITE_OPENROUTER_API_KEY:0:20}..."
else
    echo "VITE_OPENROUTER_API_KEY: NOT SET"
fi
echo ""

echo "=== Running Build ==="
npm run build

echo ""
echo "=== Build Complete ==="
echo "Check dist/ folder for built files"
ls -la dist/ 2>/dev/null || echo "dist/ folder not found"
