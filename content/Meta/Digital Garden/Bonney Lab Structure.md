---
title: Bonney Lab Structure
tags:
  - meta
  - digital-garden
  - documentation
---

# The Bonney Lab Digital Garden Structure

This document serves as a comprehensive guide to the structure, organization, and maintenance of The Bonney Lab digital garden. It's designed to help understand the existing structure and ensure consistent growth of the garden over time.

## Overview

The Bonney Lab is a digital garden that follows the principles of [[Meta/Learning in Public]] and uses the [[Meta/Digital Garden/What is a Digital Garden|digital garden]] concept to share evolving ideas and knowledge. The garden is built using [Quartz](https://quartz.jzhao.xyz/), a static site generator specifically designed for digital gardens.

## Content Organization

The content in The Bonney Lab is organized hierarchically using folders and follows a specific taxonomy:

### Main Pages

- **[[index|Home]]**: The landing page and introduction to The Bonney Lab
- **[[About]]**: Information about the purpose and philosophy of The Bonney Lab
- **[[Topics]]**: A directory of all topic categories
- **[[Notes]]**: A chronological or categorical view of all notes

### Content Categories

The content is organized into the following main categories:

1. **Research**: Academic and practical research topics
   - Machine Learning
   - Data Science
   - Computer Vision
   - Natural Language Processing

2. **Projects**: Details about projects
   - Current
   - Completed
   - Ideas

3. **Learning**: Resources and notes from learning activities
   - Books
   - Courses
   - Tutorials
   - Papers

4. **Tools**: Information about tools and resources
   - Software
   - Frameworks
   - Datasets
   - Research Methods

5. **Meta**: Documentation about the digital garden itself
   - Digital Garden
   - Knowledge Management
   - Learning in Public

### Note Classification

Each note in the garden is classified into one of three categories based on its maturity:

- **Seeds**: Raw ideas that are still forming
- **Trees**: Growing ideas that are connecting with other concepts
- **Fruits**: Refined ideas that are well-developed

## File Naming Conventions

The file naming follows these conventions:

1. Main pages use PascalCase: `About.md`, `Topics.md`, `Notes.md`
2. Content categories use folder structure: `Research/Machine Learning/`
3. Individual notes use title case with spaces: `What is a Digital Garden.md`
4. All files use `.md` extension for Markdown

## Front Matter Template

Each note should include front matter in the following format:

```markdown
---
title: Note Title
tags:
  - relevant-tag
  - another-tag
---
```

## Linking Conventions

The digital garden uses bidirectional links to connect related concepts:

1. Internal links use double brackets: `[[file-name]]`
2. Links with different display text: `[[file-name|Display Text]]`
3. Section links: `[[file-name#section]]`

## Tags

Tags are used for categorizing and organizing content. Some common tags include:

- `digital-garden`
- `knowledge-management`
- `learning`
- `productivity`
- `meta`

Tags should be lowercase with hyphens for spaces.

## Growing The Garden

When adding new content to the garden, follow these guidelines:

1. **Consider the maturity of the idea**: Is it a seed, tree, or fruit?
2. **Place it in the appropriate folder**: Choose the right category
3. **Add proper front matter**: Include title and relevant tags
4. **Link to related notes**: Create connections with existing content
5. **Update index pages**: Add references to new content in relevant index pages

## Existing Content

The garden currently includes:

### Meta Content
- [[Meta/Digital Garden/What is a Digital Garden]]
- [[Meta/Digital Garden/Setting Up Quartz]]
- [[Meta/Knowledge Management/Building a PKM System]]
- [[Meta/Learning in Public]]

### Main Pages
- [[index|Home Page]]
- [[About]]
- [[Topics]]
- [[Notes]]

## Technical Details

The Bonney Lab is built with:

- **Framework**: Quartz 4
- **Styling**: Custom theme with Montserrat, Open Sans, and Fira Code fonts
- **Deployment**: GitHub Pages

## Maintenance Tasks

To keep the garden healthy:

1. **Regular Review**: Periodically review and update existing notes
2. **Link Maintenance**: Ensure links are working and appropriate
3. **Content Expansion**: Develop seeds into trees, and trees into fruits
4. **Structural Improvements**: Refine the organization as the garden grows
5. **Tag Consistency**: Maintain consistent tagging practices

## Related

- [[Meta/Digital Garden/What is a Digital Garden]]
- [[Meta/Digital Garden/Setting Up Quartz]]
- [[Meta/Knowledge Management/Building a PKM System]]

---

*This guide will be updated as The Bonney Lab digital garden evolves.* 