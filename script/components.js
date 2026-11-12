/* Shared header, footer and account modal — mirrors mokio.online */
(function () {
  const me = document.currentScript;
  const ROOT = me && me.src ? me.src.replace(/script\/components\.js[^/]*$/, '') : '/';
  const MAIN = 'https://mokio.online/';
  const DONATE = 'https://www.paypal.com/donate/?hosted_button_id=9AZPTK7UAUQBL';

  const AUTH_MODAL = `
<div class="modal" id="authModal" hidden>
    <div class="modal-card auth-card">
      <button type="button" class="modal-close" id="authClose" aria-label="Close">×</button>

      <div id="authGuest">
        <div class="auth-brand">
          <img src="${ROOT}images/logo.svg" alt="" class="auth-logo">
          <h2 id="authTitle">Welcome back</h2>
          <p class="auth-sub" id="authSub">Sign in to your Mokio account.</p>
        </div>

        <div class="auth-tabs">
          <button type="button" class="auth-tab active" data-mode="signin">Sign in</button>
          <button type="button" class="auth-tab" data-mode="signup">Create account</button>
        </div>
      <h1>Accounts Closed</h1>  
      <h4>Waitlist has closed due to legal reasons</h4>
      <p>ETA 01/01/27</p>
      </div>

      <div id="authSignedIn" hidden>
        <div class="auth-brand">
          <div class="auth-avatar" id="authAvatar">M</div>
          <h2 id="authUserName">Account</h2>
          <p class="auth-sub" id="authUserEmail"></p>
          <span class="role-badge" id="authUserRole">member</span>
        </div>
        <div class="account-panel">
          <label class="account-field">
            <span class="field-label">Username</span>
            <div class="username-row">
              <input type="text" id="usernameEdit" minlength="3" maxlength="20" pattern="[A-Za-z0-9._-]{3,20}" placeholder="username">
              <button type="button" class="btn btn-small btn-primary" id="saveUsernameBtn">Save</button>
            </div>
          </label>
          <p class="form-note" id="usernameNote"></p>
          <button type="button" class="btn btn-secondary auth-signout" id="authSignOutLink">Sign out</button>
        </div>
      </div>
    </div>
  </div>
`;

  const HEADER = `
  <header class="nav">
    <div class="container nav-inner">
      <a href="${MAIN}" class="logo">
        <img src="${ROOT}images/logo.svg" alt="Mokio" class="logo-img">
        <span class="logo-text">Mokio</span>
      </a>
      <nav class="nav-links">
        <a href="${MAIN}#features">Features</a>
        <a href="${MAIN}#vision">Vision</a>
        <a href="${MAIN}#waitlist" class="btn btn-small">Join Waitlist</a>
      </nav>
      <div class="nav-right">
        <a href="${DONATE}" class="donate-btn" target="_blank" rel="noopener">Donate</a>
        <button type="button" class="account-btn" id="accountBtn">
          <span class="account-btn-icon">M</span>
          <span id="accountBtnText">Sign In</span>
        </button>
        <button class="mobile-menu-btn" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>`;

  const FOOTER = `
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <a href="${MAIN}" class="logo">
          <img src="${ROOT}images/logo.svg" alt="Mokio" class="logo-img">
          <span class="logo-text">Mokio</span>
        </a>
        <p>Play. Connect. Create.</p>
      </div>
      <div class="footer-links">
        <a href="${MAIN}">Home</a>
        <a href="${MAIN}#features">Features</a>
        <a href="${MAIN}pages/music.html">Music</a>
        <a href="${MAIN}pages/messaging.html">Messaging</a>
        <a href="${MAIN}#waitlist">Waitlist</a>
        <a href="${DONATE}" target="_blank" rel="noopener">Donate</a>
      </div>
      <div class="footer-bottom">
        <p>© 2026 Mokio. All rights reserved.</p>
      </div>
    </div>
  </footer>`;

  const COMPONENTS = {
    'header': () => HEADER,
    'auth-modal': () => AUTH_MODAL,
    'footer': () => FOOTER
  };

  document.querySelectorAll('[data-component]').forEach((el) => {
    const make = COMPONENTS[el.dataset.component];
    if (make) el.outerHTML = make(el).trim();
  });
})();
