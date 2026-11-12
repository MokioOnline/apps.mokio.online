(function () {
  // Header: mobile menu (same behavior as mokio.online)
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a,button').forEach((el) =>
      el.addEventListener('click', () => navLinks.classList.remove('open')));
  }

  // Account modal (accounts are closed, matching mokio.online)
  const authModal = document.getElementById('authModal');
  document.getElementById('accountBtn')?.addEventListener('click', () => { if (authModal) authModal.hidden = false; });
  document.getElementById('authClose')?.addEventListener('click', () => { if (authModal) authModal.hidden = true; });
  authModal?.addEventListener('click', (e) => { if (e.target === authModal) authModal.hidden = true; });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && authModal && !authModal.hidden) authModal.hidden = true;
  });

  // Sidebar (mobile drawer)
  const sidebar = document.getElementById('sidebar');
  document.getElementById('sidebarOpen')?.addEventListener('click', () => sidebar?.classList.add('open'));
  document.getElementById('sidebarClose')?.addEventListener('click', () => sidebar?.classList.remove('open'));
  document.addEventListener('click', (e) => {
    const openBtn = document.getElementById('sidebarOpen');
    if (window.innerWidth <= 860 && sidebar?.classList.contains('open') &&
        !sidebar.contains(e.target) && !(openBtn && openBtn.contains(e.target))) {
      sidebar.classList.remove('open');
    }
  });

  // App search (All Apps page)
  const searchInput = document.getElementById('appSearch');
  const searchClear = document.getElementById('searchClear');
  const appsGrid = document.getElementById('appsGrid');
  const noResults = document.getElementById('noResults');

  if (searchInput && appsGrid) {
    const cards = Array.from(appsGrid.querySelectorAll('.app-card'));

    function filterApps() {
      const q = searchInput.value.trim().toLowerCase();
      if (searchClear) searchClear.hidden = !q;

      let visible = 0;
      cards.forEach((card) => {
        const haystack = [
          card.dataset.name || '',
          card.dataset.tag || '',
          card.dataset.desc || '',
          card.textContent || ''
        ].join(' ').toLowerCase();

        const match = !q || haystack.includes(q);
        card.hidden = !match;
        if (match) visible++;
      });

      if (noResults) noResults.hidden = visible > 0;
    }

    searchInput.addEventListener('input', filterApps);
    searchClear?.addEventListener('click', () => {
      searchInput.value = '';
      searchInput.focus();
      filterApps();
    });
  }
})();
