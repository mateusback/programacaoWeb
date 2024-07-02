function consultarRepositorios(){
    nomeUsuario = document.getElementById('inputNomeUsuario').value;
    if(nomeUsuario == ""){
        alert("Digite o nome do usuario");
        return;
    }

    const listaRepositorios = document.getElementById('listaRepositorios');
    listaRepositorios.innerText = "";

    const span = document.getElementById('statusPesquisa');
    span.innerText = "Esperando Resposta"; 

    var url = `https://api.github.com/users/${nomeUsuario}/repos`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
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
    });
}