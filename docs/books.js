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
    description: "Ishmael narrates the monomaniacal quest of Ahab, captain of the whaling ship Pequod, for revenge on the albino sperm whale Moby Dick, which on a previous voyage destroyed Ahab's ship and severed his leg. A sweeping epic of obsession, fate, and the indifferent power of nature.",
    img: "covers/moby-dick-cover.jpg"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Southern Gothic",
    year: "1960",
    description: "Young Scout Finch watches her father Atticus, a lawyer in 1930s Alabama, defend a Black man falsely accused of a crime. A landmark novel of racial injustice, childhood innocence, and moral courage.",
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
    description: "Burton Watson's celebrated translation of the foundational Taoist text attributed to the ancient Chinese philosopher Zhuang Zhou. Full of parables and flights of imagination, it explores the nature of reality, freedom, and the Way (Tao), challenging conventional distinctions between life and death, self and other.",
    img: "covers/Zhuangzi.jpg"
  },
  {
    title: "In Praise of Darmadhatu",
    author: "Nagarjuna",
    genre: "Buddhist Philosophy",
    year: "2008",
    description: "A luminous Buddhist hymn attributed to Nagarjuna, translated and commented upon by Karl Brunnholzl. The text praises the dharmadhatu — the fundamental nature of mind and reality — forming a key bridge between Madhyamaka and Yogacara thought.",
    img: "covers/In-Praise-of-Darmadhatu.jpg"
  },
  {
    title: "The Gospel of Sri Ramakrishna",
    author: "Mahendranath Gupta",
    genre: "Spirituality",
    year: "1902",
    description: "Records the conversations of Sri Ramakrishna with his disciples, devotees, and visitors, set down by Mahendranath Gupta under the pseudonym M. An indispensable primary source for the teachings of one of India's greatest 19th-century mystics.",
    img: "covers/The-Gospel-of-Sri-Ramakrishna.jpg"
  },
  {
    title: "Tenth of December",
    author: "George Saunders",
    genre: "Short Story Collection",
    year: "2013",
    description: "A collection of short stories by George Saunders drawing on work published between 1995 and 2012. It won The Story Prize and the inaugural Folio Prize, and was named one of the 10 Best Books of 2013 by the New York Times Book Review.",
    img: "covers/Tenth-of-December.jpg"
  },
  {
    title: "Light on the Doctrine of Karma",
    author: "Arijoy Bhattacharya",
    genre: "Philosophy / Kashmir Shaivism",
    year: "2019",
    description: "An in-depth study of Kula and Krama theories within Kashmir Shaivism, including an English translation of the commentary on the Kramastotra of Siddhanatha. The Sanskrit text of the Kramastotra is also included.",
    img: "covers/Light-on-the-Doctrine-of-Karma.jpg"
  },
  {
    title: "A Practical Guide to Buddhist Meditation",
    author: "Paramananda",
    genre: "Meditation / Religion & Spirituality",
    year: "1996",
    description: "A guide focusing on mindfulness and loving-kindness (Metta Bhavana), providing accessible instructions for cultivating a deeper awareness of mind and body. First published in 1996, it remains a widely used introduction to Buddhist meditation practice.",
    img: "covers/A-Practical-Guide-to-Buddhist-Meditation.jpg"
  },
  {
    title: "A Prophet for the New Age",
    author: "Richard Schiffman",
    genre: "Religion, Biography & Autobiography",
    year: "1989",
    description: "An accessible biography of Sri Ramakrishna, the 19th-century Hindu mystic, focusing on his spiritual experiences and teachings on universal religious unity. The book emphasizes practical applications of his yoga for a modern Western audience.",
    img: "covers/A-Prophet-for-the-New-Age.jpg"
  },
  {
    title: "Abhinavaguptas Commentary on the Bhagavad Gita",
    author: "Gitartha Samgraha",
    genre: "Philosophical Commentary",
    year: "10th-11th century CE",
    description: "The title means 'Summary of the Meaning of the Gita.' It interprets the Bhagavad Gita through the lens of Trika Shaivism, emphasizing that liberation is achieved through the realization of the unity of all life.",
    img: "covers/Abhinavaguptas-Commentary-on-the-Bhagavad-Gita.jpg"
  },
  {
    title: "Auspicious Wisdom",
    author: "Dougless Renfrew Brooks",
    genre: "Philosophy",
    year: "1992",
    description: "The first comprehensive study of the Srividya tradition, a goddess-centered Shakta Tantrism rooted in Kashmir Shaivism that became the dominant Tantric school in South India. The book explores its theology and ritual through canonical texts, historical commentaries, and the insights of living practitioners.",
    img: "covers/Auspicious-Wisdom.jpg"
  },
  {
    title: "Autobiography of a Yogi",
    author: "Paramahansa Yogananda",
    genre: "Spiritual Autobiography",
    year: "1946",
    description: "Paramahansa Yogananda's spiritual classic detailing his life from childhood in India, his search for a guru, and his mission to bring Kriya Yoga to the West. Widely considered a masterpiece of spiritual literature, it has influenced millions of readers since its publication in 1946.",
    img: "covers/Autobiography-of-a-Yogi.jpg"
  },
  {
    title: "Beloved",
    author: "Toni Morrison",
    genre: "Historical Fiction",
    year: "1987",
    description: "Sethe, a formerly enslaved woman in post-Civil War Ohio, is haunted by the ghost of her baby and visited by a mysterious young woman who calls herself Beloved. The novel blends magical realism with historical truth to explore trauma, memory, and the struggle for selfhood in the aftermath of slavery.",
    img: "covers/Beloved.jpg"
  },
  {
    title: "Bhagavad Gita As It Is",
    author: "Bhaktivedanta Swami Prabhupada",
    genre: "Philosophy",
    year: "1968",
    description: "A translation and commentary on the 700-verse Hindu scripture by A.C. Bhaktivedanta Swami Prabhupada. It presents the battlefield dialogue between Krishna and Arjuna, emphasizing bhakti yoga (devotional service) as the ultimate spiritual path.",
    img: "covers/Bhagavad-Gita-As-It-Is.jpg"
  },
  {
    title: "Bhagavad Gita",
    author: "Swami Gambhirananda",
    genre: "Spiritual Commentary",
    year: "1984",
    description: "A faithful translation of the Bhagavad Gita with the commentary of Shankara by a scholar-monk of the Ramakrishna Order. Includes Devanagari text with English rendering and indexes to the Sanskrit.",
    img: "covers/Bhagavad-Gita.jpg"
  },
  {
    title: "Bhakti Schools of Vedanta",
    author: "Swami Tapasyananda",
    genre: "Philosophy",
    year: "1990",
    description: "A study of the prominent Vaishnava philosophical traditions that interpret the Upanishads, Brahma Sutras, and Bhagavad Gita as promoting devotion to a personal God rather than strict non-dualism. These schools emphasize a loving relationship with Vishnu or Krishna as the ultimate path to liberation.",
    img: "covers/Bhakti-Schools-of-Vedanta.jpg"
  },
  {
    title: "Billy Budd Sailor",
    author: "Herman Melville",
    genre: "Nautical Fiction",
    year: "1924",
    description: "Melville's posthumously published novella, a tragic tale set on a British warship where the good-natured sailor Billy Budd is falsely accused of mutiny by the malicious Claggart. The story explores law, justice, and moral ambiguity through the agonizing decision faced by Captain Vere.",
    img: "covers/Billy-Budd-Sailor.jpg"
  },
  {
    title: "Confessions",
    author: "Saint Augustine",
    genre: "Autobiography / Theology",
    year: "397",
    description: "Saint Augustine's deeply personal spiritual autobiography, recounting his restless early life, his intellectual wanderings through Manichaeism and Neoplatonism, and his eventual conversion to Christianity. Written as an extended prayer addressed to God, it is one of the most enduring works of Western literature.",
    img: "covers/Confessions.jpg"
  },
  {
    title: "Brat",
    author: "Gabriel Smith",
    genre: "Contemporary Gothic Horror",
    year: "2024",
    description: "Gabriel Smith's debut novel follows a young writer named Gabriel as he clears out his deceased parents' home and his sanity begins to unravel amid strange occurrences. A darkly humorous suburban gothic blending autofiction, ghost story, and Gen Z alienation.",
    img: "covers/Brat.jpg"
  },
  {
    title: "Chicago Addresses",
    author: "Swami Vivekananda",
    genre: "Philosophy, Religion",
    year: "1893",
    description: "Vivekananda's historic 1893 speeches at the Parliament of World's Religions in Chicago, advocating for religious harmony, tolerance, and Vedantic philosophy. These addresses introduced his message of universal acceptance and the divinity of the soul to a Western audience.",
    img: "covers/Chicago-Addresses.jpg"
  },
  {
    title: "Civil Warland in Bad Decline",
    author: "George Saunders",
    genre: "Short Story Collection",
    year: "1996",
    description: "George Saunders's debut collection of darkly satirical stories set in dystopian, theme-park versions of America. The stories skewer corporate culture, moral compromise, and American self-delusion with characteristic black humor and surprising compassion.",
    img: "covers/Civil-Warland-in-Bad-Decline.jpg"
  },
  {
    title: "Death in the Afternoon",
    author: "Ernest Hemingway",
    genre: "Nonfiction / Cultural Essay",
    year: "1932",
    description: "Hemingway's passionate study of Spanish bullfighting, blending technical description with meditations on courage, death, and artistry. More than a handbook on the corrida, the book also serves as a manifesto on Hemingway's aesthetic of stripped-down, honest prose.",
    img: "covers/Death-in-the-Afternoon.jpg"
  },
  {
    title: "Devi Mahatmyam",
    author: "Swami Jagadiswarananda",
    genre: "Hindu Scripture / Mythology",
    year: "700 CE",
    description: "A Sanskrit scripture of 700 verses from the Markandeya Purana that glorifies the Goddess Durga through three epic battles between the Divine Mother and demonic forces. It is the foundational text of the Shakta tradition and one of the most revered devotional hymns in Hinduism.",
    img: "covers/Devi-Mahatmyam.jpg"
  },
  {
    title: "Essence of the Supreme Reality",
    author: "Swami Lakshmanjoo",
    genre: "Kashmir Shaivism / Philosophy",
    year: "2015",
    description: "Swami Lakshmanjoo's commentary on Abhinavagupta's Paramarthasara, a Sanskrit verse text summarizing the essential teachings of Kashmir Shaivism. The work illuminates the vision of universal consciousness, bondage, liberation, and the recognition of one's own divine nature.",
    img: "covers/Essence-of-the-Supreme-Reality.jpg"
  },
  {
    title: "Glory of Divine Mother",
    author: "S. Shankaranarayanan",
    genre: "Hindu Scripture / Shakta Philosophy",
    year: "1968",
    description: "S. Shankaranarayanan's authoritative exposition of the Devi Mahatmyam, exploring the symbolic and philosophical depths of its three episodes. The work reveals the battles of the Goddess as allegories of the soul's journey toward liberation through the grace of the Divine Mother.",
    img: "covers/Glory-of-Divine-Mother.jpg"
  },
  {
    title: "Goodbye Columbus",
    author: "Philip Roth",
    genre: "Fiction / Short Stories",
    year: "1959",
    description: "Philip Roth's National Book Award-winning debut, comprising a novella and five short stories. The title novella is a sharp, comic examination of class and identity in postwar Jewish-American life, following a summer romance between a Newark library worker and a wealthy Radcliffe girl.",
    img: "covers/Goodbye-Columbus.jpg"
  },
  {
    title: "In Praise of the Goddess",
    author: "Devadatta Kali",
    genre: "Hindu Scripture / Shakta Philosophy",
    year: "2003",
    description: "Devadatta Kali's translation of and commentary on the Devimahatmya, offering verse-by-verse insight into the most celebrated hymn to the Divine Mother in Hinduism. The work presents the text as both scripture and living practice, exploring its mythology, symbolism, and spiritual significance.",
    img: "covers/In-Praise-of-the-Goddess.jpg"
  },
  {
    title: "Infinite Paths to Infinite Reality",
    author: "Ayon Maharaj",
    genre: "Philosophy / Comparative Religion",
    year: "2018",
    description: "Ayon Maharaj's rigorous philosophical defense of Sri Ramakrishna's doctrine of the harmony of religions, engaging with both classical Indian philosophy and contemporary Western religious pluralism. The book argues for a distinctive form of infinite-path pluralism grounded in Ramakrishna's mystical experience.",
    img: "covers/Infinite-Paths-to-Infinite-Reality.jpg"
  },
  {
    title: "James",
    author: "Percival Everett",
    genre: "Historical Fiction",
    year: "2024",
    description: "Percival Everett's bold reimagining of Adventures of Huckleberry Finn told from the perspective of Jim, the enslaved man renamed James. He emerges as a fully realized, philosophically complex protagonist navigating slavery and freedom in a work that is devastating, funny, and profoundly humane.",
    img: "covers/James.jpg"
  },
  {
    title: "Jesus Purusha",
    author: "Ian Davie",
    genre: "Comparative Religion / Theology",
    year: "1985",
    description: "Ian Davie's exploration of the convergence between Christian theology and Hindu Vedantic philosophy, particularly the concept of Purusha as Cosmic Person. The work draws parallels between Christ as the incarnate Logos and the Vedantic understanding of the universal Self.",
    img: "covers/Jesus-Purusha.jpg"
  },
  {
    title: "Joselito El Gallo",
    author: "Paco Aguado",
    genre: "Biography / Bullfighting",
    year: "2019",
    description: "A biography of José Gómez Ortega, known as Joselito El Gallo, widely considered one of the greatest bullfighters in history. Paco Aguado chronicles the life of this Sevillian prodigy who revolutionized the corrida alongside his rival Juan Belmonte, until his tragic death in the ring at age 25.",
    img: "covers/Joselito-El-Gallo.jpg"
  },
  {
    title: "Karma and Rebirth in Hinduism",
    author: "Swami Medhananda",
    genre: "Philosophy / Religion",
    year: "2022",
    description: "Swami Medhananda's rigorous philosophical analysis of the doctrines of karma and rebirth within the Hindu tradition, engaging with classical texts and contemporary debates. The work defends their coherence against modern skeptical challenges, drawing on Advaita Vedanta and Vivekananda's thought.",
    img: "covers/Karma-and-Rebirth-in-Hinduism.jpg"
  },
  {
    title: "Katha Upanisad",
    author: "Swami Gambhirananda",
    genre: "Hindu Scripture / Vedanta",
    year: "1957",
    description: "Translation and commentary on the Katha Upanishad, in which the young Nachiketa receives teachings on the nature of the Self from Yama, the god of death. A foundational text of Advaita Vedanta offering some of the most profound statements on the Atman in Indian philosophy.",
    img: "covers/Katha-Upanisad.jpg"
  },
  {
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    genre: "Literary Science Fiction",
    year: "2021",
    description: "Narrated by Klara, a solar-powered Artificial Friend sold as a companion for children, the novel follows her attempt to understand the human world around her. Ishiguro uses her perspective to raise searching questions about love, consciousness, and whether a perfect simulation of a person can replace the original.",
    img: "covers/Klara-and-the-Sun.jpg"
  },
  {
    title: "La Tauromaquia de Juan Belmonte",
    author: "Luis Bollain",
    genre: "Biography / Bullfighting",
    year: "1989",
    description: "A detailed study of the revolutionary bullfighting style of Juan Belmonte, the Sevillian torero who transformed the art of the corrida in the early 20th century. Luis Bollain examines Belmonte's technique, his rivalry with Joselito, and his lasting influence on modern bullfighting.",
    img: "covers/La-Tauromaquia-de-Juan-Belmonte.jpg"
  },
  {
    title: "Liberation Day",
    author: "George Saunders",
    genre: "Short Story Collection",
    year: "2022",
    description: "George Saunders's third short story collection, featuring nine stories ranging from near-future dystopias to intimate portraits of human folly and grace. The collection grapples with surveillance, complicity, and the possibility of moral awakening in dark times.",
    img: "covers/Liberation-Day.jpg"
  },
  {
    title: "Light on the Doctrine of Karma",
    author: "Arijoy Bhattacharya",
    genre: "Philosophy / Kashmir Shaivism",
    year: "2019",
    description: "An in-depth study of Kula and Krama theories within Kashmir Shaivism, including an English translation of the commentary on the Kramastotra of Siddhanatha. The Sanskrit text of the Kramastotra is also included.",
    img: "covers/Light-on-the-Doctrine-of-Karma.jpg"
  },
  {
    title: "Man and His Symbols",
    author: "Carl G. Jung",
    genre: "Psychology / Depth Psychology",
    year: "1964",
    description: "Carl Jung's last major work, conceived as an introduction to his ideas for a general audience. Jung and his associates explore the role of symbols, dreams, and the unconscious, arguing that the symbolic language of the psyche is essential to psychological wholeness and meaning.",
    img: "covers/Man-and-His-Symbols.jpg"
  },
  {
    title: "Mcteague",
    author: "Frank Norris",
    genre: "Naturalist Fiction",
    year: "1899",
    description: "Frank Norris's landmark naturalist novel following the slow moral and physical degradation of McTeague, an unlicensed San Francisco dentist, after a lottery windfall poisons his marriage with greed. A bleak portrait of determinism and the destruction wrought by money and environment on human character.",
    img: "covers/Mcteague.jpg"
  },
  {
    title: "Metaphors in Vedic Literature",
    author: "V. N. Jha",
    genre: "Linguistics / Vedic Studies",
    year: "1996",
    description: "V. N. Jha's scholarly study of the metaphorical language in Vedic texts, examining how ancient Sanskrit poets used imagery and analogy to express cosmic and ritual truths. The work illuminates the literary and philosophical dimensions of the Vedas as living poetic documents.",
    img: "covers/Metaphors-in-Vedic-Literature.jpg"
  },
  {
    title: "Pessoa",
    author: "Richard Zenith",
    genre: "Biography",
    year: "2021",
    description: "Richard Zenith's monumental biography of Fernando Pessoa, the Portuguese poet who invented dozens of fictional authors — or heteronyms — each with their own biography and literary style. Drawing on Pessoa's vast unpublished archive, Zenith constructs an intimate portrait of one of the twentieth century's most enigmatic literary minds.",
    img: "covers/Pessoa.jpg"
  },
  {
    title: "Practice",
    author: "Rosalind Brown",
    genre: "Literary Fiction",
    year: "2023",
    description: "Rosalind Brown's debut novel unfolds over a single Sunday afternoon as Oxford student Annabel works on an essay about Shakespeare's sonnets. Intimate and formally inventive, it turns an ordinary afternoon of distraction and study into a sustained meditation on thought, solitude, and the life of the mind.",
    img: "covers/Practice.jpg"
  },
  {
    title: "Rabbit, Run",
    author: "John Updike",
    genre: "Literary Fiction",
    year: "1960",
    description: "The first novel in Updike's celebrated Rabbit tetralogy, following Harry 'Rabbit' Angstrom, a former basketball star trapped in a mediocre marriage and dead-end job in a small Pennsylvania town. Unable to reconcile his longing for freedom with adult responsibility, Rabbit runs — with tragic and darkly comic consequences.",
    img: "covers/Rabbit-Run.jpg"
  },
  {
    title: "Raja Yogi",
    author: "Swami Vivekananda",
    genre: "Philosophy / Yoga",
    year: "1896",
    description: "Vivekananda's seminal work on Raja Yoga, based on his New York lectures, presenting Patanjali's Yoga Sutras as a rational, scientific path to spiritual realization. He argues that concentration and meditation are universal tools through which the human mind can directly apprehend ultimate reality.",
    img: "covers/Raja-Yoga.jpg"
  },
  {
    title: "Ramakrishna As We Saw Him",
    author: "Swami Chetanananda",
    genre: "Biography / Spirituality",
    year: "1990",
    description: "An anthology of firsthand reminiscences of Sri Ramakrishna drawn from the accounts of his direct disciples and devotees. Together the testimonies paint a vivid, multi-faceted portrait of the Bengali mystic's personality, humor, ecstasies, and day-to-day interactions.",
    img: "covers/Ramakrishna-As-We-Saw-Him.jpg"
  },
  {
    title: "Salazar",
    author: "Tom Gallagher",
    genre: "Biography / History",
    year: "2020",
    description: "Tom Gallagher's biography of António de Oliveira Salazar, the austere dictator who ruled Portugal for nearly four decades. Gallagher charts Salazar's rise to power and his Estado Novo regime, which kept Portugal isolated, poor, and rigidly Catholic while much of Europe modernized.",
    img: "covers/Salazar.jpg"
  },
  {
    title: "Saundaryalahari of Sankaracarya",
    author: "V. K. Subramanian",
    genre: "Hindu Scripture / Shakta Poetry",
    year: "1977",
    description: "Translation and commentary on the Saundaryalahari, the celebrated 100-verse Sanskrit hymn to the Goddess attributed to Shankaracharya. The poem exalts the beauty and power of Parvati (Shakti), weaving together Tantric cosmology, devotional poetry, and the philosophy of non-dualism.",
    img: "covers/Saundaryalahari-of-Sankaracarya.jpg"
  },
  {
    title: "Selected Writings",
    author: "Meister Eckhart",
    genre: "Mysticism / Christian Philosophy",
    year: "1994",
    description: "A collection of sermons, treatises, and mystical discourses by Meister Eckhart, the 14th-century Dominican friar and one of the greatest Christian mystics. Eckhart's writings explore the soul's union with the Godhead and a radical theology of detachment that continues to inspire readers across traditions.",
    img: "covers/Selected-Writings.jpg"
  },
  {
    title: "Shankaras Crest Jewel of Discrimination",
    author: "Swami Prabhavananda and Christopher Isherwood",
    genre: "Advaita Vedanta / Philosophy",
    year: "1947",
    description: "A celebrated translation of the Vivekachudamani, a philosophical poem attributed to the 8th-century sage Shankara. The work guides the seeker through the discrimination between the real and the unreal toward the direct realization of non-dual awareness.",
    img: "covers/Shankaras-Crest-Jewel-of-Discrimination.jpg"
  },
  {
    title: "Sri Ramakrishna and His Divine Play",
    author: "Swami Saradananda",
    genre: "Biography / Spirituality",
    year: "1912",
    description: "Swami Saradananda's monumental biography of Sri Ramakrishna, written by one of his direct monastic disciples. The exhaustive account documents Ramakrishna's childhood, mystical experiences, spiritual practices across different traditions, and the formation of his circle of disciples.",
    img: "covers/Sri-Ramakrishna-and-His-Divine-Play.jpg"
  },
  {
    title: "Sri Sarada Devi and Her Divine Play",
    author: "Swami Chetanananda",
    genre: "Biography / Spirituality",
    year: "2017",
    description: "Swami Chetanananda's comprehensive biography of Sri Sarada Devi, the wife of Sri Ramakrishna and revered as the Holy Mother. The book traces her life from rural Bengal, her role as a spiritual teacher, and her quiet but extraordinary influence on the Ramakrishna movement.",
    img: "covers/Sri-Sarada-Devi-and-Her-Divine-Play.jpg"
  },
  {
    title: "Svetasvatara Upanisad",
    author: "Swami Gambhirananda",
    genre: "Hindu Scripture / Vedanta",
    year: "1986",
    description: "Translation and commentary on the Svetasvatara Upanishad, unique among the principal Upanishads for its devotional tone. The text presents Shiva (Rudra) as the supreme personal God while affirming the unity of the individual soul, the world, and Brahman.",
    img: "covers/Svetasvatara-Upanisad.jpg"
  },
  {
    title: "Tantric Kali",
    author: "Daniel Odier",
    genre: "Tantra / Spirituality",
    year: "2016",
    description: "Daniel Odier's exploration of the Tantric tradition centered on the goddess Kali, drawing on non-dual Kashmir Shaivism and his own practice under Tantric masters. The book presents Kali as the embodiment of absolute freedom and the radical aliveness of reality.",
    img: "covers/Tantric-Kali.jpg"
  },
  {
    title: "Tao Te Ching",
    author: "Lao Tzu",
    genre: "Philosophy / Taoism",
    year: "400 BCE",
    description: "The foundational text of Taoist philosophy, traditionally attributed to the sage Lao Tzu. Its 81 short chapters offer cryptic, poetic reflections on the Tao — the ineffable source underlying all existence — and its implications for personal conduct and the art of living in harmony with the natural order.",
    img: "covers/Tao-Te-Ching.jpg"
  },
  {
    title: "Teachings of Sri Ramakrishna",
    author: "Advaita Ashrama",
    genre: "Spirituality / Religion",
    year: "1975",
    description: "A thematically arranged anthology of the sayings and teachings of Sri Ramakrishna compiled by Advaita Ashrama. The collection presents the mystic's insights on God, devotion, discrimination, and the harmony of religions in an accessible format for spiritual seekers.",
    img: "covers/Teachings-of-Sri-Ramakrishna.jpg"
  },
  {
    title: "Teachings of the Buddah",
    author: "Jack Kornfield",
    genre: "Buddhism / Spirituality",
    year: "1993",
    description: "Jack Kornfield's anthology of Buddhist teachings drawn from the Theravada, Mahayana, and Vajrayana traditions. An ideal introduction to the breadth and depth of Buddhist wisdom, organized by theme and accessible to readers of any background.",
    img: "covers/Teachings-of-the-Buddah.jpg"
  },
  {
    title: "The Adventures of Tom Sawyer",
    author: "Mark Twain",
    genre: "Adventure Fiction",
    year: "1876",
    description: "Mark Twain's beloved novel of boyhood set in the fictional town of St. Petersburg, Missouri, following the mischievous Tom Sawyer through adventures that capture both the freedom and moral awakening of American childhood.",
    img: "covers/The-Adventures-of-Tom-Sawyer.jpg"
  },
  {
    title: "The Beatles Biography",
    author: "Bob Spitz",
    genre: "Biography / Music",
    year: "2005",
    description: "Bob Spitz's exhaustively researched biography of the Beatles, tracing their story from working-class Liverpool through Beatlemania, the creative peak of their studio years, and the band's acrimonious dissolution. Widely praised as the most authoritative single-volume account of the Fab Four.",
    img: "covers/The-Beatles-Biography.jpg"
  },
  {
    title: "The Beatles Book",
    author: "Hunter Davies",
    genre: "Biography / Music",
    year: "1968",
    description: "The only authorized biography of the Beatles, written with their full cooperation and offering an intimate behind-the-scenes portrait of the band at the height of their fame. Davies had unprecedented access to John, Paul, George, and Ringo, as well as their families.",
    img: "covers/The-Beatles-Book.jpg"
  },
  {
    title: "The Best Short Stories 2023",
    author: "Lauren Groff",
    genre: "Short Story Anthology",
    year: "2023",
    description: "The Best American Short Stories anthology for 2023, guest-edited by Lauren Groff, gathering the finest short fiction published in American and Canadian magazines that year. Groff's selection showcases the range and vitality of the contemporary short story, from realism to fable.",
    img: "covers/The-Best-Short-Stories-2023.jpg"
  },
  {
    title: "The Blue Guides",
    author: "Various Authors",
    genre: "Travel / Reference",
    year: "",
    description: "A distinguished series of travel and cultural reference books known for their scholarly depth and comprehensive historical and artistic commentary. First published in the early 20th century, they remain an indispensable companion for serious travelers exploring Europe and beyond.",
    img: "covers/The-Blue-Guides.jpg"
  },
  {
    title: "The Book of Chuank Tzu",
    author: "Martin Palmer with Elizabeth Breuilly",
    genre: "Philosophy / Taoism",
    year: "1996",
    description: "Martin Palmer and Elizabeth Breuilly's accessible translation of the Zhuangzi, the classic Taoist text whose parables and philosophical fancy have captivated readers for over two thousand years. The translation emphasizes the wit and literary playfulness of the original.",
    img: "covers/The-Book-of-Chuank-Tzu.jpg"
  },
  {
    title: "The Catcher in the Rye",
    author: "J. D. Salinger",
    genre: "Literary Fiction",
    year: "1951",
    description: "Narrated by Holden Caulfield, a teenager adrift in New York City after his expulsion from prep school, the novel captures the alienation and longing of adolescence. By turns funny and heartbreaking, it remains one of the most iconic works of American literature.",
    img: "covers/The-Catcher-in-the-Rye.jpg"
  },
  {
    title: "The Church and the Gospel",
    author: "Jean Guitton",
    genre: "Theology / Catholic Thought",
    year: "1961",
    description: "Jean Guitton's reflections on the relationship between the institutional Church and the living message of the Gospel. A lay member of the Second Vatican Council, Guitton brings a philosopher's precision and a believer's warmth to questions of tradition, renewal, and faithfulness to Christ.",
    img: "covers/The-Church-and-the-Gospel.jpg"
  },
  {
    title: "The Divine Creative Pulsation",
    author: "Jaideva Singh",
    genre: "Kashmir Shaivism / Philosophy",
    year: "1980",
    description: "Jaideva Singh's translation and commentary on the Spandakarika, a foundational text of Kashmir Shaivism. The text elaborates the concept of Spanda — the divine creative vibration underlying all existence — as a key to understanding non-dual reality and the path to liberation.",
    img: "covers/The-Divine-Creative-Pulsation.jpg"
  },
  {
    title: "The Gospel of Sri Ramakrishna",
    author: "Swami Nikhilananda",
    genre: "Spirituality / Religion",
    year: "1942",
    description: "Swami Nikhilananda's landmark English translation of the Sri Sri Ramakrishna Kathamrita, the Bengali record of Sri Ramakrishna's conversations compiled by Mahendranath Gupta. It remains the standard English-language edition of this essential spiritual classic.",
    img: "covers/The-Gospel-of-Sri-Ramakrishna.jpg"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Literary Fiction",
    year: "1925",
    description: "F. Scott Fitzgerald's masterpiece of the Jazz Age, centered on the mysterious millionaire Jay Gatsby and his obsessive pursuit of Daisy Buchanan across the waters of Long Island Sound. A dazzling and melancholy portrait of the American Dream's promise and its corruption.",
    img: "covers/The-Great-Gatsby.jpg"
  },
  {
    title: "The Handmaids Tale",
    author: "Margaret Atwood",
    genre: "Dystopian Fiction",
    year: "1985",
    description: "Set in the theocratic Republic of Gilead, where fertile women called Handmaids are forced to bear children for powerful men, the novel is narrated by Offred, a Handmaid who remembers the world before. A searing examination of patriarchy, religious extremism, and the resilience of the human spirit.",
    img: "covers/The-Handmaids-Tale.jpg"
  },
  {
    title: "The Karma Tantricism of Kasmir",
    author: "Navjivan Rastogi",
    genre: "Kashmir Shaivism / Academic Study",
    year: "1979",
    description: "Navjivan Rastogi's scholarly study of the Krama tradition within Kashmir Shaivism, one of the most esoteric currents of Tantric thought. Rastogi examines the Krama system's approach to the goddess Kali, the nature of time and consciousness, and its place within Kashmir Shaiva philosophy.",
    img: "covers/The-Karma-Tantricism-of-Kasmir.jpg"
  },
  {
    title: "The Mahartha Manjari",
    author: "Mahesvarananda",
    genre: "Kashmir Shaivism / Philosophy",
    year: "12th century CE",
    description: "A concise Sanskrit treatise on the non-dual philosophy of the Krama school of Kashmir Shaivism by Mahesvarananda. Together with its auto-commentary the Parimala, it presents a vision of reality as the spontaneous self-expression of universal consciousness.",
    img: "covers/The-Mahartha-Manjari.jpg"
  },
  {
    title: "The Manual for Self Realization",
    author: "Swami Lakshmanjoo",
    genre: "Kashmir Shaivism / Spirituality",
    year: "2015",
    description: "Swami Lakshmanjoo's commentary on the Vijnanabhairava Tantra, which presents 112 contemplative techniques for recognizing one's own consciousness as identical with the supreme reality. Each method is illuminated with the depth of a lifetime of practice within the Kashmir Shaiva tradition.",
    img: "covers/The-Manual-for-Self-Realization.jpg"
  },
  {
    title: "The Old Man and the Sea",
    author: "Ernest Hemingway",
    genre: "Literary Fiction",
    year: "1952",
    description: "Hemingway's Pulitzer Prize-winning novella follows Santiago, an aging Cuban fisherman who struggles alone in the Gulf Stream with a giant marlin over three grueling days. A spare meditation on endurance, pride, and the dignity of defeat, cited when Hemingway received the Nobel Prize in 1954.",
    img: "covers/The-Old-Man-and-the-Sea.jpg"
  },
  {
    title: "The Secret of the Veda",
    author: "Sri Aurobindo",
    genre: "Vedic Studies / Philosophy",
    year: "1914",
    description: "Sri Aurobindo's groundbreaking reinterpretation of the Rig Veda, arguing that the hymns conceal a psychological and spiritual symbolism beneath their imagery of nature and ritual. Aurobindo reads the Vedic gods as powers of consciousness on an allegorical path toward divine light and truth.",
    img: "covers/The-Secret-of-the-Veda.jpg"
  },
  {
    title: "The Secret Supreme",
    author: "Swami Lakshmanjoo",
    genre: "Kashmir Shaivism / Spirituality",
    year: "2007",
    description: "Swami Lakshmanjoo's commentary on the Shiva Sutras, the foundational text of Kashmir Shaivism. The 77 aphorisms outline three paths to liberation — Shambhavopaya, Shaktopaya, and Anavopaya — illuminated here with the authority of a master in the living tradition.",
    img: "covers/The-Secret-Supreme.jpg"
  },
  {
    title: "The Sun Also Rises",
    author: "Ernest Hemingway",
    genre: "Literary Fiction",
    year: "1926",
    description: "Hemingway's first major novel, the defining portrait of the Lost Generation, following American and British expatriates from Paris to Pamplona for the bullfights. A novel of disillusionment, desire, and stoic beauty that launched Hemingway's career and shaped American literary modernism.",
    img: "covers/The-Sun-Also-Rises.jpg"
  },
  {
    title: "The Supreme Awakening",
    author: "Swami Lakshmanjoo",
    genre: "Kashmir Shaivism / Spirituality",
    year: "2012",
    description: "Swami Lakshmanjoo's teachings on the Spandakarika, the verses on divine vibration that form a cornerstone of Kashmir Shaivism. He explains how the recognition of Spanda — the living pulse of consciousness at the heart of all experience — is itself the path to supreme awakening.",
    img: "covers/The-Supreme-Awakening.jpg"
  },
  {
    title: "The Three Pillars of Zen",
    author: "Philip Kapleau",
    genre: "Buddhism / Zen",
    year: "1965",
    description: "Philip Kapleau's landmark anthology of Zen teaching, practice, and enlightenment accounts compiled after thirteen years of training in Japan. The book includes detailed instructions for zazen alongside transcripts of dokusan interviews and first-person enlightenment accounts.",
    img: "covers/The-Three-Pillars-of-Zen.jpg"
  },
  {
    title: "The Triadic Heart of Siva",
    author: "Paul Eduardo Muller-Ortega",
    genre: "Kashmir Shaivism / Academic Study",
    year: "1989",
    description: "Paul Muller-Ortega's scholarly exploration of the concept of the Heart (hridaya) in the Trika and Kula traditions of Kashmir Shaivism, focusing on Abhinavagupta's thought. The book argues that the Heart is the central metaphor for absolute consciousness in this tradition.",
    img: "covers/The-Triadic-Heart-of-Siva.jpg"
  },
  {
    title: "The Upanishads",
    author: "Eknath Easwaran",
    genre: "Hindu Scripture / Vedanta",
    year: "1987",
    description: "Eknath Easwaran's accessible and literary translations of eighteen principal Upanishads, accompanied by illuminating introductions. Easwaran brings the central Vedantic teachings on consciousness and liberation alive for the modern reader without sacrificing depth or fidelity to the originals.",
    img: "covers/The-Upanishads.jpg"
  },
  {
    title: "The Vision of Siva in Periyapuranam",
    author: "Ratna Ma Navaratnam",
    genre: "Tamil Literature / Shaiva Devotion",
    year: "1978",
    description: "A study of the Periyapuranam, the 12th-century Tamil hagiography of the 63 Shaiva saint-poets composed by Sekkizhar. The work explores the Shaiva Siddhanta theology embedded in the saints' lives and the vision of Shiva as a God who enters the human world out of love for his devotees.",
    img: "covers/The-Vision-of-Siva-in-Periyapuranam.jpg"
  },
  {
    title: "The Way of the Jewish Mystics",
    author: "Perle Besserman",
    genre: "Jewish Mysticism / Spirituality",
    year: "1994",
    description: "Perle Besserman's anthology spanning the Jewish mystical tradition from the Merkabah mystics and medieval Kabbalists to the Hasidic masters and into the 20th century. The work presents these teachings as a living path relevant to contemporary spiritual practice.",
    img: "covers/The-Way-of-the-Jewish-Mystics.jpg"
  },
  {
    title: "The Wisdom of the Prophet",
    author: "Thomas Cleary",
    genre: "Islamic Spirituality / Hadith",
    year: "2001",
    description: "Thomas Cleary's selection and translation of hadith — sayings attributed to the Prophet Muhammad — chosen for their spiritual depth and universal wisdom. The collection highlights the inner, mystical dimensions of Islamic teaching accessible to readers of all traditions.",
    img: "covers/The-Wisdom-of-the-Prophet.jpg"
  },
  {
    title: "Theology of the New Testament",
    author: "Rudolf Bultmann",
    genre: "Biblical Theology / Academic",
    year: "1951",
    description: "Bultmann's landmark two-volume systematic account of New Testament theology, organized around the proclamation of Jesus and Paul. The work interweaves existentialist philosophy with historical-critical scholarship, arguing that the New Testament's core message concerns authentic human existence before God.",
    img: "covers/Theology-of-the-New-Testament.jpg"
  },
  {
    title: "This Other Eden",
    author: "Paul Harding",
    genre: "Historical Fiction",
    year: "2023",
    description: "Inspired by the true history of Malaga Island off the coast of Maine, where a mixed-race community was forcibly evicted and institutionalized by the state in 1912. Harding traces the lives of the island's inhabitants across generations, capturing their beauty, resilience, and brutal erasure.",
    img: "covers/This-Other-Eden.jpg"
  },
  {
    title: "Thoughts in Solitude",
    author: "Thomas Merton",
    genre: "Spirituality / Christian Mysticism",
    year: "1958",
    description: "Thomas Merton's meditation on the contemplative life, written during extended periods of solitude at the Abbey of Gethsemani. In short, luminous reflections, Merton explores prayer, freedom, humility, and the relationship between the soul and God.",
    img: "covers/Thoughts-in-Solitude.jpg"
  },
  {
    title: "Vedantic Cosmopolitanism",
    author: "Swami Medhananda",
    genre: "Philosophy / Comparative Religion",
    year: "2021",
    description: "Swami Medhananda's philosophical study of Swami Vivekananda's vision of a universal, Vedanta-based spirituality as a foundation for cosmopolitan ethics. The work argues that Vivekananda's neo-Vedantic thought offers a compelling resource for global ethics and intercultural dialogue.",
    img: "covers/Vedantic-Cosmopolitanism.jpg"
  },
  {
    title: "Working Class Mystic",
    author: "Gary Tillery",
    genre: "Biography / Music",
    year: "2011",
    description: "Gary Tillery's biography of John Lennon focusing on his spiritual life, tracing his journey from the Church of England through Transcendental Meditation, Primal Therapy, and political activism to a mature personal spirituality. The book argues that Lennon's restless inner life was the animating force behind his most enduring music.",
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
