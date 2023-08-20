const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('fade-down');
    }else{
      entry.target.classList.remove('fade-down');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hide');
hiddenElements.forEach((el)=>observer.observe(el));
