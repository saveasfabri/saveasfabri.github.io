//***************** DARK MODE *******************/

const darkMode = document.querySelector('#dark');

//Para cambiar el colores de fondo, fuentes etc
darkMode.addEventListener('click', () => {
	document.body.classList.toggle('dark');
    
//Para cambiar texto del id="dark" ubicado dentro de .site-nav
if (darkMode.innerHTML === 'Modo Nocturno') 
    darkMode.innerHTML = 'Modo Diurno';
else darkMode.innerHTML = 'Modo Nocturno';

//para cambiar iconos e imagenes de Diurno a nocturno


	// Guardo en el localstorage.
if(document.body.classList.contains('dark')){
    localStorage.setItem('dark-mode', 'true');
} else {
    localStorage.setItem('dark-mode', 'false');
}
});

if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark');// local storage de cambio de CSS si .dark activo
    darkMode.innerHTML = 'Modo Diurno';// local storage de cambio MD si .dark activo
}
else{
    document.body.classList.remove('dark'); // local storage de cambio de CSS si .dark inactivo
    darkMode.innerHTML = 'Modo Nocturno';//local storage de cambio MD si .dark inactivo
}

//********************* HEADER OFF ONSCROLL / header **************************/
let time; 

function desplaza() {
    clearTimeout(time); 
    time = setTimeout(oculta, 1500); 
    document.querySelector("header").className = "header-enabled";       
}

function oculta() {
    if((document.documentElement.scrollTop || self.pageYOffset) != 0) {
        document.querySelector("header").className = "header-off";         
    }    
}
onscroll = desplaza;

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