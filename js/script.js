// ScrollGiveClass 플러그인 호출
var sgc1 = new ScrollGiveClass("header", {
    baseline: 100,
});

// Swiper 플러그인 호출
const swiper1 = new Swiper('#main_view', {
    // Optional parameters
    wrapperClass:'slider',
    slideClass:'view',

    autoplay: { // 자동 슬라이드
      delay: 5000, // 하나의 슬라이드가 보여지는 시간
    },

    speed: 800, // 슬라이드가 전환되는(움직이는) 시간

    spaceBetween: 10, // 슬라이드 사이간격
  
    // If we need pagination
    pagination: {
      el: '.pager', // 버튼영역 대상
      bulletActiveClass: 'active', // 활성화된 요소에 추가되는 클래스
      clickable: true, // 클릭시 슬라이드 이동
    },
  });

  // press영역 Swiper 호출
const swipe2 = new Swiper('#press .inner', {
  // Optional parameters
  wrapperClass:'slider',
  slideClass:'item',

  slidesPerView: 1,
  spaceBetween: 10,

  pagination:{
    el: '.dot',
    bulletActiveClass: 'active',
    clickable: true,
  },

  breakpoints:{
    // 화면의 너비가 320이상 적용
    320:{slidesPerView: 2, spaceBetween: 20,},
    // 화면의 너비가 640이상 적용
    640:{slidesPerView: 3, spaceBetween: 30,},
    // 화면의 너비가 765이상 적용
    768:{slidesPerView: 4, spaceBetween: 40,},
    // 화면의 너비가 1024이상 적용
    1024:{slidesPerView: 5, spaceBetween: 30,},
  },
});