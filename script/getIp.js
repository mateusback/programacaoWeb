async function getPublicIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        document.getElementById('ip').textContent = `Seu IP público é: ${data.ip}`;
    } catch (error) {
        console.error('Erro ao obter IP:', error);
        document.getElementById('ip').textContent = 'Erro ao obter IP';
    }
}