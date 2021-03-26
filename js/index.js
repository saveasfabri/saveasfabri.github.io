
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
    cambiarIconoHoverFace.addEventListener('mouseover',cambiarIconoFinal);
    cambiarIconoHoverFace.addEventListener('mouseout',cambiarIconoInicial);
   
    function cambiarIconoFinal(){
        this.setAttribute('src','./asset/icon_facebook_hover.svg');   
    }   
    function cambiarIconoInicial(){
        this.setAttribute('src',"./asset/icon_facebook.svg");
    }    
} 

//***************** DARK MODE *******************/

const darkMode = document.querySelector('#dark');

darkMode.addEventListener('click', () => {
	document.body.classList.toggle('dark');
    
  if (darkMode.innerHTML === 'Modo Nocturno') 
        darkMode.innerHTML = 'Modo Diurno';
  else darkMode.innerHTML = 'Modo Nocturno'; 

    

	// Guardamos el modo en localstorage.
	if(document.body.classList.contains('dark')){
		localStorage.setItem('dark-mode', 'true');
	} else {
		localStorage.setItem('dark-mode', 'false');
	}
});

if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark');
    darkMode.innerHTML.add('Modo Nocturno');
}
else{
    document.body.classList.remove('dark');
    darkMode.innerHTML.add('Modo Diurno')
}