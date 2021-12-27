"use strict"

const isMobile={
    Android:function(){
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry:function(){
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS:function(){
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera:function(){
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows:function(){
        return navigator.userAgent.match(/IEMobile/i);
    },
    any:function(){
        return (
            isMobile.Android()||
            isMobile.BlackBerry()||
            isMobile.iOS()||
            isMobile.Opera()||
            isMobile.Windows());
    }
};
if (isMobile.any()){
    document.body.classList.add('_touch');
    
}   else{
    document.body.classList.add('_pc');
}
// Меню бургер
const iconMenu=document.querySelector('.header__icon');
const menuBody=document.querySelector('.nav__body');
if(iconMenu){
    iconMenu.addEventListener("click",function(e){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
// Scroll(fixed)
const header = document.querySelector('.header');
const intro = document.querySelector('.intro');
const headerHeight = header.offsetHeight;
const introHeight = intro.offsetHeight;
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;
    
	if (scrollDistance >= introHeight) {
		header.classList.add('header--fixed');
		
	} else {
		header.classList.remove('header--fixed');
		
        // Есть ньюанс с headerHeight,в сл.блоке не до конца крутит.Убрал headerHeight
        // Убирать только для с изнач.позиционир.absolute,fixed.Если без,то когда вырывает 
        // из потока-сайт скакнет
	}
});
// Scroll onclick

const menuLinks=document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length>0) {
    menuLinks.forEach(menuLink=> {
        menuLink.addEventListener("click",onMenuLinkClick);
    });

    function onMenuLinkClick(e){
        const menuLink=e.target;

        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock=document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue=gotoBlock.getBoundingClientRect().top + pageYOffset-document.querySelector('header').offsetHeight;
            
            console.log(gotoBlock.getBoundingClientRect().top);
            console.log(pageYOffset);
            console.log(document.querySelector('header').offsetHeight);
            console.log(gotoBlockValue);



            if(iconMenu.classList.contains('_active')){
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top:gotoBlockValue,
                behavior:"smooth"
            });
            e.preventDefault();
        }
    }
}
/* Slider */

var slideIndex=1;
showSlides(slideIndex);



function currentSlide(n){
    showSlides(slideIndex=n);
}
function showSlides(n){
    var i;
    var slides=document.getElementsByClassName('team__photo');
    var dots=document.getElementsByClassName('dot');

for(i=0;i<slides.length;i++){
    slides[i].className="team__photo fade";
}

for (i=0;i<slides.length;i++){
    dots[i].className=dots[i].className.replace("active","");
}

slides[slideIndex-1].className+=" team--active";
dots[slideIndex-1].className+=" active";

}






