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
    descrizione: " Il Paese del tango è capace di offrire ai viaggiatori paesaggi straordinari",
    pic: "argentina.jpg"
  },
  {
    nome: "Chile",
    descrizione: "Preparati per un'avventura senza precedenti da nord, con il deserto più secco del mondo, al sud australe con il ghiaccio eterno e cascate invertite",
    pic: "chile.jpg"
  },
  {
    nome: "Colombia",
    descrizione: "La maggior parte del paese, è coperta di montagne come le Ande",
    pic: "colombia.jpg"
  },
  {
    nome: "Perù",
    descrizione: "Il Perù è un paese megadiverso con habitat che variano dalle pianure aride della costa del Pacifico, alle vette delle Ande che si estendono da nord a sud-est",
    pic: "peru.jpg"
  },
  {
    nome: "Svezia",
    descrizione: " per i suoi paesaggi mozzafiato, i pittoreschi villaggi di pescatori, la terra delle renne e il sole estivo senza fine",
    pic: "svezia.jpg"
  }
]

const imgWrapper = document.querySelector('.img-wrapper');
const thumbWrapper = document.querySelector('.thumbnail-wrapper');
const prevBtn = document.getElementById('btn-prev');
const nextBtn = document.getElementById('btn-next');

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
let isNext = true;

const element = document.getElementsByClassName('items');
const text = document.getElementsByClassName('text');
const thumb = document.getElementsByClassName('thumbnail-img');

element[counter].classList.add('active');
text[counter].classList.add('active');
thumb[counter].classList.add('active');

autoPlay();

nextBtn.addEventListener('click', function(){
  next(!isNext);
})
prevBtn.addEventListener('click', function(){
  next(isNext);
})

function next(isNext){
  element[counter].classList.remove('active');
  text[counter].classList.remove('active');
  thumb[counter].classList.remove('active');
  if(!isNext){
    counter++
    if(counter == 5 ) counter = 0;
  }else{
    counter--
    if(counter < 0) counter = 4;
  }
  console.log(counter);
  element[counter].classList.add('active');
  text[counter].classList.add('active');
  thumb[counter].classList.add('active');
}

function autoPlay(){
  return auto = setInterval(function(){
    next()
  }, 2500)
}

function stop(){
  clearInterval(auto)
}