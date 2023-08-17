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

  let modal = document.getElementById("my-modal");
        let btn = document.getElementById("open-btn");
        let button = document.getElementById("ok-btn");

        btn.onclick = function() {
        modal.style.display = "block";
        }
        
        button.onclick = function() {
        modal.style.display = "none";
        }

        window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        }