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

  const accordionHeader = document.querySelectorAll('.accordion-header')

  accordionHeader.forEach(accordionHeader => {
    accordionHeader.addEventListener("click", event => {
      accordionHeader.classList.toggle("active")
      const accordionBody = accordionHeader.nextElementSibling
      if (accordionHeader.classList.contains("active")) {
        accordionBody.style.maxHeight = accordionBody.scrollHeight + "px"
      }
      else{
        accordionBody.style.maxHeight = 0
      }
    })
  })

  $.ajax({
    url: 'index.php',
    dataType: 'json',
    success: function(response){
      $.each(response, function(i, data){
        $('#card').append(`
        <div class="w-full lg:w-1/2 border">
          <div class="shadow-lg rounded-xl bg-white p-6 mb-5 mx-5">
            <div class="md:flex">
              <div class="w-full mb-6">
                <div class="h-1/2 md:h-full bg-slate-500 aspect-[4/3]">
                  <img class="h-full w-full bg-cover" src="https://serayunews.com`+data.gambar+`"/>
                </div>
              </div>
              <div class="w-full my-auto ml-3">
              <h3 class="text-base lg:text-xl pb-3 font-semibold">
                  <a href="https://serayunews.com`+data.link+`"> 
                  `+data.judul+`
                  </a>
              </h3>
            </div>
            </div> 
          </div> 
        </div>
    `);
      });
      
    }
  })