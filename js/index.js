window.onload = function () {
    const mypage = document.querySelector(".mypage-bt");
    const mypagelist =document.querySelector(".mypage-list");
    mypage.onclick = function(){
        mypagelist.classList.toggle("openMypage")
    }
}