# Testportal

A static front-end recreation of the [testportal](https://www.testportal.net/) landing page — the hero section for an online exam platform, with a header, call-to-action and a "test sheets review" preview card.

Built with plain HTML, CSS and vanilla JavaScript. No framework and no build step.

## Features

- Responsive header with navigation, language selector and login / sign-up buttons
- Hero section with headline, sub-text and primary call-to-action
- Preview card mimicking the exam results UI (status tag, actions, respondent selector)
- Breakpoints at 900px and 600px for tablet and mobile layouts
- Theme colours defined once as CSS custom properties in `:root`

## Project structure

```
.
├── index.html   # Page markup
├── style.css    # Styles, theme variables and responsive rules
└── script.js    # Click handlers for the dropdown-style controls
```

## Getting started

Clone the repository and open `index.html` in a browser:

```bash
git clone https://github.com/soham-023/Testportal.git
cd Testportal
```

Or serve it locally (recommended, so fonts and icons load the same way they would online):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

An internet connection is needed for the Inter font (Google Fonts) and the icons (Font Awesome CDN).

## Customising

Change the colour scheme by editing the variables at the top of `style.css`, for example:

```css
:root {
    --primary-color: #1CAF7D;
    --primary-dark-bg: #1B4E54;
}
```

## License

This is a learning project. The testportal name and design belong to their respective owners.
