
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


const darkMode = document.querySelector('#dark');

//Para cambiar el colores de fondo, fuentes etc
darkMode.addEventListener('click', () => {
	document.body.classList.toggle('dark');
});

