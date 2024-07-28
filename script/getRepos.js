function consultarRepositorios(){
    document.getElementsByClassName('loading-container')[0].hidden = false;
    document.getElementsByClassName('loading')[0].hidden = false;
    nomeUsuario = document.getElementById('inputNomeUsuario').value;
    if(nomeUsuario == ""){
        alert("Digite o nome do usuario");
        document.getElementsByClassName('loading-container')[0].hidden = true;
        document.getElementsByClassName('loading')[0].hidden = true;
        return;
    }

    const listaRepositorios = document.getElementById('listaRepositorios');
    listaRepositorios.innerText = "";

    var url = `https://api.github.com/users/${nomeUsuario}/repos`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        document.getElementsByClassName('loading-container')[0].hidden = true;
        document.getElementsByClassName('loading')[0].hidden = true;
        data.forEach(repo => {
            var li = document.createElement("li");
            li.innerHTML = repo.name;
            listaRepositorios.appendChild(li);
        });
        span.innerText = null;
    })
    .catch(error => {
        console.log(error);
        span.innerText = "Erro na Requisição";
        document.getElementsByClassName('loading-container')[0].hidden = true;
        document.getElementsByClassName('loading')[0].hidden = true;
    });
}