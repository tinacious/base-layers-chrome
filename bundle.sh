rm base-layers-grid.zip
rm -rf base-layers-grid
mkdir base-layers-grid

# Manifest
cp manifest.json base-layers-grid/manifest.json

# Scripts
cp base-layers.js base-layers-grid/base-layers.js
cp background.js base-layers-grid/background.js

# Assets
cp icon.png base-layers-grid/icon.png

# Bundle
zip -r base-layers-grid.zip base-layers-grid
