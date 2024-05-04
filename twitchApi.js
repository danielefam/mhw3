function onjson(json){
    const tasto = document.querySelector('#prima-riga-esterno input');
    tasto.blur(); 

    modalView.innerHTML= ''; 

    document.body.classList.add('no-scroll');
    modalView.style.top = window.pageYOffset + 'px';
    modalView.classList.remove('hidden');

    if(json.data.length === 0){  
        const scritta = document.createElement('span');
        scritta.textContent = "Il gioco non è presente in archivio";
        modalView.append(scritta);
        return;
    }
    
    console.log(json);
       
    let res = json.data[0];

    const descrizione = document.createElement('p');
    descrizione.textContent = res.name;

    image_url='https://static-cdn.jtvnw.net/ttv-boxart/'+ res.id + '.jpg';
    // image_url= res.box_art_url;
    const image = document.createElement('img');
    image.src=image_url;

    const giochi = document.createElement('div');

    giochi.appendChild(descrizione);
    giochi.appendChild(image);

    modalView.appendChild(giochi);

       

} 

function chiudModale(event) {
    if(event.key === "Escape"){
        document.body.classList.remove('no-scroll');
        modalView.classList.add('hidden');
    }
    
}

 
function onResponse(response) {
    console.log('Risposta ricevuta');
    return response.json();
}

function onTokenJson(json)
{   
    token = json.access_token;
}

function onTokenResponse(response)
{
 return response.json();
}

function onResponce(response){
    console.log('Json ricevuto correttamente');
    return response.json();
 }


//RICHIESTA API
function search(event){
 
    event.preventDefault();
 
    const gioco = document.querySelector('input').value;

    if(gioco){
        const val = encodeURIComponent(gioco);
 
        fetch('https://api.twitch.tv/helix/games?name='+val,
        {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Client-Id' : '' //mi serve per prendere il progetto dell'account
            }
        }).then(onResponce).then(onjson);
        console.log('il token dentro la search è: '+token);
    }else{
        const foto = document.querySelector('#foto');
        foto.innerHTML= '';    
        const scritta = document.createElement('span');
        scritta.textContent = "Inserire un gioco";
        foto.append(scritta);
    }

    
}



//RICHIESTA TOKEN
const client_id='';
const client_secret='';

let token;


fetch("https://id.twitch.tv/oauth2/token",
{
    method: "post",
    body: 'client_id=' + client_id + '&client_secret=' + client_secret + '&grant_type=client_credentials',
    headers:
    {
        'Content-Type': 'application/x-www-form-urlencoded'
        // 'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret) non funziona forse a causa dell'api di twitch
    }

}).then(onTokenResponse).then(onTokenJson);


const form = document.querySelector('form');
form.addEventListener('submit', search);

const modalView = document.querySelector('#modal-view');
document.addEventListener('keydown', chiudModale);
