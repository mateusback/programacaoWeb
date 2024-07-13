async function getRandomMovie() {
    const apiKey = 'thewdb';
    const checkbox = document.getElementById('check1-61');
    const isChecked = checkbox.checked;
    var response;
    try {
        if(isChecked == false){
            const randomId = Math.floor(Math.random() * 1000000);
            response = await fetch(`https://www.omdbapi.com/?i=tt${String(randomId).padStart(7, '0')}&apikey=${apiKey}&plot=full`);
        }
        else{
            const osBao = ['tt0083658','tt1856101','tt12037194', 'tt27503384', 'tt13238346', 'tt10640346', 'tt11813216', 'tt2458948', 'tt8503618',
                'tt1165293', 'tt0175880', 'tt0100234', 'tt0088178', 'tt0364569', 'tt0119217', 'tt0058898', 'tt3544112', 'tt0381681', 'tt0272338',
                'tt0109830', 'tt3783958', 'tt8579674', 'tt0098635', 'tt0093191', 'tt0050083', 'tt0043014', 'tt0169858', 'tt8613070', 'tt14376344'
            ];
            const randomBao = osBao[Math.floor(Math.random() * osBao.length)];
            response = await fetch(`https://www.omdbapi.com/?i=${randomBao}&apikey=${apiKey}&plot=full`);
        }
        
        const data = await response.json();
        
        if (data.Response === "True") {
            document.getElementById('nome-filme').textContent = `${data.Title}`;
            document.getElementById('ano-filme').textContent = `${data.Year}`;
            document.getElementById('pais-filme').textContent = `${data.Country}`;
            document.getElementById('tempo-filme').textContent = `Runtime: ${data.Runtime}`;
            document.getElementById('descricao-filme').textContent = `Descrição: ${data.Plot}`;
            document.getElementById('poster').src = data.Poster;
            document.getElementById('nota-filme').textContent = `Rating: ${data.imdbRating}`;
            document.getElementById('genero-filme').textContent = `Generos: ${data.Genre}`;
            document.getElementsByClassName('box-filme')[0].hidden = false;
            if(data.Poster === "N/A")
                document.getElementById('poster').src = "img/placeholder.png";
            document.getElementById('poster').hidden = false;
        } else {
            getRandomMovie();
        }
    } catch (error) {
        console.error('Erro ao obter filme:', error);
        document.getElementById('filme').textContent = 'Erro ao obter filme';
    }
}