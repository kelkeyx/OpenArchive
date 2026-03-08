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
    img: "covers/moby-dick.jpg"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Southern Gothic",
    year: "1960",
    description: "The story of young Scout Finch, her brother Jem, and their father Atticus, a lawyer who defends a Black man falsely accused of a crime in 1930s Alabama. A landmark novel of racial injustice and moral growth.",
    img: "covers/to-kill-a-mockingbird.jpg"
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian Fiction",
    year: "1949",
    description: "Set in a totalitarian superstate ruled by Big Brother, the novel follows Winston Smith as he secretly rebels against the Party's omnipresent surveillance and mind control. A defining work of political fiction.",
    img: "covers/1984.jpg"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Tragedy",
    year: "1925",
    description: "Narrated by Nick Carraway, this novel explores themes of wealth, class, love, and the American Dream through the mysterious millionaire Jay Gatsby and his obsession with Daisy Buchanan.",
    img: "covers/great-gatsby.jpg"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romantic Novel",
    year: "1813",
    description: "The story follows Elizabeth Bennet as she navigates issues of manners, upbringing, morality, education, and marriage in the society of the landed gentry of early 19th-century England.",
    img: "covers/pride-and-prejudice.jpg"
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    genre: "Psychological Fiction",
    year: "1866",
    description: "Raskolnikov, a destitute student in St. Petersburg, formulates a plan to kill a pawnbroker to fund his education. The novel explores his mental anguish and moral dilemmas before and after the act.",
    img: "covers/crime-and-punishment.jpg"
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian Fiction",
    year: "1932",
    description: "Set in a futuristic World State where citizens are engineered into an intelligence-based social hierarchy. The novel anticipates huge scientific developments in reproductive technology and psychological conditioning.",
    img: "covers/brave-new-world.jpg"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Coming-of-Age",
    year: "1951",
    description: "Holden Caulfield, a teenager from New York City, is expelled from his prep school and wanders through the city. Told in first person, it deals with complex issues of identity, belonging, and loss.",
    img: "covers/catcher-in-the-rye.jpg"
  }
];