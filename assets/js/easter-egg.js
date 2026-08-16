const copyrightTrigger = document.querySelector('[data-copyright-trigger]');
const copyrightSurprise = document.querySelector('[data-copyright-surprise]');

copyrightTrigger?.addEventListener('click', () => {
  copyrightSurprise.textContent = '🪄🐇🎩';
  copyrightSurprise.classList.add('is-visible');
});
