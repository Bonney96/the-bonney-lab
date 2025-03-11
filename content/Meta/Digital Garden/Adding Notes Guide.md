---
title: Adding Notes Guide
stage: fruit
tags:
  - meta
  - guide
  - workflow
---

# Adding Notes to Your Digital Garden

This guide explains the easiest ways to add new content to The Bonney Lab Digital Garden.

## Using the Create Note Script (Recommended)

The simplest way to add a new note is using the provided script:

1. Open a terminal and navigate to your digital garden folder
2. Run the creation script:
   ```bash
   ./create-note.sh
   ```
3. Follow the prompts to:
   - Enter a title for your note
   - Select the appropriate growth stage
4. The script will:
   - Create a properly formatted file with the correct frontmatter
   - Place it in the appropriate folder based on the growth stage
   - Set up the basic structure based on the template

## Manual Note Creation

You can also manually create notes if you prefer:

1. Create a new Markdown (.md) file in the appropriate folder:
   - `content/Seeds/` for early-stage ideas
   - `content/Trees/` for developing concepts
   - `content/Fruits/` for mature ideas
   - Or any other folder that fits your organization system

2. Add the required frontmatter at the top of the file:
   ```yaml
   ---
   title: Your Note Title
   stage: seed # Can be "seed", "tree", or "fruit"
   tags:
     - tag1
     - tag2
   ---
   ```

3. Write your content using Markdown formatting

4. Save the file with a descriptive filename (preferably using kebab-case: `like-this.md`)

## Templates

For consistency, we have template files for each growth stage in the `content/Meta/Templates/` folder:

- `seed-template.md` - For raw, nascent ideas
- `tree-template.md` - For developing concepts with structure
- `fruit-template.md` - For mature, refined ideas

These templates provide consistent structure and prompts to help you organize your thoughts.

## Note Naming Conventions

For better organization:

- Use kebab-case for filenames (words-separated-by-hyphens.md)
- Keep filenames short but descriptive
- Avoid special characters in filenames

## Building & Previewing

After creating or editing notes:

1. Preview your changes locally:
   ```bash
   npx quartz build --serve
   ```
   This will start a local server, typically at http://localhost:8080

2. Build the site for deployment:
   ```bash
   npx quartz build
   ```

## Tips for Effective Note Writing

- **Link liberally**: Create connections using `[[double brackets]]` to link to other notes
- **Use frontmatter**: Add relevant tags to make your notes discoverable
- **Update growth stages**: As your notes mature, update their stage from seed → tree → fruit
- **Add metadata**: Include creation date, references, and other relevant information
- **Keep atomic**: Focus each note on a single idea or concept
- **Garden regularly**: Revisit old notes to update, refine, and create new connections

## Recommended Workflow

1. **Capture** seed ideas quickly when inspiration strikes
2. **Develop** promising seeds into trees by adding structure and connections
3. **Refine** important trees into fruits through multiple revisions
4. **Link** related notes to create a rich network of ideas
5. **Review** periodically to maintain and improve your garden

Remember that a digital garden thrives through constant tending and care. Don't worry about perfection - focus on growth and connections! 