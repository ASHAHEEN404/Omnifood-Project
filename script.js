'use strict';

const mobileNav = document.querySelector('.mobile-nav');
const mainNav = document.querySelector('.main-nav');
const btnlearnMore = document.querySelector('.btn--learnMore');
const btnStart = document.querySelector('.btn-start');
const sectionHowItWorks = document.getElementById('section-HowItWorks');
const sectionPricing = document.getElementById('section-pricing');
const header = document.querySelector('.header');
const body = document.querySelector('.body');
const heroSection = document.querySelector('.section-hero');
/**********************************************************************************/

// Mobile navigation functionality
mobileNav.addEventListener('click', function () {
  mobileNav.classList.toggle('change');
  document.querySelector('.header').classList.toggle('nav-open');
});

// Navigation Functionality
mainNav.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('main-nav-link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(`${id}`).scrollIntoView({ behavior: 'smooth' });
  }
});
btnlearnMore.addEventListener('click', function (e) {
  e.preventDefault();
  sectionHowItWorks.scrollIntoView({ behavior: 'smooth' });
});
btnStart.addEventListener('click', function (e) {
  e.preventDefault();
  sectionPricing.scrollIntoView({ behavior: 'smooth' });
});

// Stickiy Navigation Bar
const headerHeight = header.getBoundingClientRect().height;
const stickiyNav = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting === false) body.classList.add('sticky');
  else body.classList.remove('sticky');
};
const observerHeader = new IntersectionObserver(stickiyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
  behavior: 'smooth',
});
observerHeader.observe(heroSection);
///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  const flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);
  const isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add('no-flexbox-gap');
}
checkFlexGap();
