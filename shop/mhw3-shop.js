function toggleMenuNav(){
  const elem = document.querySelector('#menu nav');
  if(elem.classList.contains('hidden'))
      elem.classList.remove('hidden');
  else
      elem.classList.add('hidden');
}


function modificaPreferenza(event){
  const cuore = event.currentTarget;
  if(cuore.classList.contains('rosso'))
    cuore.classList.remove('rosso');
  else
    cuore.classList.add('rosso');
}


function aggiungiFoto(album, src, price) {
    let div;

    div = (album.id === "modal-view-prodotti"? document.querySelector('#modal-container-interno'): album.appendChild(document.createElement('div')));

    const div1 = div.appendChild(document.createElement('div'));
    const div2 = div.appendChild(document.createElement('div'));

    const span_cuore = document.createElement('span');
    span_cuore.classList.add('fa','fa-heart');

    if(album.id !== "modal-view-prodotti") {
      const cuoricino = div1.appendChild(span_cuore);
      cuoricino.addEventListener('click', modificaPreferenza);
    }

    div1.classList.add('relative');

    const image = document.createElement('img');
    image.src = src;
    div1.appendChild(image);

    image.addEventListener('click', apriModale);

    
    const descrizione = document.createElement('span');
    descrizione.textContent = "PRODOTTO";
    div2.appendChild(descrizione);

    const prezzo = document.createElement('strong');
    prezzo.textContent = price;
    div2.appendChild(prezzo);

}


function apriModale(event){
  document.querySelector('div#modal-container-interno').innerHTML= '';
   

  aggiungiFoto(modalViewProdotti,event.currentTarget.src, "price NE");

  
  modalViewProdotti.style.top = window.pageYOffset + 'px';
  document.body.classList.add('no-scroll');
  modalViewProdotti.classList.remove('hidden');
  modalViewProdotti.focus();
} 


function chiudiModaleProdotti(event) {
  if(event.type === 'keydown' && event.key !== "Escape"){
    return;
  }
  
  document.body.classList.remove('no-scroll');
  modalViewProdotti.classList.add('hidden');
    
}

function previeniRicarica(event){
  event.preventDefault();
}


const album1 = document.querySelector('.foto-main');
for (let i = 0; i < LISTA_FOTO_SHOP.length; i++) {
  const url = LISTA_FOTO_SHOP[i];
  aggiungiFoto(album1, url, "price NE");    
}

const album2 = document.querySelector('#in-saldo');
for (let i = 0; i < LISTA_FOTO_SHOP_IN_SALDO.length; i++) {
  const url = LISTA_FOTO_SHOP_IN_SALDO[i];
  aggiungiFoto(album2, url, "price NE");  
}

const modalViewProdotti = document.querySelector('#modal-view-prodotti');
modalViewProdotti.addEventListener('keydown', chiudiModaleProdotti)

const tastoChiudiModale = document.querySelector('#modal-container-esterno span');
tastoChiudiModale.addEventListener('click', chiudiModaleProdotti)


const bloccoMenuNavigazione = document.querySelector('div#menu a');
bloccoMenuNavigazione.addEventListener('click', toggleMenuNav);

const link = document.querySelectorAll('a');
for(let a of link){
  if(a.getAttribute('href') === "#")
    a.addEventListener('click', previeniRicarica);
}