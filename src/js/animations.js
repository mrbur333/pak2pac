//LOARED

gsap.from('.loader__clip-top, .loader__clip-bottom', 2, {
    delay: 1,
    height: '50vh',
    ease: 'power4.inOut',
});

gsap.to('.clip__marquee', 3.5, {
    delay: 0.75,
    left: '50%',
    ease: 'power4.inOut'
});

gsap.from('.loader__clip-top .clip__marquee .loader__clip-bottom', 5, {
    delay: 1,
    left: '100%',
    ease: 'power3.inOut'
});

gsap.to('.loader__clip-top', 2, {
    delay: 3.5,
    clipPath: 'inset(0 0 100% 0)',
    ease: 'power4.inOut'
});

gsap.to('.loader__clip-bottom', 2, {
    delay: 3.5,
    clipPath: 'inset(100% 0 0 0)',
    ease: 'power4.inOut'
});

gsap.to('.clip__marquee .marquee_mirage', 1, {
    delay: 4,
    opacity: 0,
    ease: 'power2.inOut'
});

gsap.to('.clip__marquee .merquee__center', {
    delay: 5,
    opacity: 0,
});

gsap.to('.loader', {
    delay: 5,
    display: 'none',
});

gsap.to('.home__text span', {
    delay: 5,
    opacity: 1,
});

gsap.to('.home__text span', {
    delay: 5.3,
    scale: 2.5,
});

//HEADER

gsap.to('.header', 1, {
    delay: 5.4,
    top: 0,
    ease: 'power2.inOut'
});

gsap.to('.header__logo', 1, {
    delay: 5.5,
    opacity: 1,
    ease: 'power2.inOut'
});


gsap.to('.header__mobile_nav_toggle', 1, {
    delay: 6,
    opacity: 1,
    ease: 'power2.inOut'
});

gsap.to('.header__navigation li:first-child', 1, {
    delay: 6,
    opacity: 1,
    ease: 'power2.inOut'
});

gsap.to('.header__navigation li:nth-child(2)', 1, {
    delay: 6.5,
    opacity: 1,
    ease: 'power2.inOut'
});

gsap.to('.header__navigation li:nth-child(3)', 1, {
    delay: 7,
    opacity: 1,
    ease: 'power2.inOut'
});

gsap.to('.header__navigation li:last-child', 1, {
    delay: 7.5,
    opacity: 1,
    ease: 'power2.inOut'
});

//ANIMALS__HOME

gsap.to('.home__kangooroo', 1, {
    delay: 5.5,
    left: 0,
    ease: 'power3.in'
});

gsap.to('.home__lion', 1, {
    delay: 6.5,
    left: '60%',
    ease: 'power3.in'
});

gsap.to('.home__dino', 3, {
    delay: 5,
    top: '70%',
    ease: 'power3.in'
});

gsap.registerPlugin(ScrollTrigger);

gsap.to('.home__text span', {
    scrollTrigger: {
        scrub:1
    },
    y:-400,
});

gsap.to('.home__kangooroo,.home__lion,.home__dino', {
    scrollTrigger: {
        scrub:2
    },
    y:-600,
});

//ABOUT

let aboutTriggerImg = gsap.timeline({
    scrollTrigger: {
        trigger: '.about',
        start: 'top center',
    }
});


if (window.innerWidth < 960) {
    let aboutTriggerText = gsap.timeline({
        scrollTrigger: {
            trigger: '.about__image',
            start: 'center center',
        }   
    });
    aboutTriggerText.from('.accord-item:first-child', {y:'4em', display: "none", duration:0.3})
        .from('.accord-item:nth-child(2)', {y:'4em', display: "none", duration:0.3})
        .from('.accord-item:nth-child(3)', {y:'4em', display: "none", duration:0.3})
        .from('.accord-item:nth-child(4)', {y:'4em', display: "none", duration:0.3})
        .from('.accord-item:nth-child(5)', {y:'4em', display: "none", duration:0.3});   
} else {
    let aboutTriggerText = gsap.timeline({
        scrollTrigger: {
            trigger: '.about',
            start: 'top center',
        }   
    });
    aboutTriggerText.from('.accord-item:first-child', {y:'4em', display: "none", duration:0.3})
        .from('.accord-item:nth-child(2)', {y:'4em', display: "none", duration:0.3})
        .from('.accord-item:nth-child(3)', {y:'4em', display: "none", duration:0.3})
        .from('.accord-item:nth-child(4)', {y:'4em', display: "none", duration:0.3})
        .from('.accord-item:nth-child(5)', {y:'4em', display: "none", duration:0.3}); 
}   

aboutTriggerImg.from('.about__images', { x:1000, duration:1});
gsap.to('.about__images', {
    scrollTrigger: {
        scrub:1
    },
    y:-200,
});
            
