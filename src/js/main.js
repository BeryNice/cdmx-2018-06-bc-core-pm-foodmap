/* DECLARANDO ELEMENTOS DOM */
const inputFilter = document.getElementById('filter');
const btnSearch = document.getElementById('search');
const results = document.getElementById('results');
const showAllRestaurants = document.getElementById('all-restaurants');
const modalWindowRestaurants = document.getElementById('modal-window');


/* definiendo referencia base de datos*/
let refRestaurants;
let nameRestaurant;
let infoRestaurant;
let address;
let delivery;
let imageSrc;
let price;
let type;
let zone;


//const refRestaurants = database.ref('restaurantes');
// console.log(refRestaurants);
//const listRestaurant = refRestaurants.key;
//console.log(listRestaurant);





/* Obtiene los elementos en la db de firebase */
const init = () => {
    // console.log('funcion cargando al cargar la pagina');
    refRestaurants = firebase.database().ref().child('restaurantes');
    // aRestaurant.addEventListener('click', createAllModalRestaurants);
    getAllRestaurants();
    // createAllRestaurants();
    // createAllModalRestaurants();

};

/* Al cargar la página ejecuta función init muestra automáticamente todos los resultados de restaurantes*/

/* Obteniendo Listado de restaurantes desde Firebase */
const createAllRestaurants = () => {
    // console.log('entrando alista de restaurantes');
    refRestaurants.on('child_added', (snapshot) => {
        nameRestaurant = snapshot.key;
        // console.log(nameRestaurant);
        infoRestaurant = snapshot.val();
        // console.log(infoRestaurant);

        // asignando valores con referencias datos
        address = infoRestaurant.domicilio;
        delivery = infoRestaurant.entrega;
        imageSrc = infoRestaurant.imagen;
        price = infoRestaurant.precio;
        type = infoRestaurant.tipo;
        zone = infoRestaurant.zona;
    });

    // lista total de restaurantes
    // const ulRestaurant = document.createElement('ul');
    const liRestaurant = document.createElement('li');
    const title = document.createElement('p');
    const aRestaurant = document.createElement('a');
    const imgRestaurant = document.createElement('img');


    // asignando clases a los elementos lista total de restaurantes
    // ulRestaurant.className = 'uk-thumbnav';
    // ulRestaurant.setAttribute('uk-margin', '');
    title.className = '';
    aRestaurant.setAttribute('uk-toggle', '');
    aRestaurant.href = '#'+nameRestaurant;
    //imgRestaurant.className = 'img-thumbnav';
    imgRestaurant.setAttribute('src', imageSrc)
    imgRestaurant.setAttribute('width', '140px');
    // liRestaurant.className = '';

    // creando dinámicamente los elementos de la lista de restaurantes
    //ulRestaurant.appendChild(liRestaurant);
    liRestaurant.appendChild(aRestaurant);
    aRestaurant.appendChild(imgRestaurant);
    // imgRestaurant.src = imageSrc;
    imgRestaurant.alt = nameRestaurant;
    imgRestaurant.title = nameRestaurant;


    //liRestaurant.innerHTML = nameRestaurant;

    //console.log(ulRestaurant);

    return liRestaurant;

}



