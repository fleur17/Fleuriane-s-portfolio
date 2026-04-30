# Portfolio Projects Documentation

This document explains how to add new projects and use the block system in `src/data/projects.ts`.

---

## Table of Contents

1. [Project Structure](#1-project-structure)
2. [Hero Block](#2-hero-block)
3. [Steps](#3-steps)
4. [Blocks Reference](#4-blocks-reference)
   - [Title Block](#title-block)
   - [Text Block](#text-block)
   - [Media Block](#media-block)
   - [Video Block](#video-block)
   - [Topic Block](#topic-block)
   - [Mix Block](#mix-block)
   - [Card Block](#card-block)
   - [Document Block](#document-block)
   - [Custom Block](#custom-block)
5. [Projects Displays Reference](#6-projects-displays-reference)
6. [Projects Showcases Reference](#5-projects-showcases-reference)
7. [Adding a New Project](#7-adding-a-new-project)
8. [Adding a New Project Page](#8-adding-a-new-project-page)
9. [Adding Images and Videos](#9-adding-images-and-videos)
10. [Text Formatting](#10-text-formatting)

---

## 1. Project Structure

Each project in `src/data/projects.ts` follows this structure:

```ts
{
  slug: "my-project",       // URL of the project page: /my-project
  hero: { ... },            // Hero section at the top of the page
  steps: [ ... ],           // Content sections of the page
}
```

A project page is always composed of:

- One **Hero** at the top
- One or more **Steps**, each separated by a horizontal line

---

## 2. Hero Block

The Hero appears at the top of every project page. It always has a title. Optionally, it can have a subtitle, a background image or a carousel below it.

### Hero with background image

```ts
hero: {
  title: "My Project Title",
  subtitle: "A short description of the project",
  background: "/images/projects/my-project/background.svg",
}
```

### Hero with carousel

```ts
hero: {
  title: "My Project Title",
  subtitle: "A short description of the project",
  carousel: {
    type: "carousel",
    medias: [
      { src: "/images/projects/my-project/screen-1.png", width: 390, height: 844 },
      { src: "/images/projects/my-project/screen-2.png", width: 390, height: 844 },
    ],
  },
}
```

### Hero with no background or carousel

```ts
hero: {
  title: "My Project Title",
  subtitle: "A short description of the project",
}
```

---

## 3. Steps

Steps are the content sections of the page. Each step contains an array of blocks. A horizontal separator is automatically added between steps.

```ts
steps: [
  {
    blocks: [
      // blocks go here
    ],
  },
  {
    blocks: [
      // blocks go here
    ],
  },
];
```

### Substeps

A step can have substeps — nested sections that appear inside the step without a separator between them. This is useful for grouping related content.

```ts
{
  blocks: [
    { type: "title", text: "How does it work?" },
  ],
  substeps: [
    {
      blocks: [
        { type: "title", text: "1. First part" },
        { type: "text", text: "..." },
      ],
    },
    {
      blocks: [
        { type: "title", text: "2. Second part" },
        { type: "text", text: "..." },
      ],
    },
  ],
}
```

---

## 4. Blocks Reference

Blocks are the building pieces inside each step. They are listed in order inside the `blocks` array and rendered top to bottom.

---

### Title Block

Displays a section title, left-aligned by default. Optionally, it can have a position.

```ts
{
  type: "title",
  text: "My Section Title",
  position: "center",  // title will be centered, not left-aligned
}
```

>

---

### Text Block

Displays a paragraph of text, left-aligned by default. Supports markdown formatting (bold, italic, lists, links). Optionally, it can have a position.

```ts
{
  type: "text",
  text: "A simple paragraph.",
  position: "center",  // title will be centered, not left-aligned
}
```

With markdown formatting:

```ts
{
  type: "text",
  text: "**Bold text**, *italic text*, and a [link](https://example.com).\n\nA second paragraph after a blank line.\n- First list item\n- Second list item\n- Third list item",
}
```

> To add a linebreak, use **\n**. To add a newline, use **\n\n**.

> See [Text Formatting](#8-text-formatting) for a full reference.

---

### Media Block

Displays one or more images or videos in different layouts.

#### Single full-width image

```ts
{
  type: "media",
  medias: [
    {
      src: "/images/projects/my-project/photo.jpg",
      alt: "Description of the image",
      width: 1600,
      height: 900,
    },
  ],
  mediasLayout: "full-width",
}
```

#### Grid of images (up to 3 columns)

```ts
{
  type: "media",
  medias: [
    { src: "/images/projects/my-project/photo-1.jpg", alt: "Photo 1", width: 400, height: 600 },
    { src: "/images/projects/my-project/photo-2.jpg", alt: "Photo 2", width: 400, height: 600 },
    { src: "/images/projects/my-project/photo-3.jpg", alt: "Photo 3", width: 400, height: 600 },
  ],
  mediasLayout: "grid",
}
```

#### Image with caption

```ts
{
  type: "media",
  medias: [
    {
      src: "/images/projects/my-project/diagram.png",
      alt: "Architecture diagram",
      width: 1200,
      height: 800,
      caption: "Figure 1 — System architecture overview",
    },
  ],
  mediasLayout: "full-width",
}
```

#### Available layouts

| `mediasLayout` | Description                                     |
| -------------- | ----------------------------------------------- |
| `"full-width"` | Each image takes full width, stacked vertically |
| `"grid"`       | Images displayed in up to 3 columns             |

---

### Video Block

Displays a video player. Optionally shows a placeholder image before the video plays.

#### Video with placeholder image

```ts
{
  type: "video",
  media: {
    src: "/videos/projects/my-project/demo.mp4",
    placeholder: "/images/projects/my-project/video-thumbnail.jpg",
    width: 800,
    height: 450,
  },
}
```

#### Video without placeholder (plays directly)

```ts
{
  type: "video",
  media: {
    src: "/videos/projects/my-project/demo.mp4",
    width: 800,
    height: 450,
  },
}
```

---

### Topic Block

Displays an introduction section with a title, a description, and a list of tags describing the project type.

```ts
{
  type: "topic",
  title: "Description of the product",
  text: "A paragraph describing the project.",
  topics: [
    "Business project",
    "Multifunctional elastic",
    "A fashion item",
  ],
}
```

---

### Mix Block

Displays a text section alongside an image, side by side. Useful for research or analysis sections.

```ts
{
  type: "mix",
  title: "User Research & Insights",
  text: "A paragraph of text describing the research.",
  media: {
    src: "/images/projects/my-project/research.jpg",
    width: 200,
    height: 200,
    alt: "Research image",
  },
  position: "left",  // "left" = text left, image right / "right" = image left, text right
}
```

---

### Card Block

Displays a row of cards. Used for User Personas cards or Medias cards.

#### User Personas cards

```ts
{
  type: "card",
  cards: [
    {
      type: "persona",
      model: { src: "/images/common/woman.png" },
      name: "Emma",
      role: "Model",
      age: 24,
      text: `**Goals:** Find opportunities easily\n**Pain Points:** Navigation confusion`,
    },
    {
      type: "persona",
      model: { src: "/images/common/man.png" },
      name: "Lucas",
      role: "Actor",
      age: 28,
      text: `**Goals:** Get noticed by agencies\n**Pain Points:** Poor profile visibility`,
    },
  ],
}
```

> `name` is optional — omit it if the persona has no name.

#### Medias cards

```ts
{
  type: "card",
  cards: [
    {
      type: "media",
      src: "/images/common/woman.png",
      width: 400,
      height: 400,
      title: "Woman Card"
    },
    {
      type: "media",
      src: "/images/common/man.png",
      width: 400,
      height: 400,
      title: "Man Card"
    },
  ],
}
```

---

### Document Block

Displays a downloadable file link (PDF, PPTX, DOCX, etc.), left-aligned by default.

```ts
{
  type: "document",
  src: "/documents/projects/my-project/report.pdf",
  position: "center",  // document will be centered, not left-aligned
}
```

Place your document files in:

```
public/documents/projects/my-project/
```

---

### Column Block

Displays texts in different columns.

```ts
{
  type: "column",
  text: [
    "This is the column 1",
    "This is the column 2",
  ],
}
```

> The number of columns depends on the number of items in the text array

---

### Custom Block

Used for unique interactive components that are specific to one project (e.g. the particle cloud on the Neuroportal page). Only use this if the component already exists — ask the developer to add a new one if needed.

```ts
{
  type: "custom",
  component: "floating-particles",
}
```

#### Available custom components

| `component`            | Description                                 |
| ---------------------- | ------------------------------------------- |
| `"floating-particles"` | Interactive 3D particle cloud (Neuroportal) |

---

## 5. Projects Displays Reference

Projects Displays are the projects displayed on the front page of the portfolio. They are listed in order inside the `projectsDisplays` array and rendered top to bottom.

### Layout of a project display

A project display always have two separate sections :

- A text section `textSection`
- A Media section `mediaSection`

```ts
{
  textSection: {
    projectType: "ART PROJECT",
    name: "The NeuroPortal",
    description: "What if you can be the master of your brain through art ?",
    href: "/neuroportal",  // Must be the same as the project slug
    media: {
      src: "/images/common/touchdesigner.svg",
      width: 150,
      height: 50,
      alt: "Touchdesigner",
    },
    position: "left", // "left" = text left, image right / "right" = image left, text right
  },
  mediaSection: [
    {
      src: "/images/projects/neuroportal/neuro.svg",
      alt: "Neuro background",
      width: 800,
      height: 800,
    },
  ],
}
```

#### Text Section

```ts
{
  textSection: {
    projectType: "ART PROJECT",
    name: "The NeuroPortal",
    description: "What if you can be the master of your brain through art ?",
    href: "neuroportal",  // Ref to the linked page, must be the same as the project slug
    media: {. // Usually the logo of the main app used to develop the project
      src: "/images/common/touchdesigner.svg",
      width: 150,
      height: 50,
      alt: "Touchdesigner",
    },
    position: "left", // "left" = text left, image right / "right" = image left, text right
  },
}
```

#### Media Section

```ts
{
  mediaSection: [
    {
      src: "/images/projects/neuroportal/neuro.svg",
      alt: "Neuro background",
      width: 800,
      height: 800,
    },
  ],
}
```

It is possible to add custom CSS style to medias using `className`. It is notably useful if you want your medias to swap when hovered.

```ts
{
  mediaSection: [
    {
      src: "/images/projects/neuroportal/neuro.svg",
      alt: "Neuro background",
      width: 800,
      height: 800,
      className: "group-hover:hidden",  // When hovered, media is hidden.
    },
    {
      src: "/images/projects/neuroportal/hover-neuro-home.svg",
      alt: "Neuro background hover",
      width: 800,
      height: 800,
      className: "hidden group-hover:block",  // Hidden by default. When hovered, media is displayed.
    },
  ],
}
```

## 6. Projects Showcases Reference

Projects Showcases are the projects displayed on the `/projects` page of the portfolio. They are listed in order inside the `projectsShowcases` array and rendered top to bottom.

### Layout of a project showcase

```ts
{
  slug: "neuroportal",  // Ref to the linked page, must be the same as the project slug
  title: "The NeuroPortal",
  category: "Art / UX Design",
  description: "A modern art-focused platform exploring interactive digital experiences.",
  image: "/images/projects/neuroportal/neuroportal.png",
}
```

## 7. Adding a New Project

### Step 1 — Add the project entry in `src/data/projects.ts`

Copy an existing project as a starting point and update the fields:

```ts
{
  slug: "my-new-project",
  hero: {
    title: "My New Project",
    subtitle: "A short description",
  },
  steps: [
    {
      blocks: [
        {
          type: "topic",
          title: "Description",
          text: "What the project is about.",
          topics: ["Category 1", "Category 2"],
        },
      ],
    },
    {
      blocks: [
        { type: "title", text: "First Section" },
        { type: "text", text: "Content of the first section." },
      ],
    },
  ],
},
```

### Step 2 — Add project images

Place all images for this project in:

```
public/images/projects/my-new-project/
```

Use lowercase and hyphens for file names:

```
✅ hero-image.jpg
✅ wireframe-1.png
❌ HeroImage.jpg
❌ wireframe_1.PNG
```

### Step 3 — Add the project to the homepage

Open `src/data/projects-displays.ts` and find the `projectsDisplays` array. Add an entry for the new project so it appears on the homepage card grid.

```ts
{
  textSection: {
    projectType: "ART PROJECT",
    name: "My New Project",
    description: "A short description",
    href: "my-new-project",
    media: [
      {
        src: "/images/common/touchdesigner.svg",
        width: 150,
        height: 50,
        alt: "Touchdesigner",
      }
    ],
    position: "left",
  },
  mediaSection: [
    {
      src: "/images/projects/my-new-project/display.png",
      alt: "My New Project",
      width: 800,
      height: 800,
    },
  ]
}
```

---

## 8. Adding a New Project Page

If the new project needs a **unique page layout** (different from the standard block-based layout), the developer needs to create a new file:

```
src/app/my-new-project/page.tsx
```

For standard projects that use the block system, the dynamic route (`src/app/[slug]/page.tsx`) handles everything automatically — no new file needed.

> This block system was developed in order to not create new unique page layout. If a block type is missing, please contact the dev team.

---

## 9. Adding Images and Videos

### Images

| Format           | When to use                           |
| ---------------- | ------------------------------------- |
| `.jpg` / `.jpeg` | Photos, realistic images              |
| `.png`           | Images with transparency              |
| `.svg`           | Illustrations, logos, icons           |
| `.webp`          | Preferred for web — smaller file size |

Always fill in the `width` and `height` fields with the **actual dimensions of the file**. This ensures images display correctly without layout shifts.

```ts
// ✅ Correct — matches actual file dimensions
{ src: "/images/projects/my-project/photo.jpg", width: 1200, height: 800, alt: "..." }

// ❌ Wrong — arbitrary values cause layout issues
{ src: "/images/projects/my-project/photo.jpg", width: 500, height: 500, alt: "..." }
```

### Videos

Place video files in:

```
public/videos/projects/my-project/
```

Supported formats: `.mp4`, `.webm`, `.ogg`

> Prefer `.mp4` for broad browser compatibility.

### Documents

Place document files in:

```
public/documents/projects/my-project/
```

---

## 10. Text Formatting

All `text` fields support markdown formatting.

| Syntax                         | Result                   |
| ------------------------------ | ------------------------ |
| `**bold**`                     | **bold**                 |
| `*italic*`                     | _italic_                 |
| `[link text](https://url.com)` | Clickable link           |
| `- item` or `* item`           | Bullet list item         |
| `\n`                           | Linebreak                |
| `\n\n`                         | New line (new paragraph) |

### Examples

```ts
// Bold and italic
text: "This is **important** and this is *emphasis*.";

// Link
text: "Find the source code on [GitHub](https://github.com/my-repo).";

// List
text: `Key findings:\n- Users want personalized suggestions\n- Navigation is often confusing\n- Mobile experience needs improvement`;

// Multiple paragraphs — use \n\n between them
text: `First paragraph content.\n\nSecond paragraph content.`;
```

> **Note:** Do not use HTML tags like `<br>` or `<b>` — use markdown syntax instead.
