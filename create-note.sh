#!/bin/bash

# create-note.sh - A script to easily create new notes for the Bonney Lab Digital Garden

# Set colors for better visibility
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Print a stylized header
echo -e "${BLUE}=== Bonney Lab Digital Garden Note Creator ===${NC}"
echo "This script will help you create a new note with the proper structure."
echo

# Function to handle errors
handle_error() {
  echo -e "${RED}Error: $1${NC}"
  exit 1
}

# Get the note title
read -p "Enter the note title: " title

# Validate title is not empty
if [ -z "$title" ]; then
  handle_error "Title cannot be empty"
fi

# Generate the filename from the title
# Convert to lowercase, replace spaces with hyphens, remove special characters
filename=$(echo "$title" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | sed 's/[^a-z0-9-]//g')

# Get the stage type
echo
echo "Select the growth stage for this note:"
echo "1) 🌱 Seed - Raw, nascent idea"
echo "2) 🌿 Tree - Developing concept with structure"
echo "3) 🍎 Fruit - Mature, refined idea"
read -p "Enter your choice (1-3): " stage_choice

case $stage_choice in
    1) 
        stage="seed"
        folder="content/Research"
        ;;
    2) 
        stage="tree"
        folder="content/Trees"
        ;;
    3) 
        stage="fruit"
        folder="content/Projects"
        ;;
    *) 
        echo -e "${RED}Invalid choice. Defaulting to seed.${NC}"
        stage="seed"
        folder="content/Research"
        ;;
esac

# Create folders if they don't exist
mkdir -p "$folder" || handle_error "Failed to create directory $folder"

# The destination file
dest_file="$folder/$filename.md"

# Check if file already exists
if [ -f "$dest_file" ]; then
    echo -e "${RED}Warning: File $dest_file already exists.${NC}"
    read -p "Do you want to overwrite it? (y/n): " overwrite
    if [ "$overwrite" != "y" ]; then
        echo "Operation cancelled."
        exit 1
    fi
fi

# Get current date in ISO format
current_date=$(date +"%Y-%m-%d")

# Create the frontmatter
cat > "$dest_file" << EOF
---
title: "${title}"
date: ${current_date}
stage: "${stage}"
tags:
  - ${stage}
---

# ${title}

EOF

echo
echo -e "${GREEN}Success!${NC} Note created at: $dest_file"
echo
echo "You can now edit this file to add your content."
echo "To view the note in your digital garden, run: npx quartz build --serve"
echo 