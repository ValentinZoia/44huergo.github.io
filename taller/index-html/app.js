let brg = document.querySelector('.burger');
let nav = document.querySelector('.nav');

const nav_slide = () => {
   
    let brg = document.querySelector('.burger');
    let nav = document.querySelector('.nav');
    
        nav.classList.toggle('nav-active');
        brg.classList.toggle('brg-active');
    
}

brg.addEventListener('click', () => {
    nav_slide();
    console.log(nav.classList)
});
console.log(nav.classList)