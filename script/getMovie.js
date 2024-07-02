async function getRandomMovie() {
    const randomId = Math.floor(Math.random() * 1000000); 
    const apiKey = 'thewdb';
    try {
        const response = await fetch(`https://www.omdbapi.com/?i=tt${String(randomId).padStart(7, '0')}&apikey=${apiKey}`);
        const data = await response.json();

        if (data.Response === "True") {
            document.getElementById('nome-filme').textContent = `Título: ${data.Title}`;
            document.getElementById('poster').src = data.Poster;
            document.getElementById('ano-filme').textContent = `Ano: ${data.Year}`;
            document.getElementById('nota-filme').textContent = `Rating: ${data.imdbRating}`;
            document.getElementById('tempo-filme').textContent = `Runtime: ${data.Runtime}`;
            document.getElementById('genero-filme').textContent = `Generos: ${data.Genre}`;
            document.getElementById('descricao-filme').textContent = `Descrição: ${data.Plot}`;

            if(data.Poster === "N/A")
                document.getElementById('poster').hidden = true;
            else
                document.getElementById('poster').hidden = false;
        } else {
            getRandomMovie();
        }
    } catch (error) {
        console.error('Erro ao obter filme:', error);
        document.getElementById('filme').textContent = 'Erro ao obter filme';
    }
}