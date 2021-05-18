
///*******************  FUNCIONES EXCLUSIVAS DE INDEX  ***************************** */

let apiKey = "yKyi5ldiEeXcyyhuq23sZ6o4ITW0AE95";

let inputSearch = document.querySelector('#input-search');
let blockSearch = document.querySelector('#div-main-search');
let iconSearch = document.querySelector('#div-align-self-lupa-search');
let btnSearch = document.querySelector('#img-lupa-gris');
let btnCloseSearch = document.querySelector('#btn-img-x');
let listaSuggestions = document.querySelector('#ul-suggestions');

let offsetSearch = 0;
let searchResultGIFOS = document.querySelector('.results-search');
let btnVerMasResults = document.querySelector('.btn-mas');

let busqueda;

let modalMobile = document.createElement("div");
let modalDesktop = document.createElement("div");

/*******************************************************/

// BUSCADOR

//Dark mode de las imagenes lupa y close dentro del imput **********************************
darkMode.addEventListener("click", () => {
    if (document.body.classList.contains("dark")) {
        cambiarColorlupa.src ="./asset/icon-search-modo-noct.svg";
        cambiarColorImgX.src ="./asset/close-modo-noct.svg";
    }
    else{
        cambiarColorlupa.src ="./asset/icon-search.svg";
        cambiarColorImgX.src ="./asset/close-modo-diu.svg";
    }
});

if(localStorage.getItem("LocalStorageDark") === "true"){
    cambiarColorlupa.src ="./asset/icon-search-modo-noct.svg";
    cambiarColorImgX.src ="./asset/close-modo-noct.svg";
}else{
    cambiarColorlupa.src ="./asset/icon-search.svg";
    cambiarColorImgX.src ="./asset/close-modo-diu.svg";
}
/******************************************************************************************/

// Al abrir el div y se muestran sugerencias:
inputSearch.addEventListener('keyup', searchActive);

function searchActive() {
    busqueda = inputSearch.value;

    //agrego las clases del buscador activo
    blockSearch.classList.remove('div-main-search-inactive');
    blockSearch.classList.add('div-main-search-active');
    /* iconSearch.style.display = "none"; */
    btnCloseSearch.style.display = "block";

    //agrego la funcion de traer sugerencias y reemplazarlas en los elementos
    if (busqueda.length >= 1) {
        fetch(`https://api.giphy.com/v1/tags/related/${busqueda}?api_key=${apiKey}&limit=4`)
            .then(response => response.json())
            .then(data => {
                suggestionsData(data);
            })
            .catch(err => {
                console.error("error al traer sugerencias de busqueda", err);
            })
    } else {
        //funcion para cerrar el buscador cuando se borra todo
        closeBoxSearch();
    }
};

function suggestionsData(data) {
    let suggestions = data.data;
    listaSuggestions.innerHTML = `
    <li class="li-suggestions">
        <img src="./asset/icon-search-grey.svg" alt="Imgen ilustrativa de una lupa"
        class="img-suggestions">
        <p class="text-suggestions" >${suggestions[0].name}</p>
    </li>
    <li class="li-suggestions">
        <img src="./asset/icon-search-grey.svg" alt="Imgen ilustrativa de una lupa"
        class="img-suggestions">
        <p class="text-suggestions" >${suggestions[1].name}</p>
    </li>
    <li class="li-suggestions">
        <img src="./asset/icon-search-grey.svg" alt="Imgen ilustrativa de una lupa"
        class="img-suggestions">
        <p class="text-suggestions" >${suggestions[2].name}</p>
    </li>
    <li class="li-suggestions">
        <img src="./asset/icon-search-grey.svg" alt="Imgen ilustrativa de una lupa"
        class="img-suggestions">
        <p class="text-suggestions" >${suggestions[3].name}</p>
    </li>
    `;
};

//funcion suggestions: cuando se clickea una, se hace la busqueda de ese termino
listaSuggestions.addEventListener('click', function (li) {
    inputSearch.value = li.target.textContent;
    SearchGifos();
})

//cuando cierro la busqueda:
btnCloseSearch.addEventListener('click', cleanSearch);

function cleanSearch() {
    //vacío el input y devuelvo las clases del contenedor a como estaban
    inputSearch.value = "";
    inputSearch.placeholder = "Busca GIFOS y más";
    blockSearch.classList.add('div-main-search-inactive');
    blockSearch.classList.remove('div-main-search-active');
    /* iconSearch.style.display = "block"; */
    btnCloseSearch.style.display = "none";
}

//hago la busqueda al clickear lupa gris, o apretar enter
btnSearch.addEventListener('click', SearchGifos);
inputSearch.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        SearchGifos();
    }
});