const createAllModalRestaurants = () => {
    // console.log('entrando alista de restaurantes');
    refRestaurants.on('child_added', (snapshot) => {
        nameRestaurant = snapshot.key;
        // console.log(nameRestaurant);
        // console.log(snapshot.key);
        infoRestaurant = snapshot.val();
        // console.log(infoRestaurant);

        // asignando valores con referencias datos
        address = infoRestaurant.domicilio;
        delivery = infoRestaurant.entrega;
        imageSrc = infoRestaurant.imagen;
        price = infoRestaurant.precio;
        type = infoRestaurant.tipo;
        zone = infoRestaurant.zona;
    });


    // Creando los elementos para ventana modal
    const divModal = document.createElement('div');
    const divModalBody = document.createElement('div');
    const buttonClose = document.createElement('button');
    const h3Title = document.createElement('h3');
    const imgModal = document.createElement('img');
    const pTipo = document.createElement('p');
    const pZona = document.createElement('p');
    const pDomicilio = document.createElement('p');
    const pPrecio = document.createElement('p');
    const pEntrega = document.createElement('p');
    const pButtons = document.createElement('p');
    const buttonCancel = document.createElement('button');
    const buttonPedir = document.createElement('button');


    // Asignando estilos y atributos

    divModal.setAttribute('id', nameRestaurant);
    divModal.className = 'uk-flex-top';
    divModal.setAttribute('uk-modal', '');
    divModalBody.className = 'uk-modal-dialog uk-modal-body uk-margin-auto-vertical';
    buttonClose.className = 'uk-modal-close-default';
    buttonClose.type = 'button';
    buttonClose.setAttribute('uk-close', '');
    imgModal.setAttribute('src', imageSrc);
    pButtons.className = 'uk-text-right';
    buttonCancel.className = 'uk-button uk-button-default uk-modal-close';
    buttonCancel.type = 'button';
    buttonPedir.className = 'uk-button uk-button-primary';
    buttonPedir.type = 'button';


    divModal.appendChild(divModalBody);
    divModalBody.appendChild(buttonClose);
    divModalBody.appendChild(h3Title);
    divModalBody.appendChild(imgModal);
    divModalBody.appendChild(pTipo);
    divModalBody.appendChild(pZona);
    divModalBody.appendChild(pDomicilio);
    divModalBody.appendChild(pPrecio);
    divModalBody.appendChild(pEntrega);
    divModalBody.appendChild(pButtons);
    pButtons.appendChild(buttonCancel);
    pButtons.appendChild(buttonPedir);

    h3Title.innerHTML = nameRestaurant;
    pTipo.innerHTML = 'Tipo de Comida: '+ type;
    pZona.innerHTML = 'Zona: '+ zone;
    pDomicilio.innerHTML = 'Dirección: '+ address;
    pPrecio.innerHTML = 'Precio:'+ price;
    pEntrega.innerHTML = 'Entrega a domicilio: ' + delivery;
    buttonCancel.innerHTML = 'CANCELAR';
    buttonPedir.innerHTML = 'PEDIR';
   
    // console.log(divModal);
    return divModal;
    
    

    /* h3Title = nameRestaurant;
    pTipo = type;
    pZona = zone;
    pDomicilio = address;
    pPrecio = price;
    pEntrega = delivery;
 */
    /* 
    const divModal = `<div id="modal-center" class="uk-flex-top" uk-modal>
    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <h3>${nameRestaurant}</h3>
        <img src="${imageSrc}" class="">
        <p>${type}</p>
        <p>${zone}</p>
        <p>${address}</p>
        <p>${price}</p>
        <p>${delivery}</p>
        <p class="uk-text-right">
            <button class="uk-button uk-button-default uk-modal-close" type="button">Cancelar</button>
            <button class="uk-button uk-button-primary" type="button">Pedir</button>
        </p>
    </div>
</div>
    `; */

}

const filterRestaurants = () => {
   /*  refRestaurants.orderByChild('').equalTo('').on('child_added', (snapshot){
        console.log(snapshot.key);        
    })*/
}


const getAllRestaurants = () => {
    //console.log(key, restaurantes);
    refRestaurants.on('child_added', (snapshot) => {
        liRestaurant = createAllRestaurants();
        showAllRestaurants.appendChild(liRestaurant);
        // console.log(showAllRestaurants);
        
        divModal = createAllModalRestaurants();
        modalWindowRestaurants.appendChild(divModal);
    });
    //console.log(showAllRestaurants);
}

window.onload = init;

/*
const init = () => {
    /* console.log(event); 
    btnSearch.addEventListener('click', getRestaurantOfFirebase);
    
    refRestaurants = firebase.database().ref().child('results');
    getRestaurantOfFirebase();
  }

 const getRestaurantOfFirebase = (data) => {
    console.log(firebase.database().ref);
    
    refRestaurants.on('value', (snapshot) => {
        results.inner.html = '';
        const data = snapshot.val()
        console.log(data);
        
        for(var key in data) {
            
        }
    })
 }
 */