const nav_slide = () => {
   
    var brg = document.querySelector('.burger');
    var nav = document.querySelector('.nav-slide');
    
    brg.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        brg.classList.toggle('brg-active');
    });
}

nav_slide();


