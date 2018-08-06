/* DECLARANDO ELEMENTOS DOM */
const inputFilter = document.getElementById('filter');
const btnSearch = document.getElementById('search');
const results = document.getElementById('results');
const showAllRestaurants = document.getElementById('all-restaurants');


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
   
    /* refRestaurants.on('value', (datos) => {
        const restaurantes = datos.val();
        console.log(restaurantes);
        for (var val in datos) {
           // console.log(val);

        } 
    })*/
    refRestaurants = firebase.database().ref().child('restaurantes');
    getAllRestaurants();
    createAllRestaurants();

};

/* Al cargar la página ejecuta función init muestra automáticamente todos los resultados de restaurantes*/

/* Obteniendo Listado de restaurantes desde Firebase */
const createAllRestaurants = (restaurantString) => {
    // console.log('entrando alista de restaurantes');
    refRestaurants.on('child_added', (snapshot) => {
        nameRestaurant = snapshot.key;
        console.log(nameRestaurant);
        infoRestaurant = snapshot.val();
        console.log(infoRestaurant);
        
        // asignando valores con referencias datos
        address = infoRestaurant.domicilio;
        delivery = infoRestaurant.entrega;
        imageSrc = infoRestaurant.imagen;
        price = infoRestaurant.precio;
        type = infoRestaurant.tipo;
        zone = infoRestaurant.zona;
     });

    /*refRestaurants.on('value', (snapshot) => {
        results.innerHTML = '';
    })*/


    // lista total de restaurantes
    const ulRestaurant = document.createElement('ul');
    const liRestaurant = document.createElement('li');
    const aRestaurant = document.createElement('a');
    const imgRestaurant = document.createElement('img');


    // asignando clases a los elementos lista total de restaurantes
    ulRestaurant.className = 'uk-thumbnav';
    ulRestaurant.setAttribute('uk-margin', '');
    aRestaurant.setAttribute('uk-toggle','');
    aRestaurant.href = '#modal-center';
    // liRestaurant.className = '';

    // creando dinámicamente los elementos de la lista de restaurantes
    ulRestaurant.appendChild(liRestaurant);
    liRestaurant.appendChild(aRestaurant);
    aRestaurant.appendChild(imgRestaurant);
    imgRestaurant.src = imageSrc;
    imgRestaurant.alt = nameRestaurant;
    imgRestaurant.title = nameRestaurant;

    
    //liRestaurant.innerHTML = nameRestaurant;

    console.log(ulRestaurant);
    
    return ulRestaurant;

}

const getAllRestaurants = () => {

}






window.onload = init;





/* const userId = firebase.auth().currentUser.uid;
return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
  var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
  // ...
});
 */

/* const database = firebase.database() */
/* let refRestaurants = firebase.database().ref('restaurantes'); */

/* console.log(refRestaurants); */
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