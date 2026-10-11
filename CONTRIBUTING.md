# Contributing to SecAI-UniMi

Thank you for your interest in contributing to **SecAI-UniMi**!

This repository is a community-driven collection of university notes, study materials, and practical exercises for the Security and Artificial Intelligence degree program at the University of Milan (UniMi).

Our goal is to provide free, accessible, accurate, and well-organized learning resources for students.

Whether you want to contribute new lecture notes, correct mistakes, add exercises, improve explanations, or translate existing materials, your contribution is welcome!

Please read these guidelines before submitting any changes.

---

## 1. General Guidelines

To maintain the quality and consistency of the repository, all contributors are expected to follow these principles:

- **Accuracy:** Ensure that technical explanations, formulas, and solutions are correct.
- **Clarity:** Write notes that are easy to read, understand, and navigate.
- **Consistency:** Follow the existing directory structure and formatting conventions.
- **Accessibility:** Make educational content understandable and accessible to other students.
- **Attribution:** Always acknowledge external sources and original authors.
- **Collaboration:** Respect other contributors and accept constructive feedback.
- **Originality:** Only contribute content that you have created or have permission to redistribute under the repository's license.

Contributions should be relevant to the degree program and educational in nature.

Avoid unnecessary modifications to unrelated files.

## 2. Repository Structure

The repository is organized primarily by **language**, followed by **cluster**, **course**, and **content type**.

The currently available language sections are:

- **Italian (`materials/it/`)**
- **English (`materials/en/`)**

Additional languages are welcome. Each language has its own independent directory structure and is discovered automatically by the website build.

### Directory Organization

```text
SecAI-UniMi/
│
├── README.md
├── CONTRIBUTING.md
├── LICENSE
│
├── materials/
│   ├── it/
│   │   ├── Cluster-1/
│   │   │   └── Course-Name/
│   │   │       ├── Theory/
│   │   │       ├── Exercises/
│   │   │       └── Assets/
│   │   └── ...
│   ├── en/
│   └── fr/
│
└── .github/
    ├── CODEOWNERS
    └── PULL_REQUEST_TEMPLATE.md
```

This structure is illustrative. The actual cluster and course directories should follow the organization established in the repository.

### Organization Rules

- Place all new materials inside the appropriate language directory.
- Name language directories with canonical BCP 47 tags such as `it`, `en`, `fr`, or `pt-BR`.
- Add a new directory directly under `materials/` when contributing the first content for a new language; the website will include it automatically.
- Organize notes according to the relevant cluster and course.
- Store theoretical explanations in `Theory/`.
- Store exercises, problems, and worked solutions in `Exercises/`.
- Store images, diagrams, and supporting attachments in `Assets/`.
- Avoid creating duplicate files when an existing note can be improved.
- Do not reorganize entire directories without discussing the proposed changes in an Issue first.

Whenever possible, use consistent cluster and course directory names across both languages to simplify navigation and maintenance.

## 3. Language Guidelines

Contributions in Italian, English, and additional languages are accepted.

Contributors are **not required to provide translations** of their work.

Language sections may grow independently and do not need to contain identical material.

### Writing Notes

- Write each note primarily in the language of its parent directory.
- Use correct spelling, grammar, and technical terminology.
- Keep explanations clear and concise.
- Technical terms, code, mathematical notation, and quotations may remain in their original language.
- Avoid mixing languages unnecessarily within the same note.

### Translating Notes

Translations are welcome and encouraged.

When translating existing material:

1. Place the translated note in the corresponding language directory.
2. Preserve the original technical meaning.
3. Keep mathematical formulas, code examples, and references accurate.
4. Adapt explanations when necessary to improve clarity.
5. Credit the original author or source.
6. Verify that internal links work in the destination language.

Translations do not need to be literal, but they must remain technically faithful to the original material.

If a translation is incomplete, clearly indicate its status.

## 4. Markdown and Obsidian Compatibility

