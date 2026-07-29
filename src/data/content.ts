// ============================================================
// Single source of truth for all site content.
// Editing copy here keeps every page consistent — no mismatched
// captions, dates, or titles anywhere in the build.
// ============================================================

export const brand = {
  name: 'Jacob Lorek',
  statement:
    'Jacob + Lorek exists at the intersection of art, culture, and emotion. Our work is a dialogue between the visual and the unseen — rooted in story, rich in detail, and made to last.',
  keywords: ['Generous Whitespace', 'Editorial', 'Timeless', 'Gallery-Inspired'],
}

export const nav = [
  { label: 'Shop', to: '/shop' },
  { label: 'Socials', to: '/socials' },
  { label: 'Events', to: '/events' },
  { label: 'Press', to: '/press' },
]

// src/data/content.ts

export const featured = {
  label: 'Featured Essay',
  title: ['The Making', 'of Grief'],
  meta: 'July 2026',
  body: 'An exploration of memory, absence and transformation through a new body of work by Jacob + Lorek—rooted in story and created with permanence in mind.',
  cta: {
    text: 'Read the story',
    to: '/press',
  },
  caption: 'Untitled No. 7 · Archival pigment print · London, 2026',
}
export type WorkItem = {
  id: string
  label: string
  title: string[]
  body: string
  cta: { text: string; to: string }
  caption: string
}

export const work: WorkItem[] = [
  {
    id: 'new-collection',
    label: 'Featured',
    title: ['New Collection'],
    body: "A study in light, form, and feeling — the season's work gathered as a single quiet gesture.",
    cta: { text: 'View Collection', to: '/shop' },
    caption: 'Collection · Spring 2026',
  },
  {
    id: 'london-solo-show',
    label: 'Exhibition',
    title: ['London Solo Show'],
    body: 'October 10 – November 2, 2026. A first gathering of the full series, shown together for the first time.',
    cta: { text: 'View Details', to: '/events' },
    caption: 'Exhibition · London · 2026',
  },
  {
    id: 'on-beauty-and-pain',
    label: 'Essay',
    title: ['On Beauty', 'and Pain'],
    body: 'Reflections on the body as memory — an essay accompanying the London series.',
    cta: { text: 'Read Essay', to: '/press' },
    caption: 'Essay · On Beauty and Pain',
  },
]

export const journal = {
  label: 'Journal',
  title: 'Journal',
  body: 'Notes from the studio — process, sources, and the thinking behind the work. Published as the series takes shape.',
  cta: { text: 'Read the Journal', to: '/press' },
  onView: {
    label: 'Currently on view',
    title: 'Untitled No. 7',
    lines: ['Archival Pigment Print', '2026'],
    edition: 'Ed. 3 of 12',
  },
}

export const joinList = {
  label: 'Stay Close',
  title: 'Join Our List',
  body: 'New work, exhibitions, and journal entries — sent occasionally, and only when there is something worth sharing.',
}

// ---- Page-specific content ----

export const shopPage = {
  label: 'Shop',
  title: ['Prints', '& Editions'],
  intro:
    'A limited selection of archival prints and editioned works, released as each series is completed.',
  products: [
    { id: 'p1', title: 'Untitled No. 7', meta: 'Archival Pigment Print · 2026', price: '£1,200', edition: 'Ed. 3 of 12' },
    { id: 'p2', title: 'Untitled No. 4', meta: 'Archival Pigment Print · 2026', price: '£1,200', edition: 'Ed. 5 of 12' },
    { id: 'p3', title: 'Study in Shadow', meta: 'Silver Gelatin Print · 2025', price: '£950', edition: 'Ed. 2 of 8' },
    { id: 'p4', title: 'The Making of Grief', meta: 'Archival Pigment Print · 2026', price: '£1,450', edition: 'Ed. 1 of 6' },
    { id: 'p5', title: 'Body of Light', meta: 'Archival Pigment Print · 2025', price: '£1,100', edition: 'Ed. 4 of 10' },
    { id: 'p6', title: 'On Beauty', meta: 'Silver Gelatin Print · 2026', price: '£980', edition: 'Ed. 6 of 8' },
  ],
}

export const eventsPage = {
  label: 'Events',
  title: ['Exhibitions', '& Openings'],
  intro:
    'Where the work is shown. Openings, talks, and the London series presented together for the first time.',
  events: [
    {
      id: 'e1',
      dates: 'October 10 – November 2, 2026',
      title: 'London Solo Show',
      venue: 'The Gallery, Shoreditch, London',
      body: 'A first gathering of the full series, shown together for the first time.',
    },
    {
      id: 'e2',
      dates: 'October 10, 2026 · 6–9pm',
      title: 'Opening Night',
      venue: 'The Gallery, Shoreditch, London',
      body: 'An evening with the artist to mark the opening of the London series.',
    },
    {
      id: 'e3',
      dates: 'October 24, 2026 · 3pm',
      title: 'In Conversation',
      venue: 'The Gallery, Shoreditch, London',
      body: 'Jacob + Lorek on memory, process, and the making of the work.',
    },
  ],
}

export const pressPage = {
  label: 'Press',
  title: ['Journal', '& Press'],
  intro:
    'Essays from the studio and selected words written about the work.',
  articles: [
    { id: 'a1', label: 'Essay', date: 'July 2026', title: 'The Making of Grief', excerpt: 'An exploration of shadow, memory, and transformation through a new body of work.' },
    { id: 'a2', label: 'Essay', date: 'June 2026', title: 'On Beauty and Pain', excerpt: 'Reflections on the body as memory — written alongside the London series.' },
    { id: 'a3', label: 'Interview', date: 'May 2026', title: 'A Dialogue with the Unseen', excerpt: 'The artist on process, sources, and what it means to make work that lasts.' },
    { id: 'a4', label: 'Feature', date: 'April 2026', title: 'Light, Form, and Feeling', excerpt: 'A close look at the studio and the thinking behind the spring collection.' },
  ],
}
