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
  btn.addEventListener("click", () => {
    const target = btn.dataset.go;
    if (target === "ideas") {
      // If there is a franchise in hash, keep it; otherwise clear to #ideas
      if (!location.hash.startsWith("#ideas")) location.hash = "#ideas";
    } else {
      location.hash = "#home";
    }
    go(target);
  });
});

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, s => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[s]));
}
function escapeAttr(str) {
  return String(str).replace(/"/g, "%22");
}

function renderItem(item) {
  const tags = (item.tags || []).map(t => `<span class="pill">${escapeHtml(t)}</span>`).join("");
  const links = (item.links || [])
    .filter(l => l.url && l.url.trim().length > 0)
    .map(l => `<a href="${escapeAttr(l.url)}" target="_blank" rel="noopener">${escapeHtml(l.label)}</a>`)
    .join("");

  return `
    <article class="item">
      <h3>${escapeHtml(item.title)}</h3>
      ${item.desc ? `<div class="muted">${escapeHtml(item.desc)}</div>` : ""}
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

const topListEl = document.getElementById("top-list");
const ideasListEl = document.getElementById("ideas-list");

const searchEl = document.getElementById("search");
const priceEl = document.getElementById("price");

let activeFranchise = ""; // slug like "fallout"

function getHashRoute() {
  // Supported:
  // #home
  // #top
  // #ideas
  // #ideas/fallout
  const h = (location.hash || "#home").replace("#", "");
  const parts = h.split("/").filter(Boolean);
  return { view: parts[0] || "home", franchise: parts[1] || "" };
}

function setActiveChip(slug) {
  const chips = document.querySelectorAll(".chip");
  chips.forEach(c => c.classList.toggle("active", c.dataset.slug === slug));
}

function renderChips() {
  const wrap = document.getElementById("franchise-chips");
  const fr = window.FRANCHISES || [];
  const allChip = `<button class="chip ${activeFranchise==="" ? "active":""}" data-slug="">Todo</button>`;
  const chips = fr.map(f => `<button class="chip" data-slug="${escapeAttr(f.slug)}">${escapeHtml(f.name)}</button>`).join("");
  wrap.innerHTML = allChip + chips;

  wrap.querySelectorAll(".chip").forEach(btn => {
    btn.addEventListener("click", () => {
      const slug = btn.dataset.slug || "";
      activeFranchise = slug;
      setActiveChip(slug);

      // Update hash for shareable link
      if (slug) location.hash = `#ideas/${slug}`;
      else location.hash = "#ideas";

      applyFilters();
    });
  });

  setActiveChip(activeFranchise);
}

function applyFilters() {
  const q = (searchEl?.value || "").trim().toLowerCase();
  const p = priceEl?.value || "";

  const filtered = (window.IDEA_ITEMS || []).filter(item => {
    const matchesFr = !activeFranchise || item.franchise_slug === activeFranchise;

    const haystack = [
      item.title, item.desc, ...(item.tags || []),
      item.franchise_name || "", item.franchise_slug || ""
    ].join(" ").toLowerCase();

    const matchesQ = !q || haystack.includes(q);
    const matchesP = !p || item.price === p;

    return matchesFr && matchesQ && matchesP;
  });

  renderList(ideasListEl, filtered);
}

function boot() {
  // initial render
  renderList(topListEl, window.TOP_ITEMS || []);

  // chips
  renderChips();

  // filters listeners
  searchEl?.addEventListener("input", applyFilters);
  priceEl?.addEventListener("change", applyFilters);

  // route
  const route = getHashRoute();
  if (route.view === "top") go("top");
  else if (route.view === "ideas") go("ideas");
  else go("home");

  activeFranchise = route.franchise || "";
  setActiveChip(activeFranchise);
  applyFilters();
}

window.addEventListener("hashchange", () => {
  const route = getHashRoute();
  if (route.view === "top") go("top");
  else if (route.view === "ideas") go("ideas");
  else go("home");

  activeFranchise = route.franchise || "";
  setActiveChip(activeFranchise);
  applyFilters();
});

boot();
