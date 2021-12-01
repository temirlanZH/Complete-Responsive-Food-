//This is my script :)  My Favorite Website :3 by Pikachu-Morrison :3

// let value = prompt('Оцените компанию IT-group от 1 до 10 баллов');
// if  (value == '10') {
//    alert('Спасибо за вашу оценку, мы искренние благодарны вам за ваш балл, спасибо что выбираете нас!');
// }
// else{ (value == '9,8,7,6') 
//     alert('Спасибо за вашу оценку, можете оставить свой отзыв о нашей компании!');
//      {
//        (value == '5,4,3,2,1') 
//        alert('Спасибо за вашу оценку, мы поработаем над нашей компанией!');
//     }
// }
// let userName = prompt("Кто это?", '');
// if (userName == 'Admin') {
//   let pass = prompt('Скажите пожалуйста секретный пароль?', '');
//   if (pass == 'IT') {
//     alert( 'Здравствуйте добро пожаловать в IT-group!' );
//   } else if (pass == '' || pass == null) {
//     alert( 'Отменено!' );
//   } else {
//     alert( 'Неверный пароль попробуйте еще раз!' );
//   }
// } else if (userName == '' || userName == null) {
//   alert( 'Отменено!' );
// } else {
//   alert( "Мы вас не знаем до свидание!" );
// }

// function type() {
//   let userName = prompt("Кто это?", '');
//  if (userName == 'Admin') {
//    let pass = prompt('Скажите пожалуйста секретный пароль?', '');
//    if (pass == 'IT') {
//      alert( 'Здравствуйте добро пожаловать в IT-group!' );
//    } else if (pass == '' || pass == null) {
//      alert( 'Отменено!' );
//    } else {
//      alert( 'Неверный пароль попробуйте еще раз!' );
//    }
//  } else if (userName == '' || userName == null) {
//    alert( 'Отменено!' );
//  } else {
//    alert( "Мы вас не знаем до свидание!" );
//  }
// }

// alert(type);

let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}

document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut;