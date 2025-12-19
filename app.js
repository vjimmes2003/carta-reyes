(() => {
  const $ = (sel) => document.querySelector(sel);

  const topGrid = $("#topGrid");
  const ideasGrid = $("#ideasGrid");
  const topEmpty = $("#topEmpty");
  const ideasEmpty = $("#ideasEmpty");

  const TOP = Array.isArray(window.TOP_ITEMS) ? window.TOP_ITEMS : [];
  const IDEAS = Array.isArray(window.IDEA_ITEMS) ? window.IDEA_ITEMS : [];

  const esc = (s) =>
    String(s ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  function renderItem(item) {
    const tags = (item.tags || [])
      .map(t => `<span class="pill">${esc(t)}</span>`)
      .join("");

    const links = (item.links || [])
      .filter(l => l?.url)
      .map(l =>
        `<a class="linkbtn" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`
      )
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
            ${links || `<span class="muted">Enlaces pendientes</span>`}
          </div>
        </div>
      </article>
    `;
  }

  function renderList(list, target, empty) {
    target.innerHTML = list.map(renderItem).join("");
    empty.classList.toggle("hidden", list.length > 0);
  }

  renderList(TOP, topGrid, topEmpty);
  renderList(IDEAS, ideasGrid, ideasEmpty);
})();