//Resultados de la busqueda: aparecen los primeros resultados traidos de la API
function SearchGifos() {
    event.preventDefault();
    let urlSearch = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=12&offset=${offsetSearch}&q=`;
    let strSearch = inputSearch.value.trim();
    urlSearch = urlSearch.concat(strSearch);
    //console.log(urlSearch);

    fetch(urlSearch)
        .then(response => response.json())
        .then(content => {
            searchResultGIFOS.innerHTML = "";
            //console.log(content.data);
            //aparece el div con el titulo y resultados
            let containerResultsSearch = document.querySelector('.results-search-container');
            containerResultsSearch.style.display = "block";

            //agrego el titulo de la busqueda
            let titleSearch = document.querySelector('.title-search');
            titleSearch.innerHTML = inputSearch.value;

            if (content.data === 0) {
                searchResultGIFOS.innerHTML = `
                    <div class="search-error-container">
                    <img class="search-error-img" src="./asset/icon-busqueda-sin-resultado.svg" alt="Imagen ilustrativa sin resultado">
                    <h3 class="search-error-text">Intenta con otra búsqueda</h3>
                    </div>
                    `;
                    btnVerMasResults.style.display = "none";
            } else {
                for (let i = 0; i < content.data.length; i++) {
                    bringSearch(content.data[i]);
                }
            }
        })
        .catch(error => {
            console.log("error busqueda" + error)
        })

    closeBoxSearch();
}


function bringSearch(content) { 
    searchResultGIFOS.innerHTML += `
                <div class="results-gif-box" onclick="maxGifMobile('${content.images.downsized.url}', '${content.id}', '${content.slug}', '${content.username}', '${content.title}')">
                <div class="gif-actions-results">
                    <div class="icons-actions-gif">
                        <button class="icons-actions-box favorite" onclick="agregarFavoritoBusqueda('${content.id}')">
                            <img src="./asset/icon-fav-hover.svg" alt="Icono agregar a favorito" id="icon-fav-${content.id}">
                        </button>                        
                        <button class="icons-actions-box download" onclick="descargarGif('${content.images.downsized.url}', '${content.slug}')">
                            <img src="./asset/icon-download-hover.svg" alt="Icono descargar gif">
                        </button>
                        <button class="icons-actions-box max" onclick="maxGifDesktop('${content.images.downsized.url}', '${content.id}', '${content.slug}', '${content.username}', '${content.title}')">
                            <img src="./asset/icon-max-hover.svg" alt="Icono maximizar gif">
                        </button>
                    </div>
                    <div class="text-description-gif-results">
                        <p class="user-gif-results">${content.username}</p>
                        <p class="title-gif-results">${content.title}</p>
                    </div>
                </div>
                <img src="${content.images.downsized.url}" alt="${content.id}" class="results-gif" >
            </div>
                `;
                console.log( )
}


function closeBoxSearch() {
    //achico el contenedor de la busqueda
    blockSearch.classList.add('div-main-search-inactive');
    blockSearch.classList.remove('div-main-search-active');
    /* iconSearch.style.display = "block"; */
    btnCloseSearch.style.display = "none";
}


//3. Boton Ver mas: cuando se apreta, se cargan mas resultados
btnVerMasResults.addEventListener('click', verMasResults);

function verMasResults() {
    offsetSearch = offsetSearch + 12;
    searchGifosVerMas();
}

function searchGifosVerMas() {
    event.preventDefault();
    let urlSearch = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=12&offset=${offsetSearch}&q=`;
    let strSearch = inputSearch.value.trim();
    urlSearch = urlSearch.concat(strSearch);
    fetch(urlSearch)
        .then(response => response.json())
        .then(content => {
            //aparece el div con el titulo y resultados
            let containerResultsSearch = document.querySelector('.results-search-container');
            containerResultsSearch.style.display = "block";

            //agrego el titulo de la busqueda
            let titleSearch = document.querySelector('.title-search');
            titleSearch.innerHTML = inputSearch.value;

            if (content.data == 0) {
                searchResultGIFOS.innerHTML = `
                    <div class="search-error-container">
                    <img src="./asset/icon-busqueda-sin-resultado.svg" alt="Busqueda sin resultado" class="search-error-img">
                    <h3 class="search-error-text">Intenta con otra búsqueda</h3>
                    </div>
                    `;
                btnVerMasResults.style.display = "none";
            } else {
                for (let i = 0; i < content.data.length; i++) {
                    bringSearch(content.data[i]);
                }
            }
        })
        .catch(error => {
            console.log("error busqueda ver mas" + error)
        })
}


// TRENDING TOPICS
//1. traigo los 5 primer trending topics de la API
//2. reemplazo el texto con los resultados
let trendingTopicsTexto = document.querySelector('#trending-topics');
window.onload = trendingTopics();

