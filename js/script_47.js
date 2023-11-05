const navbar = document.querySelector('.nav');
console.log('nav',navbar);

window.addEventListener('scroll',function(){
    if(this.window.pageYOffset>400){
        navbar.classList.add('navbar-fixed');
    }else{
        navbar.classList.remove('navbar-fixed');
    }
});