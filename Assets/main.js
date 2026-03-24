/* ============================================================
   DR EA KAMALIE DENTAL SURGERY — Main JavaScript
   ============================================================ */

(function () {
  'use strict';

  /* ── Nav: add .scrolled class when page is scrolled ──────── */
  const nav = document.getElementById('nav');
  function onScroll() {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load

  /* ── Hamburger menu ──────────────────────────────────────── */
  const hamburger  = document.getElementById('hamburger');
  const navLinks   = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('active');
      navLinks.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }

  /* ── Services dropdown (mobile tap / desktop hover) ─────── */
  const ddWrap = document.querySelector('.nav__dd-wrap');
  if (ddWrap) {
    // Desktop: hover is handled purely via CSS
    // Mobile: tap on the trigger toggles the dropdown
    const trigger = ddWrap.querySelector('.nav__link--has-dd');
    trigger.addEventListener('click', (e) => {
      // Only intercept on mobile (when hamburger is visible)
      if (window.getComputedStyle(hamburger).display !== 'none') {
        e.preventDefault();
        ddWrap.classList.toggle('open');
      }
    });
  }

  /* ── Close mobile menu when a link inside is clicked ─────── */
  if (navLinks) {
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
          navLinks.classList.remove('open');
          hamburger.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });
  }

  /* ── Scroll-reveal: IntersectionObserver ─────────────────── */
  const revealEls = document.querySelectorAll('.fade-up');
  if (revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => observer.observe(el));
  }

})();
