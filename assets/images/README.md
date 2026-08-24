# Showcase Images

Drop your real photos here so the two showcase panels in `index.html` render with
actual imagery instead of the elegant gradient fallbacks.

## Required files

| File                 | Where it shows                    | Suggested subject                                                                   |
| -------------------- | --------------------------------- | ----------------------------------------------------------------------------------- |
| `diplomacy.jpg`      | "Diplomacy — MUN Conference" panel | A clear photo from a Model UN session or formal debate (delegates with placards).   |
| `stem-lab.jpg`       | "STEM — Chemical Engineering Lab" | A lab / science photo — pipetting, glassware, green-energy or chemistry models.     |

## Recommended specs

- Format: `.jpg` (preferred) or `.webp`/`.png`
- Orientation: landscape-friendly (the panels are wide)
- Size: no hard limit, but ~1920px wide keeps it crisp on large screens
- Keep each file well under ~1 MB so the page stays fast on GitHub Pages

## How the fallback works

`css/styles.css` layers the photo **under** the existing colored gradient
(`background-image: url(...), linear-gradient(...)`). If a photo file is
missing, the browser simply ignores that layer and shows the gradient — so the
site always looks intentional.