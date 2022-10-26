/*
Riprendiamo l’esercizio carosello e rifacciamolo, questa volta usando un array di oggetti.
Ogni elemento deve avere un titolo, una descrizione e il riferimento ad una immagine.
Le immagini devono essere 5 e nella grafica devono essere presenti:
- immagine in evidenza
- thumbnail di tutte le immagine con in evidenza l’immagine attiva
- bottone avanti e indietro
**Bonus 1:**
Sperimentiamo attraverso l’uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:al click di un bottone o già dall’inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.
****
**Bonus 2:**
E se volessi un bottone per invertire la “direzione” del carosello?
****
*/

const immagini = [
  {
    nome: "Argentina",
    descrizione: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quod, aliquid",
    pic: "argentina.jpg"
  },
  {
    nome: "Chile",
    descrizione: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quod, aliquid",
    pic: "chile.jpg"
  },
  {
    nome: "Colombia",
    descrizione: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quod, aliquid",
    pic: "colombia.jpg"
  },
  {
    nome: "Perù",
    descrizione: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quod, aliquid",
    pic: "peru.jpg"
  },
  {
    nome: "Svezia",
    descrizione: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quod, aliquid",
    pic: "svezia.jpg"
  }
]

const imgWrapper = document.querySelector('.img-wrapper');
const thumbWrapper = document.querySelector('.thumbnail-wrapper');
const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');

immagini.forEach((immagine) =>{

  let imgSlider = `
    <div class="text">
      <h4>${immagine.nome}</h4>
      <p>${immagine.descrizione}</p>
    </div>

    <img class="items" src="img/${immagine.pic}"  alt="${immagine.nome}">
  `;

  let thumbSlider = `
    <div class="thumbnail-img">
      <img src="img/${immagine.pic}" alt="${immagine.nome}">
    </div>
  `;

  imgWrapper.innerHTML += imgSlider;
  thumbWrapper.innerHTML += thumbSlider;

})

let counter = 0;

const element = document.getElementsByClassName('items');
const text = document.getElementsByClassName('text');

element[counter].classList.add('active');
text[counter].classList.add('active');


function stampImmage() {
  
}

