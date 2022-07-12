
    new Swiper('.Image_swiper', {
    // Optional parameters
    loop: true,
  
    autoplay: {
        delay: 5000,
    },
    
  
  });


    new Swiper('.bot_swiper', {
    // Optional parameters
    loop: true,
  

  
    // Navigation arrows
    navigation: {
      nextEl: '.btnUP',
      prevEl: '.btnBack',
    },

  });

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    autoplay: {
      delay: 5000,
  },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

