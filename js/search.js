
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

//************** HOVER ICONOS REDES SOCIALES *******************/

window.onload = function(){
    let cambiarIconoHover = document.getElementById("face-icon");
    cambiarIconoHover.addEventListener('mouseover',cambiarIconoFinal);
    cambiarIconoHover.addEventListener('mouseout',cambiarIconoInicial);
   
    function cambiarIconoFinal(){
        this.setAttribute('src','./asset/icon_facebook_hover.svg');   
    }   
    function cambiarIconoInicial(){
        this.setAttribute('src',"./asset/icon_facebook.svg");
    }
} 
