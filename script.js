// let next = document.getElementById("nex");
// let prev = document.getElementById("pre");
// let track = document.querySelector(".slider-track");

// let cardWidth = 310;
// let visibleCards = 3;
// let totalCards = document.querySelectorAll(".card-tes").length;
// console.log(totalCards);

// let index = 0;
// let maxIndex = totalCards - visibleCards;
// console.log(maxIndex);

// next.addEventListener("click", () => {
//   if (index < maxIndex) {
//     index++;
//     console.log(index);

//     updateSlider();
//     if (index == 3) {
//       return (index = 0);
//     }
//   }
// });

// prev.addEventListener("click", () => {
//   if (index > 0) {
//     index--;
//     updateSlider();
//   }
// });

// function updateSlider() {
//   track.style.transform = `translateX(-${index * cardWidth}px)`;
// }

// if (index > 23) {
//   for (let i = 0; i <= 12; i++) {
//     console.log(i * 0);
//     for (let j = 0; j <= 12; j++) {
//       console.log(j + 2);
//     }
//   }
// }

// next.addEventListener("click", function () {
//   alert("Enter the value of x and y");
// console.log("js users");
// let a=12;
// console.log(a==12);
// if(a==12) {
//   console.log(a);
  
// }
// a.addEventListener(click,function(){
//   console.log("js");
  
// })
// return 12;

// // console.log("js users");

//   return console.log(
//     "return always zero because of one cclcok data not be handle and try to mange ",
//   );
  
// });

// let a = 12;
// console.log(a);
// console.log(a + 12);


const faqs = document.querySelectorAll(".faq-item");



    faqs.forEach((faq) => {
      faq.querySelector(".faq-question").addEventListener("click", () => {
        faqs.forEach((item) => {
          if (item !== faq) item.classList.remove("active");
        });
        faq.classList.toggle("active");
      });
    });
    
var swiper = new Swiper(".mySwiper", {
  loop: true,
  freeMode: true,
  spaceBetween: 30,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },

  speed: 2000, // ⬅ LOWER = FASTER (try 1500 or 1000)

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    }
  }
});
