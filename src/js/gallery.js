const container = document.querySelector(".gallery__container");
const sections = gsap.utils.toArray(".gallery__container .gallery__section");
const animation = gsap.utils.toArray('.amin');

if (window.innerWidth > 768) {
    let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
        trigger: ".gallery",
        pin: true,
        scrub: 1,
        end: "+=3000",
        //snap: 1 / (sections.length - 1),
        }
    });
}

sections.forEach((section) => {
    // grab the scoped text
    let img = section.querySelectorAll('img');

    // bump out if there's no items to animate
    if(img.length === 0)  return 
    
    // do a little stagger
    gsap.from(img, {
        y: -130,
        opacity: 0,
        duration: 0.5,
        ease: "easeIn",
        stagger: 0.1,
        scrollTrigger: {
            trigger: section,
            start: "left center",
            
        }
    });
    /*gsap.to('.s1', {
        y: -200,
        x: 100,
        rotate: 30,
        duration: 0.3,
        ease: "easeOut",
        scrollTrigger: {
            trigger: ".s2",
            toggleActions: "restart pouse reverse reverse",
            markers: true,
            start: 'center center',
        }
    })*/
});