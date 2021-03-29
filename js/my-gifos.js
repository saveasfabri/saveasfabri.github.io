//***************** DARK MODE *******************/

const darkMode = document.querySelector('#dark');

//Para cambiar el colores de fondo, fuentes etc
darkMode.addEventListener('click', () => {
	document.body.classList.toggle('dark');
    
//Para cambiar texto del id="dark" ubicado dentro de .site-nav
if (darkMode.innerHTML === 'Modo Nocturno') 
    darkMode.innerHTML = 'Modo Diurno';
else darkMode.innerHTML = 'Modo Nocturno'; 

	// Guardo en el localstorage.
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

//********************* BURGUER MENU / .menu-toggle / header **************************/

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

//************** HOVER ICONS/ SOCIAL MEDIA / .footer *******************/

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
    /*Icono Facebook */
    function cambiarIconoFinalFace(){
        if (document.body.classList.contains('dark')) {
            this.setAttribute('src','./asset/icon_facebook_noc.svg');
        } else {
            this.setAttribute('src','./asset/icon_facebook_hover.svg');
        }
    }   
    function cambiarIconoInicialFace(){
        this.setAttribute('src',"./asset/icon_facebook.svg");
    }
    /*Icono Twitter */
    function cambiarIconoFinalTwit(){
        if (document.body.classList.contains('dark')) {
            this.setAttribute('src','./asset/icon_twitter_noc.svg');
        } else {
            this.setAttribute('src','./asset/icon-twitter-hover.svg');
        }
    }   
    function cambiarIconoInicialTwit(){
        this.setAttribute('src',"./asset/icon-twitter.svg");
    }
    /*Icono Instagram */
    function cambiarIconoFinalInsta(){
        if (document.body.classList.contains('dark')) {
            this.setAttribute('src','./asset/icon_instagram_noc.svg');
        } else {
            this.setAttribute('src','./asset/icon_instagram-hover.svg');
        }
    }   
    function cambiarIconoInicialInsta(){
        this.setAttribute('src',"./asset/icon_instagram.svg");
    }
}