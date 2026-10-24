# Rebuild progress — Google Sites draft

Working notes for whoever continues the rebuild (person or Claude session). The live site is
<https://sites.google.com/docchula.com/mdcuresearch-docchula>; the editor is the same site with `/edit`.
Target look: the canvas preview <https://claude.ai/artifact/N422zWcJphBrzWR2AQYZMj> and the recipes in
`README.md` §2.3. Everything below happens in the **draft** — nothing is live until someone presses Publish.

## Done

- Published once (theme, Home headline, page renames, Opportunities intro) — see git log for the date.
- Theme *MDCU Research 2026*: white top navigation, amber underline on the current page,
  amber filled buttons on dark (Style 3) sections.
- Home: old image header removed; new dark hero section (eyebrow, "Today's research, / tomorrow's cure.",
  Mayo credit, Thai line, original subtitle) with **Find a research project** → Opportunities and
  **See what's on** → Events. The right half of the hero is left empty for the `open-now` embed.
- Home section 01 "MDCU Research club": eyebrow "01 — WHO WE ARE", left-aligned heading and quote,
  white (Style 1) background. Still to do there: **About us** button → *Text* style; one empty line
  under the quote.

## To do

1. Home sections 02–06 restyled like the preview (eyebrows, left-aligned headings, "Our impact" cards,
   Events split, Showcase, Get involved), footer in three columns.
2. Opportunities, Events, Showcase, About pages restyled the same way.
3. Apps Script widgets (README §1.4) — blocked until **researchclub@docchula.com** is signed in to Chrome
   (only the owner can approve Google's permission screen). Then embed:
   Home `stats` + `open-now` (hero right column), `events-home`, `showcase-home`;
   Opportunities `opportunities`; Events `events`; Showcase `showcase`.
4. Review the draft, then Publish.

## Editor tips (for browser automation)

- Styled text: dispatch a synthetic `paste` ClipboardEvent with `text/html` on the focused text box —
  the editor keeps inline font, size and colour and handles Thai. Don't use the system clipboard.
- Moving components: synthetic mouse events (mousedown → several mousemoves → mouseup) work, but keep
  the drop point away from the top/bottom edge or the canvas auto-scrolls. Resizing handles need real
  mouse drags. Items stacked in one column share its width.
