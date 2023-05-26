const headerNav = document.querySelector('.header__navigation');
const navToggle = document.querySelector('.header__mobile_nav_toggle');
const navEl = document.querySelectorAll('.header__navigation a');
let heightHome = document.querySelector('.home').offsetHeight;
let heightAbout = document.querySelector('.about').offsetHeight;
let heightGallery = document.querySelector('.gallery').offsetHeight;
let heightContacts = document.querySelector('.contacts').offsetHeight;

const getId = (link) => link.getAttribute('href').replace('#', '')

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navEl.forEach((link) => {
                link.classList.toggle('active', getId(link) === entry.target.id)
            })
        }
    })
    },
    {
        threshold: 0.4,
    }
)

document.querySelectorAll('section').forEach((section) => {
    observer.observe(section)
})

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
        headerNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
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