#!/bin/bash
echo "Creating public/static/images directory..."
mkdir -p public/static/images
echo "Copying images from static/images to public/static/images..."
cp -R static/images/* public/static/images/
echo "Images copied successfully!"
