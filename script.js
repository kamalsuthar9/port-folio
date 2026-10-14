(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  $('#year').textContent = new Date().getFullYear();

  const menuButton = $('.menu-toggle');
  const navLinks = $('#nav-links');
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    navLinks.classList.toggle('open', open);
  });
  $$('.nav-links a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  }));

  const themeButton = $('#theme-toggle');
  const setTheme = light => {
    document.body.classList.toggle('light', light);
    themeButton.textContent = light ? '☾' : '☼';
    themeButton.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
    try { localStorage.setItem('kamal-portfolio-theme', light ? 'light' : 'dark'); } catch (_) {}
  };
  try { setTheme(localStorage.getItem('kamal-portfolio-theme') === 'light'); } catch (_) { setTheme(false); }
  themeButton.addEventListener('click', () => setTheme(!document.body.classList.contains('light')));

  const filters = $$('.filter');
  const skillCards = $$('.skill-card');
  filters.forEach(button => button.addEventListener('click', () => {
    const category = button.dataset.filter;
    filters.forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
    skillCards.forEach(card => { card.hidden = category !== 'all' && card.dataset.category !== category; });
  }));

  const revealItems = $$('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else revealItems.forEach(item => item.classList.add('visible'));

  const sections = $$('main section[id]');
  if ('IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) $$('.nav-links a').forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    }), { rootMargin: '-25% 0px -65% 0px' });
    sections.forEach(section => navObserver.observe(section));
  }

  $('#contact-form').addEventListener('submit', event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const name = $('#name').value.trim();
    const email = $('#email').value.trim();
    const message = $('#message').value.trim();
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Hi Kamal,\n\n${message}\n\nFrom: ${name}\nReply email: ${email}`);
    $('#form-status').textContent = 'Opening your email app with the message prepared…';
    window.location.href = `mailto:kamalsuthar1008@gmail.com?subject=${subject}&body=${body}`;
  });

  $('#resume-download').addEventListener('click', event => {
    // Verify the PDF before navigating so visitors get a useful message if it has not been added yet.
    event.preventDefault();
    fetch('resume.pdf', { method: 'HEAD' }).then(response => {
      if (response.ok) window.location.href = 'resume.pdf';
      else alert('Add your final resume PDF to this website folder and name it resume.pdf, then this button will download it.');
    }).catch(() => {
      alert('Add your final resume PDF to this website folder and name it resume.pdf, then this button will download it.');
    });
  });
})();
