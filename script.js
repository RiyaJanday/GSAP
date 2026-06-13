gsap.registerPlugin(ScrollTrigger);

const cards = document.querySelectorAll(".box1, .box2, .box3, .box4, .box5");

cards.forEach(function (card, index) {

    if (index !== 0) {
        gsap.from(card, {
            y: 400,
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "top 30%",
                scrub: 1,
            }
        });
    }
});

gsap.to(".page2 .textWrapper", {
    x: "-60%",
    marginLeft: "-300%",
    delay: 1,
    ease: 2,
    scrollTrigger: {
        trigger: ".page2",
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: true
    }
});
