const headerNav = document.querySelector('.header__navigation');
const navToggle = document.querySelector('.header__mobile_nav_toggle');
const navEl = document.querySelectorAll('.header__navigation a');

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

navEl.forEach(link => {
    link.addEventListener('click', () => {
        if (link.classList.contains('active')) {
            link.classList.remove('active');
        } else {
            navEl.forEach(el => {
                el.classList.remove('active');
                link.classList.add('active');
            })
        }
    })
})