async function trendingTopics() {
    let url = `https://api.giphy.com/v1/trending/searches?api_key=${apiKey}`;

    try {
        const resp = await fetch(url);
        const content = await resp.json();
        //object with data & meta
        let topics = content.data;
        //console.log("Trending Topics", topics);
        trendingTopicsTexto.innerHTML = `<span class="trending-topics-link">${topics[0]}</span>, <span class="trending-topics-link">${topics[1]}</span>, <span class="trending-topics-link">${topics[2]}</span>, <span class="trending-topics-link">${topics[3]}</span>, <span class="trending-topics-link">${topics[4]}</span>`;

        let topicBtn = document.getElementsByClassName('trending-topics-link');
        for (let x = 0; x < topicBtn.length; x++) {
            topicBtn[x].addEventListener('click', function (e) {
                inputSearch.value = topics[x];
                SearchGifos();
            });
        }
    } catch (err) {
        console.log("error trending topics" + err);
    }
}


//FUNCIONES ACCIONES GIF:

//FAVORITOS
function agregarFavoritoBusqueda(gif){
    let iconFav = document.getElementById('icon-fav-' + gif);
    iconFav.setAttribute("src", "./asset/icon-fav-active.svg");

    agregarFavorito(gif);
}

function agregarFavorito(gif) {

    //si en el local storage no hay nada, el array queda vacio
    if (favoritosString == null) {
        favoritosArray = [];

    } else {
        //si tengo contenido, necesito parsearlo para poder agregar uno nuevo independiente
        favoritosArray = JSON.parse(favoritosString);
    }

    favoritosArray.push(gif);
    //vuelvo a pasar a texto el array para subirlo al localStorage
    favoritosString = JSON.stringify(favoritosArray);
    localStorage.setItem("gifosFavoritos", favoritosString);
}


//DESCARGAR GIF
async function descargarGif(gifImg, gifNombre) {
    let blob = await fetch(gifImg).then(img => img.blob());;
    invokeSaveAsDialog(blob, gifNombre + ".gif");
}


//MAXIMIZAR GIF MOBILE mobile
function maxGifMobile(img, id, slug, user, title) {
    if (window.matchMedia("(max-width: 700px)").matches) {
        modalMobile.style.display = "block";
        modalMobile.innerHTML = `
        <button class="modal-btn-close" onclick="cerrarModalMobile()">
            <img src="./asset/close-modo-diu.svg" alt="Boton cerrar maximizar">
        </button>
        <img src="${img}" alt="${id}" class="modal-gif">

        <div class="modal-bar">
            <div class="modal-textos">
                <p class="modal-user">${user}</p>
                <p class="modal-titulo">${title}</p>
            </div>
            <div>
                <button class="modal-btn" onclick="agregarFavoritoMaxMobile('${id}')">
                    <img src="./asset/icon-fav-hover.svg" alt="Icono agregar a Favoritos" id="icon-fav-max-mob-${id}">
                </button>
                <button class="modal-btn" onclick="descargarGif('${img}', '${slug}')">
                    <img src="./asset/icon-download-hover.svg" alt="Icono descargar gif">
                </button>
            </div>
        </div>
        `;
        modalMobile.classList.add("modal-activado");
        document.body.appendChild(modalMobile);
    }
}

function cerrarModalMobile() {
    modalMobile.style.display = "none";
} 

function agregarFavoritoMaxMobile(gif){

    let iconFavMaxMobile = document.getElementById('icon-fav-max-mob-' + gif);
    iconFavMaxMobile.setAttribute("src", "./asset/icon-fav-active.svg");

    agregarFavorito(gif);
}


//MAXIMIZAR GIF DESKTOP
function maxGifDesktop(img, id, slug, user, title){
    if (window.matchMedia("(min-width: 700px)").matches){
        modalDesktop.style.display = "block";
        modalDesktop.innerHTML = `
    <button class="modal-btn-close" onclick="cerrarModalDesktop()">
        <img src="./asset/close-modo-diu.svg" alt="Botón cerrar maximizar">
    </button>
    <img src="${img}" alt="${id}" class="modal-gif">

    <div class="modal-bar">
        <div class="modal-textos">
            <p class="modal-user">${user}</p>
            <p class="modal-titulo">${title}</p>
        </div>
        <div>
            <button class="modal-btn" onclick="agregarFavoritoMax('${id}')">
                <img src="./asset/icon-fav-hover.svg" alt="Icono agregar a Favoritos" id="icon-fav-max-${id}">
            </button>
            <button class="modal-btn" onclick="descargarGif('${img}', '${slug}')">
                <img src="./asset/icon-download-hover.svg" alt="Icono descargar gif">
            </button>
        </div>
    </div>
    `;
    modalDesktop.classList.add("modal-activado");
        document.body.appendChild(modalDesktop);
    }
}

function cerrarModalDesktop() {
    modalDesktop.style.display = "none";
} 

function agregarFavoritoMax(gif){

    let iconFavMax = document.getElementById('icon-fav-max-' + gif);
    iconFavMax.setAttribute("src", "./asset/icon-fav-active.svg");

    agregarFavorito(gif);
}