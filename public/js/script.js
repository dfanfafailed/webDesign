window.onscroll = function () {
  const navbar = document.querySelector('header');
  const fixed = navbar.offsetTop;



  if (window.pageYOffset > fixed) {
    navbar.classList.add('navbar-fixed');
  }
  else{
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

        // btn.onclick = function() {
        // modal.style.display = "block";
        // document.documentElement.style.overflow = 'hidden';
        // document.body.scroll = "no";
        // }
        


document.querySelectorAll("#img-container img").forEach(image=>{
  image.onclick=()=>{
    modal.style.display ="block";
    document.querySelector('#my-modal img').src = image.getAttribute('src');
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
  }
})

button.onclick = function() {
  modal.style.display = "none";
  document.documentElement.style.overflow = 'scroll';
  document.body.scroll = "yes";
  }

  window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
  }

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwSJ0K9n2eRRT60IbSynoTEH5pTjimjX187-BeeD0iZ8XwKvDCsWW3fAv1GGyRCEgC-/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
