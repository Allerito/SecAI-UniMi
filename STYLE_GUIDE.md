# Style Guide for Course Notes

Use this guide when writing or revising lecture notes. Units 0 and 1 of [Matematica 1](<materials/it/Matematica e Fondamenti di programmazione/Matematica 1/index.md>) provide examples of the structure and tone. Write in the language of the note’s directory. The templates below use Italian for `materials/it`.

## Structure and voice

- Follow the course’s existing file naming scheme. In a numbered series, use `X.Y.Z - Title.md`, where the numbers identify the unit, lesson, and note. Keep existing paths stable and check incoming links before changing a heading used as an anchor.
- Use one H1 with the title of the note. In lecture notes, put the sequence number in the filename. Indexes, reference sheets, and exercise collections have their own structure.
- Open with an H2 that explains what the topic is for. A short problem, example, or question can motivate the definition. Use `Cos'è … e perché funziona` or `Quando e perché …` where the wording fits.
- Organize the theory into descriptive H2 sections. Use H3 headings for distinct definitions, cases, and procedures within a section. Separate major sections with `---` on its own line, with blank lines around it.
- Introduce the idea before formalizing it. Define symbols and abbreviations before using them. Use the first person plural where it reads naturally and bold key terms when introducing them.
- Follow the theory with guided examples, common errors, practice exercises, and sources. Add a link to a separate exercise collection when one exists.

## Examples, errors, and exercises

A guided example should state the problem, name the assumptions or input, and show the steps needed to obtain and check the result. Use headings such as `### Esempio 1. Titolo` for navigation. Use inputs small enough to trace by hand where that helps explain the method.

In `Errori frequenti`, pair each error with a correction and explain why the correction works. Use a `caution` callout for a recap. A warning in the theory can address a trap at the point where it arises.

In `Esercizi di prova`, give the reader a progression from direct application to reasoning about a boundary case, a proof, or an implementation. Five or six exercises make a useful target for a full lecture. Use `Base`, `Intermedio`, and `Avanzato` where those labels help the reader choose. Put the solution below its prompt in a collapsed `[!tip]-` callout and show the reasoning as well as the answer.

### Separate exercise collections

Where the course uses `Esercizi/`, follow the local naming and link both ways between a collection and its lecture. The Matematica 1 model uses `Esercizi/00 - Indice esercizi.md` and `Esercizi/X.Y.Z - Esercizi.md`. A full collection has 18 exercises, with 5 base, 8 intermediate, and 5 advanced. Use `### Esercizio X.Y.Z-NN` and the fields `Argomento`, `Difficoltà`, and `Testo`. In a `[!tip]- Soluzione svolta` callout, use numbered steps and give the final result and the method used where relevant. Identify original or adapted exercises and cite sources for adaptations.

## Callouts and math

Use the standard Obsidian callouts so that the content remains readable on the course website. Quote every line of a callout, including blank lines as a standalone `>`.

| Callout | Use |
| --- | --- |
| `[!important]` | A definition, invariant, or rule central to the section. |
| `[!warning]`, `[!caution]` | A trap, precondition, or common error worth highlighting. |
| `[!note]` | Context or a useful extension. |
| `[!tip]` | A practical hint or a suggested way to check the result. |
| `[!tip]-` | A solution collapsed by default. |

Use `$…$` for inline math and put display math between `$$` delimiters on their own lines. Leave blank lines around the display block, preserving list indentation or blockquote markers. Use `aligned` for a sequence of calculations and `\boxed{}` for a final result when highlighting it helps. In a Markdown table, use `\lvert` and `\rvert` for absolute values and `\mid` for set-builder conditions to keep vertical bars out of the table syntax.

## Code, diagrams, and links

- Give fenced code blocks a language such as `c`, `bash`, or `text` for pseudocode, BNF, or program output. Write explanatory comments in the note’s language. Label fragments and intentionally incorrect examples. For complete programs, include the headers and input needed to reproduce the result. Put any expected output in a separate `text` block and explain platform or version assumptions where relevant. Use the toolchain documented by the course.
- Use Mermaid for flows, trees, and relations. Keep labels short, quote them, and explain the relationship shown in the surrounding text. Use the existing `assets/` or `Assets/` directory when a diagram requires precise positioning. Use a descriptive filename and a relative Markdown image link with useful alternative text. For a note two levels below a cluster’s `assets/` directory, use `../../assets/`.
- Use wikilinks for related notes in Obsidian. When a title may be ambiguous, use a path that identifies the destination, for example `[[Unit folder/1.2.1 - Topic|related topic]]`. Use relative Markdown links where GitHub navigation is important. Check destinations and anchors from the edited note.

## Sources

Use `Provenienza del materiale` in Italian notes. Keep existing credits and cite material you actually used with an author or confirmed credit, title or filename, and chapter, section, or page range. Indicate which page numbering you use if it differs from the printed page numbers. Write explanations, examples, and diagrams in your own words and follow the attribution and licensing rules in [CONTRIBUTING.md](CONTRIBUTING.md#10-attribution-and-licensing).

## Review checklist

- Verify definitions, assumptions, worked steps, and exercise solutions. Include relevant edge cases.
- Compile and run new or modified complete programs with the course toolchain. Check the output for representative inputs. Report any examples you could only review by inspection.
- Check heading hierarchy, code fences, callouts, math, diagrams, links, and anchors. Preview new or changed formatting in Obsidian and in the local Quartz build when available.
- Check the diff for missing credits, lost content, and unintended changes.

## Lecture note template

Repeat the theory, example, and exercise blocks as needed. Replace the bracketed text with the content of the note and include the exercise collection link when it has a destination.

````markdown
# [Titolo]

## [Concetto o problema e perché ci serve]

[Introduci il problema e mostra dove entra in gioco il concetto.]

---

## [Concetto teorico]

> [!important] [Nome della definizione o della regola]
> [Definisci il concetto e indica le ipotesi.]

[Spiega i simboli e le conseguenze della definizione.]

---

## Esempi guidati

### Esempio 1. [Titolo]

**Problema**

[Indica i dati e il risultato da ottenere.]

**Svolgimento**

1. [Spiega il primo passo e perché si applica.]
2. [Completa il ragionamento e verifica il risultato.]

---

## Errori frequenti

> [!caution] Errori da evitare
> **Errore** · [Descrivi l’errore.]
>
> **Correzione** · [Spiega come procedere e perché.]

---

## Esercizi di prova

### Esercizio 1. [Titolo] (Base)

[Formula la consegna.]

> [!tip]- Soluzione
> [Mostra i passaggi e il risultato.]

---

## Provenienza del materiale

- [Autore o credito confermato], *[Titolo]*, [capitolo, sezione o pagine].

---

## Esercizi per esercitarsi

[[Esercizi/X.Y.Z - Esercizi|Raccolta di esercizi svolti]]
````
