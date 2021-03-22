
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


//************** HOVER ICONOS REDES SOCIALES *******************/

window.onload = function(){
    let cambiarIconoHoverFace = document.getElementById("face-icon");
    cambiarIconoHoverFace.addEventListener('mouseover',cambiarIconoFinal);
    cambiarIconoHoverFace.addEventListener('mouseout',cambiarIconoInicial);
   
    function cambiarIconoFinal(){
        this.setAttribute('src','./asset/icon_facebook_hover.svg');   
    }   
    function cambiarIconoInicial(){
        this.setAttribute('src',"./asset/icon_facebook.svg");
    }

    let cambiarIconoHoverTwit = document.getElementById("twit-icon");
    cambiarIconoHoverTwit.addEventListener('mouseover',cambiarIconoFinal);
    cambiarIconoHoverTwit.addEventListener('mouseout',cambiarIconoInicial);
   
    function cambiarIconoFinal(){
        this.setAttribute('src','./asset/icon-twitter-hover.svg');   
    }   
    function cambiarIconoInicial(){
        this.setAttribute('src',"./asset/icon_twitter.svg");
    }
} 
