const views = {
  home: document.getElementById("view-home"),
  top: document.getElementById("view-top"),
  ideas: document.getElementById("view-ideas"),
};

function go(viewKey) {
  Object.values(views).forEach(v => v.classList.add("hidden"));
  views[viewKey].classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-go]").forEach(btn => {
  btn.addEventListener("click", () => go(btn.dataset.go));
});

function renderItem(item) {
  const tags = (item.tags || []).map(t => `<span class="pill">${escapeHtml(t)}</span>`).join("");
  const links = (item.links || [])
    .filter(l => l.url && l.url.trim().length > 0)
    .map(l => `<a href="${escapeAttr(l.url)}" target="_blank" rel="noopener">${escapeHtml(l.label)}</a>`)
    .join("");

  return `
    <article class="item">
      <h3>${escapeHtml(item.title)}</h3>
      <div class="muted">${escapeHtml(item.desc || "")}</div>
      <div class="meta">
        ${item.price ? `<span class="pill">${escapeHtml(item.price)}</span>` : ""}
        ${tags}
      </div>
      ${links ? `<div class="links">${links}</div>` : `<div class="links muted">Links: pendiente de añadir</div>`}
    </article>
  `;
}

function renderList(el, items) {
  el.innerHTML = items.map(renderItem).join("");
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, s => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[s]));
}
function escapeAttr(str) {
  return String(str).replace(/"/g, "%22");
}

// Render inicial
renderList(document.getElementById("top-list"), window.TOP_ITEMS || []);
renderList(document.getElementById("ideas-list"), window.IDEA_ITEMS || []);

// Filtros IDEAS
const search = document.getElementById("search");
const price = document.getElementById("price");

function applyFilters() {
  const q = (search.value || "").trim().toLowerCase();
  const p = price.value;

  const filtered = (window.IDEA_ITEMS || []).filter(item => {
    const haystack = [
      item.title, item.desc, ...(item.tags || [])
    ].join(" ").toLowerCase();

    const matchQ = !q || haystack.includes(q);
    const matchP = !p || item.price === p;
    return matchQ && matchP;
  });

  renderList(document.getElementById("ideas-list"), filtered);
}

search.addEventListener("input", applyFilters);
price.addEventListener("change", applyFilters);
