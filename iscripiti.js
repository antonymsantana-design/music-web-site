async function API() {
    try {
        const musicURL = await fetch(`https://api.jamendo.com/v3.0/tracks/?client_id=51bb36c6&format=json`);
        const dados = await musicURL.json();
        const Cards = document.getElementById('cards');
        
        const musicas = dados.results; 
        musicas.forEach(musica => { 
            const crd = `
                <div class="crdMusic" onclick="document.getElementById('audiu').src='${musica.audio}'; document.getElementById('audiu').play()">
                    <div class="img">
                        <img src="${musica.image}" alt="${musica.album_name || 'album'}">
                    </div>
                    <p class="Nmusica">${musica.name}</p>
                    <small class="cantor">${musica.artist_name}</small>
                </div>
            `;
            Cards.innerHTML += crd;
        });
    } catch (e) {
        console.log("erro na API " + e);
    }
}

API();
