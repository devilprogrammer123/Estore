var tl1=gsap.timeline();
tl1.from(".nav , header,img ,li,h1 ,button,p,span,i,h2,div",{
    y:-40,
    opacity:0,
    duration:.5,
    delay:1,
    stagger:.1,
})

gsap.from(".covercon")