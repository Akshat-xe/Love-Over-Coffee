/* Love Over Coffee — script.js */

/* ─── Navbar scroll ─────────────────────────────────────────────────── */
(function() {
  const nav = document.getElementById('navbar');
  function onScroll() {
    if (window.scrollY > 60) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ─── Mobile drawer ─────────────────────────────────────────────────── */
(function() {
  const hamburger = document.getElementById('nav-hamburger');
  const backdrop  = document.getElementById('drawer-backdrop');
  const drawer    = document.getElementById('mobile-drawer');
  const closeBtn  = document.getElementById('drawer-close');

  function open()  { backdrop.classList.add('open'); drawer.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function close() { backdrop.classList.remove('open'); drawer.classList.remove('open'); document.body.style.overflow = ''; }

  if (hamburger) hamburger.addEventListener('click', open);
  if (backdrop)  backdrop.addEventListener('click', close);
  if (closeBtn)  closeBtn.addEventListener('click', close);
  document.querySelectorAll('#mobile-drawer .drawer-nav a').forEach(a => a.addEventListener('click', close));
  document.querySelectorAll('#mobile-drawer .drawer-cta').forEach(a => a.addEventListener('click', close));
})();

/* ─── Highlight filter pills ─────────────────────────────────────────── */
(function() {
  const pills = document.querySelectorAll('.filter-pill');
  const cards = document.querySelectorAll('.highlight-card');

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      const filter = pill.dataset.filter;
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      let shown = 0;
      cards.forEach(card => {
        const match = filter === 'All' || card.dataset.category === filter;
        card.style.display = match ? '' : 'none';
        if (match) shown++;
      });

      cards.forEach((card, i) => {
        if (filter === 'All' && i === 0) card.classList.add('featured');
        else card.classList.remove('featured');
      });
    });
  });
})();

/* ─── Like buttons ───────────────────────────────────────────────────── */
document.querySelectorAll('.like-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    btn.classList.toggle('liked');
    btn.textContent = btn.classList.contains('liked') ? '❤️' : '🤍';
  });
});

/* ─── Menu tabs ──────────────────────────────────────────────────────── */
(function() {
  const tabs     = document.querySelectorAll('.menu-tab');
  const cats     = document.querySelectorAll('.menu-category');
  const searchEl = document.getElementById('menu-search');
  const tabsWrap = document.querySelector('.menu-tabs-wrap');
  const tabsContainer = document.querySelector('.menu-tabs');
  const scrollL  = document.getElementById('menu-tabs-scroll-l');
  const scrollR  = document.getElementById('menu-tabs-scroll-r');
  const searchAllSection = document.getElementById('menu-search-all');

  function showCategory(id) {
    cats.forEach(c => { c.classList.remove('active'); });
    tabs.forEach(t => t.classList.remove('active'));
    const cat = document.getElementById('cat-' + id);
    if (cat) cat.classList.add('active');
    const tab = document.querySelector('.menu-tab[data-cat="' + id + '"]');
    if (tab) tab.classList.add('active');
    if (searchAllSection) searchAllSection.classList.remove('active');
    if (tabsWrap) tabsWrap.style.display = '';
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      if (searchEl) searchEl.value = '';
      showCategory(tab.dataset.cat);
    });
  });

  if (scrollL) scrollL.addEventListener('click', () => { tabsContainer.scrollBy({ left: -160, behavior: 'smooth' }); });
  if (scrollR) scrollR.addEventListener('click', () => { tabsContainer.scrollBy({ left: 160, behavior: 'smooth' }); });

  if (searchEl) {
    searchEl.addEventListener('input', () => {
      const q = searchEl.value.trim().toLowerCase();
      if (!q) {
        if (searchAllSection) searchAllSection.classList.remove('active');
        if (tabsWrap) tabsWrap.style.display = '';
        const firstTab = document.querySelector('.menu-tab');
        if (firstTab) showCategory(firstTab.dataset.cat);
        return;
      }
      cats.forEach(c => c.classList.remove('active'));
      if (tabsWrap) tabsWrap.style.display = 'none';
      if (searchAllSection) {
        searchAllSection.classList.add('active');
        const allItems = searchAllSection.querySelectorAll('.menu-item');
        let anyVisible = false;
        allItems.forEach(item => {
          const name = item.querySelector('.mi-name')?.textContent.toLowerCase() || '';
          const desc = item.querySelector('.mi-desc')?.textContent.toLowerCase() || '';
          const match = name.includes(q) || desc.includes(q);
          item.style.display = match ? '' : 'none';
          if (match) anyVisible = true;
        });
        const empty = searchAllSection.querySelector('.menu-empty');
        if (empty) empty.style.display = anyVisible ? 'none' : '';
      }
    });
  }
})();

/* ─── Contact: highlight today ──────────────────────────────────────── */
(function() {
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const today = days[new Date().getDay()];
  document.querySelectorAll('.hours-row').forEach(row => {
    if (row.dataset.day === today) row.classList.add('today');
  });
  const hour = new Date().getHours();
  const isOpen = hour >= 9 && hour < 24;
  const statusEl = document.getElementById('open-status');
  if (statusEl) {
    statusEl.textContent = isOpen ? 'Open Now' : 'Closed';
    statusEl.className = isOpen ? 'status-open' : 'status-closed';
  }
})();

/* ─── Scroll reveal (IntersectionObserver) ──────────────────────────── */
(function() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
})();

/* ─── Smooth scroll for nav links ───────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const y = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  });
});
