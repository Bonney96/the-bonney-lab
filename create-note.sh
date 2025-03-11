#!/bin/bash

# create-note.sh - A script to easily create new notes for the Bonney Lab Digital Garden

# Set colors for better visibility
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Bonney Lab Digital Garden Note Creator ===${NC}"
echo "This script will help you create a new note with the proper structure."
echo

# Get the note title
read -p "Enter the note title: " title

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
        template="content/Meta/Templates/seed-template.md"
        folder="content/Seeds"
        ;;
    2) 
        stage="tree"
        template="content/Meta/Templates/tree-template.md"
        folder="content/Trees"
        ;;
    3) 
        stage="fruit"
        template="content/Meta/Templates/fruit-template.md"
        folder="content/Fruits"
        ;;
    *) 
        echo "Invalid choice. Defaulting to seed."
        stage="seed"
        template="content/Meta/Templates/seed-template.md"
        folder="content/Seeds"
        ;;
esac

# Create folders if they don't exist
mkdir -p "$folder"

# The destination file
dest_file="$folder/$filename.md"

# Check if file already exists
if [ -f "$dest_file" ]; then
    echo "Warning: File $dest_file already exists."
    read -p "Do you want to overwrite it? (y/n): " overwrite
    if [ "$overwrite" != "y" ]; then
        echo "Operation cancelled."
        exit 1
    fi
fi

# Copy the template
cp "$template" "$dest_file"

# Replace the placeholder title in frontmatter and content
sed -i '' "s/Title Goes Here/$title/g" "$dest_file"
sed -i '' "s/{{Title}}/$title/g" "$dest_file"

echo
echo -e "${GREEN}Success!${NC} Note created at: $dest_file"
echo
echo "You can now edit this file to add your content."
echo "To view the note in your digital garden, run: npx quartz build --serve"
echo 