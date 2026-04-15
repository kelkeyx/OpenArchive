document.addEventListener("DOMContentLoaded", () => {

    /* ── ELEMENT REFS ───────────────────────────────────── */
    const stage          = document.getElementById("archiveStage");
    const strip          = document.getElementById("bookStrip");
    if (!stage || !strip) return;

    /* ── BUILD CARDS FROM window.BOOKS ──────────────────── */
    const books = window.BOOKS || [];
    if (!books.length) {
        document.body.innerHTML = `
            <main class="empty-state">
                <h2>No books found</h2>
                <p>Add entries to <code>books.js</code> to get started.</p>
            </main>`;
        return;
    }

    books.forEach(book => {
        const btn = document.createElement("button");
        btn.className = "book-card";
        btn.type = "button";
        btn.dataset.title       = book.title       || "";
        btn.dataset.author      = book.author      || "";
        btn.dataset.genre       = book.genre       || "";
        btn.dataset.year        = book.year        || "";
        btn.dataset.description = book.description || "";
        btn.dataset.img         = book.img         || "";

        const img = document.createElement("img");
        img.src     = book.img || "";
        img.alt     = (book.title || "") + " cover";
        img.loading = "lazy";

        btn.appendChild(img);
        strip.appendChild(btn);
    });

    const originalCards = Array.from(strip.querySelectorAll(".book-card"));

    const focusCoverImg  = document.getElementById("focusCoverImg");
    const metaPanel      = document.getElementById("metaPanel");
    const btnExpand      = document.getElementById("btnExpand");
    const fullscreenOverlay = document.getElementById("fullscreenOverlay");
    const fullscreenImg  = document.getElementById("fullscreenImg");
    const btnFsClose     = document.getElementById("btnFullscreenClose");
    const pileTRInner    = document.querySelector(".corner-pile--tr .corner-pile__inner");
    const pileBLInner    = document.querySelector(".corner-pile--bl .corner-pile__inner");
    const uiDateLine     = document.getElementById("uiDateLine");
    const uiTimeLine     = document.getElementById("uiTimeLine");

    /* ── CLOCK ───────────────────────────────────────────── */
    function updateClock() {
        const now = new Date();
        const dateStr = now.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
        const h = String(now.getHours()).padStart(2, "0");
        const m = String(now.getMinutes()).padStart(2, "0");
        const s = String(now.getSeconds()).padStart(2, "0");
        uiDateLine.textContent = dateStr;
        uiTimeLine.textContent = `${h}:${m}:${s}`;
    }
    updateClock();
    setInterval(updateClock, 1000);

    /* ── INFINITE LOOP SETUP ────────────────────────────── */
    const MIN_FOR_LOOP = 6;
    const USE_LOOP = originalCards.length >= MIN_FOR_LOOP;
    const COPIES = 5;

    if (USE_LOOP) {
        const originalMarkup = strip.innerHTML;
        for (let i = 1; i < COPIES; i++) {
            strip.insertAdjacentHTML("beforeend", originalMarkup);
        }
    }

    let cards = Array.from(strip.querySelectorAll(".book-card"));
    let scrollTimer = null;
    let isProgrammaticScroll = false;
    let currentCard = null;
    let currentImgSrc = "";

    /* ── CORNER PILE BUILDER ─────────────────────────────── */
    function buildCornerPiles() {
        // Use first 8 unique book images for corner piles
        const uniqueImgs = originalCards.slice(0, 8).map(c => ({
            src: c.dataset.img || "",
            alt: c.dataset.title || ""
        }));

        // Fill to 8 by cycling if fewer
        while (uniqueImgs.length < 8) {
            uniqueImgs.push(...uniqueImgs.slice(0, 8 - uniqueImgs.length));
        }

        function buildPile(container, imgs) {
            if (!container) return;
            container.innerHTML = "";
            // Render bottom-to-top (last child = topmost visually, per CSS z-index stacking)
            [...imgs].reverse().forEach(({ src, alt }) => {
                const div = document.createElement("div");
                div.className = "pile-card";
                const img = document.createElement("img");
                img.src = src;
                img.alt = alt;
                img.loading = "lazy";
                div.appendChild(img);
                container.appendChild(div);
            });
        }

        buildPile(pileTRInner, uniqueImgs);
        buildPile(pileBLInner, uniqueImgs);
    }

    buildCornerPiles();

    /* ── UPDATE CORNER INFO PANELS ───────────────────────── */
    const infoTitle = document.getElementById("infoTitle");
    const infoMeta  = document.getElementById("infoMeta");
    const infoDesc  = document.getElementById("infoDesc");

    function updateFocus(card) {
        const img   = card.dataset.img         || "";
        const title = card.dataset.title       || "Untitled";
        const author= card.dataset.author      || "";
        const genre = card.dataset.genre       || "";
        const year  = card.dataset.year        || "";
        const desc  = card.dataset.description || "";

        // Corner panels
        if (infoTitle) infoTitle.textContent = title;
        if (infoMeta)  infoMeta.textContent  = [author, genre, year].filter(Boolean).join(" / ");
        if (infoDesc)  infoDesc.textContent  = desc;

        // Keep old hidden elements in sync for fullscreen / copy / save buttons
        const metaTimestamp = document.getElementById("metaTimestamp");
        const metaLocation  = document.getElementById("metaLocation");
        const metaAuthor    = document.getElementById("metaAuthor");
        const metaDescEl    = document.getElementById("metaDesc");
        const focusCoverImg = document.getElementById("focusCoverImg");

        if (metaTimestamp) {
            const now = new Date();
            metaTimestamp.textContent = now.toLocaleDateString("en-US",
                { month: "long", day: "numeric", year: "numeric" }).toUpperCase()
                + ", " + now.toLocaleTimeString("en-US", { hour12: false });
        }
        if (metaLocation) metaLocation.textContent = title.toUpperCase();
        if (metaAuthor)   metaAuthor.textContent   = [author, genre, year].filter(Boolean).join(" / ");
        if (metaDescEl)   metaDescEl.textContent   = desc;

        // Update fullscreen image src
        if (img && img !== currentImgSrc) {
            currentImgSrc = img;
            if (focusCoverImg) {
                focusCoverImg.src = img;
                focusCoverImg.alt = title;
            }
            const fullscreenImg = document.getElementById("fullscreenImg");
            if (fullscreenImg) fullscreenImg.src = img;
        }
    }

    /* ── PANEL — kept for compatibility ─────────────────── */
    if (metaPanel) metaPanel.classList.add("is-visible");

    /* ── COVER / INFO MODE TOGGLE ────────────────────────── */
    const bookFocus     = document.getElementById("bookFocus");
    const btnModeToggle = document.getElementById("btnModeToggle");
    if (btnModeToggle) {
        btnModeToggle.addEventListener("click", () => {
            if (bookFocus) bookFocus.classList.toggle("info-mode");
        });
    }

    function resetMode() {
        if (bookFocus) bookFocus.classList.remove("info-mode");
    }

    /* ── SET SELECTED CARD ───────────────────────────────── */
    function centerCard(card, smooth = true) {
        const stripRect = strip.getBoundingClientRect();
        const cardRect  = card.getBoundingClientRect();
        const CARD_OFFSET = -(100 + 12) * 2;
        const delta = (cardRect.left + cardRect.width / 2) - (stripRect.left + stripRect.width / 2) + CARD_OFFSET;

        isProgrammaticScroll = true;
        strip.scrollBy({ left: delta, behavior: smooth ? "smooth" : "auto" });
        window.setTimeout(() => { isProgrammaticScroll = false; }, smooth ? 360 : 0);
    }

    function setSelected(card, { center = true, smooth = true } = {}) {
        if (card === currentCard) return;
        currentCard = card;

        cards.forEach(c => c.classList.remove("is-selected"));
        card.classList.add("is-selected");

        resetMode();
        updateFocus(card);
        if (center) centerCard(card, smooth);
    }

    /* ── LOOP NORMALIZATION ──────────────────────────────── */
    function normalizeLoopPosition() {
        if (!USE_LOOP) return;
        const setWidth = strip.scrollWidth / COPIES;
        const min = setWidth * 1.2;
        const max = setWidth * 3.8;
        if (strip.scrollLeft < min)       strip.scrollLeft += setWidth * 2;
        else if (strip.scrollLeft > max)  strip.scrollLeft -= setWidth * 2;
    }

    /* ── NEAREST CARD ───────────────────────────────────── */
    function nearestCardToCenter() {
        const stripRect   = strip.getBoundingClientRect();
        const CARD_OFFSET = -(100 + 12) * 2;
        const stripCenter = stripRect.left + stripRect.width / 2 + CARD_OFFSET;
        let nearest = null, bestDist = Infinity;

        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const dist = Math.abs((rect.left + rect.width / 2) - stripCenter);
            if (dist < bestDist) { bestDist = dist; nearest = card; }
        });

        return nearest;
    }

    /* ── CARD CLICK ─────────────────────────────────────── */
    cards.forEach(card => {
        card.addEventListener("click", () => {
            setSelected(card, { center: true, smooth: true });
        });
    });

    /* ── WHEEL SCROLL → one card at a time ──────────────── */
    let wheelLocked = false;
    stage.addEventListener("wheel", e => {
        e.preventDefault();
        if (wheelLocked) return;
        wheelLocked = true;

        const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
        const dir   = delta > 0 ? 1 : -1;
        const idx   = cards.indexOf(currentCard);
        const next  = cards[idx + dir];
        if (next) setSelected(next, { center: true, smooth: true });

        // unlock after animation settles
        setTimeout(() => { wheelLocked = false; }, 320);
    }, { passive: false });

    /* ── SCROLL → snap after manual strip drag ───────────── */
    strip.addEventListener("scroll", () => {
        normalizeLoopPosition();
        if (isProgrammaticScroll) return;
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
            const nearest = nearestCardToCenter();
            if (nearest && nearest !== currentCard) {
                setSelected(nearest, { center: true, smooth: true });
            }
        }, 150);
    });

    /* ── FULLSCREEN ─────────────────────────────────────── */
    function openFullscreen() {
        const overlay = document.getElementById("fullscreenOverlay");
        const img     = document.getElementById("fullscreenImg");
        if (img) img.src = currentImgSrc;
        if (overlay) overlay.classList.add("is-open");
    }

    function closeFullscreen() {
        const overlay = document.getElementById("fullscreenOverlay");
        if (overlay) overlay.classList.remove("is-open");
        const img = document.getElementById("fullscreenImg");
        if (img) img.style.display = "";
        const textEl = document.getElementById("fsDescText");
        if (textEl) textEl.style.display = "none";
    }

    btnExpand.addEventListener("click", openFullscreen);
    btnFsClose.addEventListener("click", closeFullscreen);
    fullscreenOverlay.addEventListener("click", e => {
        if (e.target === fullscreenOverlay) closeFullscreen();
    });

    document.addEventListener("keydown", e => {
        if (e.key === "Escape") closeFullscreen();
        if (e.key === "ArrowRight") {
            const idx = cards.indexOf(currentCard);
            const next = cards[(idx + 1) % cards.length];
            setSelected(next);
        }
        if (e.key === "ArrowLeft") {
            const idx = cards.indexOf(currentCard);
            const prev = cards[(idx - 1 + cards.length) % cards.length];
            setSelected(prev);
        }
    });

    /* ── TOUCH SWIPE → one card at a time ───────────────── */
    let touchStartX = 0;
    stage.addEventListener("touchstart", e => {
        touchStartX = e.touches[0].clientX;
    }, { passive: true });

    stage.addEventListener("touchend", e => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 30) {
            const dir  = dx < 0 ? 1 : -1;
            const idx  = cards.indexOf(currentCard);
            const next = cards[idx + dir];
            if (next) setSelected(next, { center: true, smooth: true });
        }
    }, { passive: true });

    /* ── SAVE BTN — download cover image ────────────────── */
    document.getElementById("metaBtnSave").addEventListener("click", () => {
        if (!currentImgSrc) return;
        const a = document.createElement("a");
        a.href = currentImgSrc;
        a.download = (currentCard?.dataset.title || "book") + ".jpg";
        a.click();
    });

    /* ── COPY TITLE BTN ──────────────────────────────────── */
    document.getElementById("metaBtnCopy").addEventListener("click", () => {
        const title = currentCard?.dataset.title || "";
        if (!title) return;
        navigator.clipboard.writeText(title).then(() => {
            const btn = document.getElementById("metaBtnCopy");
            const label = btn.querySelector("span:last-child");
            label.textContent = "copied!";
            setTimeout(() => { label.textContent = "copy title"; }, 1800);
        });
    });

    /* ── READ MORE BTN — opens fullscreen with description ── */
    document.getElementById("metaBtnReadMore").addEventListener("click", () => {
        if (!currentCard) return;
        const desc  = currentCard.dataset.description || "No description available.";
        const title = currentCard.dataset.title || "";
        // Reuse fullscreen overlay with text content
        fullscreenImg.style.display = "none";
        let textEl = document.getElementById("fsDescText");
        if (!textEl) {
            textEl = document.createElement("div");
            textEl.id = "fsDescText";
            textEl.style.cssText = `
                max-width: 600px; padding: 40px; color: #fff;
                font-family: 'IBM Plex Mono', monospace; font-size: 0.85rem;
                line-height: 1.9; text-align: left;
            `;
            fullscreenOverlay.appendChild(textEl);
        }
        textEl.innerHTML = `<div style="font-size:0.65rem;opacity:0.45;margin-bottom:12px;letter-spacing:0.1em">${title.toUpperCase()}</div>${desc}`;
        textEl.style.display = "block";
        fullscreenOverlay.classList.add("is-open");
    });

    /* ── KEYBOARD HELP BTN ───────────────────────────────── */
    document.getElementById("btnKeyHelp").addEventListener("click", () => {
        fullscreenImg.style.display = "none";
        let textEl = document.getElementById("fsDescText");
        if (!textEl) {
            textEl = document.createElement("div");
            textEl.id = "fsDescText";
            textEl.style.cssText = `
                max-width: 600px; padding: 40px; color: #fff;
                font-family: 'IBM Plex Mono', monospace; font-size: 0.85rem;
                line-height: 1.9; text-align: left;
            `;
            fullscreenOverlay.appendChild(textEl);
        }
        textEl.innerHTML = `
            <div style="font-size:0.65rem;opacity:0.45;margin-bottom:20px;letter-spacing:0.1em">KEYBOARD SHORTCUTS</div>
            <div>← →&nbsp;&nbsp;&nbsp;&nbsp;navigate books</div>
            <div>Esc&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;close overlay</div>
            <div style="margin-top:20px;font-size:0.65rem;opacity:0.4">scroll or click thumbnails to browse</div>
        `;
        textEl.style.display = "block";
        fullscreenOverlay.classList.add("is-open");
    });

    /* ── INITIAL STATE ───────────────────────────────────── */
    if (USE_LOOP) {
        requestAnimationFrame(() => {
            const setWidth = strip.scrollWidth / COPIES;
            strip.scrollLeft = setWidth * 2;
            cards = Array.from(strip.querySelectorAll(".book-card"));
            const startCard = cards[originalCards.length * 2 - 2];
            setSelected(startCard, { center: true, smooth: false });
        });
    } else {
        setSelected(cards[0], { center: true, smooth: false });
    }
});