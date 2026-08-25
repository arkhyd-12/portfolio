# Showcase Images

Real photos used by the two showcase panels in `index.html` (loaded as the
`background-image` on their panels).

## Files in use

| File              | Where it shows                                  | Subject                                              |
| ----------------- | ----------------------------------------------- | ---------------------------------------------------- |
| `orang-asli.png`  | "Orang Asli — Community Initiative" panel       | Community outreach with the Orang Asli community.    |
| `doctor.jpg`      | "STEM — Cardiology & Medicine" panel            | A physician / medical scene for the cardiology vision. |

## Recommended specs

- Format: `.jpg` / `.png` / `.webp`
- Orientation: landscape-friendly (the panels are wide)
- Keep each file well under ~1 MB so the page stays fast on GitHub Pages

## How the fallback works

`css/styles.css` layers the photo **under** the existing green gradient:
(`background-image: url(...), linear-gradient(...)`). If a photo file is
missing, the browser simply ignores that layer and shows the gradient — so the
site always looks intentional.