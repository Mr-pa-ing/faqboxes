const gettoggles = document.querySelectorAll('.faq-toggle');
// console.log(gettoggles);

gettoggles.forEach(gettoggle=>{
    // console.log(gettoggle);

    gettoggle.addEventListener('click',()=>{
        gettoggle.parentElement.classList.toggle('active');
    });
});
