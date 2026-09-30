# aditya-lawankar.github.io

Source for my personal site, <https://aditya-lawankar.github.io>: an introduction, skills,
research, selected projects and a contact form.

Built with React and React Bootstrap. A GitHub Actions workflow builds the site and publishes it
to GitHub Pages on every push to `main`.

## Development

```bash
npm install
npm start        # dev server on http://localhost:3000
npm run build    # production build in build/
```

## Structure

| File | Section |
|---|---|
| `src/Main.js` | Introduction and social links |
| `src/Skills.js` | About and skills |
| `src/Research.js` | Research summary and paper links |
| `src/Projects.js` | Project cards (edit the `projects` array) |
| `src/Contact.js` | Contact form, sent through FormSubmit |
| `.github/workflows/workflow.yml` | Build and deploy to GitHub Pages |
