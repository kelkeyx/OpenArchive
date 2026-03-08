/**
 * books.js — your book data for OpenArchive
 * ─────────────────────────────────────────
 * Add, remove, or edit entries in the BOOKS array below.
 * Each book needs:
 *   title       — string  (required)
 *   author      — string  (required)
 *   genre       — string  (optional, shown in metadata)
 *   year        — string  (optional, shown in metadata)
 *   description — string  (optional, shown in info-mode)
 *   img         — string  (path to cover image, relative to index.html)
 *
 * Put your cover images in a folder called "covers/" next to index.html,
 * then reference them as "covers/my-cover.jpg".
 *
 * Example:   "covers/moby-dick.jpg"
 * Remote:    "https://example.com/covers/moby-dick.jpg"
 */

window.BOOKS = [
  {
    title: "Moby Dick",
    author: "Herman Melville",
    genre: "Adventure Fiction",
    year: "1851",
    description: "Moby-Dick; or, The Whale is a novel by Herman Melville in which Ishmael narrates the monomaniacal quest of Ahab, captain of the whaling ship Pequod, for revenge on the albino sperm whale Moby Dick, which on a previous voyage destroyed Ahab's ship and severed his leg at the knee.",
    img: "covers/moby-dick-cover.jpg"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Southern Gothic",
    year: "1960",
    description: "The story of young Scout Finch, her brother Jem, and their father Atticus, a lawyer who defends a Black man falsely accused of a crime in 1930s Alabama. A landmark novel of racial injustice and moral growth.",
    img: "covers/to-kill-a-mockingbird-cover.jpg"
  },
  {
    title: "Sell or Be Sold",
    author: "Grant Cardone",
    genre: "Business",
    year: "2011",
    description: "Grant Cardone's guide to mastering the art of selling — whether you're selling a product, a service, or yourself. A practical and motivational read for anyone looking to take control of their career and income.",
    img: "covers/sell-or-be-sold-cover.jpg"
  }
];