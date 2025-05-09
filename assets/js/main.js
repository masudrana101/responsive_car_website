/*================== SHOW MENU ==================*/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*Menu show*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}      

/*Menu hiden*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}      



/*============== REMOVE MENU MOBILE =============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
//when we click on nav__link, we remove the show-menu cl.
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/*================= SWIPER HOME =================*/
const swiperHome = new Swiper('.home__swiper', {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: (index, className) => {
          return '<span class="' + className + '">' + String(index + 1).padStart(2, '0') + "</span>";
        },
      },

      autoplay: {
        delay: 500,
      }
  
  })

/*========= CHANGE BACKGRAOUND HEADER ===========*/
const bgHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offest is greater than 50 of the 
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)

/*=============== SHOW SCROLL UP ================*/


/*======== SCROLL SELECTIONS ACTIVE LINK ========*/


/*=========== SCROLL REVEAL ANIMATION ===========*/
