var tl = gsap.timeline()

tl.from("#nav", {
    opacity: 0,
    delay: 0.5,
})
tl.from("#nav h1,#nav h4,#nav h3", {
    y: -80,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3,
})

tl.from("#left h1", {
    x: -500,
    opacity: 0,
    duration: 0.5,
    stagger: 0.5,
})

tl.from("#right img", {
    scale: 0.5,
    opacity: 0,
    duration: 0.5,
})



gsap.from("#page2>#box1", {
    scale: 0,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#page2>#box1",
        scroller: "body",
        // markers: true,
        start: "top 95%",
        end:"top 80%",
        scrub: 3,
    }
})
gsap.from("#page2>#box2", {
    scale: 0,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#page2>#box2",
        scroller: "body",
        // markers: true,
        start: "top 95%",
        end:"top 80%",
        scrub: 3,
    }
})
gsap.from("#page2>#box3", {
    scale: 0,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#page2>#box3",
        scroller: "body",
        // markers: true,
        start: "top 95%",
        end:"top 80%",
        scrub: 3,
    }
})