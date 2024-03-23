let burger = document.querySelector(".burger");
let ham = document.querySelector(".ham");
let six = true;
ham.addEventListener("click",function(){
   if(six){
    burger.style.display = "block";
    six = false;
   }
   else{
      burger.style.display = "none";
      six = true;
   }
   })

   var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });