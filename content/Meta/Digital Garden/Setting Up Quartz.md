---
title: Setting Up Quartz
tags:
  - digital-garden
  - quartz
  - tutorial
---

# Setting Up Quartz for Your Digital Garden

[Quartz](https://quartz.jzhao.xyz/) is a powerful and flexible framework for creating digital gardens. This guide will walk you through the process of setting up your own digital garden using Quartz.

## Prerequisites

Before you begin, make sure you have:
- [Node.js](https://nodejs.org/) installed (v14 or higher)
- [Git](https://git-scm.com/) installed
- A GitHub account (for hosting)
- Basic familiarity with the command line

## Step 1: Clone the Quartz Repository

Start by cloning the Quartz repository:

```bash
git clone https://github.com/jackyzha0/quartz.git your-garden-name
cd your-garden-name
```

## Step 2: Install Dependencies

Install the necessary dependencies:

```bash
npm i
```

## Step 3: Initialize Your Digital Garden

Run the create command to set up your digital garden:

```bash
npx quartz create
```

Choose "Empty Quartz" when prompted to initialize the content.

## Step 4: Customize Your Configuration

Edit the `quartz.config.ts` file to customize your digital garden:
- Change the `pageTitle` to your garden's name
- Update the `baseUrl` if you plan to host it on a custom domain
- Customize the fonts and colors to match your preferences

Edit the `quartz.layout.ts` file to customize the layout and footer links.

## Step 5: Add Content

Create Markdown files in the `content` directory. Each file should have front matter with at least a title:

```markdown
---
title: Your Note Title
tags:
  - tag1
  - tag2
---

# Your Note Content

Write your note content here...
```

## Step 6: Preview Your Digital Garden

Run the following command to build and preview your digital garden locally:

```bash
npx quartz build --serve
```

Visit `http://localhost:8080` in your browser to see your digital garden.

## Step 7: Deploy to GitHub Pages

1. Create a new GitHub repository
2. Update the remote URL:
   ```bash
   git remote rm origin
   git remote add origin https://github.com/yourusername/your-repo-name.git
   ```
3. Push your changes:
   ```bash
   npx quartz sync --no-pull
   ```
4. In your GitHub repository, go to Settings > Pages
5. Select "GitHub Actions" as the source
6. Your site will be deployed at `https://yourusername.github.io/your-repo-name/`

## Tips for Maintaining Your Digital Garden

- Use consistent tagging to organize your notes
- Create index pages for different categories
- Link related notes to create a network of ideas
- Regularly update and refine your notes
- Use the graph view to visualize connections

## Related

- [[What is a Digital Garden]]
- [[Meta/Knowledge Management/Building a PKM System]]

---

*This guide will be updated as Quartz evolves and new features are added.* 