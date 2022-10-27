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
const play = document.getElementById('btn-start');
const invert = document.getElementById('btn-invert');

immagini.forEach((immagine) =>{
  getTemplate(immagine)
})

let counter = 0;
let isNext = true;
let isPlay = false;
let auto;
const element = document.getElementsByClassName('items');
const text = document.getElementsByClassName('text');
const thumb = document.getElementsByClassName('thumbnail-img');

element[counter].classList.add('active');
text[counter].classList.add('active');
thumb[counter].classList.add('active');
play.innerHTML ='PLAY'

play.addEventListener('click', function(){
  console.log(isPlay);
  autoPlay();
})

invert.addEventListener('click', function(){
  console.log('ciao',invert);
})

nextBtn.addEventListener('click', function(){
  next(!isNext);
})
prevBtn.addEventListener('click', function(){
  next(isNext);
})


function getTemplate(immagine) {
  const {nome, descrizione, pic} = immagine;

  let imgSlider = `
    <div class="text">
      <h4>${nome}</h4>
      <p>${descrizione}</p>
    </div>

    <img class="items" src="img/${pic}"  alt="${nome}">
  `;

  let thumbSlider = `
    <div class="thumbnail-img">
      <img src="img/${pic}" alt="${nome}">
    </div>
  `;

  imgWrapper.innerHTML += imgSlider;
  thumbWrapper.innerHTML += thumbSlider;
}

function next(isNext){
  element[counter].classList.remove('active');
  text[counter].classList.remove('active');
  thumb[counter].classList.remove('active');
  if(isNext){
    counter--
    if(counter < 0) counter = 4;
    
  }else{
    counter++
    if(counter == 5 ) counter = 0;
  }
  console.log(counter);
  element[counter].classList.add('active');
  text[counter].classList.add('active');
  thumb[counter].classList.add('active');
}

function autoPlay(){
  if(isPlay){
    console.log('clear');
    clearInterval(auto);
    isPlay = false;
    play.innerHTML ='PLAY'
    return;
  }
  if(!isPlay){
    isPlay = true;
    play.innerHTML ='STOP'
    console.log(isPlay, 'interval');
    auto = setInterval(function(){
      next(!isNext)
    }, 2500)
  }
}