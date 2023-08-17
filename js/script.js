window.onscroll = function () {
    const navbar = document.querySelector('header');
    const fixed = navbar.offsetTop;
  
    if (window.pageYOffset > fixed) {
      navbar.classList.add('navbar-fixed');
    }else{
      navbar.classList.remove('navbar-fixed');
    }
  }
  
  const hamburger = document.querySelector('#hamburger');
  const navMenu = document.querySelector('#nav-menu');
  
  hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
  });