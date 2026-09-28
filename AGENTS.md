# AGENTS.md

## 1. Project Overview

This repository contains a personal developer portfolio website built with:

* React
* TypeScript
* Vite
* Tailwind CSS
* Framer Motion
* Three.js / React Three Fiber

The website represents a professional software developer and should communicate:

* technical ability
* professional experience
* selected projects
* achievements
* technology stack
* personality
* attention to detail

The final result must feel like a premium digital portfolio rather than a conventional resume website.

---

# 2. Primary Objective

Build a portfolio that feels:

* monochromatic
* minimal
* cinematic
* smooth
* modern
* sophisticated
* technical
* intentional

The design should be visually impressive without becoming visually noisy.

The most important principle:

> Every visual element must have a reason to exist.

Do not add visual effects merely because they are technically possible.

---

# 3. Design Authority

The project has three levels of design authority:

### Level 1 — DESIGN_SYSTEM.md

This is the project's primary visual source of truth.

Whenever implementing UI, follow the decisions defined in:

`DESIGN_SYSTEM.md`

### Level 2 — UI/UX Pro Max Skill

Use the UI/UX Pro Max skill as a design and UX advisor.

Reference:

https://github.com/nextlevelbuilder/ui-ux-pro-max-skill

Use it for:

* UI/UX principles
* typography recommendations
* spacing
* interaction patterns
* accessibility
* responsive design
* visual hierarchy
* animation recommendations

However:

> UI/UX Pro Max must not override the portfolio's established visual identity.

Do not introduce unrelated colors, styles, layouts, or visual patterns simply because the skill recommends them.

### Level 3 — Existing Project Components

When a component, token, animation pattern, or interaction already exists in the project, prefer reusing it instead of creating another implementation.

Consistency is more important than novelty.

---

# 4. Visual Philosophy

The visual identity is:

> Monochrome minimalism with cinematic motion.

The primary visual language must come from:

* black
* white
* grayscale
* subtle transparency
* thin borders
* large typography
* generous whitespace
* smooth motion

Accent color should be extremely limited.

Preferred approach:

* primarily monochrome UI
* neutral grayscale surfaces
* white typography
* gray supporting text
* very subtle visual emphasis

Do not turn the website into a neon/cyberpunk interface.

Avoid:

* excessive gradients
* excessive glow
* colorful UI
* heavy glassmorphism
* oversized decorative blobs
* excessive shadows
* generic SaaS cards
* unnecessary borders everywhere
* visual clutter

---

# 5. Website Structure

The preferred information architecture is:

1. Hero
2. About
3. Selected Work
4. Experience
5. Achievements
6. Tech Stack
7. Contact

The order may be adjusted when it improves storytelling, but the website should maintain a clear narrative:

Identity
→
Capabilities
→
Proof of work
→
Experience
→
Recognition
→
Technology
→
Call to action

---

# 6. Hero Section

The Hero is the first impression.

It should immediately communicate:

* who the developer is
* what they do
* what kind of work they create

Recommended hierarchy:

Name
→
Professional role
→
Short positioning statement
→
Primary action

Example structure:

NAME

Software Developer

I build thoughtful digital products with modern web technologies.

[View Work]
[Contact]

The Hero should have one subtle signature interaction.

Possible implementations:

* subtle Three.js object
* floating geometric object
* reactive cursor
* mouse-following element
* subtle parallax
* animated typography

Do not combine all of them.

Choose one dominant Hero interaction.

---

# 7. About Section

The About section should feel personal but professional.

Include:

* short biography
* development philosophy
* location if appropriate
* areas of interest
* years or level of experience when relevant

Avoid writing a long autobiography.

Prefer strong short paragraphs.

The section should visually break away from the Hero while maintaining the same design system.

---

# 8. Selected Work

Projects are the most important proof of technical ability.

This section should receive more visual emphasis than the Tech Stack section.

Use:

* large project previews
* strong typography
* project numbering
* technologies
* role
* short outcome-oriented descriptions

Recommended visual pattern:

01
PROJECT NAME

Short project description

React · Laravel · PostgreSQL

[View Project]

Use large media where possible.

Hover interactions may include:

* image movement
* subtle scale
* cursor interaction
* masked reveal
* directional motion

Avoid overly complex card animations.

---

# 9. Experience Section

Experience should communicate credibility quickly.

Prefer a timeline or editorial list instead of many cards.

For each role:

* company
* role
* duration
* key responsibilities
* selected achievements

Emphasize measurable outcomes whenever possible.

Example:

Company
Frontend Developer
2024 — Present

Built and maintained...
Improved...
Delivered...

---

# 10. Achievements Section

Achievements should provide social proof.

Potential content:

* competitions
* certifications
* funded projects
* awards
* academic achievements
* notable milestones
* publications

Keep the layout elegant and compact.

Do not make achievements look like generic dashboard widgets.

---

# 11. Tech Stack

Tech Stack should support the portfolio, not dominate it.

Group technologies logically.

Example:

Frontend
React
Vue
TypeScript

Backend
Laravel
Node.js
Express