All lecture notes and educational materials should use **Markdown (`.md`)** and remain compatible with [Obsidian](https://obsidian.md/).

The repository is designed primarily for Obsidian while remaining as readable as possible on GitHub.

### Markdown Formatting

Use descriptive headings and a consistent hierarchy.

Example:

```md
# Topic Title

## Introduction

A brief explanation of the topic.

## Main Concepts

### First Concept

Detailed explanation.

## Examples

Practical examples.

## References

- Source or reference
```

General formatting rules:

- Use one level-one heading (`#`) per note.
- Organize sections using logical heading levels.
- Use lists and tables when they improve readability.
- Use fenced code blocks with the appropriate language identifier.
- Prefer descriptive filenames.
- Avoid unnecessary HTML or complex formatting.
- Keep notes focused on a specific topic whenever practical.

### Mathematical Expressions

Use LaTeX notation supported by Obsidian.

Inline formulas:

```md
The probability is $P(A \mid B)$.
```

Block formulas:

```md
$$
P(A \mid B) = \frac{P(B \mid A)P(A)}{P(B)}
$$
```

Verify that formulas render correctly and that all mathematical symbols are properly defined.

### Internal Links

Obsidian-style wiki links are supported:

```md
[[Topic Name]]
```

Links with display text are also supported:

```md
[[Topic Name|Displayed Name]]
```

Whenever possible, use unambiguous note names or explicit paths to avoid conflicts between notes with similar titles.

Standard Markdown links may also be used, particularly when GitHub compatibility is important.

Before submitting changes:

- Check that internal links resolve correctly.
- Update references when renaming or moving notes.
- Avoid introducing broken links.
- Verify that links do not accidentally point to notes in the wrong language.

### Images and Attachments

Store images and supporting attachments in the relevant course's `Assets/` directory.

Guidelines:

- Use descriptive filenames.
- Prefer common formats such as PNG, JPEG, SVG, or WebP.
- Optimize large images when possible.
- Use relative paths or Obsidian-compatible links.
- Include attribution when required.
- Avoid uploading unnecessary binary files.
- Do not include copyrighted images without the necessary permissions.

When practical, prefer Markdown image syntax for compatibility with GitHub:

```md
![Diagram description](../Assets/diagram.png)
```

Obsidian-specific embeds may also be used when appropriate.

### Obsidian Configuration

Do not commit personal workspace settings, temporary files, or machine-specific configurations.

Changes to shared Obsidian configuration should be discussed before submission.

Contributors should avoid introducing dependencies on community plugins unless they are already part of the repository's documented setup.

## 5. Contributing Notes

Contributions may include:

- New lecture notes.
- Improvements to existing explanations.
- Corrections to formulas or technical concepts.
- Additional examples.
- Summaries and revision materials.
- Diagrams and illustrations.
- Bibliographic references.
- Translations into any language.
- Improvements to Markdown formatting and Obsidian navigation.

### Quality Requirements

Before submitting a new note, make sure that:

1. The content is relevant to the correct course.
2. The explanation is technically accurate.
3. Important concepts are defined clearly.
4. Mathematical expressions and code examples are correct.
5. External sources are acknowledged.
6. The document follows the repository structure.
7. Links and images work correctly.

Notes do not need to be exhaustive, but they should provide meaningful educational value.

Avoid submitting placeholder files with no useful content.

## 6. Contributing Exercises

Exercises are an important part of this repository.

Contributors are encouraged to provide practical problems, examples, and worked solutions that help students understand theoretical concepts.

### Recommended Exercise Structure

Whenever possible, use the following structure:

```md
# Exercise Title

## Problem

Describe the problem and its requirements.

## Prerequisites

List the concepts needed to solve the exercise.

## Solution

Provide the solution, including intermediate steps.

## Explanation

Explain the reasoning behind the solution.

## References

List relevant sources, if applicable.
```

### Exercise Guidelines

- Clearly distinguish the problem statement from its solution.
- Explain intermediate steps whenever they are useful.
- Include formulas, code, or diagrams where appropriate.
- State assumptions explicitly.
- Verify that the proposed solution is correct.
- Indicate whether an exercise is original or adapted from an external source.
- Provide attribution and ensure that redistribution is permitted.

Do not upload restricted examination materials, private assignments, or copyrighted exercise collections without authorization.

When providing executable code, include instructions or prerequisites if they are necessary to reproduce the results.

## 7. How to Contribute

The recommended contribution workflow uses **GitHub forks and pull requests**.

You do not need direct write access to the original repository to contribute.

### Step 1 — Fork the Repository

Create a personal fork of SecAI-UniMi using GitHub's **Fork** button.

Clone your fork locally:

```bash
git clone https://github.com/YOUR-USERNAME/SecAI-UniMi.git
cd SecAI-UniMi
```

Replace `YOUR-USERNAME` with your GitHub username.

### Step 2 — Create a Branch

Create a dedicated branch for your contribution.

```bash
git checkout -b notes/cryptography-introduction
```

Use clear and descriptive branch names.

Suggested prefixes:

| Prefix | Purpose |
|---|---|
| `notes/` | New notes or theoretical content |
| `exercises/` | Exercises and worked solutions |
| `fix/` | Corrections to existing content |
| `translation/` | Translations into another language |
| `docs/` | Documentation or navigation improvements |
| `refactor/` | Structural or formatting improvements |

Examples:

```text
notes/cryptography-introduction
exercises/network-security
fix/probability-formula
translation/machine-learning-en
docs/update-readme
```

Contributors with direct write access may create feature branches in the original repository, but the same pull request and review requirements apply.

### Step 3 — Make Your Changes

Add or modify the relevant files in your branch.

Keep each contribution focused on a specific topic or related set of changes.

Before committing:

- Review technical accuracy.
- Check spelling and grammar.
- Verify Markdown formatting.
- Check Obsidian compatibility.
- Validate internal links and attachments.
- Review sources and attribution.
- Ensure the content follows the repository's license.

### Step 4 — Commit Your Changes

Use meaningful commit messages.

Recommended commit prefixes:

```text
docs: add introduction to cryptography
feat: add network security exercises
fix: correct probability formula
i18n: translate machine learning notes into English
refactor: reorganize cryptography notes
```

Prefer small, logically grouped commits over unrelated large changes.

### Step 5 — Push Your Branch

Push your branch to your fork:

```bash
git push -u origin notes/cryptography-introduction
```

### Step 6 — Open a Pull Request

Open a pull request against the original repository's `master` branch.

Your pull request should include:

- A clear title.
- A description of the changes.
- The affected cluster and course.
- The language of the contribution.
- References to relevant issues, if applicable.
- Sources or attribution information, when relevant.
- Any known limitations or incomplete sections.

If your pull request introduces significant structural changes, explain the reason for those changes.

Whenever possible, avoid combining unrelated modifications into a single pull request.

## 8. Pull Request Review Process

The `master` branch is protected and represents the maintained version of the repository.

All contributions must be submitted through pull requests.

Direct pushes to `master` are not permitted under the repository's contribution policy.

### Review Requirements

Pull requests must comply with the repository's configured branch protection rules.

Depending on the configuration, approval may be required from the repository owner, designated code owners, or authorized reviewers.

Reviewers may evaluate:

- Technical correctness.
- Educational value.
- Writing quality and clarity.
- Directory organization.
- Markdown and Obsidian compatibility.
- Proper citations and attribution.
- Licensing compliance.
- Potential conflicts with existing content.

### Requested Changes

Reviewers may request corrections or improvements before approving a pull request.

If changes are requested:

1. Read the review comments carefully.
2. Make the necessary modifications in your branch.
3. Push the updated commits.
4. Respond to the reviewer when appropriate.

The pull request will be updated automatically.

### Merging

A pull request may be merged once it satisfies all applicable review and repository protection requirements.

Repository maintainers are responsible for deciding whether and when contributions are merged.

Submitting a pull request does not guarantee acceptance.

## 9. Reporting Issues

You do not need to submit a pull request to report a problem.

If you find an error, missing explanation, broken link, or other issue, please open a GitHub Issue.

Before opening a new issue, check whether the problem has already been reported.

### Issue Guidelines

When reporting an issue, include:

- The affected language.
- The relevant cluster and course.
- A link to the affected file, if available.
- A clear description of the problem.
- A suggested correction or improvement, if possible.

Issues can also be used to propose:

- New subjects or study materials.
- Additional exercises.
- Translations.
- Improvements to navigation.
- Significant changes to the repository structure.

For major reorganizations, please open an Issue and discuss the proposal before making changes.

## 10. Attribution and Licensing

Unless explicitly stated otherwise, original content in SecAI-UniMi is distributed under the **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)** license.

