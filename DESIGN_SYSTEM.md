# DESIGN_SYSTEM.md

# Portfolio Design System

## 1. Design Concept

### Core Concept

**Monochrome Digital Portfolio**

The website should feel like a refined digital portfolio created by a developer who cares about both engineering and visual detail.

Primary characteristics:

* monochrome
* minimal
* cinematic
* editorial
* technical
* smooth
* spacious
* sophisticated

The website should feel calm at first glance and become more impressive through interaction.

---

# 2. Design Principles

## Principle 1 — Less, But Better

Every element must earn its place.

Do not add:

* decorative gradients
* excessive icons
* unnecessary cards
* unnecessary labels
* random illustrations
* excessive shadows

Whitespace is an important visual element.

---

## Principle 2 — Typography Creates the Visual Identity

Large typography should carry much of the visual impact.

Use typography instead of excessive graphics.

Headings may be oversized.

Body text should remain comfortable to read.

---

## Principle 3 — Motion Creates Personality

Animation should enhance the feeling of quality.

Motion should never feel like a gimmick.

Use:

* reveal
* fade
* slide
* subtle scale
* parallax
* hover transformation

Avoid aggressive:

* bouncing
* spinning
* shaking
* flashing
* looping motion

---

## Principle 4 — Monochrome First

The website should still look complete if all accent colors are removed.

Color is secondary.

Form, typography, spacing, imagery, and motion should carry the design.

---

# 3. Color System

## Primary

```text
Background:
#080808

Primary Surface:
#101010

Secondary Surface:
#161616

Primary Text:
#F5F5F5

Secondary Text:
#A0A0A0

Muted Text:
#666666

Border:
rgba(255,255,255,0.10)

Subtle Border:
rgba(255,255,255,0.06)
```

---

## Interaction Colors

Preferred:

```text
White:
#FFFFFF

Soft White:
#EAEAEA
```

Optional accent:

```text
Accent:
#F87C17
```

The accent must be used sparingly.

Possible uses:

* small active indicators
* selected navigation state
* CTA detail
* tiny project metadata
* interactive cursor detail

Do not use the accent as the primary background of large sections.

---

# 4. Typography

Typography should feel modern and editorial.

Recommended pairing:

### Display

Space Grotesk

### Body

Inter

Alternative display fonts may be used only when they preserve the visual character.

Use a maximum of two font families.

---

# 5. Type Scale

Use responsive typography.

## Display

```text
Hero:
clamp(3.5rem, 10vw, 9rem)

Section heading:
clamp(2.5rem, 6vw, 5rem)

Large statement:
clamp(2rem, 5vw, 4rem)
```

## Supporting

```text
Project title:
clamp(1.5rem, 3vw, 2.5rem)

Body:
clamp(1rem, 1.3vw, 1.125rem)

Small:
0.875rem

Caption:
0.75rem
```

---

# 6. Typography Rules

Headings:

* high contrast
* short
* strong hierarchy
* generous line height for large type

Body:

* readable
* muted
* maximum comfortable line width

Preferred reading width:

```text
45rem – 65rem
```

Avoid large paragraphs spanning the entire screen.

---

# 7. Spacing System

Use a consistent spacing scale.

```text
4px
8px
12px
16px
24px
32px
48px
64px
80px
120px
160px
```

Section spacing should generally be:

```text
clamp(80px, 12vw, 180px)
```

Do not create arbitrary spacing values unless necessary.

---

# 8. Layout

Preferred container:

```text
max-width: 1400px
```

Desktop horizontal padding:

```text
clamp(24px, 4vw, 72px)
```

Mobile horizontal padding:

```text
20px – 24px
```

The layout should use generous margins.

Do not fill every available space.

---

# 9. Grid

Use asymmetrical layouts where appropriate.

Preferred:

* editorial grid
* 12-column desktop grid
* asymmetric project layouts
* large media with supporting metadata

Avoid making every section identical two-column cards.

Visual rhythm should come from variation within the same system.

---

# 10. Borders

Borders should be subtle.

Preferred:

```text
1px solid rgba(255,255,255,0.06)
```

