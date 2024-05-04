function previeniRicarica(event){
    event.preventDefault();
}

function apriMenuRec(event){
    const menu = document.querySelector('#blocco-recensioni nav');
    event.currentTarget.classList.add('hover');
    menu.classList.remove('hidden');
}

function chiudiMenuRec(){
    const menu = document.querySelector('#blocco-recensioni nav');
    const tasto = document.querySelector('#tasto-recensioni');
    tasto.classList.remove('hover');
    menu.classList.add('hidden');
}

function toggleMenuNav(){
    const elem = document.querySelector('#menu nav');
    if(elem.classList.contains('hidden'))
        elem.classList.remove('hidden');
    else
        elem.classList.add('hidden');
}



function mostranascondiEpisodi() {
    const ep = document.querySelector('div#episodi2')    
    const bottone = document.querySelector('#bottone-episodi span') 

    if(ep.classList.contains('hidden')){
        ep.classList.remove('hidden');
        bottone.textContent = 'Nascondi i video Pistacchissimo più recenti';
    }
    else{
        ep.classList.add('hidden');
        bottone.textContent = 'Mostra i video Pistacchissimo più recenti';
    }

}



function cambiaFooter() {
    const foot = document.querySelector('footer');
    const stileCorrente = document.querySelector('footer em')
    switch (foot.dataset.index) {
        case "0":
            foot.dataset.index = "1";
            stileCorrente.textContent = '(2 di 3)';
            break;
        case "1":
            foot.dataset.index = "2";
            foot.classList.add('originale')
            stileCorrente.textContent = '(3 di 3)';
            break;
        case "2":
            foot.dataset.index = "0";
            foot.classList.remove('originale')
            stileCorrente.textContent = '(1 di 3)';
            break;
    }
}



const bottoneCambioFooter = document.querySelector('footer button');
bottoneCambioFooter.addEventListener('click', cambiaFooter);

const bottoneAltriEpisodi = document.querySelector('#bottone-episodi button')
bottoneAltriEpisodi.addEventListener('click', mostranascondiEpisodi);

const menuRecensioni = document.querySelector('#tasto-recensioni');
menuRecensioni.addEventListener('mouseover', apriMenuRec);

const bloccoMenuRecensioni = document.querySelector('#blocco-recensioni span')
bloccoMenuRecensioni.addEventListener('mouseleave', chiudiMenuRec);


const bloccoMenuNavigazione = document.querySelector('div#menu a');
bloccoMenuNavigazione.addEventListener('click', toggleMenuNav);

const link = document.querySelectorAll('a');
for(let a of link){
  if(a.getAttribute('href') === "#")
    a.addEventListener('click', previeniRicarica);
}
