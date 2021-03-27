
//********************* BURGUER MENU **************************/

function menuBurger(){
    const desplegarMenu = document.getElementById ('site-nav');
    desplegarMenu.classList.toggle('site-nav-open');
    const cambiarBurgerClose = document.getElementById('burger');
        if (cambiarBurgerClose.src.match ("close")) {
            cambiarBurgerClose.src = "./asset/burger.svg";
        } else {
            cambiarBurgerClose.src = "./asset/close.svg";
    } 
};

//************** HOVER ICONS/ SOCIAL MEDIA *******************/

window.onload = function(){
    let cambiarIconoHoverFace = document.getElementById("face-icon");
    let cambiarIconoHovertwit = document.getElementById("twit-icon");
    let cambiarIconoHoverInsta = document.getElementById("insta-icon");

    cambiarIconoHoverFace.addEventListener('mouseover',cambiarIconoFinalFace);
    cambiarIconoHoverFace.addEventListener('mouseout',cambiarIconoInicialFace);
    cambiarIconoHovertwit.addEventListener('mouseover',cambiarIconoFinalTwit);
    cambiarIconoHovertwit.addEventListener('mouseout',cambiarIconoInicialTwit);
    cambiarIconoHoverInsta.addEventListener('mouseover',cambiarIconoFinalInsta);
    cambiarIconoHoverInsta.addEventListener('mouseout',cambiarIconoInicialInsta);
   
    function cambiarIconoFinalFace(){
        this.setAttribute('src','./asset/icon_facebook_hover.svg');
    }   
    function cambiarIconoInicialFace(){
        this.setAttribute('src',"./asset/icon_facebook.svg");
    }
    function cambiarIconoFinalTwit(){
        this.setAttribute('src','./asset/icon-twitter-hover.svg');   
    }   
    function cambiarIconoInicialTwit(){
        this.setAttribute('src',"./asset/icon-twitter.svg");
    } 
    function cambiarIconoFinalInsta(){
        this.setAttribute('src','./asset/icon_instagram-hover.svg');   
    }   
    function cambiarIconoInicialInsta(){
        this.setAttribute('src',"./asset/icon_instagram.svg");
    } 
}

//***************** DARK MODE *******************/

const darkMode = document.querySelector('#dark');

//Para cambiar el colores de fondo, fuentes etc
darkMode.addEventListener('click', () => {
	document.body.classList.toggle('dark');
//Para cambiar texto de menu 
if (darkMode.innerHTML === 'Modo Nocturno') 
    darkMode.innerHTML = 'Modo Diurno';
else darkMode.innerHTML = 'Modo Nocturno'; 



	// Guardo el modo en localstorage.
if(document.body.classList.contains('dark')){
    localStorage.setItem('dark-mode', 'true');
} else {
    localStorage.setItem('dark-mode', 'false');
}
});

if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark');
    darkMode.innerHTML = 'Modo Diurno';
}
else{
    document.body.classList.remove('dark');
    darkMode.innerHTML = 'Modo Nocturno';
}