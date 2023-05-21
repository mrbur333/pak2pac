const headerNav = document.querySelector('.header__navigation');
const navToggle = document.querySelector('.header__mobile_nav_toggle');

navToggle.addEventListener('click', () => {
    const visibility = headerNav.getAttribute('data-visible');

    if (visibility === "false") {
        headerNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else if (visibility === 'true') {
        headerNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
});