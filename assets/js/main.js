const header = document.querySelector('[data-header]');
const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

window.addEventListener('scroll', () => header?.classList.toggle('is-scrolled', window.scrollY > 24), { passive: true });

const docsSidebar = document.querySelector('[data-docs-sidebar]');

if (docsSidebar) {
  const links = [...docsSidebar.querySelectorAll('a[href^="#"]')];
  const sections = links
    .map((link) => ({ link, section: document.querySelector(link.hash) }))
    .filter(({ section }) => section);
  let currentSection;
  let ticking = false;

  const updateCurrentSection = () => {
    const marker = Math.min(window.innerHeight * 0.25, 160);
    const visibleSections = sections.filter(({ section }) => section.getBoundingClientRect().top <= marker);
    const nextSection = visibleSections.at(-1) ?? sections[0];

    if (nextSection && nextSection !== currentSection) {
      sections.forEach(({ link }) => {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      });
      nextSection.link.classList.add('active');
      nextSection.link.setAttribute('aria-current', 'location');
      currentSection = nextSection;
    }

    ticking = false;
  };

  const requestCurrentSectionUpdate = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateCurrentSection);
      ticking = true;
    }
  };

  updateCurrentSection();
  window.addEventListener('scroll', requestCurrentSectionUpdate, { passive: true });
  window.addEventListener('resize', requestCurrentSectionUpdate);
  window.addEventListener('hashchange', requestCurrentSectionUpdate);
}
