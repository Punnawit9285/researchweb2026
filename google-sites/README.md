# MDCU Research Division — Google Sites version of the redesign

`mdcu-research-site.html` is the whole redesigned website in one file: Home, Opportunities, Events, Research Showcase and About. It has the same layout, colours, type and wording as the design canvas, and every control works:

- the sticky header and the phone menu
- site search: projects, presentations, events and pages
- Opportunities: search, department filter, project-type chips, a detail panel (a full-screen sheet on phones), and docchula.com gating
- Events: upcoming events move to "Previous events" by themselves after their date. Each has Register and "Add to Google Calendar"
- Showcase: search, year and format filters, "Show all", and a detail panel
- About: Executive Board, contact links and a live Google Map

All counts are calculated from the lists, so they stay right when the lists change: 16 open projects, 31 presentations, 24 conferences, 12 countries and 2023–26.

## 1. Put it on the Google Site (about 5 minutes)

1. Open the site in the editor.
2. Open the **Pages** panel on the right. Point at **+** at the bottom and choose **Full page embed**. Name the page `Home` and click **Done**.
3. On the new page, click **Add embed**, then the **Embed code** tab. Paste **the whole of** `mdcu-research-site.html` (open it, select all, copy), then **Next › Insert**.
4. In **Pages**, click **⋮** next to the new page and choose **Set as homepage**.
5. For each old page, click **⋮** and choose **Hide from navigation**. Don't delete them until you're happy with the new site. This keeps Google's own menu out of the way, so the club's header does the navigating.
6. Optional: under **Settings › Brand images**, set the favicon to the club logo.
7. Click **Publish**, then open the live site on a computer and on a phone.

If **Full page embed** isn't offered, use a normal page instead: **Insert › Embed › Embed code**, paste the file, and drag the box to full width and as tall as the page allows.

## 2. Fill in the missing links (once)

Open the embed: click it in the editor, then the pencil (**Edit embed**). At the top of the code, find **EDIT HERE (1 of 2)** and fill in what you have. Each empty value has a safe fallback until then.

| Setting | What it is | If left empty |
|---|---|---|
| `membersUrl` | The Opportunities Google Sheet with advisor contacts, **shared with docchula.com only**. "Sign in with docchula.com" opens it, so Google does the sign-in. | The buttons open an email to the club. |
| `showProjectDetails` | Set to `true` **only** if the whole site is published to docchula.com accounts. Then advisors, timelines and roles show on the page itself. | Details show as locked bars, as in the design. |
| `facultyFormUrl` | The Google Form faculty already use to post projects | "Post a project" opens an email |
| `showcaseFormUrl` | A Google Form for students to submit presentations | "Submit your presentation" opens an email |
| `facebookPageUrl` | The "MDCU Research Club" Facebook page | Links to a Facebook search for the page |
| `archive` | Links to the 2025–26 and 2024–25 Opportunities sheets | Shown as plain text |
| `photos` | Public image links for the 4 photo spots (Home ×3, About ×1) | Labelled placeholders, as in the design |

For a photo, upload it to Google Drive, share it as "Anyone with the link", and use `https://lh3.googleusercontent.com/d/<file id>`.

Click **Next › Insert**, then **Publish** after every change.

## 3. Keeping it up to date

There are two ways. Pick one per list.

**A. Edit the lists in the code.** The lists are under **EDIT HERE (2 of 2)**: `EVENTS`, `OPPORTUNITIES`, `CONFERENCES` with `PRESENTATIONS`, `EARLIER_HIGHLIGHTS` and `BOARD`. Copy an entry, change the text, then Publish. Each list has an example comment above it.

**B. Run Events, Showcase and Opportunities from a Google Sheet** (the "Website data" sheet in the staff guide). Nothing needs publishing afterwards; changes show up within about 5 minutes.

1. Create a Google Sheet called **Website data**. Import each file in `sheet-templates/` into its own tab with **File › Import › Upload › Insert new sheet(s)**. The templates hold exactly the content the site shows now.
2. For each tab, go to **File › Share › Publish to web**, pick the tab and **Comma-separated values (.csv)**, then **Publish** and copy the link.
3. Paste the three links into `sheets: { events: '…', showcase: '…', opportunities: '…' }` in the code, then Publish the site once.

How the columns work:

- **Events**: `Date` must be `YYYY-MM-DD`; set the column to *Format › Number › Plain text* so Sheets keeps it that way. `Status` is `Registration open`, `Full` or `Closed`. Put recordings in `Links` as `Label | URL; Label | URL`. A row with no date or title is skipped.
- **Showcase**: only rows with `Approved` = `TRUE` appear, so a student form can feed this tab and the team ticks Approved. Rows with `Featured` = `TRUE` are the 3 cards on Home.
- **Opportunities**: `Type` is `Project` or `Open lab`. Set `Status` to `Closed` to hide a project. `Featured` = `TRUE` puts a project in "Open now" on Home.

If a sheet can't be reached, the site falls back to the lists in the code, so the page never breaks.

## Privacy: read before publishing

- Everything in the embed code can be read by anyone who views the page source. That includes the abbreviated advisor names and project summaries in `OPPORTUNITIES`. Locking only hides them from view. If they must stay private, remove those fields from the code, or publish the whole site to docchula.com only.
- A tab published to the web is public too. If you use option B for Opportunities, publish a tab with public columns only (Type, Title, Department, Keywords, Students needed, Status, Featured). Keep advisors and contacts in the docchula.com-only sheet that `membersUrl` points to.

## Good to know

- The pages switch inside the embed, so the browser address stays the Site's address. To share a page, send people to the site and tell them which menu item to open.
- Links to Instagram, Facebook, forms, email and maps open in a new tab, because Google Sites runs embeds inside a frame.
- Fonts (IBM Plex Sans Thai and IBM Plex Mono) load from Google Fonts. The logo is built into the file.
