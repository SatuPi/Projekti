
document.addEventListener('DOMContentLoaded', () => {
  // FAQ Accordion
  const faqContainer = document.querySelector('.faq-content');
  faqContainer?.addEventListener('click', (e) => {
    const groupHeader = e.target.closest('.faq-group-header');
    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector('.faq-group-body');
    const icon = groupHeader.querySelector('i');

    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');
    groupBody.classList.toggle('open');

    const otherGroups = faqContainer.querySelectorAll('.faq-group');
    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector('.faq-group-body');
        const otherIcon = otherGroup.querySelector('.faq-group-header i');
        otherGroupBody.classList.remove('open');
        otherIcon.classList.remove('fa-minus');
        otherIcon.classList.add('fa-plus');
      }
    });
  });

  // Mobile Menu
  const hamburgerButton = document.querySelector('.hamburger-button');
  const mobileMenu = document.querySelector('#mobileMenu');
  hamburgerButton?.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });


  // Hero image slider
  const images = ['images/kuva1.jpg', 'images/kuva2.jpg', 'images/kuva3.jpg', 'images/kuva5.jpg','images/kuva6.jpg'];
  let currentIndex = 0;
  const sliderImage = document.getElementById('slider-image');
  const leftButton = document.querySelector('.slider-btn.left');
  const rightButton = document.querySelector('.slider-btn.right');

  function updateImage() {
    if (sliderImage) {
      sliderImage.src = images[currentIndex];
    }
  }

  leftButton?.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  });

  rightButton?.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  });

  // Hover effect for demo button
  const startBtn = document.querySelector('.btn-start');
  const demoBtn = document.querySelector('.btn-demo');

  demoBtn?.addEventListener('mouseenter', () => {
    demoBtn.classList.add('hovered');
    startBtn?.classList.add('greyed');
  });

  demoBtn?.addEventListener('mouseleave', () => {
    demoBtn.classList.remove('hovered');
    startBtn?.classList.remove('greyed');
  });
});