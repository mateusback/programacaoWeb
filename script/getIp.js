async function getPublicIP() {
    document.getElementsByClassName('loading-container')[0].hidden = false;
    document.getElementsByClassName('loading')[0].hidden = false;
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        document.getElementsByClassName('loading-container')[0].hidden = true;
        document.getElementsByClassName('loading')[0].hidden = true;
        document.getElementById('ip').textContent = `Seu IP público é: ${data.ip}`;
        document.getElementById('ip').style.display = 'block';;        
    } catch (error) {
        console.error('Erro ao obter IP:', error);
        document.getElementById('ip').textContent = 'Erro ao obter IP';
    }
}