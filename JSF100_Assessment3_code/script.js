gsap.registerPlugin(ScrollTrigger);

  $(function() {
    const tl = gsap.timeline();

   
    tl.from('.hiking, .surfing', {
      duration: 1,
      opacity: 0,
      y: 100,
      stagger: 0.25,
      ease: 'power4.out',
    }).from('.heroSentence', {
      duration: 2,
      opacity: 0,
      scale: 0,
      ease: 'back.out(1.7)',
    });
    tl.from('.mind', {
      duration: 3,
      opacity: 0,
      y: 400,
      ease: 'elastic(1, 0.5)',
      delay: 3
    }).from('.drawning, .shark', {
      duration: 1,
      x: -2000,
      stagger: .5,
      scrub: 1,
      rotate: 400,
      scrollTrigger: {
        trigger: '.mind',
        start: 'top 60%',
        end: 'bottom 80%',
        scrub: true
      }
    }).from('.title', {
      opacity: 0,
      duration: 4,
      y: 400,
      ease: 'power4.out',
      delay: 4,
    }).from('.tagline',{
      opacity: 0,
      duration: .5,
      y: 200,
      ease:'elastic(1, 0.5)'
    }).from('.image',{
      opacity: 0,
      duration: .3,
      y: 200,
      ease: 'expoScale(1, 2)'
    }).from('.footerTag', {
      scrub: 4,
      opacity: 0,
      diration: .5,
      y: 200,
      delay: 3,
    })

    // bottom carousel (JQuery)
    $('.carousel').carousel({
      interval: 5000,
      pause: false,
      wrap: true
    })

  });

  