or

```text
1px solid rgba(255,255,255,0.10)
```

Do not create visible borders around every text block.

Use borders strategically to separate information.

---

# 11. Radius

The website should feel refined rather than overly rounded.

Preferred:

```text
Small:
6px

Medium:
10px

Large:
16px

Image / Feature:
20px
```

Avoid excessive pill-shaped containers.

Pills should primarily be used for:

* tags
* compact metadata
* small controls

---

# 12. Shadows

Use extremely subtle shadows.

Dark mode should rely more on:

* contrast
* borders
* spacing
* surface differences

than heavy shadows.

Avoid:

```text
large glow
colored shadow
strong neon shadow
```

---

# 13. Navigation

Navigation should remain visually simple.

Preferred structure:

```text
Logo / Name

Work
Experience
About
Contact

Menu
```

Desktop may use a horizontal navigation.

Mobile should use an elegant minimal menu.

Navbar background should generally remain transparent or use an extremely subtle surface.

---

# 14. Hero Direction

The Hero should feel cinematic.

Suggested composition:

```text
small introduction

BIG NAME / ROLE

short positioning statement

primary CTA
secondary CTA

subtle visual interaction
```

The hero can include one Three.js element.

Potential 3D concept:

* minimal geometric object
* abstract floating object
* low-poly object
* interactive developer desk element

Do not overcrowd the Hero.

---

# 15. About Direction

The About section should use typography and whitespace.

Suggested structure:

```text
ABOUT

A short statement about who I am.

A longer paragraph explaining how I approach
software development and digital products.
```

Optional side metadata:

```text
Based in
Indonesia

Focus
Web Development

Availability
Freelance / Opportunities
```

---

# 16. Selected Work Direction

Projects are the main portfolio content.

Visual priority:

```text
Image / Preview
>
Project title
>
Description
>
Technology
>
Role / Year
```

Project numbering is encouraged.

Example:

```text
01
PAMIOL

Internal Quality Audit Platform

Vue.js · Laravel · PostgreSQL
2025

VIEW PROJECT →
```

Project images should be large.

Use hover motion instead of decorative cards.

---

# 17. Experience Direction

Experience should be editorial.

Example:

```text
2025
Software Developer
Company Name

Description...

----------------------------

2024
Freelance Developer

Description...
```

Avoid excessive card decoration.

Use typography, alignment, and separators to create structure.

---

# 18. Achievements Direction

Achievements should look like milestones.

Possible presentation:

```text
ACHIEVEMENTS

2025
Project / Award
Description

2024
Competition / Funding
Description
```

Use compact visual indicators.

Examples:

* year
* category
* title
* short description

---

# 19. Tech Stack Direction

The Tech Stack section should be intentionally quiet.

Use grouped categories:

```text
FRONTEND
React
Vue
TypeScript

BACKEND
Laravel
Node.js
Express

DATABASE
PostgreSQL
MySQL
MongoDB

TOOLS
Git
Docker
Figma
```

Icons may be monochrome.

On hover, icons may subtly brighten or move.

No rainbow logo wall.

---

# 20. Contact Direction

Final section should feel spacious.

Suggested hierarchy:

```text
LET'S BUILD
SOMETHING
MEANINGFUL.

email@example.com

GitHub
LinkedIn
```

Large typography is preferred.

The final CTA should be obvious but elegant.

---

# 21. Motion Tokens

## Fast

```text
150ms – 200ms
```

For:

* hover
* micro interaction
* icon changes

## Medium

```text
300ms – 500ms
```

For:

* component transitions
* reveals
* navigation

## Slow

```text
600ms – 1000ms
```

For:

* Hero entrance
* major section transitions
* cinematic moments

---

# 22. Motion Easing

Preferred:

```text
easeOut
easeInOut
custom cubic-bezier
spring
```

Suggested default:

```text
cubic-bezier(0.22, 1, 0.36, 1)
```

Use spring motion selectively.

---

# 23. Reveal Patterns

Standard reveal:

```text
opacity: 0 → 1
y: 24px → 0
```

Large heading:

