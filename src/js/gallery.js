const container = document.querySelector(".gallery__container");
const sections = gsap.utils.toArray(".gallery__container .gallery__section");

if (window.innerWidth < 1024) {
    sections.forEach((section) => {
        let img = section.querySelectorAll('img');
        let leftImg = section.querySelectorAll('.l');
        let rightImg = section.querySelectorAll('.r');
        if(img.length === 0)  return 
        
        gsap.from(img, {
            x: 50,
            opacity: 0,
            duration: 0.5,
            ease: "easeIn",
            stagger: 0.1,
            scrollTrigger: {
                trigger: section,
                start: "center bottom",
                marks:true
            }
        });

        gsap.to(leftImg, {
            y: -50,
            rotate: -30,
            ease: "easeOut",
            scrollTrigger: {
                trigger: leftImg,
                scrub:1,
                start: "bottom center",
                }
        });

        gsap.to(rightImg, {
            rotate: 30,
            y:-200,
            ease: "easeOut",
            scrollTrigger: {
                trigger: leftImg,
                scrub:1,
                start: "bottom center",
                }
        });

    });
} else {
    let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".gallery",
            pin: true,
            scrub: 1,
            end: "+=3000",
        }
    });

    sections.forEach((section) => {
        let img = section.querySelectorAll('img');
        let leftImg = section.querySelectorAll('.l');
        let rightImg = section.querySelectorAll('.r');

        if(img.length === 0)  return 

        gsap.from(img, {
            x: 150,
            opacity: 0,
            duration: 0.5,
            ease: "easeIn",
            stagger: 0.1,
            scrollTrigger: {
                trigger: section,
                containerAnimation: scrollTween,
                start: "left center",
            }
        });

        gsap.to(leftImg, {
            y: -150,
            rotate: 30,
            ease: "easeOut",
            stagger: 0.1,
            scrollTrigger: {
                trigger: section,
                scrub:1,
                containerAnimation: scrollTween,
                start: "right center",
                }
        });

        gsap.to(rightImg, {
            y: 150,
            left: -300,
            rotate: -30,
            ease: "easeOut",
            stagger: 1,
            scrollTrigger: {
                trigger: section,
                scrub:1,
                containerAnimation: scrollTween,
                start: "right center",
                }
        });
    }); 
}