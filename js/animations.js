(function () {
  const qs = (selector, scope = document) => scope.querySelector(selector);
  const qsa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  function initReveal(scope = document) {
    const targets = qsa('[data-reveal]', scope);
    if (!targets.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -50px 0px' });
    targets.forEach((item, index) => {
      item.style.setProperty('--stagger', `${index * 55}ms`);
      observer.observe(item);
    });
  }

  function initTilt(scope = document) {
    qsa('[data-tilt]', scope).forEach((card) => {
      if (card.dataset.tiltBound === '1') return;
      card.dataset.tiltBound = '1';
      const reset = () => {
        card.style.transform = '';
        const glare = card.querySelector('.tilt-glare');
        if (glare) glare.style.opacity = '0';
      };
      let glare = card.querySelector('.tilt-glare');
      if (!glare) {
        glare = document.createElement('span');
        glare.className = 'tilt-glare';
        card.appendChild(glare);
      }
      card.addEventListener('mousemove', (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 16;
        const rotateX = (0.5 - (y / rect.height)) * 16;
        card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        glare.style.opacity = '1';
        glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,.34), transparent 36%)`;
      });
      card.addEventListener('mouseleave', reset);
      card.addEventListener('blur', reset, true);
    });
  }

  function initRipple() {
    document.addEventListener('click', (event) => {
      const button = event.target.closest('.btn, .btn-secondary, .btn-soft, .btn-ghost, .page-link, .tab-btn, .icon-btn');
      if (!button) return;
      const rect = button.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.left = `${event.clientX - rect.left}px`;
      ripple.style.top = `${event.clientY - rect.top}px`;
      button.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  }

  function initCounters(scope = document) {
    const counters = qsa('[data-count]', scope);
    if (!counters.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = entry.target;
        const value = Number(target.dataset.count || 0);
        const duration = 1100;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          target.textContent = Math.floor(value * (1 - Math.pow(1 - progress, 3))).toLocaleString('en-IN');
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.unobserve(target);
      });
    }, { threshold: 0.4 });
    counters.forEach((counter) => observer.observe(counter));
  }

  function initTimelineAnimation(scope = document) {
    qsa('.timeline-item', scope).forEach((item, index) => {
      item.style.transitionDelay = `${index * 90}ms`;
      requestAnimationFrame(() => item.classList.add('drawn'));
    });
  }

  function initSuccessCheck() {
    qsa('.success-check svg circle, .success-check svg path').forEach((node, index) => {
      node.style.strokeDasharray = node.getTotalLength ? node.getTotalLength() : 300;
      node.style.strokeDashoffset = node.style.strokeDasharray;
      setTimeout(() => node.classList.add('animate-stroke'), 120 + (index * 150));
    });
  }

  function initParallax() {
    const banner = qs('.banner-parallax');
    if (!banner) return;
    const onScroll = () => {
      const rect = banner.getBoundingClientRect();
      const offset = Math.max(-40, Math.min(40, rect.top * -0.08));
      banner.style.backgroundPosition = `center calc(50% + ${offset}px)`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  function initAll(scope = document) {
    initReveal(scope);
    initTilt(scope);
    initCounters(scope);
    initTimelineAnimation(scope);
    initSuccessCheck();
    initParallax();
  }

  document.addEventListener('DOMContentLoaded', () => {
    initRipple();
    initAll(document);
  });

  document.addEventListener('content:rendered', () => initAll(document));
})();
