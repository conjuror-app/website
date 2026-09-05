const modesDemo = document.querySelector('[data-modes-demo]');

if (modesDemo) {
  const buttons = [...modesDemo.querySelectorAll('[data-mode-button]')];
  const images = [...modesDemo.querySelectorAll('[data-mode-image]')];

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      buttons.forEach((item, itemIndex) => {
        const isActive = itemIndex === index;
        item.setAttribute('aria-pressed', String(isActive));
        item.closest('li').classList.toggle('is-active', isActive);
      });
      images.forEach((image, imageIndex) => {
        const isActive = imageIndex === index;
        image.classList.toggle('is-active', isActive);
        image.setAttribute('aria-hidden', String(!isActive));
      });
    });
  });
}
