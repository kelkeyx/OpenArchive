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
  },
  {
    title: "Zhuangzi",
    author: "Burton Watson",
    genre: "Philosophy / Taoism",
    year: "1968",
    description: "Burton Watson's celebrated translation of the Zhuangzi, the foundational Taoist text attributed to the ancient Chinese philosopher Zhuang Zhou. Full of parables, dialogues, and flights of imagination, it explores the nature of reality, freedom, and the Way (Tao), challenging conventional distinctions between life and death, self and other.",
    img: "covers/Zhuangzi.jpg"
  },
  {
    title: "In Praise of Darmadhatu",
    author: "Nagarjuna",
    genre: "Buddhist Philosophy",
    year: "2008",
    description: "A luminous Buddhist hymn attributed to Nagarjuna, translated and commented upon by Karl Brunnholzl. The text praises the dharmadhatu — the fundamental nature of mind and reality — and forms a key bridge between Madhyamaka and Yogacara thought, offering a poetic expression of Buddha-nature philosophy.",
    img: "covers/In-Praise-of-Darmadhatu.jpg"
  },
  {
    title: "The Gospel of Sri Ramakrishna",
    author: "Mahendranath Gupta",
    genre: "Spirituality",
    year: "1902",
    description: "The Gospel of Sri Ramakrishna is an English translation of the Bengali religious text Sri Ramakrishna Kathamrita by Swami Nikhilananda. The text records conversations of Ramakrishna with his disciples, devotees and visitors, recorded by Mahendranath Gupta, who wrote the book under the pseudonym of M. The first edition was published in 1942.",
    img: "covers/The-Gospel-of-Sri-Ramakrishna.jpg"
  },
  {
    title: "Tenth of December",
    author: "George Saunders",
    genre: "Short Story Collection",
    year: "2013",
    description: "Tenth of December is a collection of short stories by American author George Saunders. It contains stories published in various magazines between 1995 and 2012. The book was published on January 8, 2013, by Random House. One of the stories, Home, was a 2011 Bram Stoker Award finalist. Tenth of December was selected as one of the 10 Best Books of 2013 by the editors of The New York Times Book Review. The collection also won The Story Prize (2013) for short-story collections and the inaugural Folio Prize (2014).",
    img: "covers/Tenth-of-December.jpg"
  },
  {
    title: "Light on the Doctrine of Karma",
    author: "Arijoy Bhattacharya",
    genre: "Philosophy",
    year: "2019",
    description: "On Kashmir Śaivism with indepth study of Kula and Krama thoeries; English translation of the commentary on Kramastotra of Siddhanātha ; includes Sanskrit text of Kramastotra.",
    img: "covers/Light-on-the-Doctrine-of-Karma.jpg"
  },
  {
    title: "A Practical Guide to Buddhist Meditation",
    author: "Paramanada",
    genre: "Meditation / Religion & Spirituality",
    year: "1996",
    description: "A Practical Guide to Buddhist Meditation by Paramananda is a non-fiction, religious, and spiritual self-help book focusing on mindfulness and loving-kindness (Metta Bhavana). First published in 1996, it provides accessible instructions for cultivating a deeper awareness of the mind and body. It is widely available, with later editions published by Barnes & Noble.",
    img: "covers/A-Practical-Guide-to-Buddhist-Meditation.jpg"
  },
  {
    title: "A Prophet for the New Age",
    author: "Richard Schiffman",
    genre: "Religion, Biography & Autobiography",
    year: "1989",
    description: "A Prophet for the New Age by Richard Schiffman is a comprehensive, accessible biography highlighting the 19th-century Hindu saint's life and practical spiritual teachings. Published by Paragon House, it focuses on Ramakrishnas mystical experiences, teachings on universal spiritual unity, and practical applications of yoga for a modern audience.",
    img: "covers/A-Prophet-for-the-New-Age.jpg"
  },
  {
    title: "Abhinavaguptas Commentary on the Bhagavad Gita",
    author: "Gitartha Samgraha",
    genre: "Philosophical Commentary",
    year: "10th-11th century CE",
    description: " The title means Summary of the Meaning of the Gita. It interprets the Bhagavad Gita through the lens of Trika Shaivism, emphasizing that ultimate liberation is achieved through the realization of the unity of all life, moving beyond orthodox ritual action",
    img: "covers/Abhinavaguptas-Commentary-on-the-Bhagavad-Gita.jpg"
  },
  {
    title: "Auspicious Wisdom",
    author: "Dougless Renfrew Brooks",
    genre: "Philosophy",
    year: "1992",
    description: "Rooting itself in Kashmir Shaivism, Śrividyā became a force in South India no later than the seventh century, and eventually supplanted the Trika as the dominant Tantric tradition in Kashmir. This is the first comprehensive study of the texts and traditions of this influential school of goddess-centered, Śākta, Tantrism. Centering on the goddess's three manifestations-the beneficent deity Lalita Tripurasundari, her mantra, and the visually striking sricakra-Śrividyā creates a systematic esoteric discipline that combines elements of the yogas of knowledge, of devotion, and of ritual. Utilizing canonical works, historical commentaires, and the interpretive insights of living practitioners, this book explores the theological and ritual theories that form the basis for Śrividyā practice and offers new methods for critical and comparative studies of esoteric Hinduism.",
    img: "covers/Auspicious-Wisdom.jpg"
  },
  {
    title: "Autobiography of a Yogi",
    author: "Paramahansa Yogananda",
    genre: "Spiritual Autobiography",
    year: "1946",
    description: "Autobiography of a Yogi is a spiritual classic by Paramahansa Yogananda, detailing his life from childhood in India, his search for a guru, his training in Kriya Yoga, and his mission to bring yoga to the West, introducing readers to Eastern spiritual science and the laws behind miracles. Published in 1946, it's considered a masterpiece that has influenced millions, introducing figures like Mahatma Gandhi and Rabindranath Tagore, and remains a best-seller in spiritual literature. ",
    img: "covers/Autobiography-of-a-Yogi.jpg"
  },
  {
    title: "Beloved",
    author: "Toni Morrison",
    genre: "Historical Fiction",
    year: "1987",
    description: "explores the devastating legacy of slavery through the story of Sethe, a formerly enslaved woman in post-Civil War Ohio, whose home is haunted by the ghost of her baby, and who is visited by a mysterious young woman who calls herself Beloved. The novel blends magical realism with historical truth, using a fragmented narrative to delve into trauma, memory, and the struggle for freedom and selfhood.",
    img: "covers/Beloved.jpg"
  },
  {
    title: "Bhagavad Gita As It Is",
    author: "Bhaktivedanta Swami Prabhupada",
    genre: "Philosophy",
    year: "1968",
    description: "Bhagavad-gītā As It Is is a renowned translation and commentary of the 700-verse Hindu scripture by A.C. Bhaktivedanta Swami Prabhupada, first published in 1968. It presents the battlefield conversation between Krishna and Arjuna, emphasizing bhakti yoga (devotional service) as the ultimate path, while providing extensive purports reflecting the Gaudiya Vaishnava tradition.",
    img: "covers/Bhagavad-Gita-As-It-Is.jpg"
  },
  {
    title: "Bhagavad Gita",
    author: "Swami Gambhiranada",
    genre: "Spiritual Commentary",
    year: "1984",
    description: "A faithful rendering of the Bhagavad Gita with the commentary of Shankara by a highly regarded monk and scholar of the Ramakrishna Order.br> Devanagri text with English rendering. Includes index to first words plus a separate index of all the words of the Sanskrit text. Especially useful for students and scholars.",
    img: "covers/Bhagavad-Gita.jpg"
  },
  {
    title: "Bhakti Schools of Vedanta",
    author: "Swami Tapasyanada",
    genre: "Philosophy",
    year: "1990",
    description: "The Bhakti Schools of Vedanta are prominent Vaishnava philosophical traditions that interpret the Upanishads, Brahma Sutras, and Bhagavad Gita as promoting devotion (Bhakti) to a personal God (Ishvara), rather than strict non-dualism. These schools emphasize a personal, loving relationship with Vishnu or Krishna as the ultimate path to liberation.",
    img: "covers/Bhakti-Schools-of-Vedanta.jpg"
  },
  {
    title: "Billy Budd Sailor",
    author: "Herman Melville",
    genre: "Nautical Fiction",
    year: "1924",
    description: "Billy Budd, Sailor is Herman Melville's final, posthumously published novella, a tragic tale of innocence versus evil set on a British warship during the Napoleonic Wars, where the handsome and good-natured sailor Billy Budd is falsely accused of mutiny by the malicious master-at-arms, Claggart, leading to a trial and execution that explores themes of law, justice, and human nature. Discovered unfinished in Melville's papers after his 1891 death, it became a classic, celebrated for its complex characters and moral ambiguity, particularly the conflict between the innocent Billy and the villainous Claggart, and the difficult decision faced by Captain Vere. ",
    img: "covers/Billy-Budd-Sailor.jpg"
  },
  {
    title: "Confessions",
    author: "Saint Augustine",
    genre: "Autobiography / Theology",
    year: "397",
    description: "Confessions is Saint Augustine's deeply personal spiritual autobiography, recounting his restless early life of ambition and sensual indulgence, his intellectual wanderings through Manichaeism and Neoplatonism, and his eventual conversion to Christianity. Written as an extended prayer addressed to God, it is one of the most enduring works of Western literature and theology.",
    img: "covers/Confessions.jpg"
  },
  {
    title: "Brat",
    author: "Gabriel Smith",
    genre: "Contemporary Gothic Horror",
    year: "2024",
    description: "Brat is a 2024 debut novel by British author Gabriel Smith, a darkly humorous and formally inventive story about a young writer named Gabriel dealing with grief, family secrets, and a crumbling sense of self as he clears out his deceased parents' home. Described as a suburban gothic or haunted house benzo novel, it follows the protagonist as his sanity unravels amidst strange occurrences, including shifting manuscripts and a mysterious figure in his garden, blending elements of ghost stories, autofiction, and Gen Z alienation. ",
    img: "covers/Brat.jpg"
  },
  {
    title: "Chicago Addresses",
    author: "Swami Vivekananda",
    genre: "Philosophy, Religion",
    year: "1893",
    description: "Chicago Addresses by Swami Vivekananda is a collection of his historic 1893 speeches at the Parliament of World's Religions in Chicago, advocating for religious harmony, tolerance, and Vedantic philosophy. These addresses introduced his message of universal acceptance, non-dualism, and the divinity of the soul, aiming to bridge the gap between science and religion.",
    img: "covers/Chicago-Addresses.jpg"
  },
  {
    title: "Civil Warland in Bad Decline",
    author: "George Saunders",
    genre: "Short Story Collection",
    year: "1996",
    description: "George Saunders's debut collection of darkly satirical stories set in dystopian, theme-park versions of America. The title novella centers on a struggling Civil War re-enactment park plagued by gang violence, while the other stories skewer corporate culture, moral compromise, and the American capacity for self-delusion — all rendered with Saunders's characteristic black humor and surprising compassion.",
    img: "covers/Civil-Warland-in-Bad-Decline.jpg"
  },
  {
    title: "Death in the Afternoon",
    author: "Ernest Hemingway",
    genre: "Nonfiction / Cultural Essay",
    year: "1932",
    description: "Hemingway's passionate and learned study of Spanish bullfighting, blending detailed technical description with meditations on courage, death, and artistry. More than a handbook on the corrida, the book is also a manifesto on prose style and a window into Hemingway's own aesthetic of stripped-down, honest writing.",
    img: "covers/Death-in-the-Afternoon.jpg"
  },
  {
    title: "Devi Mahatmyam",
    author: "Swami Jagadiswarananda",
    genre: "Hindu Scripture / Mythology",
    year: "700 CE",
    description: "The Devi Mahatmyam, also known as the Chandi or Durga Saptashati, is a Sanskrit scripture from the Markandeya Purana comprising 700 verses that glorify the Goddess Durga. It narrates three epic battles between the Divine Mother and demonic forces, serving as the foundational text of Shakta tradition and one of the most revered devotional hymns in Hinduism.",
    img: "covers/Devi-Mahatmyam.jpg"
  },
  {
    title: "Essence of the Supreme Reality",
    author: "Swami Lakshmanjoo",
    genre: "Kashmir Shaivism / Philosophy",
    year: "2015",
    description: "Swami Lakshmanjoo's commentary on the Abhinavagupta's Paramarthasara, a concise Sanskrit verse text summarizing the essential teachings of Kashmir Shaivism. Lakshmanjoo illuminates Abhinavagupta's vision of universal consciousness, the nature of bondage and liberation, and the recognition of one's own divine nature as the supreme reality.",
    img: "covers/Essence-of-the-Supreme-Reality.jpg"
  },
  {
    title: "Glory of Divine Mother",
    author: "S. Shankaranarayanan",
    genre: "Hindu Scripture / Shakta Philosophy",
    year: "1968",
    description: "S. Shankaranarayanan's authoritative exposition of the Devi Mahatmyam, exploring the symbolic and philosophical depths of the scripture's three episodes. The work reveals the layers of inner meaning within the Goddess's battles, interpreting them as allegories of the soul's journey toward liberation through the grace of the Divine Mother.",
    img: "covers/Glory-of-Divine-Mother.jpg"
  },
  {
    title: "Goodbye Columbus",
    author: "Philip Roth",
    genre: "Fiction / Short Stories",
    year: "1959",
    description: "Philip Roth's debut work, comprising a novella and five short stories, won the National Book Award in 1960. The title novella is a sharp, comic examination of class and identity in postwar Jewish-American life, following a summer romance between a Newark library worker and a wealthy Radcliffe girl from the Short Hills suburbs.",
    img: "covers/Goodbye-Columbus.jpg"
  },
  {
    title: "In Praise of the Goddess",
    author: "Devadatta Kali",
    genre: "Hindu Scripture / Shakta Philosophy",
    year: "2003",
    description: "Devadatta Kali's translation of and commentary on the Devimahatmya, offering verse-by-verse insight into the most celebrated hymn to the Divine Mother in the Hindu tradition. The work presents the text as both scripture and living practice, exploring the mythology, symbolism, and spiritual significance of the Goddess's cosmic power.",
    img: "covers/In-Praise-of-the-Goddess.jpg"
  },
  {
    title: "Infinite Paths to Infinite Reality",
    author: "Ayon Maharaj",
    genre: "Philosophy / Comparative Religion",
    year: "2018",
    description: "Ayon Maharaj's rigorous philosophical defense of Sri Ramakrishna's doctrine of the harmony of religions, engaging with both classical Indian philosophy and contemporary Western religious pluralism. The book argues for a distinctive form of infinite-path pluralism grounded in Ramakrishna's mystical experience and Vivekananda's neo-Vedantic thought.",
    img: "covers/Infinite-Paths-to-Infinite-Reality.jpg"
  },
  {
    title: "James",
    author: "Percival Everett",
    genre: "Historical Fiction",
    year: "2024",
    description: "Percival Everett's bold reimagining of Adventures of Huckleberry Finn told from the perspective of Jim, the enslaved man at the heart of Twain's novel. Now renamed James, he emerges as a fully realized, philosophically complex protagonist navigating slavery, freedom, and the absurdity of white America, in a work that is by turns devastating, funny, and profoundly humane.",
    img: "covers/James.jpg"
  },
  {
    title: "Jesus Purusha",
    author: "Ian Davie",
    genre: "Comparative Religion / Theology",
    year: "1985",
    description: "Ian Davie's exploration of the convergence between Christian theology and Hindu Vedantic philosophy, particularly the concept of Purusha as Cosmic Person. The work draws parallels between Christ as the incarnate Logos and the Vedantic understanding of the universal Self, offering a bridge between Eastern and Western mystical traditions.",
    img: "covers/Jesus-Purusha.jpg"
  },
  {
    title: "Joselito El Gallo",
    author: "Paco Aguado",
    genre: "Biography / Bullfighting",
    year: "2019",
    description: "A biography of José Gómez Ortega, known as Joselito El Gallo, widely considered one of the greatest bullfighters in history. Paco Aguado chronicles the life of this Sevillian prodigy who revolutionized the art of bullfighting alongside his rival Juan Belmonte, until his tragic death in the ring at the age of 25 in 1920.",
    img: "covers/Joselito-El-Gallo.jpg"
  },
  {
    title: "Karma and Rebirth in Hinduism",
    author: "Swami Medhananda",
    genre: "Philosophy / Religion",
    year: "2022",
    description: "Swami Medhananda's rigorous philosophical analysis of the doctrines of karma and rebirth within the Hindu tradition, engaging with classical texts and contemporary debates. The work defends the coherence and plausibility of these doctrines against modern skeptical challenges, drawing on Advaita Vedanta and the thought of Swami Vivekananda.",
    img: "covers/Karma-and-Rebirth-in-Hinduism.jpg"
  },
  {
    title: "Katha Upanisad",
    author: "Swami Gambhirananda",
    genre: "Hindu Scripture / Vedanta",
    year: "1957",
    description: "Swami Gambhirananda's translation and commentary on the Katha Upanishad, one of the principal Upanishads, in which the young Nachiketa receives teachings on the nature of the Self and the secret of death from Yama, the god of death himself. A foundational text of Advaita Vedanta, it offers some of the most profound statements on the Atman in all of Indian philosophy.",
    img: "covers/Katha-Upanisad.jpg"
  },
  {
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    genre: "Literary Science Fiction",
    year: "2021",
    description: "Kazuo Ishiguro's novel narrated by Klara, an Artificial Friend — a solar-powered robot companion sold to keep children company. As Klara observes and tries to understand the human world around her, Ishiguro raises searching questions about what it means to love, to be human, and whether a perfect simulation of a person can ever truly replace the original.",
    img: "covers/Klara-and-the-Sun.jpg"
  },
  {
    title: "La Tauromaquia de Juan Belmonte",
    author: "Luis Bollain",
    genre: "Biography / Bullfighting",
    year: "1989",
    description: "A detailed study of the revolutionary bullfighting style of Juan Belmonte, the Sevillian torero who transformed the art of the corrida in the early 20th century. Luis Bollain examines Belmonte's technique, his rivalry with Joselito, and his lasting influence on modern bullfighting, drawing on historical sources and firsthand accounts.",
    img: "covers/La-Tauromaquia-de-Juan-Belmonte.jpg"
  },
  {
    title: "Liberation Day",
    author: "George Saunders",
    genre: "Short Story Collection",
    year: "2022",
    description: "George Saunders's third short story collection, featuring nine stories that range from near-future dystopias to intimate portraits of human folly and grace. Marked by Saunders's characteristic blend of satire and tenderness, the collection grapples with surveillance, complicity, and the possibility of moral awakening in dark times.",
    img: "covers/Liberation-Day.jpg"
  },
  {
    title: "Light on the Doctrine of Karma",
    author: "Arijoy Bhattacharya",
    genre: "Philosophy / Kashmir Shaivism",
    year: "2019",
    description: "On Kashmir Śaivism with in-depth study of Kula and Krama theories; English translation of the commentary on Kramastotra of Siddhanātha; includes Sanskrit text of Kramastotra.",
    img: "covers/Light-on-the-Doctrine-of-Karma.jpg"
  },
  {
    title: "Man and His Symbols",
    author: "Carl G. Jung",
    genre: "Psychology / Depth Psychology",
    year: "1964",
    description: "Carl Jung's last major work before his death in 1961, conceived as an introduction to his ideas for a general audience. Jung and his associates explore the role of symbols, dreams, and the unconscious in human life, arguing that the symbolic language of the psyche — expressed in myths, art, and dreams — is essential to psychological wholeness and meaning.",
    img: "covers/Man-and-His-Symbols.jpg"
  },
  {
    title: "Mcteague",
    author: "Frank Norris",
    genre: "Naturalist Fiction",
    year: "1899",
    description: "Frank Norris's landmark naturalist novel set in turn-of-the-century San Francisco, following the slow moral and physical degradation of McTeague, an unlicensed dentist, and his wife Trina after a lottery windfall poisons their marriage with greed. A bleak portrait of determinism and the destruction wrought by money and environment on human character.",
    img: "covers/Mcteague.jpg"
  },
  {
    title: "Metaphors in Vedic Literature",
    author: "V. N. Jha",
    genre: "Linguistics / Vedic Studies",
    year: "1996",
    description: "V. N. Jha's scholarly study of the metaphorical language employed in Vedic texts, examining how the ancient Sanskrit poets deployed imagery, analogy, and symbolic language to express cosmic and ritual truths. The work sheds light on the literary and philosophical dimensions of the Vedas as living poetic documents.",
    img: "covers/Metaphors-in-Vedic-Literature.jpg"
  },
  {
    title: "Pessoa",
    author: "Richard Zenith",
    genre: "Biography",
    year: "2021",
    description: "Richard Zenith's monumental biography of Fernando Pessoa, the Portuguese poet who invented dozens of fictional authors — or heteronyms — each with their own biography, literary style, and philosophy. Drawing on Pessoa's vast unpublished archive, Zenith constructs an intimate portrait of one of the twentieth century's most original and enigmatic literary minds.",
    img: "covers/Pessoa.jpg"
  },
  {
    title: "Practice",
    author: "Rosalind Brown",
    genre: "Literary Fiction",
    year: "2023",
    description: "Rosalind Brown's debut novel, unfolding over a single Sunday afternoon in the life of Annabel, an Oxford student working on an essay about Shakespeare's sonnets. Intimate and formally inventive, the book inhabits Annabel's inner world with extraordinary precision, turning an ordinary afternoon of distraction and study into a sustained meditation on thought, solitude, and the life of the mind.",
    img: "covers/Practice.jpg"
  },
  {
    title: "Rabbit, Run",
    author: "John Updike",
    genre: "Literary Fiction",
    year: "1960",
    description: "The first novel in John Updike's celebrated Rabbit tetralogy, following Harry 'Rabbit' Angstrom, a former high school basketball star now trapped in a mediocre marriage and dead-end job in a small Pennsylvania town. Unable to reconcile his longing for freedom with the demands of adult life, Rabbit runs — with consequences both tragic and darkly comic.",
    img: "covers/Rabbit-Run.jpg"
  },
  {
    title: "Raja Yogi",
    author: "Swami Vivekananda",
    genre: "Philosophy / Yoga",
    year: "1896",
    description: "Swami Vivekananda's seminal work on Raja Yoga, based on his lectures in New York, presenting Patanjali's Yoga Sutras as a rational, scientific path to spiritual realization. Vivekananda argues that concentration and meditation are universal tools for expanding consciousness and that the human mind, properly trained, can directly apprehend the ultimate reality.",
    img: "covers/Raja-Yoga.jpg"
  },
  {
    title: "Ramakrishna As We Saw Him",
    author: "Swami Chetanananda",
    genre: "Biography / Spirituality",
    year: "1990",
    description: "A rich anthology of firsthand reminiscences of Sri Ramakrishna collected by Swami Chetanananda, drawing on the accounts of his direct disciples and devotees. Together these personal testimonies paint a vivid and multi-faceted portrait of the 19th-century Bengali mystic's personality, humor, ecstasies, and day-to-day interactions with those who came to him.",
    img: "covers/Ramakrishna-As-We-Saw-Him.jpg"
  },
  {
    title: "Salazar",
    author: "Tom Gallagher",
    genre: "Biography / History",
    year: "2020",
    description: "Tom Gallagher's biography of António de Oliveira Salazar, the austere and enigmatic dictator who ruled Portugal for nearly four decades. Gallagher charts Salazar's rise from a seminarian's son to the architect of the Estado Novo, a corporatist regime that kept Portugal isolated, poor, and rigidly Catholic while much of Europe modernized around it.",
    img: "covers/Salazar.jpg"
  },
  {
    title: "Saundaryalahari of Sankaracarya",
    author: "V. K. Subramanian",
    genre: "Hindu Scripture / Shakta Poetry",
    year: "1977",
    description: "V. K. Subramanian's translation and commentary on the Saundaryalahari, the celebrated Sanskrit hymn to the Goddess attributed to Shankaracharya. Comprising 100 verses, the poem exalts the beauty and power of Parvati (Shakti), weaving together Tantric cosmology, devotional poetry, and the philosophy of non-dualism in an enduring masterpiece of Sanskrit literature.",
    img: "covers/Saundaryalahari-of-Sankaracarya.jpg"
  },
  {
    title: "Selected Writings",
    author: "Meister Eckhart",
    genre: "Mysticism / Christian Philosophy",
    year: "1994",
    description: "A collection of sermons, treatises, and mystical discourses by Meister Eckhart, the 14th-century Dominican friar and one of the greatest Christian mystics. Eckhart's writings explore the soul's union with the Godhead, the birth of the Word in the soul, and a radical theology of detachment that transcends conventional religious categories and continues to inspire readers across traditions.",
    img: "covers/Selected-Writings.jpg"
  },
  {
    title: "Shankaras Crest Jewel of Discrimination",
    author: "Swami Prabhavananda and Christopher Isherwood",
    genre: "Advaita Vedanta / Philosophy",
    year: "1947",
    description: "Swami Prabhavananda and Christopher Isherwood's celebrated translation of the Vivekachudamani, a philosophical poem attributed to the 8th-century sage Shankara. A foundational text of Advaita Vedanta, the work guides the spiritual seeker through the discrimination between the real and the unreal, the Atman and the non-Atman, toward the direct realization of non-dual awareness.",
    img: "covers/Shankaras-Crest-Jewel-of-Discrimination.jpg"
  },
  {
    title: "Sri Ramakrishna and His Divine Play",
    author: "Swami Saradananda",
    genre: "Biography / Spirituality",
    year: "1912",
    description: "Swami Saradananda's monumental biography of Sri Ramakrishna, written by one of his direct monastic disciples. Originally published in Bengali as Sri Sri Ramakrishna Lilaprasanga, this exhaustive account documents Ramakrishna's childhood, mystical experiences, spiritual practices across different religious traditions, and the formation of his circle of disciples who would go on to found the Ramakrishna Order.",
    img: "covers/Sri-Ramakrishna-and-His-Divine-Play.jpg"
  },
  {
    title: "Sri Sarada Devi and Her Divine Play",
    author: "Swami Chetanananda",
    genre: "Biography / Spirituality",
    year: "2017",
    description: "Swami Chetanananda's comprehensive biography of Sri Sarada Devi, the wife of Sri Ramakrishna and revered by his followers as the Holy Mother. Drawing on extensive historical sources and first-person accounts, the book traces her life from rural Bengal to Calcutta, her role as a spiritual teacher, and her quiet, extraordinary influence on the Ramakrishna movement.",
    img: "covers/Sri-Sarada-Devi-and-Her-Divine-Play.jpg"
  },
  {
    title: "Svetasvatara Upanisad",
    author: "Swami Gambhirananda",
    genre: "Hindu Scripture / Vedanta",
    year: "1986",
    description: "Swami Gambhirananda's translation and commentary on the Svetasvatara Upanishad, one of the principal Upanishads and a key text for theistic Vedanta. Unique among the Upanishads for its devotional tone, it presents Shiva (Rudra) as the supreme personal God while affirming the unity of the individual soul, the world, and Brahman.",
    img: "covers/Svetasvatara-Upanisad.jpg"
  },
  {
    title: "Tantric Kali",
    author: "Daniel Odier",
    genre: "Tantra / Spirituality",
    year: "2016",
    description: "Daniel Odier's exploration of the Tantric tradition centered on the goddess Kali, drawing on non-dual Kashmir Shaivism and his own practice under Tantric masters. The book presents Kali not as a terrifying destroyer but as the embodiment of absolute freedom and the radical aliveness of reality, offering meditations and teachings for engaging with her transformative energy.",
    img: "covers/Tantric-Kali.jpg"
  },
  {
    title: "Tao Te Ching",
    author: "Lao Tzu",
    genre: "Philosophy / Taoism",
    year: "400 BCE",
    description: "The foundational text of Taoist philosophy, traditionally attributed to the sage Lao Tzu and composed in ancient China. Its 81 short chapters offer cryptic, poetic reflections on the Tao — the ineffable source and principle underlying all existence — and its implications for personal conduct, leadership, and the art of living in harmony with the natural order.",
    img: "covers/Tao-Te-Ching.jpg"
  },
  {
    title: "Teachings of Sri Ramakrishna",
    author: "Advaita Ashrama",
    genre: "Spirituality / Religion",
    year: "1975",
    description: "A thematically arranged anthology of the sayings and teachings of Sri Ramakrishna, compiled by Advaita Ashrama. Drawing on the Gospel of Sri Ramakrishna and other sources, the collection presents the mystic's insights on God, the nature of mind, devotion, discrimination, and the harmony of religions in an accessible format for spiritual seekers.",
    img: "covers/Teachings-of-Sri-Ramakrishna.jpg"
  },
  {
    title: "Teachings of the Buddah",
    author: "Jack Kornfield",
    genre: "Buddhism / Spirituality",
    year: "1993",
    description: "Jack Kornfield's anthology of Buddhist teachings drawn from the Theravada, Mahayana, and Vajrayana traditions, presenting the core insights of the Buddha's path in the words of the tradition itself. An ideal introduction to the breadth and depth of Buddhist wisdom, organized by theme and accessible to readers of any background.",
    img: "covers/Teachings-of-the-Buddah.jpg"
  },
  {
    title: "The Adventures of Tom Sawyer",
    author: "Mark Twain",
    genre: "Adventure Fiction",
    year: "1876",
    description: "Mark Twain's beloved novel of boyhood set in the fictional town of St. Petersburg, Missouri, following the mischievous and imaginative Tom Sawyer through a series of adventures — whitewashing a fence, attending his own funeral, and witnessing a murder — that capture both the freedom and the moral awakening of American childhood.",
    img: "covers/The-Adventures-of-Tom-Sawyer.jpg"
  },
  {
    title: "The Beatles Biography",
    author: "Bob Spitz",
    genre: "Biography / Music",
    year: "2005",
    description: "Bob Spitz's exhaustively researched and definitive biography of the Beatles, tracing their story from working-class Liverpool through the Hamburg clubs, Beatlemania, and the creative peak of their studio years to the acrimonious dissolution of the band. Widely praised as the most authoritative single-volume account of the Fab Four.",
    img: "covers/The-Beatles-Biography.jpg"
  },
  {
    title: "The Beatles Book",
    author: "Hunter Davies",
    genre: "Biography / Music",
    year: "1968",
    description: "Hunter Davies's authorized biography of the Beatles, the only one written with their full cooperation, offering an intimate behind-the-scenes portrait of the band at the height of their fame. Davies had unprecedented access to John, Paul, George, and Ringo, as well as their families, producing an account that remains one of the most authentic records of the Beatles story.",
    img: "covers/The-Beatles-Book.jpg"
  },
  {
    title: "The Best Short Stories 2023",
    author: "Lauren Groff",
    genre: "Short Story Anthology",
    year: "2023",
    description: "The annual Best American Short Stories anthology for 2023, guest-edited by Lauren Groff, bringing together the finest short fiction published in American and Canadian magazines during the year. Groff's selection showcases the range and vitality of the contemporary short story, from realism to fable, with her characteristic emphasis on ambition, strangeness, and formal daring.",
    img: "covers/The-Best-Short-Stories-2023.jpg"
  },
  {
    title: "The Blue Guides",
    author: "Various Authors",
    genre: "Travel / Reference",
    year: "",
    description: "The Blue Guides are a distinguished series of travel and cultural reference books known for their scholarly depth, comprehensive historical and artistic commentary, and detailed coverage of architecture, museums, and monuments. First published in the early 20th century, they remain an indispensable companion for serious travelers exploring Europe and beyond.",
    img: "covers/The-Blue-Guides.jpg"
  },
  {
    title: "The Book of Chuank Tzu",
    author: "Martin Palmer with Elizabeth Breuilly",
    genre: "Philosophy / Taoism",
    year: "1996",
    description: "Martin Palmer and Elizabeth Breuilly's accessible translation of the Zhuangzi, the classic Taoist text whose parables, dialogues, and flights of philosophical fancy have captivated readers for over two thousand years. The translation emphasizes the wit and literary playfulness of the original, making it an ideal introduction to Zhuangzi's radical vision of freedom and spontaneity.",
    img: "covers/The-Book-of-Chuank-Tzu.jpg"
  },
  {
    title: "The Catcher in the Rye",
    author: "J. D. Salinger",
    genre: "Literary Fiction",
    year: "1951",
    description: "J. D. Salinger's iconic novel narrated by Holden Caulfield, a teenager adrift in New York City following his expulsion from a prep school. By turns funny and heartbreaking, the novel captures the alienation and longing of adolescence, Holden's fierce disdain for adult phoniness, and his desperate wish to protect the innocence of childhood.",
    img: "covers/The-Catcher-in-the-Rye.jpg"
  },
  {
    title: "The Church and the Gospel",
    author: "Jean Guitton",
    genre: "Theology / Catholic Thought",
    year: "1961",
    description: "French philosopher and theologian Jean Guitton's reflections on the relationship between the institutional Church and the living message of the Gospel. Guitton, a lay member of the Second Vatican Council, brings a philosopher's precision and a believer's warmth to questions of tradition, renewal, and the perennial challenge of remaining faithful to the spirit of Christ.",
    img: "covers/The-Church-and-the-Gospel.jpg"
  },
  {
    title: "The Divine Creative Pulsation",
    author: "Jaideva Singh",
    genre: "Kashmir Shaivism / Philosophy",
    year: "1980",
    description: "Jaideva Singh's translation and commentary on the Spandakarika, a foundational text of Kashmir Shaivism attributed to Vasugupta or his disciple Kallata. The text elaborates the concept of Spanda — the divine creative vibration or pulsation that underlies all of existence — as a key principle for understanding the non-dual nature of reality and the path to liberation.",
    img: "covers/The-Divine-Creative-Pulsation.jpg"
  },
  {
    title: "The Gospel of Sri Ramakrishna",
    author: "Swami Nikhilananda",
    genre: "Spirituality / Religion",
    year: "1942",
    description: "Swami Nikhilananda's landmark English translation of the Sri Sri Ramakrishna Kathamrita, the Bengali record of Sri Ramakrishna's conversations compiled by Mahendranath Gupta (M). This edition presents the complete text of Ramakrishna's teachings, parables, and mystical conversations with his disciples and visitors, and remains the standard English-language edition of this essential spiritual classic.",
    img: "covers/The-Gospel-of-Sri-Ramakrishna.jpg"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Literary Fiction",
    year: "1925",
    description: "F. Scott Fitzgerald's masterpiece of the Jazz Age, narrated by the mild-mannered Nick Carraway and centered on the mysterious millionaire Jay Gatsby and his obsessive pursuit of the golden Daisy Buchanan across the waters of Long Island Sound. A dazzling and melancholy portrait of the American Dream's promise and its corruption.",
    img: "covers/The-Great-Gatsby.jpg"
  },
  {
    title: "The Handmaids Tale",
    author: "Margaret Atwood",
    genre: "Dystopian Fiction",
    year: "1985",
    description: "Margaret Atwood's chilling dystopian novel set in the theocratic Republic of Gilead, where fertile women called Handmaids are forced to bear children for powerful men. Narrated by Offred, a Handmaid who remembers the world before, the novel is a searing examination of patriarchy, religious extremism, and the resilience of the human spirit under totalitarian control.",
    img: "covers/The-Handmaids-Tale.jpg"
  },
  {
    title: "The Karma Tantricism of Kasmir",
    author: "Navjivan Rastogi",
    genre: "Kashmir Shaivism / Academic Study",
    year: "1979",
    description: "Navjivan Rastogi's scholarly study of the Krama tradition within Kashmir Shaivism, one of the most esoteric and philosophically sophisticated currents of Tantric thought. Rastogi examines the Krama system's unique approach to the goddess Kali, the nature of time and consciousness, and its place within the broader landscape of Kashmir Shaiva philosophy.",
    img: "covers/The-Karma-Tantricism-of-Kasmir.jpg"
  },
  {
    title: "The Mahartha Manjari",
    author: "Mahesvarananda",
    genre: "Kashmir Shaivism / Philosophy",
    year: "12th century CE",
    description: "The Maharthamanjari is a concise and profound Sanskrit treatise on the non-dual philosophy of the Krama school of Kashmir Shaivism, composed by Mahesvarananda. The text, together with its auto-commentary the Parimala, presents a complete vision of reality as the spontaneous self-expression of universal consciousness, expressed with striking poetic and philosophical intensity.",
    img: "covers/The-Mahartha-Manjari.jpg"
  },
  {
    title: "The Manual for Self Realization",
    author: "Swami Lakshmanjoo",
    genre: "Kashmir Shaivism / Spirituality",
    year: "2015",
    description: "Swami Lakshmanjoo's commentary on the Vijnanabhairava Tantra, a central text of Kashmir Shaivism that presents 112 contemplative techniques for recognizing the nature of one's own consciousness as identical with the supreme reality. Lakshmanjoo illuminates each method with the depth of a lifetime of practice and scholarly mastery of the tradition.",
    img: "covers/The-Manual-for-Self-Realization.jpg"
  },
  {
    title: "The Old Man and the Sea",
    author: "Ernest Hemingway",
    genre: "Literary Fiction",
    year: "1952",
    description: "Hemingway's Pulitzer Prize-winning novella, the story of Santiago, an aging Cuban fisherman who struggles alone in the Gulf Stream with a giant marlin over three grueling days and nights. A spare and luminous meditation on endurance, pride, and the dignity of defeat, it was cited by the Nobel Committee when Hemingway was awarded the Nobel Prize in Literature in 1954.",
    img: "covers/The-Old-Man-and-the-Sea.jpg"
  },
  {
    title: "The Secret of the Veda",
    author: "Sri Aurobindo",
    genre: "Vedic Studies / Philosophy",
    year: "1914",
    description: "Sri Aurobindo's groundbreaking work presenting a new interpretation of the Rig Veda, arguing that the hymns conceal a psychological and spiritual symbolism beneath their surface imagery of nature and ritual. Aurobindo reads the Vedic gods as powers of consciousness and the sacrificial imagery as an allegory of the soul's ascent toward divine light and truth.",
    img: "covers/The-Secret-of-the-Veda.jpg"
  },
  {
    title: "The Secret Supreme",
    author: "Swami Lakshmanjoo",
    genre: "Kashmir Shaivism / Spirituality",
    year: "2007",
    description: "Swami Lakshmanjoo's commentary on the Shiva Sutras, the foundational text of Kashmir Shaivism revealed to the sage Vasugupta. Lakshmanjoo illuminates these 77 aphorisms — which outline three paths to liberation based on Shambhavopaya, Shaktopaya, and Anavopaya — with the authority of a master deeply rooted in the living tradition.",
    img: "covers/The-Secret-Supreme.jpg"
  },
  {
    title: "The Sun Also Rises",
    author: "Ernest Hemingway",
    genre: "Literary Fiction",
    year: "1926",
    description: "Hemingway's first major novel, the defining portrait of the Lost Generation, following a group of American and British expatriates as they travel from Paris to Pamplona for the Festival of San Fermín and its bullfights. A novel of disillusionment, desire, and the stoic beauty of a life lived without illusion, it launched Hemingway's career and shaped American literary modernism.",
    img: "covers/The-Sun-Also-Rises.jpg"
  },
  {
    title: "The Supreme Awakening",
    author: "Swami Lakshmanjoo",
    genre: "Kashmir Shaivism / Spirituality",
    year: "2012",
    description: "Swami Lakshmanjoo's teachings on the Spandakarika, the verses on divine vibration that form a cornerstone of Kashmir Shaivism. Drawing on a lifetime of immersion in the tradition, Lakshmanjoo explains how the recognition of Spanda — the living pulse of consciousness at the heart of all experience — is itself the path to supreme awakening.",
    img: "covers/The-Supreme-Awakening.jpg"
  },
  {
    title: "The Three Pillars of Zen",
    author: "Philip Kapleau",
    genre: "Buddhism / Zen",
    year: "1965",
    description: "Philip Kapleau's landmark anthology of Zen teaching, practice, and enlightenment accounts, compiled after thirteen years of training in Japan under masters including Harada Roshi and Yasutani Roshi. The book presents the three pillars of Zen as teaching, practice, and enlightenment, and includes detailed instructions for zazen alongside transcripts of dokusan interviews and first-person enlightenment accounts.",
    img: "covers/The-Three-Pillars-of-Zen.jpg"
  },
  {
    title: "The Triadic Heart of Siva",
    author: "Paul Eduardo Muller-Ortega",
    genre: "Kashmir Shaivism / Academic Study",
    year: "1989",
    description: "Paul Muller-Ortega's scholarly exploration of the concept of the Heart (hridaya) in the Trika and Kula traditions of Kashmir Shaivism, with particular focus on the thought of Abhinavagupta. The book argues that the Heart is the central metaphor for the absolute consciousness in this tradition, and examines the philosophical and ritualistic implications of this concept in depth.",
    img: "covers/The-Triadic-Heart-of-Siva.jpg"
  },
  {
    title: "The Upanishads",
    author: "Eknath Easwaran",
    genre: "Hindu Scripture / Vedanta",
    year: "1987",
    description: "Eknath Easwaran's accessible and literary translations of eighteen principal Upanishads, accompanied by his warm and illuminating introductions. Easwaran brings the central Vedantic teachings — the identity of Atman and Brahman, the nature of consciousness, and the path to liberation — alive for the modern reader without sacrificing depth or fidelity to the originals.",
    img: "covers/The-Upanishads.jpg"
  },
  {
    title: "The Vision of Siva in Periyapuranam",
    author: "Ratna Ma Navaratnam",
    genre: "Tamil Literature / Shaiva Devotion",
    year: "1978",
    description: "Ratna Ma Navaratnam's study of the Periyapuranam, the 12th-century Tamil hagiography of the 63 Nayanmars or Shaiva saint-poets, composed by Sekkizhar. The work explores the Shaiva Siddhanta theology embedded in the saints' lives and the vision of Shiva as a God who enters directly into the human world out of love for his devotees.",
    img: "covers/The-Vision-of-Siva-in-Periyapuranam.jpg"
  },
  {
    title: "The Way of the Jewish Mystics",
    author: "Perle Besserman",
    genre: "Jewish Mysticism / Spirituality",
    year: "1994",
    description: "Perle Besserman's anthology of teachings from the Jewish mystical tradition, spanning the Merkabah mystics, the medieval Kabbalists, the Hasidic masters, and into the 20th century. Besserman presents these teachings as a living path, emphasizing their relevance for contemporary spiritual practice and the universal dimensions of Jewish mystical experience.",
    img: "covers/The-Way-of-the-Jewish-Mystics.jpg"
  },
  {
    title: "The Wisdom of the Prophet",
    author: "Thomas Cleary",
    genre: "Islamic Spirituality / Hadith",
    year: "2001",
    description: "Thomas Cleary's selection and translation of hadith — sayings and teachings attributed to the Prophet Muhammad — chosen for their spiritual depth and universal wisdom. Cleary, a renowned translator of Asian religious texts, presents these sayings in a way that highlights the inner, mystical dimensions of Islamic teaching accessible to readers of all traditions.",
    img: "covers/The-Wisdom-of-the-Prophet.jpg"
  },
  {
    title: "Theology of the New Testament",
    author: "Rudolf Bultmann",
    genre: "Biblical Theology / Academic",
    year: "1951",
    description: "Rudolf Bultmann's landmark two-volume work presenting a systematic account of the theology of the New Testament, organized around the proclamation (kerygma) of Jesus and Paul. A foundational text of 20th-century Protestant theology, the work interweaves existentialist philosophy with historical-critical scholarship to argue that the New Testament's core message is about authentic human existence before God.",
    img: "covers/Theology-of-the-New-Testament.jpg"
  },
  {
    title: "This Other Eden",
    author: "Paul Harding",
    genre: "Historical Fiction",
    year: "2023",
    description: "Paul Harding's novel inspired by the true history of Malaga Island off the coast of Maine, where a mixed-race community lived in peace for generations until the state forcibly evicted and institutionalized its residents in 1912. Harding traces the lives of the island's inhabitants across generations, capturing their beauty, resilience, and the brutal erasure visited upon them by the mainland world.",
    img: "covers/This-Other-Eden.jpg"
  },
  {
    title: "Thoughts in Solitude",
    author: "Thomas Merton",
    genre: "Spirituality / Christian Mysticism",
    year: "1958",
    description: "Thomas Merton's meditation on the contemplative life, written during extended periods of solitude at the Abbey of Gethsemani. In short, luminous reflections, Merton explores the nature of prayer, freedom, humility, and the relationship between the soul and God, offering one of the most personal and searching expressions of his monastic vocation.",
    img: "covers/Thoughts-in-Solitude.jpg"
  },
  {
    title: "Vedantic Cosmopolitanism",
    author: "Swami Medhananda",
    genre: "Philosophy / Comparative Religion",
    year: "2021",
    description: "Swami Medhananda's philosophical study of Swami Vivekananda's vision of a universal, Vedanta-based spirituality as a foundation for cosmopolitan ethics. The work engages rigorously with both classical Indian philosophy and contemporary Western political philosophy to argue that Vivekananda's neo-Vedantic thought offers a distinctive and compelling resource for thinking about global ethics and intercultural dialogue.",
    img: "covers/Vedantic-Cosmopolitanism.jpg"
  },
  {
    title: "Working Class Mystic",
    author: "Gary Tillery",
    genre: "Biography / Music",
    year: "2011",
    description: "Gary Tillery's biography of John Lennon focusing on his spiritual life, tracing his journey from the Church of England through Transcendental Meditation, LSD-assisted mysticism, Primal Therapy, and political activism to a mature personal spirituality. The book argues that Lennon's restless inner life was the animating force behind his most enduring music and message.",
    img: "covers/Working-Class-Mystic.jpg"
  },
  {
    title: "",
    author: "",
    genre: "",
    year: "",
    description: "",
    img: "covers/.jpg"
  }
];
