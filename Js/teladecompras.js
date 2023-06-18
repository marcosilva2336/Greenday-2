let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Alpínia',
        image: 'Alpínia-removebg-preview.PNG',
        price: 15
    },
    {
        id: 2,
        name: 'Amarílis',
        image: 'Amarílis-removebg-preview.PNG',
        price: 10
    },
    {
        id: 3,
        name: 'Alocasia wentii',
        image: 'Alocasia_wentii-removebg-preview - Copia.PNG',
        price: 17
    },
    {
        id: 4,
        name: 'Antúrio',
        image: 'Antúrio-removebg-preview.PNG',
        price: 17
    },
    {
        id: 5,
        name: 'Astromélia',
        image: 'Astromélia-removebg-preview.PNG',
        price: 8
    },
    {
        id: 6,
        name: 'Bromélia allium',
        image: 'bromélia-alium.PNG',
        price:  13
    },
    {
        id: 7,
        name: 'Bromélia',
        image: 'Bromélia-removebg-preview.PNG',
        price: 14
    },
    {
        id: 8,
        name: 'Ciclame',
        image: 'Ciclame-removebg-preview.PNG',
        price: 22
    },
    {
        id: 9,
        name: 'Crisântemo',
        image: 'Crisântemo-removebg-preview.PNG',
        price: 10
    },
    {
        id: 10,
        name: 'Dieffenbachia',
        image: 'Dieffenbachia-removebg-preview.PNG',
        price: 15
    },
    {
        id: 11,
        name: 'Dracaena draco',
        image: 'Dracaena_draco-removebg-preview.PNG',
        price: 20
    },
    {
        id: 12,
        name: 'Gloriosa',
        image: 'Gloriosa-removebg-preview.PNG',
        price: 15
    },
    {
        id: 13,
        name: 'Gypsophila',
        image: 'Gypsophila-removebg-preview.PNG',
        price: 28
    },
    {
        id: 14,
        name: 'Heliconia wagneriana',
        image: 'Heliconia_wagneriana-removebg-preview.PNG',
        price: 10
    },
    {
        id: 15,
        name: 'Helicônia papagaio',
        image: 'Helicônia-papagaio-removebg-preview.PNG',
        price: 17
    },
    {
        id: 16,
        name: 'Helicônia',
        image: 'Helicônia-removebg-preview.PNG',
        price: 19
    },
    {
        id: 17,
        name: 'Hibísco',
        image: 'Hibisco-removebg-preview.PNG',
        price: 25
    },
    {
        id: 18,
        name: 'Orquídea borboleta',
        image: 'Orquídea_borboleta-removebg-preview.PNG',
        price: 24
    },
    {
        id: 19,
        name: 'Orquídea rosa',
        image: 'Orquídea_rosa-removebg-preview.PNG',
        price: 15
    },
    {
        id: 20,
        name: 'Orquídea amarela',
        image: 'Orquídea-amarela.PNG',
        price: 25
    },
    {
        id: 21,
        name: 'Phalaenopsis amabilis',
        image: 'Phalaenopsis_amabilis-removebg-preview.PNG',
        price: 15
    },
    {
        id: 22,
        name: 'Phalaenopsis aphrodite',
        image: 'Phalaenopsis_aphrodite-removebg-preview.PNG',
        price: 40
    },
    {
        id: 23,
        name: 'Plumeria',
        image: 'Plumeria-removebg-preview.PNG',
        price: 18
    },
    {
        id: 24,
        name: 'Primavera',
        image: 'Primavera-removebg-preview.PNG',
        price: 30
    },
    {
        id: 25,
        name: 'Protea',
        image: 'Protea-removebg-preview.PNG',
        price: 32
    },
    {
        id: 26,
        name: 'Rabo de gato',
        image: 'Rabo_de_gato-removebg-preview.PNG',
        price: 10
    },
    {
        id: 27,
        name: 'Strelitzia nicolai',
        image: 'Strelitzia_nicolai-removebg-preview.PNG',
        price: 12
    },
    {
        id: 28,
        name: 'Cana da Índia',
        image: 'cana-da-índia-removebg-preview.PNG',
        price: 12
    },
    {
        id: 29,
        name: 'Tapeinochilos',
        image: 'tapeinoquilo-removebg-preview.PNG',
        price: 9
    },
    {
        id: 30,
        name: 'Biri amarelo',
        image: 'Biri-amarelo-removebg-preview.PNG',
        price: 45
    },
    {
        id: 31,
        name: 'Lophanthera',
        image: 'lofantera-lophanthera-removebg-preview.PNG',
        price: 39
    },
    {
        id: 32,
        name: 'Costaceae',
        image: 'costaceae-removebg-preview.PNG',
        price: 42
    },
    {
        id: 33,
        name: 'Celosia plumosa',
        image: 'celosia-plumosa-removebg-preview.PNG',
        price: 50
    }

];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img class"site-img" src="/img/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">+ Carrinho</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="/img/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

function redirecionarPagina() {
    window.location.href = "/Finalizar compra.html";
 }

const themeToggler = document.querySelector('#theme-toggler');
const htmlElement = document.querySelector('html');

themeToggler.addEventListener('click', () => {
    htmlElement.classList.toggle('dark-theme');
    themeToggler.classList.toggle('#theme-toggler');
});

function increaseFontSize() {
    // Obtém o elemento <html>
    var htmlElement = document.getElementsByTagName('html')[0];
    
    // Obtém o valor atual da propriedade de tamanho de fonte
    var currentFontSize = parseFloat(window.getComputedStyle(htmlElement).fontSize);
    
    // Aumenta o tamanho da fonte em 1 pixel
    var newFontSize = currentFontSize + 1;
    
    // Define o novo tamanho da fonte
    htmlElement.style.fontSize = newFontSize + 'px';
  }
  