/* main.js — shared across all pages */

document.addEventListener('DOMContentLoaded', () => {

    // ── Mobile nav toggle ─────────────────────────────────
    const toggle  = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            const open = navLinks.classList.toggle('open');
            toggle.setAttribute('aria-expanded', String(open));
        });

        // Close when clicking a nav link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // ── Smooth scrolling for anchor links ─────────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ── Schedule dropdowns (mentorship page) ──────────────
    document.querySelectorAll('.dropdown-toggle').forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.classList.toggle('open');
        });
    });

});

// ── Carousel ─────────────────────────────────────────────
// Used by mentorship page. Called after track is populated.
function initCarousel({ track, items, dotsEl, prevBtn, nextBtn, cardSelector, interval = 3000 }) {
    const totalSlides = items.length;
    let currentIndex = 0;
    let autoplayTimer = null;

    // Double cards for seamless loop
    const existingCards = track.querySelectorAll(cardSelector);
    if (existingCards.length === totalSlides) {
        existingCards.forEach(card => track.appendChild(card.cloneNode(true)));
    }

    function getCardWidth() {
        const card = track.querySelector(cardSelector);
        if (!card) return 0;
        const gap = parseFloat(getComputedStyle(track).gap) || 20;
        return card.offsetWidth + gap;
    }

    function goTo(index, animate = true) {
        currentIndex = index;
        track.style.transition = animate ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : 'none';
        track.style.transform = `translateX(-${getCardWidth() * currentIndex}px)`;
        updateDots();
    }

    function next() {
        const nextIndex = currentIndex + 1;
        goTo(nextIndex);
        if (nextIndex >= totalSlides) setTimeout(() => goTo(0, false), 650);
    }

    function prev() {
        goTo(currentIndex <= 0 ? totalSlides - 1 : currentIndex - 1);
    }

    if (dotsEl) {
        dotsEl.innerHTML = items.map((_, i) =>
            `<button class="carousel-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Go to slide ${i + 1}"></button>`
        ).join('');
        dotsEl.querySelectorAll('.carousel-dot').forEach(dot => {
            dot.addEventListener('click', () => { goTo(parseInt(dot.dataset.index, 10)); restartAutoplay(); });
        });
    }

    function updateDots() {
        if (!dotsEl) return;
        const norm = currentIndex % totalSlides;
        dotsEl.querySelectorAll('.carousel-dot').forEach((dot, i) =>
            dot.classList.toggle('active', i === norm)
        );
    }

    if (prevBtn) prevBtn.addEventListener('click', () => { prev(); restartAutoplay(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { next(); restartAutoplay(); });

    const outer = track.closest('.carousel-outer');
    if (outer) {
        outer.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
        outer.addEventListener('mouseleave', startAutoplay);
    }

    let touchStartX = 0;
    track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) { diff > 0 ? next() : prev(); restartAutoplay(); }
    });

    window.addEventListener('resize', () => goTo(currentIndex, false));

    function startAutoplay()   { autoplayTimer = setInterval(next, interval); }
    function restartAutoplay() { clearInterval(autoplayTimer); startAutoplay(); }

    startAutoplay();
}
