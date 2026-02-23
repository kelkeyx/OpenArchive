document.addEventListener("DOMContentLoaded", () => {
    const row = document.getElementById("shelfRow");
    if (!row) return;
  
    const detailsTitle = document.querySelector(".details__title");
    const detailsSub = document.querySelector(".details__sub");
    const detailsDesc = document.querySelector(".details__desc");
  
    let cards = Array.from(row.querySelectorAll(".cover-card"));
    if (!cards.length) return;
  
    // Wheel scroll converts vertical wheel into horizontal shelf scroll
    row.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        row.scrollLeft += e.deltaY;
      },
      { passive: false }
    );
  
    function updateDetails(card) {
      const title = card.dataset.title || "";
      const author = card.dataset.author || "";
      const genre = card.dataset.genre || "";
      const year = card.dataset.year || "";
      const description = card.dataset.description || "";
  
      if (detailsTitle) detailsTitle.textContent = title;
  
      const parts = [];
      if (author) parts.push(author);
      if (genre) parts.push(genre);
      if (year) parts.push(year);
      if (detailsSub) detailsSub.textContent = parts.join(" • ");
  
      if (detailsDesc) detailsDesc.textContent = description;
    }
  
    function setSelected(card, { center = true } = {}) {
      cards.forEach((c) => c.classList.remove("is-selected"));
      card.classList.add("is-selected");
      updateDetails(card);
  
      if (center) {
        card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  
    // Click selects + centers
    cards.forEach((card) => {
      card.addEventListener("click", () => setSelected(card, { center: true }));
    });
  
    // Find the card closest to the center of the shelf viewport
    function getNearestToCenter() {
      const rowRect = row.getBoundingClientRect();
      const rowCenterX = rowRect.left + rowRect.width / 2;
  
      let bestCard = null;
      let bestDist = Infinity;
  
      for (const card of cards) {
        const r = card.getBoundingClientRect();
        const cardCenterX = r.left + r.width / 2;
        const dist = Math.abs(cardCenterX - rowCenterX);
  
        if (dist < bestDist) {
          bestDist = dist;
          bestCard = card;
        }
      }
      return bestCard;
    }
  
    // Auto-select nearest after scrolling stops (debounced)
    let scrollTimer = null;
    row.addEventListener("scroll", () => {
      if (scrollTimer) window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => {
        const nearest = getNearestToCenter();
        if (!nearest) return;
        // only reselect if different
        if (!nearest.classList.contains("is-selected")) {
          setSelected(nearest, { center: true });
        } else {
          // still ensure it’s perfectly centered (optional)
          nearest.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        }
      }, 120); // adjust sensitivity (100-200ms feels good)
    });
  
    // Default selection: first card
    setSelected(cards[0], { center: true });
  });