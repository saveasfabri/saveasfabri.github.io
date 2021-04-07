
window.onload = function(){
    
    //***************** DARK MODE *******************/

    const darkMode = document.querySelector('#dark');
    const cambiarColorBurgerClose = document.querySelector('.burger');

    //Para cambiar el colores de fondo, fuentes etc
    darkMode.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        
    //Para cambiar texto del id="dark" ubicado dentro de .site-nav
    if (darkMode.innerHTML === 'Modo Nocturno'){ 
        darkMode.innerHTML = 'Modo Diurno';
    }else{ 
        darkMode.innerHTML = 'Modo Nocturno';
    }



    //Al hacer click en modo Noct cambie burger/close img a Noct/Diurno
    if (document.body.classList.contains('dark')) {
        cambiarColorBurgerClose.src ="./asset/burger-modo-noct.svg";
        cambiarColorBurgerClose.src ="./asset/close-modo-noct.svg";
    } else {
        cambiarColorBurgerClose.src ="./asset/burger-modo-diu.svg";
        cambiarColorBurgerClose.src ="./asset/close-modo-diu.svg";
    }
    



        // Guardo en el localstorage.
    if(document.body.classList.contains('dark')){
        localStorage.setItem('saveLocalStorage', 'true');
    } else {
        localStorage.setItem('saveLocalStorage', 'false');
    }
    });

    if(localStorage.getItem('saveLocalStorage') === 'true'){
        document.body.classList.add('dark');
        darkMode.innerHTML = 'Modo Diurno';
    }
    else{
        document.body.classList.remove('dark');
        darkMode.innerHTML = 'Modo Nocturno';
    }

    //********************* HEADER OFF ONSCROLL / header **************************/
    let time;

    function headerVisible() {
        clearTimeout(time); 
            time = setTimeout(headerOculto, 1500); 
            document.querySelector("header").className = "header-enabled";       
    }

    function headerOculto() {
        if((document.documentElement.scrollTop || self.pageYOffset) != 0) {
            document.querySelector("header").className = "header-off";         
        }    
    }
    onscroll = headerVisible;

     //********************* HEADER-SEARCH ON ONSCROLL / header **************************/
    
    window.addEventListener('scroll', (e) => {

        const scroll = (document.documentElement.scrollTop || document.body.scrollTop);
        const headerOnOff = document.querySelector(".header-search");
        const shadowOff = document.querySelector("header");
        const btnCreateGifosOff = document.querySelector(".btn-create-gifos");
        const marginLastItem = document.querySelector(".site-nav");

        if (scroll > 0) {
            headerOnOff.classList.add('header-search-on');
            headerOnOff.classList.remove('header-search-off');
            shadowOff.classList.add('header-shadow-on');
            shadowOff.classList.remove('header-shadow-off');
            btnCreateGifosOff.classList.add('btn-create-gifos-off');
            btnCreateGifosOff.classList.remove('btn-create-gifos-on');
            marginLastItem.classList.add('margin-on');
            marginLastItem.classList.remove('margin-off');
            
            
        } else {
            headerOnOff.classList.add('header-search-off');
            headerOnOff.classList.remove('header-search-on');
            shadowOff.classList.add('hheader-shadow-off');
            shadowOff.classList.remove('header-shadow-on');
            btnCreateGifosOff.classList.add('btn-create-gifos-on');
            btnCreateGifosOff.classList.remove('btn-create-gifos-off');            
            marginLastItem.classList.add('margin-off');
            marginLastItem.classList.remove('margin-on');            
        }
    });

    //********************* BURGUER MENU / .menu-toggle / header **************************/

    let cambiarMenuBurger = document.querySelector("#menu-toggle");
    const cambiarBurgerClose = document.querySelector('.burger');

    cambiarMenuBurger.addEventListener('click', menuBurger); 

    function menuBurger(){

        //desplegar menu en mobile
        const desplegarMenu = document.querySelector ('.site-nav');
        desplegarMenu.classList.toggle('site-nav-open');

        if (cambiarBurgerClose.src.match ("close")) {
            if(document.body.classList.contains("dark")) {
                cambiarBurgerClose.src ="./asset/burger-modo-noct.svg";
            }else{
                cambiarBurgerClose.src = "./asset/burger-modo-diu.svg";
            }
        } else {
            if (document.body.classList.contains('dark')) {
                cambiarBurgerClose.src = "./asset/close-modo-noct.svg";
            } else {
                cambiarBurgerClose.src = "./asset/close-modo-diu.svg";
            }                
        }
    };

    //************** HOVER ICONS/ SOCIAL MEDIA / .footer *******************/

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