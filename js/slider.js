window.onload = function () {

  /* Hero Slider */
  const heroSwiper = new Swiper(".heroSwiper", {
    loop: true,
    speed: 800,

    navigation: {
      nextEl: ".hero-next",
      prevEl: ".hero-prev",
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });


  /* Testimonial Slider */
  const testimonialSwiper = new Swiper(".testimonialSwiper", {
    loop: true,
    speed: 700,

    navigation: {
      nextEl: ".test-next",
      prevEl: ".test-prev",
    },

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

};