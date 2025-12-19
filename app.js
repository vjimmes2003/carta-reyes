(() => {
  const $ = (sel) => document.querySelector(sel);

  const topGrid = $("#topGrid");
  const ideasGrid = $("#ideasGrid");
  const topEmpty = $("#topEmpty");
  const ideasEmpty = $("#ideasEmpty");

  const search = $("#search");
  const tabTop = $("#tabTop");
  const tabIdeas = $("#tabIdeas");

  const TOP = Array.isArray(window.TOP_ITEMS) ? window.TOP_ITEMS : [];
  const IDEAS = Array.isArray(window.IDEA_ITEMS) ? window.IDEA_ITEMS : [];

  // Estado
  const state = {
    active: "top",       // "top" | "ideas"
    query: ""
  };

  // --------------------
  // Utils
  // --------------------
  const esc = (s) =>
    String(s ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const normalize = (s) =>
    String(s ?? "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const matchesQuery = (item, q) => {
    if (!q) return true;
    const hay = normalize(
      [
        item.title,
        item.desc,
        item.price,
        (item.tags || []).join(" "),
        item.franchise_name,
        item.franchise_slug
      ].join(" ")
    );
    return hay.includes(q);
  };

  // --------------------
  // Render
  // --------------------
  function renderItem(item) {
    const tags = (item.tags || [])
      .map(t => `<span class="pill">${esc(t)}</span>`)
      .join("");

    const links = (item.links || [])
      .filter(l => l?.url && String(l.url).trim().length > 0)
      .map(l => `<a class="linkbtn" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`)
      .join("");

    const img = item.img
      ? `<img class="thumb" src="${esc(item.img)}" alt="${esc(item.title)}" loading="lazy">`
      : "";

    return `
      <article class="card">
        ${img}
        <div class="card__body">
          <h3 class="card__title">${esc(item.title)}</h3>
          ${item.desc ? `<p class="card__desc">${esc(item.desc)}</p>` : ""}
          <div class="meta">
            ${item.price ? `<span class="pill pill--price">${esc(item.price)}</span>` : ""}
            ${tags}
          </div>
          <div class="links">
            ${links || `<span class="muted">Links: pendiente de añadir</span>`}
          </div>
        </div>
      </article>
    `;
  }

  function renderList(list, targetEl, emptyEl) {
    const q = normalize(state.query);
    const filtered = list.filter(item => matchesQuery(item, q));

    targetEl.innerHTML = filtered.map(renderItem).join("");

    if (filtered.length === 0) emptyEl.classList.remove("hidden");
    else emptyEl.classList.add("hidden");
  }

  function render() {
    renderList(TOP, topGrid, topEmpty);
    renderList(IDEAS, ideasGrid, ideasEmpty);
    syncTabs();
  }

  // --------------------
  // UI behavior
  // --------------------
  function setActive(tab) {
    state.active = tab;

    // Scroll suave a sección
    const id = tab === "top" ? "#top" : "#ideas";
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });

    // Actualiza hash sin saltos raros
    if (location.hash !== id) history.replaceState(null, "", id);

    syncTabs();
  }

  function syncTabs() {
    const isTop = state.active === "top";
    tabTop.classList.toggle("tab--active", isTop);
    tabIdeas.classList.toggle("tab--active", !isTop);
  }

  // --------------------
  // Events
  // --------------------
  tabTop.addEventListener("click", () => setActive("top"));
  tabIdeas.addEventListener("click", () => setActive("ideas"));

  search.addEventListener("input", (e) => {
    state.query = e.target.value.trim();
    render();
  });

  // Si entran con hash directo
  function initFromHash() {
    if (location.hash === "#ideas") state.active = "ideas";
    else state.active = "top";
    syncTabs();
  }

  window.addEventListener("hashchange", () => {
    initFromHash();
  });

  // Init
  initFromHash();
  render();
})();
