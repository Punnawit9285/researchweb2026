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
- Home sections 01–06 like the preview: 01 Who we are, 02 Our mission (two wide columns, outlined
  buttons, grey), 03 Our impact (four cards, new), 04 Events (grey; both "What's new" posts kept with
  their posters and collapsible text, titles restyled), 05 Research showcase (new), 06 Get involved
  (dark, new). Site footer restyled (name, contact, address, SMCU credit) — old footer wording kept.

## To do

1. Opportunities, Events, Showcase, About pages restyled the same way.
2. Apps Script widgets (README §1.4) — blocked until **researchclub@docchula.com** is signed in to Chrome
   (only the owner can approve Google's permission screen). Then embed:
   Home `stats` + `open-now` (hero right column), `events-home`, `showcase-home`;
   Opportunities `opportunities`; Events `events`; Showcase `showcase`.
3. Review the draft, then Publish.

## Editor tips (for browser automation)

- Styled text: dispatch a synthetic `paste` ClipboardEvent with `text/html` on the focused text box —
  the editor keeps inline font, size and colour and handles Thai. Don't use the system clipboard.
- Paste replaces the selection but can leave an empty last line; remove it by putting the caret at the end
  of the previous line and sending Delete (never Backspace — it can eat the last character).
- Moving components: synthetic mouse events (mousedown → several mousemoves → mouseup) work, but keep
  the drop point away from the top/bottom edge or the canvas auto-scrolls. Resizing handles need real
  mouse drags. Items stacked in one column share its width.
