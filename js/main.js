window.onload = function () {


  // 탑버튼 기능
  const topBtn = document.querySelector("#gotop")
  topBtn.addEventListener("click", function(e){
    e.preventDefault();
    if(window.scrollY !== 0){
      // 현재 스크롤위치가 0 이면 페이지 bottom으로 이동
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });



  // 상단의 마이페이지리스트 기능
  const mypageBt = document.querySelector(".mypage-bt");
  const mypageList = document.querySelector(".mypage-list");
  mypageBt.addEventListener("click", function () {
    mypageList.classList.toggle("showMypage");
  });
  // swiper ================
  // 프로모션 스와퍼기능
  const swPromotion = new Swiper(".sw-promotion", {
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: {
      480: {
        slidesPerView: 2,
      },
      760: {
        slidesPerView: 2,
      },
    },
    navigation: {
      nextEl: ".promotion .sw-next",
      prevEl: ".promotion .sw-prev",
    },
    pagination: {
      el: ".sw-promotion-pg ",
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  // 쇼핑의 스와이퍼 기능적용
  const swShopping = new Swiper(".sw-shopping", {
    slidesPerView: 1.2,
    grid: {
      rows: 1,
      fill: "row",
    },
    spaceBetween: 10,
    breakpoints: {
      400: {
        spaceBetween:20,
        slidesPerView:2,
        slidesPerGroup:2,
        grid: {
          rows: 1,
        },
      },
      900: {
        spaceBetween: 32,
        slidesPerView: 4,
        grid: {
          rows: 1,
        },
        slidesPerGroup: 3,
      },
      1024: {
        spaceBetween: 32,
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
          rows: 1,
        },
      },
      1280: {
        spaceBetween: 26,
        slidesPerView: 4,
        slidesPerGroup: 4,
        grid: {
          rows: 1,
        },
      },
    },
    navigation: {
      nextEl: ".shopping .sw-next",
      prevEl: ".shopping .sw-prev",
    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  // 투어 슬라이드 기능
  const swTour = new Swiper(".sw-tour", {
    slidesPerView: 1.2,
    grid: {
      rows: 1,
      fill: "row",
    },
    spaceBetween: 26,
    breakpoints: {
      400: {
        spaceBetween:20,
        slidesPerView:2,
        slidesPerGroup:2,
        grid: {
          rows: 1,
        },
      },
      768: {
        spaceBetween:20,
        slidesPerView:2,
        slidesPerGroup:2,
        grid: {
          rows: 1,
        },
      },
      1024: {
        spaceBetween: 32,
        slidesPerView: 2,
        slidesPerGroup: 2,
        grid: {
          rows: 1,
        },
      },
      1280: {
        spaceBetween: 26,
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
          rows: 1,
        },
      },
    },
    navigation: {
      nextEl: ".tour .sw-next",
      prevEl: ".tour .sw-prev",
    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  // 티켓 슬라이드 기능
  const swTicket = new Swiper(".sw-ticket", {
    slidesPerView: 1.2,
    grid: {
      rows: 1,
      fill: "row",
    },
    spaceBetween: 26,
    breakpoints: {
      400: {
        spaceBetween:20,
        slidesPerView:2,
        slidesPerGroup:2,
        grid: {
          rows: 1,
        },
      },
      768: {
        spaceBetween:20,
        slidesPerView:2,
        slidesPerGroup:2,
        grid: {
          rows: 1,
        },
      },
      1024: {
        spaceBetween: 32,
        slidesPerView: 2,
        slidesPerGroup: 2,
        grid: {
          rows: 1,
        },
      },
      1280: {
        spaceBetween: 26,
        slidesPerView: 4,
        slidesPerGroup: 4,
        grid: {
          rows: 1,
        },
      },
    },
    navigation: {
      nextEl: ".ticket .sw-next",
      prevEl: ".ticket .sw-prev",
    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  // 라이브 슬라이드 기능
  const swLive = new Swiper(".sw-live", {
    slidesPerView: 1.2,
    grid: {
      rows: 1,
      fill: "row",
    },
    spaceBetween: 26,
    breakpoints: {
      400: {
        spaceBetween:20,
        slidesPerView:2,
        slidesPerGroup:2,
        grid: {
          rows: 1,
        },
      },
      768: {
        spaceBetween:20,
        slidesPerView:2,
        slidesPerGroup:2,
        grid: {
          rows: 1,
        },
      },
      1024: {
        spaceBetween: 32,
        slidesPerView: 2,
        slidesPerGroup: 2,
        grid: {
          rows: 1,
        },
      },
      1280: {
        spaceBetween: 26,
        slidesPerView: 4,
        slidesPerGroup: 4,
        grid: {
          rows: 1,
        },
      },
    },
    navigation: {
      nextEl: ".ticket .sw-next",
      prevEl: ".ticket .sw-prev",
    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });





  // 도서 슬라이드 기능
  const swBook = new Swiper(".sw-book", {
    slidesPerView: 1.2,
    grid: {
      rows: 1,
      fill: "row",
    },
    spaceBetween: 26,
    breakpoints: {
      400: {
        spaceBetween:20,
        slidesPerView:2,
        slidesPerGroup:2,
        grid: {
          rows: 3,
        },
      },
      768: {
        spaceBetween:20,
        slidesPerView:2,
        slidesPerGroup:2,
        grid: {
          rows: 2,
        },
      },
      1024: {
        spaceBetween: 32,
        slidesPerView: 4,
        slidesPerGroup: 4,
        grid: {
          rows: 1,
        },
      },
      1280: {
        spaceBetween: 26,
        slidesPerView: 5,
        slidesPerGroup: 5,
        grid: {
          rows: 1,
        },
      },
    },
    navigation: {
      nextEl: ".ticket .sw-next",
      prevEl: ".ticket .sw-prev",
    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });


  // 이벤트 슬라이드 기능
  const swEvent = new Swiper(".sw-event", {
    slidesPerView: 1.2,
    grid: {
      rows: 1,
      fill: "row",
    },
    spaceBetween: 26,
    breakpoints: {
      400: {
        spaceBetween:20,
        slidesPerView:2,
        slidesPerGroup:2,
        grid: {
          rows: 1,
        },
      },
      768: {
        spaceBetween:20,
        slidesPerView:2,
        slidesPerGroup:2,
        grid: {
          rows: 1,
        },
      },
      1024: {
        spaceBetween: 32,
        slidesPerView: 4,
        slidesPerGroup: 1,
        grid: {
          rows: 1,
        },
      },
      1280: {
        spaceBetween: 26,
        slidesPerView: 4,
        slidesPerGroup: 1,
        grid: {
          rows: 1,
        },
      },
    },
    navigation: {
      nextEl: ".event .sw-next",
      prevEl: ".event .sw-prev",
    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
};
