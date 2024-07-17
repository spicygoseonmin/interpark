window.onload = function () {
    const mypage = document.querySelector(".mypage-bt");
    const mypagelist =document.querySelector(".mypage-list");
    mypage.onclick = function(){
        mypagelist.classList.toggle("openMypage");
    }

    // 프로모션 스와이프 기능
    const swpromotion = new Swiper(".sw-promotion", {
        slidesPerView: 1,
        spaceBetween: 24,
        breakpoints: {
            480 : {
                slidesPerView: 2,
            },
            760 : {
                slidesPerView: 2,
            }
        },
        navigation: {
            nextEl: ".promotiom .sw-next",
            prevEl: ".promotiom .sw-prev",
        },
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
    });
};

