// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
  const faqContainer = document.querySelector('.faq-content');

  faqContainer.addEventListener('click', (e) => {
    const groupHeader = e.target.closest('.faq-group-header');

    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector('.faq-group-body');
    const icon = groupHeader.querySelector('i');

    // Toggle icon
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');

    // Toggle visibility of body
    groupBody.classList.toggle('open');

    // Close other open FAQ bodies
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
});

// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.querySelector('.hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburgerButton.addEventListener('click', () =>
    mobileMenu.classList.toggle('active')
  );
});



//HERO
document.addEventListener('DOMContentLoaded', () => {
  const images = [
    'images/kuva1.jpg',
    'images/kuva2.jpg',
    'images/kuva3.jpg'
  ];

  let currentIndex = 0;
  const heroImage = document.getElementById('hero-image');
  const leftButton = document.querySelector('.slider-btn.left');
  const rightButton = document.querySelector('.slider-btn.right');

  function updateImage() {
    heroImage.src = images[currentIndex];
  }

  leftButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  });

  rightButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.querySelector('.btn-start');
  const demoBtn = document.querySelector('.btn-demo');

  demoBtn.addEventListener('mouseenter', () => {
    demoBtn.classList.add('hovered');
    startBtn.classList.add('greyed');
  });

  demoBtn.addEventListener('mouseleave', () => {
    demoBtn.classList.remove('hovered');
    startBtn.classList.remove('greyed');
  });
});