```text
clip-path reveal
+
translateY
```

Image reveal:

```text
scale: 1.04 → 1
opacity: 0 → 1
```

Never make every section use the exact same reveal simultaneously.

Use the same motion language with slight variation.

---

# 24. Hover Behavior

Hover should be subtle.

Examples:

Project:

```text
image scale:
1 → 1.02
```

Button:

```text
translateX:
0 → 4px
```

Link:

```text
underline/reveal
```

Image:

```text
slight directional movement
```

Do not use exaggerated hover transforms.

---

# 25. Cursor Interaction

A custom cursor may be implemented on desktop.

Possible behavior:

* small dot
* subtle trailing circle
* magnetic CTA
* project hover label

Mobile must not depend on cursor interaction.

Cursor should never reduce usability.

---

# 26. Three.js Visual Language

Three.js should use:

* grayscale materials
* soft lighting
* simple geometry
* restrained movement
* realistic but minimal depth

Preferred aesthetic:

```text
black
white
gray
soft metallic
matte
glass only when necessary
```

Avoid:

* rainbow materials
* neon objects
* excessive particles
* giant glowing spheres
* sci-fi dashboard aesthetics

---

# 27. Three.js Interaction

A 3D interaction should generally have one clear purpose.

Examples:

### Hero

An object subtly reacts to pointer movement.

### Projects

A laptop or workstation scene represents the developer's work.

### Achievements

A subtle 3D object may represent milestones.

### Navigation

A small 3D element may transition between major sections.

Never use all of these simultaneously.

Choose one primary 3D concept.

---

# 28. Image Treatment

Project images should feel consistent.

Preferred:

* consistent aspect ratios
* subtle rounding
* monochrome or natural color depending on project
* high resolution
* WebP / AVIF

Avoid excessive filters.

Images should retain enough contrast to communicate the actual project.

---

# 29. Iconography

Icons should be:

* minimal
* monochrome
* consistent stroke weight

Prefer one icon library.

Do not mix many unrelated icon styles.

---

# 30. Buttons

Primary button:

* monochrome
* high contrast
* simple geometry

Secondary button:

* transparent
* subtle border

Avoid excessive gradients and glowing buttons.

---

# 31. Section Rhythm

Each section should have:

1. section identifier
2. main heading
3. supporting content
4. visual focal point

However, not every section must look identical.

Use consistent rules but varying compositions.

This creates rhythm without breaking the design system.

---

# 32. Visual Hierarchy

Priority order:

1. name / hero statement
2. selected projects
3. professional experience
4. achievements
5. supporting information
6. tech stack
7. social/contact

Tech Stack should never visually overpower Projects.

---

# 33. Responsive Philosophy

Desktop:

* large typography
* asymmetry
* generous spacing
* subtle 3D interaction

Tablet:

* simplified composition
* reduced typography
* fewer simultaneous animations

Mobile:

* single-column hierarchy
* simplified motion
* reduced 3D complexity
* large readable text
* touch-friendly controls

---

# 34. Accessibility

Ensure:

* high text contrast
* keyboard focus states
* semantic headings
* semantic navigation
* accessible buttons
* alt text for meaningful images
* reduced-motion support

Do not sacrifice usability for aesthetics.

---

# 35. Performance Philosophy

The website should feel fast before it feels impressive.

Prioritize:

1. typography
2. layout
3. content
4. motion
5. 3D

Do not allow 3D or animation to damage perceived performance.

---

# 36. Overall Experience

The user should experience the portfolio in this order:

```text
Who is this person?
        ↓
What can they do?
        ↓
What have they built?
        ↓
Where have they worked?
        ↓
What have they achieved?
        ↓
What technologies do they use?
        ↓
How can I contact them?
```

The website should answer those questions naturally through visual storytelling rather than presenting them as a traditional resume.

---

# 37. Final Design Rule

The finished website must feel:

> Minimal at rest.
> Beautiful in motion.
> Memorable through interaction.

The design should never look crowded.

The website should still look premium even when all animations are disabled.

Motion and Three.js are enhancements to the design system, not substitutes for it.