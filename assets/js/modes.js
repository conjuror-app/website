const modesDemo = document.querySelector('[data-modes-demo]');

if (modesDemo) {
  const buttons = [...modesDemo.querySelectorAll('[data-mode-button]')];
  const images = [...modesDemo.querySelectorAll('[data-mode-image]')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let activeIndex = 0;
  let timer;

  const selectMode = (index) => {
    activeIndex = index;
    buttons.forEach((button, buttonIndex) => {
      const isActive = buttonIndex === activeIndex;
      button.setAttribute('aria-pressed', String(isActive));
      button.closest('li').classList.toggle('is-active', isActive);
    });
    images.forEach((image, imageIndex) => {
      const isActive = imageIndex === activeIndex;
      image.classList.toggle('is-active', isActive);
      image.setAttribute('aria-hidden', String(!isActive));
    });
  };

  const stop = () => {
    window.clearInterval(timer);
  };

  const start = () => {
    if (reducedMotion) return;
    window.clearInterval(timer);
    timer = window.setInterval(() => selectMode((activeIndex + 1) % buttons.length), 5000);
  };

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      selectMode(index);
      start();
    });
  });

  modesDemo.addEventListener('pointerenter', stop);
  modesDemo.addEventListener('pointerleave', start);
  modesDemo.addEventListener('focusin', stop);
  modesDemo.addEventListener('focusout', (event) => {
    if (!modesDemo.contains(event.relatedTarget)) start();
  });

  start();
}
