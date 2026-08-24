# IISM Executive Portfolio

Executive digital portfolio for an aspiring cardiologist and global advocate from
**International Islamic School Malaysia (IISM)** — prepared for school board /
funding review.

A lightweight, dependency-free static site. **No build step, no package manager.**
Open `index.html` directly or serve the folder as-is on any static host.

---

## Project structure

```
portfolio/
├── index.html          # Single-page site (hero, pillars, showcase, table, CTA)
├── css/
│   └── styles.css      # Design tokens + responsive layout + animations
├── js/
│   └── main.js         # Mobile nav, scroll reveal, active-link, navbar state
└── assets/
    └── images/         # Drop real showcase photos here (see README inside)
```

## Content & branding

- Contact email for sponsorship requests: **ark.hyd12@gmail.com**
- Four pillars: STEM & Math rigor, Diplomatic mastery, Faith-driven ethics, Social impact
- Achievements table framed as **executive-level institutional ROI**
- CEO-style funding callout with a `mailto:` "Schedule Presentation" button

---

## 🚀 Deploy to GitHub Pages (the simple way)

With this exact folder as a repo, hosted from `main` -> `/ (root)`:

1. **Create a repo on GitHub** (public or private — Pages works with both).
2. **Push this folder:**
   ```bash
   git init
   git add .
   git commit -m "IISM executive portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. **Turn on Pages:**
   - GitHub repo → *Settings* → *Pages* (left sidebar).
   - *Source* → **Deploy from a branch**.
   - Branch: **`main`**, folder: **`/ (root)`** → *Save*.
4. Your site goes live at `https://<your-username>.github.io/<repo-name>/`
   in about a minute.

> Tip: after it's live, the **contact the owner** suggestions already point to your
> GitHub profile when you add your name/bio there.

## 📷 Real photos (optional but recommended)

The two showcase images currently render an elegant **gradient fallback**, which
looks intentional on its own. To use real photos, place:

- `assets/images/diplomacy.jpg` — MUN / formal debate scene
- `assets/images/stem-lab.jpg`  — chemical-engineering lab / science scene

Drop them in and commit — no code changes needed; `css/styles.css` already wires
them in.

## ✍️ Editing tips

- Colors live as CSS variables at the top of `css/styles.css` (`:root`).
- All copy is plain HTML in `index.html` — no templates, no magic strings.