Database
PostgreSQL
MySQL
MongoDB

Tools
Git
Docker
Figma

Avoid rendering every technology as a giant colorful logo grid.

Prefer:

* monochrome icons
* subtle hover states
* compact lists
* elegant typography

---

# 12. Contact Section

The Contact section is the final call to action.

It should feel like the end of the story.

Example structure:

Let's build something meaningful.

Available for:
Freelance
Collaboration
Software development opportunities

Email
GitHub
LinkedIn

Use strong typography and generous whitespace.

---

# 13. Animation System

Use Framer Motion as the primary animation system.

Animation should feel:

* smooth
* intentional
* calm
* responsive

Preferred animation patterns:

### Fade Up

opacity:
0 → 1

translateY:
30px → 0

### Fade In

opacity:
0 → 1

### Stagger

Reveal children sequentially with subtle delays.

### Scale

Use very small scale changes.

Example:

1 → 1.02

Avoid dramatic scaling.

### Parallax

Use only where it helps depth or storytelling.

---

# 14. Animation Principles

Do:

* reuse animation presets
* use consistent durations
* use consistent easing
* keep motion subtle
* respect user preferences

Do not:

* animate every element
* continuously rotate objects without purpose
* create distracting looping animations
* use different motion languages per section

Animation should connect the website together.

---

# 15. Three.js Rules

Three.js exists to provide depth and personality.

It should not become the entire website.

Use Three.js selectively.

Recommended uses:

* Hero focal object
* interactive project environment
* subtle 3D scene
* small interactive object
* visual transition

Avoid:

* large complex scenes
* excessive models
* heavy textures
* full-screen WebGL backgrounds on every section
* technically impressive but meaningless 3D

Every 3D element must answer:

> Why does this improve the portfolio experience?

If the answer is unclear, do not use it.

---

# 16. Responsive Design

The portfolio must work intentionally across:

* 375px
* 390px
* 430px
* 768px
* 1024px
* 1280px
* 1440px
* 1920px+

Mobile is not a reduced desktop version.

Mobile should receive deliberate layout decisions.

For Three.js:

Desktop:
Full interaction when appropriate.

Tablet:
Simplified interaction.

Mobile:
Simplified scene or graceful 2D fallback.

Never allow:

* horizontal overflow
* text clipping
* broken navigation
* inaccessible controls
* unreadable typography

---

# 17. Accessibility

The website must support:

* keyboard navigation
* visible focus states
* sufficient contrast
* semantic HTML
* meaningful alt text
* accessible buttons
* accessible links

Respect:

`prefers-reduced-motion`

When reduced motion is enabled:

* remove unnecessary movement
* reduce transitions
* disable decorative parallax
* simplify 3D animation

---

# 18. Performance

Performance is part of the design.

Prioritize:

* lazy loading
* dynamic imports
* optimized images
* WebP / AVIF
* compressed 3D assets
* small textures
* code splitting
* minimal dependencies

Three.js scenes must not block the initial page experience.

Use dynamic loading for expensive 3D features when appropriate.

Do not load every project image and 3D asset immediately.

---

# 19. Component Architecture

Prefer reusable components.

Suggested components:

* Navbar
* Section
* SectionHeading
* Button
* LinkButton
* ProjectCard
* ProjectPreview
* ExperienceItem
* AchievementItem
* TechGroup
* ContactLink
* FadeUp
* FadeIn
* Stagger
* TextReveal
* MagneticButton
* ThreeScene

Avoid creating multiple components that solve the same problem.

---

# 20. Data Architecture

Portfolio content must remain separate from presentation logic.

Use:

`src/data/`

Suggested files:

* `projects.ts`
* `experience.ts`
* `achievements.ts`
* `skills.ts`
* `socials.ts`

Components should receive structured data rather than hardcoding content repeatedly.

---

# 21. Code Quality

Prefer:

* TypeScript
* readable components
* small focused components
* explicit types
* reusable utilities
* semantic HTML
* clear naming

Avoid:

* duplicated logic
* giant components
* unnecessary abstractions
* unnecessary dependencies
* inline magic numbers
* random animation values throughout the codebase

---

# 22. Before Implementing New UI

Before implementing a new section:

1. Read `DESIGN_SYSTEM.md`.
2. Inspect existing reusable components.
3. Inspect existing motion presets.
4. Check whether the same interaction already exists.
5. Consult UI/UX Pro Max when appropriate.
6. Implement using existing design tokens.
7. Check desktop and mobile behavior.

---

# 23. Visual Review

After implementing a significant UI change, verify:

### Design

* typography consistency
* spacing consistency
* color consistency
* visual hierarchy

### Motion

* animation speed
* easing
* interaction smoothness
* reduced-motion behavior

### Responsive

* mobile
* tablet
* desktop

### Performance

* image loading
* Three.js performance
* unnecessary rendering

### UX

* navigation clarity
* readability
* obvious CTA
* accessibility

---

# 24. Golden Rule

Never optimize for visual complexity.

Optimize for:

> clarity + personality + consistency + smoothness

The website should look impressive because the design decisions are intentional, not because there are many effects.
