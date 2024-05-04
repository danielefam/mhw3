function aggiungiFoto(padre, link, urlIMG, title){
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const img = document.createElement('img');
    const a = document.createElement('a');

    a.href = link;

    h3.textContent = title;
    img.src = urlIMG;
    padre.appendChild(div);
    div.appendChild(h3);
    div.appendChild(a);
    a.appendChild(img);

}


function onJson(json){
    console.log(json)
    const padre = document.querySelector('#episodi2'); 
    let urlIMG;
    let titolo;
    let link;

    if(json.items.length === 0){
        const messErrore = document.createElement('span');
        messErrore.textContent = "Questo canale non ha video";
        padre.appendChild(messErrore);
        return;
    }

    for(let i = 0; i < json.items.length; i++){
        titolo = json.items[i].snippet.title;
        link = 'https://www.youtube.com/watch?v='+ json.items[i].snippet.resourceId.videoId
        urlIMG = json.items[i].snippet.thumbnails.medium.url;
        aggiungiFoto(padre, link,urlIMG , titolo)
    }
}

function onResponse(response) {
    console.log('richiesta approvata');
    return response.json();
}

function trovaVideo() {
    
    rest_url = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=3&playlistId=' + playlist +'&key='+ api_key;
    console.log('URL: ' + rest_url);
    
    fetch(rest_url).then(onResponse).then(onJson);
}


const playlist = 'UU_dUqIKuzCvsE_bg_5AYMrQ';

const api_key = '';

trovaVideo();
