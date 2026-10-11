# SecAI-UniMi

### Security and Artificial Intelligence — University of Milan

A collaborative collection of **university lecture notes, study materials, and practical exercises** for the Security and Artificial Intelligence degree program at the University of Milan (UniMi).

The project aims to make educational resources freely accessible, well-organized, and easy to navigate, while encouraging knowledge sharing among students.

> **Disclaimer:** This is an independent, student-maintained project. It is not officially affiliated with or endorsed by the University of Milan.

---

## 📚 Study Materials

The repository is organized by language, subject area, and course.

Materials are organized in language directories and can be extended without changing the website build configuration:

| Language | Materials |
|---|---|
| 🇮🇹 Italian | [Browse Italian materials](./materials/it/) |
| 🇬🇧 English | [Browse English materials](./materials/en/) |

The project is currently being organized, and some directories do not contain notes yet.

## 🌐 Online Documentation

SecAI-UniMi uses [Quartz](https://quartz.jzhao.xyz/), a static site generator designed for publishing Obsidian Markdown notes.

The website is intended to provide:

- Full-text search.
- Navigation through subjects and courses.
- Interactive graph visualization.
- Backlinks between related topics.
- Mathematical formulas and syntax-highlighted code.
- Responsive layouts and dark mode.

**Website:** [SecAI-UniMi Online](https://allerito.github.io/SecAI-UniMi/)

The website is under development. Availability and content may change during the initial setup.

You can also browse the source Markdown files directly on GitHub.

## 🗂️ Repository Structure

```text
SecAI-UniMi/
├── README.md
├── CONTRIBUTING.md
├── LICENSE.md
├── .gitignore
│
├── materials/
│   ├── it/
│   │   ├── Architetture informatiche e Reti/
│   │   └── Matematica e Fondamenti di programmazione/
│   └── en/
│
├── site/
│   ├── quartz.config.yaml
│   ├── package.json
│   ├── package-lock.json
│   └── ...
│
└── .github/
    └── workflows/
        └── deploy-pages.yml
```

Each direct child of `materials/` represents a language and must use a canonical BCP 47 language tag, such as `it`, `en`, `fr`, or `pt-BR`.

Each course may eventually include theoretical explanations, worked exercises, code examples, and supporting assets.

## 🧠 Using the Notes with Obsidian

The notes are written in Markdown and designed to work with [Obsidian](https://obsidian.md/).

To use the repository locally:

1. Open the repository on GitHub.
2. Select **Code → Download ZIP**.
3. Extract the archive.
4. Open Obsidian.
5. Select **Open folder as vault**.
6. Choose the extracted repository folder or the appropriate directory under `materials/`.

You can read, search, annotate, and customize your downloaded copy of the notes.

Obsidian-specific features may not render identically in GitHub's Markdown preview.

## 🤝 Contributing

Contributions from students are welcome!

You can help by:

- Adding new lecture notes.
- Improving or correcting explanations.
- Providing exercises and worked solutions.
- Translating content into additional languages.
- Fixing broken links and formatting issues.
- Reporting errors or proposing improvements.

### Contribution Workflow

1. Fork the repository.
2. Create a dedicated branch.
3. Add or update the relevant material.
4. Open a Pull Request targeting `main`.
5. Wait for review and approval.

All contributions are subject to the repository's configured branch protection and review requirements.

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before submitting changes.

### Report an Issue

Found an incorrect formula, unclear explanation, broken link, unreliable source, or missing topic?

[Open an Issue](https://github.com/Allerito/SecAI-UniMi/issues/new/choose) and select the appropriate template.

You do not need programming experience or Git knowledge to report a problem. Every correction helps improve the study materials for everyone.

## 🔧 Website Development

The documentation website is generated using Quartz 5 and published through GitHub Actions and GitHub Pages.

Website source files and configuration are maintained inside the `site/` directory.

### Requirements

- Node.js 22 or later.
- npm 10.9.2 or later.

### Local Development

From the repository root:

```bash
cd site
npm ci
npx quartz plugin install --from-config
npm run prepare-content
npx quartz build --serve
```

The commands start the local Quartz preview using the content currently available in `site/content/`.

The preparation script discovers every language under `materials/`, copies its content, creates missing language indexes, and generates the language links on the website homepage.

### Adding a Language

Create a directory under `materials/` using its canonical BCP 47 language tag and add the translated notes there. For example:

```text
materials/fr/
```

The next local or CI build will include `/fr/` automatically. No workflow or Quartz configuration change is required.

### Automatic Deployment

The GitHub Actions workflow is designed to:

1. Validate the Quartz build for pull requests.
2. Build the documentation website after changes to `main`.
3. Publish the generated static files to GitHub Pages.

Generated files and local dependencies should not be committed to the repository.

## ⚖️ License

Unless otherwise indicated, the original educational content in this repository is licensed under **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)**.

You may share, adapt, translate, and redistribute the licensed materials for non-commercial purposes, provided that you:

- Give appropriate credit to the original authors.
- Provide a reference to the license.
- Indicate any changes made.
- Respect the rights of third-party authors.

**Commercial use, including selling the notes, is not permitted without separate permission from the relevant rights holders.**

For more information, see [LICENSE.md](./LICENSE.md) or the [official CC BY-NC 4.0 license](https://creativecommons.org/licenses/by-nc/4.0/).

Third-party software and dependencies, including Quartz, may be distributed under separate licenses.

## 📌 Academic Integrity

The materials in this repository are intended to support learning and revision.

They may contain errors, incomplete explanations, or outdated information. Always verify important concepts using official course resources and reliable references.

Do not use this project to violate university policies, examination rules, or intellectual property rights.

---

## ⭐ Support the Project

If you find SecAI-UniMi useful, consider starring the repository or sharing it with fellow students.

Contributions, corrections, and translations are always appreciated.

**Made by students, for students.**
