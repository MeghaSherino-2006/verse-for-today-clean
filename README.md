# Lumen Christi — A Website featuring biblical verses and their interpretation

Lumen Christi is a Christ-centered devotional platform designed to bring the Word of God into everyday life through scripture, reflection, and prayer.
It provides a peaceful, minimal, and user-friendly experience for readers seeking daily spiritual nourishment.

---

## Features

* **Daily Bible Verses** — Scripture, reflection, and prayer for each day
* **Clean & Minimal Design** — Focused on readability and spiritual calm
* **Timeline View** — Browse messages by date and year
* **Load More Pagination** — Smooth navigation through posts
* **Random Message Feature** — Discover a random devotional
* **Author Section** — Dedicated space for the writer’s profile
* **Visual Enhancements** — Faith-inspired imagery for a richer experience

---

##  Tech Stack

* **Static Site Generator:** Eleventy (11ty)
* **Frontend:** HTML, CSS, JavaScript
* **Content Management:** Decap CMS (Netlify CMS)
* **Hosting & Deployment:** Netlify
* **Version Control:** Git & GitHub

---

##  Live Website

 https://versefortoday.netlify.app

---

##  Content Management

The website supports two ways of publishing content:

###  1. CMS (For Client Use)

* Access: `/admin`
* Login via Netlify Identity
* Create and publish posts without coding

###  2. Manual (Developer Mode)

Add a new file inside:

```bash
src/posts/
```

Example:

```markdown
---
title: "Walk in Faith"
date: 2026-04-05
---

## Verse for Today

“For we walk by faith, not by sight” (2 Corinthians 5:7)

## Reflection

Faith is trusting God even when the path is unclear.

## Prayer

Lord, guide me in faith. Amen.

## Author

Dr. Mini Sherino
```

Then run:

```bash
git add .
git commit -m "Add new post"
git push
```

---

##  Project Structure

```bash
.
├── src/
│   ├── posts/          # Markdown devotional posts
│   ├── admin/          # CMS configuration
│   ├── images/         # Static assets
│   ├── index.njk       # Homepage
│   └── ...
├── _site/              # Generated output (Eleventy)
├── .eleventy.js        # Eleventy configuration
├── package.json
└── README.md
```

---

##  Local Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npx @11ty/eleventy --serve
```

---

##  Deployment

This project is deployed on Netlify with continuous deployment:

* Push changes to GitHub
* Netlify automatically rebuilds and publishes

---

##  Purpose

This project was created to:

* Provide a **daily source of spiritual reflection**
* Offer a **simple publishing workflow for non-technical users**
* Combine **technology with faith-based content delivery**

---

##  Acknowledgements

* Inspired by the positivity the word of God has brought into many lives
* Source: 'Verse For Today' ministry of Dr. Mini Sherino

---

##  Future Enhancements

*  Search functionality
*  Tags / Categories
*  Enhanced mobile UI
*  Email subscription feature

---

## ©opyright

© 2026 Dr. Mini Sherino. All rights reserved.