gsap.to('.about__accord', {
    scrollTrigger: {
        scrub:1
    },
    y:-200,
});

// GALLERY

/*gsap.to('.i2', {
    y: -200,
    duration: 1,
    ease: "easeOut",
    scrollTrigger: {
        trigger: ".i1",
        toggleActions: "restart pouse reverse reverse",
        markers: true,
        start: 'center center',
    }
});*/

gsap.to('.i1', {
    scrollTrigger: {
        trigger: '.i1',
        start: 'bottom center',
        scrub:1
    },
    rotate: -30,
    y:-100,
});

gsap.to('.i2', {
    scrollTrigger: {
        trigger: '.i1',
        start: 'bottom center',
        scrub:1
    },
    duration: 1,
    rotate: 30,
    y:-200,
});

gsap.to('.i3', {
    scrollTrigger: {
        trigger: '.i3',
        start: 'bottom center',
        scrub:1
    },
    duration: 1,
    rotate: -30,
    y:-100,
});

gsap.to('.i4', {
    scrollTrigger: {
        trigger: '.i3',
        start: 'bottom center',
        scrub:1
    },
    rotate: 30,
    y:-200,
});

gsap.to('.i5', {
    scrollTrigger: {
        trigger: '.i5',
        start: 'bottom center',
        scrub:1
    },
    rotate: 30,
    y:-100,
});

gsap.to('.i6', {
    scrollTrigger: {
        trigger: '.i5',
        start: 'bottom center',
        scrub:1
    },
    rotate: -30,
    y:-200,
});

gsap.to('.i7', {
    scrollTrigger: {
        trigger: '.i7',
        start: 'bottom center',
        scrub:1
    },
    rotate: 30,
    y:-100,
});

gsap.to('.i8', {
    scrollTrigger: {
        trigger: '.i7',
        start: 'bottom center',
        scrub:1
    },
    rotate: -30,
    y:-200,
});

gsap.to('.i9', {
    scrollTrigger: {
        trigger: '.i9',
        start: 'bottom center',
        scrub:1
    },
    rotate: 30,
    y:-100,
});

gsap.to('.i10', {
    scrollTrigger: {
        trigger: '.i9',
        start: 'bottom center',
        scrub:1
    },
    rotate: -30,
    y:-200,
});

gsap.to('.i11', {
    scrollTrigger: {
        trigger: '.i11',
        start: 'bottom center',
        scrub:1
    },
    rotate: 30,
    y:-100,
});

gsap.to('.i12', {
    scrollTrigger: {
        trigger: '.i11',
        start: 'bottom center',
        scrub:1
    },
    rotate: -30,
    y:-200,
});

gsap.to('.i13', {
    scrollTrigger: {
        trigger: '.i13',
        start: 'bottom center',
        scrub:1
    },
    rotate: 30,
    y:-100,
});

gsap.to('.i14', {
    scrollTrigger: {
        trigger: '.i13',
        start: 'bottom center',
        scrub:1
    },
    rotate: -30,
    y:-200,
});

gsap.to('.i15', {
    scrollTrigger: {
        trigger: '.i15',
        start: 'bottom center',
        scrub:1
    },
    rotate: 30,
    y:-100,
});

gsap.to('.i16', {
    scrollTrigger: {
        trigger: '.i15',
        start: 'bottom center',
        scrub:1
    },
    rotate: -30,
    y:-200,
});

gsap.to('.i17', {
    scrollTrigger: {
        trigger: '.i17',
        start: 'bottom center',
        scrub:1
    },
    rotate: 30,
    y:-100,
});

gsap.to('.i18', {
    scrollTrigger: {
        trigger: '.i17',
        start: 'bottom center',
        scrub:1
    },
    rotate: -30,
    y:-200,
});

gsap.to('.i19', {
    scrollTrigger: {
        trigger: '.i19',
        start: 'bottom center',
        scrub:1
    },
    rotate: 30,
    y:-100,
});

gsap.to('.i20', {
    scrollTrigger: {
        trigger: '.i19',
        start: 'bottom center',
        scrub:1
    },
    rotate: -30,
    y:-200,
});


// CONTACTS

let contactTrigger = gsap.timeline({
    scrollTrigger: {
        trigger: '.contacts',
        start: 'top center',
    }
});

contactTrigger.from('.contacts__header', { y:'4em', display: "none", duration:0.3})
            .from('p:nth-child(2)', {y:'4em', display: "none", duration:0.3})
            .from('p:nth-child(3)', {y:'4em', display: "none", duration:0.3})
            .from('p:nth-child(4)', {y:'4em', display: "none", duration:0.3})
            .from('p:nth-child(5)', {y:'4em', display: "none", duration:0.3})
            .from('.contacts__img--coroc', {x:'-15em',y:'5em', display: "none", duration:1})
