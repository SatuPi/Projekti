
document.addEventListener('DOMContentLoaded', () => {

  // USEIN KYSYTYT KYSYMYKSET
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


  // MOBILE MENU
const hamburgerButton = document.querySelector('.hamburger-button');
const mobileMenu = document.querySelector('#mobileMenu');
const closeMobileMenuBtn = document.querySelector('.close-mobile-menu');

hamburgerButton?.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  hamburgerButton.style.display = 'none'; 
});

closeMobileMenuBtn?.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  hamburgerButton.style.display = 'block'; 
});

  // KUVARULLA
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

  // HOVER PAINIKKEILLE
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

// TAKAISIN YLÖS PAINIKE
  const scrollBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

