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


/*========= CHANGE BACKGRAOUND HEADER ===========*/


/*=============== SHOW SCROLL UP ================*/


/*======== SCROLL SELECTIONS ACTIVE LINK ========*/


/*=========== SCROLL REVEAL ANIMATION ===========*/
