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
})();