By submitting a contribution, you agree to license your original contribution under CC BY-NC 4.0.

### Permitted Uses

Subject to the license conditions, users may:

- Download and study the notes.
- Copy and share the materials.
- Modify and adapt the content.
- Create personal forks.
- Translate notes into other languages.
- Redistribute original or modified versions for non-commercial purposes.

### Restrictions and Requirements

Users must:

- Give appropriate credit to the original authors.
- Provide a reference to the applicable license.
- Indicate whether changes were made.
- Respect existing attribution and copyright notices.
- Refrain from using the licensed material for commercial purposes without separate permission from the relevant rights holders.

The license does not grant permission for commercial use of the material.

This includes selling the notes or commercially exploiting their contents without the necessary authorization.

### External Sources

When contributing materials derived from external sources:

- Cite the source clearly.
- Ensure you have the right to share or adapt the material.
- Do not assume that publicly accessible content is freely redistributable.
- Avoid copying substantial portions of textbooks, lecture slides, or protected documents without permission.
- Preserve attribution information for properly licensed third-party materials.

Content subject to incompatible licensing terms must not be included without appropriate authorization.

### Contributor Attribution

Contributors retain authorship of their original work.

Git commit history and pull request records provide a record of contributions, but any additional attribution legally required by the license must also be preserved.

Please do not remove existing author credits or copyright notices.

For the complete license terms, see:

[Creative Commons Attribution-NonCommercial 4.0 International](https://creativecommons.org/licenses/by-nc/4.0/)

## 11. Academic Integrity

This repository is intended to support learning, revision, and collaboration.

It must not be used to encourage academic dishonesty or violate university regulations.

Contributors should:

- Respect examination and assignment rules.
- Avoid publishing confidential or restricted examination materials.
- Distinguish original work from adapted material.
- Provide proper references.
- Avoid presenting another person's work as their own.

The repository is an independent educational resource and does not represent official university teaching material unless explicitly indicated.

## 12. Community Guidelines

SecAI-UniMi aims to maintain a welcoming and collaborative environment.

All contributors are expected to:

- Treat other contributors respectfully.
- Provide constructive and relevant feedback.
- Be open to corrections and suggestions.
- Respect different levels of technical experience.
- Avoid offensive, discriminatory, or hostile behavior.
- Recognize the work and contributions of others.

Technical discussions and disagreements are welcome when they remain respectful and focused on improving the material.

Maintainers may reject contributions or restrict participation when these guidelines are not respected.

---

## Thank You!

Every contribution helps make SecAI-UniMi a better resource for current and future students.

Whether you contribute an entire set of lecture notes, translate a topic, correct a formula, or report a broken link, your help is appreciated.

**Thank you for supporting open, accessible, and collaborative education!**
