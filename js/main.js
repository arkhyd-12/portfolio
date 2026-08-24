/* ============================================================
   EXECUTIVE DIGITAL PORTFOLIO — INTERACTIONS
   IISM (International Islamic School Malaysia)
   Lightweight, dependency-free. Uses only vanilla JS.
   ============================================================ */

(function () {
    'use strict';

    /* ---------- 1. Mobile Navigation Toggle ---------- */
    var navToggle = document.getElementById('navToggle');
    var navLinks = document.getElementById('navLinks');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            var isOpen = navLinks.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // Collapse the menu whenever a link is selected.
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navLinks.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    /* ---------- 2. Sticky Navbar Elevation on Scroll ---------- */
    var navbar = document.getElementById('navbar');
    if (navbar) {
        var onNavScroll = function () {
            navbar.classList.toggle('scrolled', window.scrollY > 40);
        };
        window.addEventListener('scroll', onNavScroll, { passive: true });
        onNavScroll(); // run once on load
    }

    /* ---------- 3. Active Link Highlighting ---------- */
    var sections = document.querySelectorAll('main [id], header[id]');
    var navAnchors = document.querySelectorAll('.nav-links a');

    function setActiveLink() {
        var scrollPos = window.scrollY + 90; // offset for sticky navbar
        var currentId = '';

        sections.forEach(function (section) {
            if (section.offsetTop <= scrollPos &&
                section.offsetTop + section.offsetHeight > scrollPos) {
                currentId = section.id;
            }
        });

        navAnchors.forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('href') === '#' + currentId);
        });
    }

    if (sections.length && navAnchors.length) {
        window.addEventListener('scroll', setActiveLink, { passive: true });
        setActiveLink(); // set correctly on load (e.g. refreshed mid-page)
    }

    /* ---------- 4. Reveal-On-Scroll Animations ---------- */
    var revealEls = document.querySelectorAll('.reveal');

    function showNow(el) {
        el.classList.add('visible');
    }

    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    showNow(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

        revealEls.forEach(function (el) {
            observer.observe(el);
        });
    } else {
        // Fallback: make everything visible immediately for older browsers.
        revealEls.forEach(showNow);
    }
})();